import { ref } from 'vue';
import { ref as dbRef, get } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import type { MusicItem } from '@/types/musicList';

// グローバルステートとして定義（アプリケーション全体で共有）
const musicListFromDB = ref<Record<string, MusicItem>>({});
const dbImageUrls = ref<Record<string, string>>({});
const isMusicLoaded = ref(false);
const isImagesLoaded = ref(false);
const currentEnv = ref<'prod' | 'dev' | null>(null);

export function useMusicData() {
  /** 楽曲データの初期化（一度だけ実行）*/
  const initMusicData = async (isDev: boolean = false) => {
    const targetEnv = isDev ? 'dev' : 'prod';

    if (isMusicLoaded.value && currentEnv.value === targetEnv) {
      return;
    }

    const db = isDev ? rtdbDev : rtdb;
    const musicRef = dbRef(db, 'music');

    isMusicLoaded.value = false;

    try {
      const snapshot = await get(musicRef);
      const data: Record<string, MusicItem> = snapshot.val();

      if (data) {
        musicListFromDB.value = data;

        // データからimageURLを抽出してfirebaseImagesを更新
        const images: Record<string, string> = {};
        Object.entries(data).forEach(([key, val]: [string, MusicItem]) => {
          if (val.imageURL) {
            images[key] = val.imageURL;
          }
        });
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
   * タイトルからIDを検索するヘルパー関数
   *
   * @param title 検索したい楽曲名
   * @returns 楽曲ID（見つからなければundefined）
   */
  const getMusicIdByTitle = (title: string): string | undefined => {
    const normalize = (str: string) =>
      str
        .replace(/！/g, '!')
        .replace(/？/g, '?')
        .replace(/（/g, '(')
        .replace(/）/g, ')');

    const normalizedTitle = normalize(title);

    const entry = Object.entries(musicListFromDB.value).find(
      ([_, v]: [string, MusicItem]) => {
        return normalize(v.title) === normalizedTitle;
      }
    );

    return entry ? entry[0] : undefined;
  };

  /** データの監視を停止する（必要に応じて呼び出す） */
  const stopMusicDataSync = () => {
    // リアルタイム監視ではなくなったため、処理不要
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
}
