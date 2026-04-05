import Dexie, { type Table } from 'dexie';

export interface ImageCacheItem {
  id: string;
  url: string;
  timestamp: number;
  expires: number;
}

export interface KeyValueItem {
  key: string;
  value: unknown;
}

class llllMgrDB extends Dexie {
  images!: Table<ImageCacheItem, string>;
  keyValueStore!: Table<KeyValueItem, string>;

  constructor() {
    super('llllMgrStorage');
    this.version(1).stores({
      images: 'id, expires', // 'id' is the primary key, 'expires' is an index.
      keyValueStore: 'key',
    });
  }
}

const db = new llllMgrDB();

export class CacheManager {
  async setImageUrl(
    id: string,
    url: string,
    ttl: number = 24 * 60 * 60 * 1000,
  ): Promise<void> {
    const data: ImageCacheItem = {
      id,
      url,
      timestamp: Date.now(),
      expires: Date.now() + ttl,
    };
    await db.images.put(data);
  }

  async getImageUrl(id: string): Promise<string | null> {
    const data = await db.images.get(id);

    if (data && data.expires > Date.now()) {
      return data.url;
    } else if (data) {
      // 期限切れなら削除
      await db.images.delete(id);
    }

    return null;
  }

  async clearExpired(): Promise<void> {
    await db.images.where('expires').belowOrEqual(Date.now()).delete();
  }

  /**
   * 指定したIDのキャッシュURLを比較し、異なれば更新する
   *
   * @param id 画像ID
   * @param url Firebaseから取得した最新のimageURL
   */
  async updateImageUrlIfDifferent(id: string, url: string): Promise<void> {
    const cached = await db.images.get(id);

    if (!cached || cached.url !== url) {
      await this.setImageUrl(id, url);
    }
  }
}

export const cacheManager = new CacheManager();
