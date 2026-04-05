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
import type { MusicItemData } from '@/types/musicList';
import { RTDB_PATH, type RtdbPath } from '@/constants/envConst';

export const FirebaseService = {
  /**
   * Storageから画像のダウンロードURLを取得
   *
   * @param path Storageのパス
   * @returns 画像のダウンロードURL
   */
  async getImageUrl(path: string) {
    const storage = getStorage(rtdb.app);

    try {
      return await getDownloadURL(storageRef(storage, path));
    } catch (_) {
      return null;
    }
  },

  /**
   * Realtime Databaseから楽曲データを取得
   *
   * @param isDev 開発環境かどうか
   */
  async getMusicData(isDev: boolean): Promise<Record<string, MusicItemData>> {
    const snapshot = await get(dbRef(isDev ? rtdbDev : rtdb, RTDB_PATH.MUSIC));

    return snapshot.val();
  },

  /**
   * Realtime Databaseからカードデータを取得
   *
   * @param isDev 開発環境かどうか
   * @returns カードデータ
   */
  async getCardData(isDev: boolean): Promise<CardDataByMember> {
    const snapshot = await get(dbRef(isDev ? rtdbDev : rtdb, RTDB_PATH.CARDS));

    return snapshot.val();
  },

  /**
   * Realtime Databaseのデータを監視
   *
   * @param path 監視するパス
   * @param callback データ更新時のコールバック
   * @param isDev 開発環境かどうか
   * @returns 監視解除関数
   */
  subscribeToDatabase(
    path: RtdbPath,
    callback: (data: CardDataByMember | Record<string, MusicItemData>) => void,
    isDev: boolean,
  ): Unsubscribe {
    return onValue(dbRef(isDev ? rtdbDev : rtdb, path), (snapshot) => {
      callback(snapshot.val());
    });
  },

  /**
   * Realtime Databaseにデータを書き込む（上書き）
   *
   * @param path 書き込むパス
   * @param data 書き込むデータ
   * @param isDev 開発環境かどうか
   */
  async setData(
    path: string,
    data: CardDataByMember | Record<string, MusicItemData>,
    isDev: boolean,
  ) {
    await set(dbRef(isDev ? rtdbDev : rtdb, path), data);
  },

  /**
   * Realtime Databaseのデータを更新する（部分更新）
   *
   * @param path 更新するパス
   * @param data 更新するデータ
   * @param isDev 開発環境かどうか
   */
  async updateData(
    path: string,
    data: CardDataByMember | Record<string, MusicItemData>,
    isDev: boolean,
  ) {
    await update(dbRef(isDev ? rtdbDev : rtdb, path), data);
  },
};
