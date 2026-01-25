import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from 'firebase/storage';
import {
  ref as dbRef,
  get,
  onValue,
  set,
  update,
  type Unsubscribe,
} from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import type { CardDataByMember } from '@/types/cardList';
import type { MusicItem } from '@/types/musicList';

export const FirebaseService = {
  /**
   * Storageから画像のダウンロードURLを取得
   * @param path Storageのパス
   */
  async getImageUrl(path: string): Promise<string | null> {
    // 現状の実装に合わせてrtdb.appを使用
    const storage = getStorage(rtdb.app);
    try {
      return await getDownloadURL(storageRef(storage, path));
    } catch (_) {
      return null;
    }
  },

  /**
   * Realtime Databaseから楽曲データを取得
   * @param isDev 開発環境かどうか
   */
  async getMusicData(isDev: boolean) {
    const db = isDev ? rtdbDev : rtdb;
    const snapshot = await get(dbRef(db, 'music'));
    return snapshot.val();
  },

  /**
   * Realtime Databaseのデータを監視
   * @param path 監視するパス
   * @param callback データ更新時のコールバック
   * @param isDev 開発環境かどうか
   * @returns 監視解除関数
   */
  subscribeToDatabase(
    path: string,
    callback: (data: any) => void,
    isDev: boolean,
  ): Unsubscribe {
    const db = isDev ? rtdbDev : rtdb;
    return onValue(dbRef(db, path), (snapshot) => {
      callback(snapshot.val());
    });
  },

  /**
   * Realtime Databaseにデータを書き込む（上書き）
   * @param path 書き込むパス
   * @param data 書き込むデータ
   * @param isDev 開発環境かどうか
   */
  async setData(
    path: string,
    data: CardDataByMember | Record<string, MusicItem>,
    isDev: boolean,
  ): Promise<void> {
    const db = isDev ? rtdbDev : rtdb;
    await set(dbRef(db, path), data);
  },

  /**
   * Realtime Databaseのデータを更新する（部分更新）
   * @param path 更新するパス
   * @param data 更新するデータ
   * @param isDev 開発環境かどうか
   */
  async updateData(path: string, data: any, isDev: boolean): Promise<void> {
    const db = isDev ? rtdbDev : rtdb;
    await update(dbRef(db, path), data);
  },
};
