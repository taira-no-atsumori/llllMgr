import { MEMBER_KEYS, MemberKeyValues } from '@/constants/memberNames';

/** メンバーカラーコードの定数 */
export const MEMBER_COLOR = {
  kaho: '#F8B500',
  sayaka: '#5383C3',
  rurino: '#E7609E',
  kozue: '#68BE8D',
  tsuzuri: '#BA2636',
  megumi: '#C8C2C6',
  ginko: '#A2D7DD',
  kosuzu: '#FAD764',
  hime: '#9D8DE2',
  seras: '#f56455',
  izumi: '#1ebecd',
} as const;
export type MemberColor = (typeof MEMBER_COLOR)[keyof typeof MEMBER_COLOR];

/**
 * メンバーカラー取得処理
 *
 * メンバーキーからカラーコードを取得する。
 *
 * @param memberKey
 * @returns MemberColor
 */
export const getMemberColor = (memberKey: MemberKeyValues): MemberColor => {
  return MEMBER_COLOR[memberKey];
};

/** ユニットカラーコードの定数 */
export const UNIT_COLOR = {} as const;
export type UnitColor = (typeof UNIT_COLOR)[keyof typeof UNIT_COLOR];
