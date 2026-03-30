/** スキルタイプの定義 */
export const SKILL_TYPE_KEY = {
  heartCaptcha: 'ハートキャプチャ系',
  loveAttract: 'ラブアトラクト系',
  voltage: 'ボルテージ系',
  mental: 'メンタル系',
  extend: '手札枚数変更系',
  boost: 'ブースト系',
  AP: 'AP変化系',
  mood: 'ムード系',
  infinity: 'パラメータ無限系',
  other: 'その他',
} as const;
/** スキルタイプの型 */
export type skillTypeKeyTypes = keyof typeof SKILL_TYPE_KEY;
