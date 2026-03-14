/** 環境定数の定数 */
export const RTDB_PATH = {
  CARDS: 'cards',
  MUSIC: 'music',
  SKILL: 'skills/skill',
  SKILL_DETAIL: 'skills/skillDetail',
  EVENT: 'eventInformation',
  STREAM: 'streamInformation',
} as const;
/** 環境定数の定数の型 */
export type RtdbPath = (typeof RTDB_PATH)[keyof typeof RTDB_PATH];

/** 画像のアップロード先の定数 */
export const STRG_PATH = {
  CARDS: 'cardIllust',
  MUSIC: 'cdJacket',
  EVENT: 'eventInformation',
} as const;
/** 画像のアップロード先の定数の型 */
export type StrgPath = (typeof STRG_PATH)[keyof typeof STRG_PATH];
