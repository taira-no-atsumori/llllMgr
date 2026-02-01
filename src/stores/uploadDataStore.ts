import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Unsubscribe } from 'firebase/database';
import { FirebaseService } from '@/services/FirebaseService';
import deepEqual from 'deep-is';
import type { PendingItem } from '@/types/uploadDataStore';
import type { CardDataType } from '@/types/cardList';
import type { MusicItem } from '@/types/musicList';

/** DBデータ操作処理 */
export const useUploadDataStore = defineStore('uploadData', () => {
  const pendingList = ref<PendingItem[]>([]);

  // --- Diff Check Logic ---
  const devData = ref<{
    card: Record<string, CardDataType>;
    music: Record<string, MusicItem>;
  }>({
    card: {},
    music: {},
  });
  const prodData = ref<{
    card: Record<string, CardDataType>;
    music: Record<string, MusicItem>;
  }>({
    card: {},
    music: {},
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

    const paths = ['music', 'card'] as const;

    paths.forEach((path) => {
      // Dev環境の監視
      unsubscribes.push(
        FirebaseService.subscribeToDatabase(
          path,
          (data) => {
            devData.value[path] = data || {};
          },
          true,
        ),
      );
      // 本番環境の監視
      unsubscribes.push(
        FirebaseService.subscribeToDatabase(
          path,
          (data) => {
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
  const flattenCards = (data: CardDataType, prefix = 'card') => {
    const result: Record<string, { data: CardDataType; path: string }> = {};

    if (!data) {
      return result;
    }

    for (const member in data) {
      const memberData = data[member];

      if (typeof memberData !== 'object') {
        continue;
      }

      for (const rare in memberData) {
        const rareData = memberData[rare];

        if (typeof rareData !== 'object') {
          continue;
        }

        for (const id in rareData) {
          const cardData = rareData[id];

          if (cardData && typeof cardData === 'object') {
            result[id] = {
              data: cardData,
              path: `${prefix}/${member}/${rare}/${id}`,
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
    const devCards = flattenCards(devData.value.card);
    const prodCards = flattenCards(prodData.value.card);

    for (const key in devCards) {
      const devItem = devCards[key];
      const prodItem = prodCards[key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem.data,
          status: 'new',
          type: 'card',
          path: devItem.path,
        });
      } else if (!deepEqual(devItem.data, prodItem.data)) {
        list.push({
          key,
          data: devItem.data,
          status: 'update',
          type: 'card',
          path: devItem.path,
        });
      }
    }

    // Music Diff
    for (const key in devData.value.music) {
      const devItem = devData.value.music[key];
      const prodItem = prodData.value.music[key];

      if (!prodItem) {
        list.push({
          key,
          data: devItem,
          status: 'new',
          type: 'music',
          path: `music/${key}`,
        });
      } else if (!deepEqual(devItem, prodItem)) {
        list.push({
          key,
          data: devItem,
          status: 'update',
          type: 'music',
          path: `music/${key}`,
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
   * @param type 'card' | 'music' | 'event'
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
