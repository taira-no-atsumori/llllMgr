import { defineStore } from 'pinia';
import { ref } from 'vue';

import { FirebaseService } from '@/services/FirebaseService';
import { cacheManager } from '@/utils/cacheManager';

import type { MusicItemData } from '@/types/musicList';

export const useMusicStore = defineStore('music', () => {
  const musicListFromDB = ref<Record<string, MusicItemData>>({});
  const dbImageUrls = ref<Record<string, string>>({});
  const isMusicLoaded = ref(false);
  const isImagesLoaded = ref(false);
  const currentEnv = ref<'prod' | 'dev' | null>(null);

  /**
   * 楽曲データの初期化
   *
   * @param isDev 開発環境かどうか
   * @returns void
   */
  const initMusicData = async (isDev: boolean = false) => {
    const targetEnv = isDev ? 'dev' : 'prod';

    if (isMusicLoaded.value && currentEnv.value === targetEnv) {
      return;
    }

    isMusicLoaded.value = false;

    try {
      const data = await FirebaseService.getMusicData(isDev);

      if (data) {
        musicListFromDB.value = data;

        // データからimageURLを抽出してキャッシュ用URLリストを更新
        const images: Record<string, string> = {};
        await Promise.all(
          Object.entries(data).map(
            async ([key, val]: [string, MusicItemData]) => {
              if (val.imageURL) {
                images[key] = val.imageURL;
                // IndexedDBのURLと比較し、一致しなければ更新
                await cacheManager.updateImageUrlIfDifferent(key, val.imageURL);
              }
            },
          ),
        );
        dbImageUrls.value = images;

        currentEnv.value = targetEnv;
        isMusicLoaded.value = true;
        isImagesLoaded.value = true;
      }
    } catch (error) {
      console.error('Failed to fetch music data:', error);
    }
  };

  /**
   * 楽曲ID検索
   *
   * @description
   * 楽曲名から楽曲IDを検索するヘルパー関数
   *
   * @param title 検索したい楽曲名
   * @returns 楽曲ID（見つからなければundefined）
   */
  const getMusicIdByTitle = (title: string): string | undefined => {
    if (!title) {
      return undefined;
    }

    const normalize = (str: string) =>
      str
        .replace(/！/g, '!')
        .replace(/？/g, '?')
        .replace(/（/g, '(')
        .replace(/）/g, ')');

    const normalizedTitle = normalize(title);

    const entry = Object.entries(musicListFromDB.value).find(
      ([_, v]: [string, MusicItemData]) => {
        return normalize(v.title) === normalizedTitle;
      },
    );

    return entry ? entry[0] : undefined;
  };

  /** データの同期停止（クリーンアップ用） */
  const stopMusicDataSync = () => {
    // リアルタイム監視ではないため現在は未使用
  };

  return {
    musicListFromDB,
    dbImageUrls,
    isMusicLoaded,
    isImagesLoaded,
    initMusicData,
    stopMusicDataSync,
    getMusicIdByTitle,
  };
});
