/**
 * ボーナススキルの定数
 */
export const BONUS_SKILL = {
  VOLTAGE_UP: 'ボルテージアップ',
  MENTAL_RECOVER: 'メンタルリカバー',
  BEAT_HEART_UP: 'ビートハートアップ',
  LOVE_BONUS: 'LOVEボーナス',
} as const;

// オブジェクトの値からUnion型を生成
export type BonusSkillName = (typeof BONUS_SKILL)[keyof typeof BONUS_SKILL];
