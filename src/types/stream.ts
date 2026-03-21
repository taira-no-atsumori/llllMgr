import type { MemberKeyValues } from '@/constants/memberNames';

/**
 * 配信情報のインターフェース（サイト内）
 *
 * @param startDate 配信開始日時
 * @param endDate 配信終了予定日時
 * @param type With×MEETS | Fes×LIVE
 * @param member 配信参加メンバー
 */
export interface StreamInfoItem {
  startDate: Date;
  endDate: Date;
  type: string;
  member: MemberKeyValues[];
}

/**
 * 配信情報のインターフェース（DB）
 *
 * @param startDate 配信開始日時
 * @param endDate 配信終了予定日時
 * @param type With×MEETS | Fes×LIVE
 * @param member 配信参加メンバー
 */
export interface StreamInfoFirebaseData {
  startDate: string;
  endDate: string;
  type: string;
  member: string[];
}
