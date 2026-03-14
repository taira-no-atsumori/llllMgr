import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Unsubscribe } from 'firebase/database';
import { FirebaseService } from '@/services/FirebaseService';
import deepEqual from 'deep-is';
import type { PendingItem } from '@/types/uploadDataStore';
import type {
  CardDataType,
  CardDataByMember,
  CardsByRarity,
  SkillDetail,
} from '@/types/cardList';
import type { MusicItem } from '@/types/musicList';
import { RTDB_PATH } from '@/constants/envConst';

/** DBデータ操作処理 */
export const useUploadDataStore = defineStore('uploadData', () => {
  const pendingList = ref<PendingItem[]>([]);

  // --- Diff Check Logic ---
  const devData = ref<{
    [RTDB_PATH.CARDS]: CardDataByMember;
    [RTDB_PATH.MUSIC]: Record<string, MusicItem>;
    [RTDB_PATH.SKILL]: Record<string, SkillDetail>;
  }>({
    [RTDB_PATH.CARDS]: {},
    [RTDB_PATH.MUSIC]: {},
    [RTDB_PATH.SKILL]: {},
  });
  const prodData = ref<{
    [RTDB_PATH.CARDS]: CardDataByMember;
    [RTDB_PATH.MUSIC]: Record<string, MusicItem>;
    [RTDB_PATH.SKILL]: Record<string, SkillDetail>;
  }>({
    [RTDB_PATH.CARDS]: {},
    [RTDB_PATH.MUSIC]: {},
    [RTDB_PATH.SKILL]: {},
  });
  const isListening = ref(false);
  const unsubscribes: Unsubscribe[] = [];

  /** 編集対象のデータ情報 */
  const editTarget = ref<{ type: string; id: string } | null>(null);
  const setEditTarget = (type: string, id: string) => {
    editTarget.value = { type, id };
  };

  /** Firebaseのデータ監視を開始する */
  const startListening = () => {
    if (isListening.value) {
      return;
    }

    isListening.value = true;

    const paths = [RTDB_PATH.CARDS, RTDB_PATH.MUSIC, RTDB_PATH.SKILL];

    paths.forEach((path) => {
      // Dev環境の監視
      unsubscribes.push(
        FirebaseService.subscribeToDatabase(
          path,
          (
            data:
              | CardDataByMember
              | Record<string, MusicItem>
              | Record<string, SkillDetail>,
          ) => {
            devData.value[path] = data || {};
          },
          true,
        ),
      );
      // 本番環境の監視
      unsubscribes.push(
        FirebaseService.subscribeToDatabase(
          path,
          (
            data:
              | CardDataByMember
              | Record<string, MusicItem>
              | Record<string, SkillDetail>,
          ) => {
            prodData.value[path] = data || {};
          },
          false,
        ),
      );
    });
  };

  /** Firebaseのデータ監視を停止する */
  const stopListening = () => {
    unsubscribes.forEach((unsub) => unsub());
    unsubscribes.length = 0;
    isListening.value = false;
  };

  /** カードデータをフラット化するヘルパー関数 */
  const flattenCards = (data: CardDataByMember) => {
    const result: Record<string, { data: CardDataType; path: string }> = {};

    if (!data) {
      return result;
    }

    for (const member in data) {
      const memberData: CardsByRarity = data[member];

      if (typeof memberData !== 'object') {
        continue;
      }

      for (const rare in memberData) {
        const rareData: Record<string, CardDataType> | CardDataType =
          memberData[rare];

        if (typeof rareData !== 'object') {
          continue;
        }

        for (const id in rareData) {
          const cardData: CardDataType = rareData[id];

          if (cardData && typeof cardData === 'object') {
            result[id] = {
              data: cardData,
              path: `${RTDB_PATH.CARDS}/${member}/${rare}/${id}`,
            };
          }
        }
      }
    }

    return result;
  };

  /** 差分リストを計算する */
  const diffList = computed(() => {
    const list = [];

    // Card Diff
    const devCards = flattenCards(devData.value[RTDB_PATH.CARDS]);
    const prodCards = flattenCards(prodData.value[RTDB_PATH.CARDS]);

    for (const key in devCards) {
      const devItem = devCards[key];
      const prodItem = prodCards[key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem.data,
          status: 'new',
          type: RTDB_PATH.CARDS,
          path: devItem.path,
        });
        // } else if (!deepEqual(devItem.data, prodItem.data)) {
        //   list.push({
        //     key,
        //     data: devItem.data,
        //     status: 'update',
        //     type: 'cards',
        //     path: devItem.path,
        //   });
      }
    }

    // Music Diff
    for (const key in devData.value[RTDB_PATH.MUSIC]) {
      const devItem = devData.value[RTDB_PATH.MUSIC][key];
      const prodItem = prodData.value[RTDB_PATH.MUSIC][key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: RTDB_PATH.MUSIC,
          path: `${RTDB_PATH.MUSIC}/${key}`,
        });
      } else if (!deepEqual(devItem, prodItem)) {
        list.push({
          key,
          data: devItem,
          status: 'update',
          type: RTDB_PATH.MUSIC,
          path: `${RTDB_PATH.MUSIC}/${key}`,
        });
      }
    }

    // Skill Diff
    for (const key in devData.value[RTDB_PATH.SKILL]) {
      const devItem = devData.value[RTDB_PATH.SKILL][key];
      const prodItem = prodData.value[RTDB_PATH.SKILL][key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: 'skill',
          path: `${RTDB_PATH.SKILL}/${key}`,
        });
      } else if (!deepEqual(devItem, prodItem)) {
        list.push({
          key,
          data: devItem,
          status: 'update',
          type: 'skill',
          path: `${RTDB_PATH.SKILL}/${key}`,
        });
      }
    }

    return list;
  });

  /** 差分があるかどうか */
  const hasDiff = computed(() => diffList.value.length > 0);

  /**
   * アイテム追加処理
   *
   * @param type 'card' | 'music' | 'event' | 'skill'
   * @param data データの型
   */
  const addItem = (type: PendingItem['type'], data: PendingItem['data']) => {
    pendingList.value.push({ type, data });
  };

  /**
   * アイテム削除処理
   *
   * @param index 削除したいアイテムの番号
   */
  const removeItem = (index: number) => {
    pendingList.value.splice(index, 1);
  };

  /** アイテムクリア処理 */
  const clearList = () => {
    pendingList.value = [];
  };

  /**
   * データをアップロード（上書き）する
   * @param path パス
   * @param data データ
   * @param isDev 開発環境かどうか
   */
  const uploadData = async (path: string, data: any, isDev: boolean) => {
    await FirebaseService.setData(path, data, isDev);
  };

  /**
   * データを更新（マージ）する
   * @param path パス
   * @param data データ
   * @param isDev 開発環境かどうか
   */
  const updateData = async (path: string, data: any, isDev: boolean) => {
    await FirebaseService.updateData(path, data, isDev);
  };

  return {
    pendingList,
    addItem,
    removeItem,
    clearList,
    startListening,
    stopListening,
    diffList,
    hasDiff,
    prodData,
    flattenCards,
    editTarget,
    setEditTarget,
    uploadData,
    updateData,
  };
});
