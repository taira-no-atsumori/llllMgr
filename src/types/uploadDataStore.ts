import type { CardsByRarity } from '@/types/cardList';
import type { MusicItemData } from '@/types/musicList';

/**
 * 保留アイテムのデータ型
 *
 * @property type アップしたいデータタイプ
 * @property data データの型
 */
export interface PendingItem {
  type: 'card' | 'music' | 'event' | 'skill';
  data: CardsByRarity | MusicItemData;
}
