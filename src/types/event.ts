/**
 * イベントの型
 *
 * @property title イベントタイトル
 * @property text イベント補足タイトル
 * @property type イベントタイプ
 * @property firstDay イベント開始日
 * @property lastDay イベント終了日
 * @property link リンク
 * @property imageUrl 画像URL
 * @property state
 * @property count
 * @property count.day
 * @property count.time
 */
export interface EventItem {
  title: string;
  text: string;
  type: string;
  firstDay: number[];
  lastDay: number[];
  link: string;
  imageUrl: string;
  state?: 'prev' | 'now' | 'after';
  count?: {
    day?: number;
    time?: number;
  };
}
