import { defineStore } from 'pinia';
import { ref } from 'vue';

import { FirebaseService } from '@/services/FirebaseService';

import { cacheManager } from '@/utils/cacheManager';

export const useImageStore = defineStore('image', () => {
  const imageCache = ref<Record<string, Record<string, string>>>({});

  /**
   * 画像取得・キャッシュ処理
   *
   * @param cacheKey キャッシュのキー
   * @param items アイテムリスト
   * @param idGenerator ID生成関数
   * @param pathGenerator パス生成関数
   */
  const fetchImages = async <T>(
    cacheKey: string,
    items: T[],
    idGenerator: (item: T) => string,
    pathGenerator: (item: T) => string | { before: string; after: string },
  ) => {
    if (items.length === 0) {
      return;
    }

    if (!imageCache.value[cacheKey]) {
      imageCache.value[cacheKey] = {};
    }

    const pending = items.filter(
      (item) => imageCache.value[cacheKey][idGenerator(item)] === undefined,
    );

    if (pending.length === 0) {
      return;
    }

    await Promise.all(
      pending.map(async (item) => {
        const id = idGenerator(item);

        if (id.split('_')[1] === '000') {
          return;
        }

        const paths = pathGenerator(item);

        if (typeof paths === 'string') {
          // まずCacheManagerから取得を試みる
          let url = await cacheManager.getImageUrl(id);

          if (!url) {
            url = await FirebaseService.getImageUrl(paths);

            if (url) {
              await cacheManager.setImageUrl(id, url);
            }
          }

          imageCache.value[cacheKey][id] = url;
        } else {
          // beforeとafterの場合
          const beforeId = `${id}_before`;
          const afterId = `${id}_after`;

          let before = await cacheManager.getImageUrl(beforeId);
          let after = await cacheManager.getImageUrl(afterId);

          if (!before || !after) {
            const [beforeUrl, afterUrl] = await Promise.all([
              FirebaseService.getImageUrl(paths.before),
              FirebaseService.getImageUrl(paths.after),
            ]);
            before = beforeUrl;
            after = afterUrl;

            if (before) {
              await cacheManager.setImageUrl(beforeId, before);
            }

            if (after) {
              await cacheManager.setImageUrl(afterId, after);
            }
          }

          imageCache.value[cacheKey][id] = { before, after };
        }
      }),
    );
  };

  /**
   * 画像パスを返す処理
   *
   * @param path その画像が入っているフォルダ名
   * @param imageName 画像の名前
   * @param extension 画像の拡張子
   * @returns 画像のパス
   */
  const getImagePath = (
    path: string,
    imageName: string,
    extension = 'webp',
  ): string => {
    const images = import.meta.glob('../assets/**/*', { eager: true });
    const filePath = `../assets${
      path ? `/${path}` : ''
    }/${imageName}.${extension}`;

    return images[filePath]?.default || '';
  };

  return {
    imageCache,
    fetchImages,
    getImagePath,
  };
});
