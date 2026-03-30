import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { FirebaseService } from '@/services/FirebaseService';
import type { Unsubscribe } from 'firebase/database';

import deepEqual from 'deep-is';

import { RTDB_PATH } from '@/constants/envConst';

import type { PendingItem } from '@/types/uploadDataStore';
import type {
  CardDataType,
  CardDataByMember,
  CardsByRarity,
  SkillDetail,
} from '@/types/cardList';
import type { MusicItemData } from '@/types/musicList';
import type { SkillDetailType } from '@/types/skill';
import type { StreamInfoDBData } from '@/types/stream';
import type { EventItem } from '@/types/event';

/** DBデータ操作処理 */
export const useUploadDataStore = defineStore('uploadData', () => {
  const pendingList = ref<PendingItem[]>([]);

  const baseList: {
    [RTDB_PATH.CARDS]: CardDataByMember;
    [RTDB_PATH.MUSIC]: Record<string, MusicItemData>;
    [RTDB_PATH.SKILL]: Record<string, SkillDetail>;
    [RTDB_PATH.SKILL_DETAIL]: Record<string, SkillDetailType>;
    [RTDB_PATH.EVENT]: Record<string, EventItem>;
    [RTDB_PATH.STREAM]: Record<string, StreamInfoDBData>;
  } = {
    [RTDB_PATH.CARDS]: {},
    [RTDB_PATH.MUSIC]: {},
    [RTDB_PATH.SKILL]: {},
    [RTDB_PATH.SKILL_DETAIL]: {},
    [RTDB_PATH.EVENT]: {},
    [RTDB_PATH.STREAM]: {},
  };
  // --- Diff Check Logic ---
  const devData = ref({
    ...baseList,
  });
  const prodData = ref({
    ...baseList,
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

    const paths = [
      RTDB_PATH.CARDS,
      RTDB_PATH.MUSIC,
      RTDB_PATH.SKILL,
      RTDB_PATH.SKILL_DETAIL,
      RTDB_PATH.EVENT,
      RTDB_PATH.STREAM,
    ];

    // DBデータの取得
    for (const isDev of [true, false]) {
      paths.forEach((path) => {
        unsubscribes.push(
          FirebaseService.subscribeToDatabase(
            path,
            (
              data:
                | CardDataByMember
                | Record<string, MusicItemData>
                | Record<string, SkillDetail>
                | Record<string, SkillDetailType>
                | Record<string, EventItem>
                | Record<string, StreamInfoDBData>,
            ) => {
              (isDev ? devData : prodData).value[path] = data || {};
            },
            isDev,
          ),
        );
      });
    }
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

      for (const rare in memberData) {
        const rareData: Record<string, CardDataType> | CardDataType =
          memberData[rare];

        for (const id in rareData) {
          result[id] = {
            data: rareData[id],
            path: `${RTDB_PATH.CARDS}/${member}/${rare}/${id}`,
          };
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
      } else if (!deepEqual(devItem.data, prodItem.data)) {
        list.push({
          key,
          data: devItem.data,
          status: 'update',
          type: 'cards',
          path: devItem.path,
        });
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

    // Skill Diff
    for (const key in devData.value[RTDB_PATH.SKILL_DETAIL]) {
      const devItem = devData.value[RTDB_PATH.SKILL_DETAIL][key];
      const prodItem = prodData.value[RTDB_PATH.SKILL_DETAIL][key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: 'skillDetails',
          path: `${RTDB_PATH.SKILL_DETAIL}/${key}`,
        });
      } else if (!deepEqual(devItem, prodItem)) {
        list.push({
          key,
          data: devItem,
          status: 'update',
          type: 'skillDetails',
          path: `${RTDB_PATH.SKILL_DETAIL}/${key}`,
        });
      }
    }

    // Streaming Schedule Diff
    for (const key in devData.value[RTDB_PATH.STREAM]) {
      const devItem = devData.value[RTDB_PATH.STREAM][key];
      const prodItem = prodData.value[RTDB_PATH.STREAM][key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: 'stream',
          path: `${RTDB_PATH.STREAM}/${key}`,
        });
      } else if (!deepEqual(devItem, prodItem)) {
        list.push({
          key,
          data: devItem,
          status: 'update',
          type: 'stream',
          path: `${RTDB_PATH.STREAM}/${key}`,
        });
      }
    }

    // Event Diff
    for (const key in devData.value[RTDB_PATH.EVENT]) {
      const devItem = devData.value[RTDB_PATH.EVENT][key];
      const prodItem = prodData.value[RTDB_PATH.EVENT][key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: 'event',
          path: `${RTDB_PATH.EVENT}/${key}`,
        });
      } else {
        // imageUrlは環境ごとにアップロード先が変わるため、差分判定から除外する
        const devComparable = { ...devItem };
        const prodComparable = { ...prodItem };
        delete devComparable.imageUrl;
        delete prodComparable.imageUrl;

        if (deepEqual(devComparable, prodComparable)) {
          continue;
        }

        list.push({
          key,
          data: devItem,
          status: 'update',
          type: 'event',
          path: `${RTDB_PATH.EVENT}/${key}`,
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

  // /**
  //  * データをアップロード（上書き）する
  //  *
  //  * @param path パス
  //  * @param data データ
  //  * @param isDev 開発環境かどうか
  //  */
  // const uploadData = async (path: string, data: any, isDev: boolean) => {
  //   await FirebaseService.setData(path, data, isDev);
  // };

  // /**
  //  * データを更新（マージ）する
  //  *
  //  * @param path パス
  //  * @param data データ
  //  * @param isDev 開発環境かどうか
  //  */
  // const updateData = async (path: string, data: any, isDev: boolean) => {
  //   await FirebaseService.updateData(path, data, isDev);
  // };

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
    // uploadData,
    // updateData,
  };
});
