import type { CardsByRarity } from '@/types/cardList';
import type { MusicItem } from '@/types/musicList';

/**
 * 保留アイテムのデータ型
 *
 * @property type アップしたいデータタイプ
 * @property data データの型
 */
export interface PendingItem {
  type: 'card' | 'music' | 'event';
  data: CardsByRarity | MusicItem;
}
