/** ボーナススキル名の定数 */
export const BONUS_SKILL_NAMES = {
  VOLTAGE_UP: 'ボルテージアップ',
  MENTAL_RECOVER: 'メンタルリカバー',
  BEAT_HEART_UP: 'ビートハートアップ',
  LOVE_BONUS: 'LOVEボーナス',
} as const;
export type BonusSkillNames =
  (typeof BONUS_SKILL_NAMES)[keyof typeof BONUS_SKILL_NAMES];

/** ボーナススキルの詳細情報 */
export const BONUS_SKILL_LIST = {
  [BONUS_SKILL_NAMES.VOLTAGE_UP]: {
    text: ['ボルテージPt.を', 'pt.獲得するごとに、1pt.追加獲得'],
    init: 11,
    ary: [5, 10, 15, 20, 25, 30, 40],
  },
  [BONUS_SKILL_NAMES.MENTAL_RECOVER]: {
    text: ['メンタルが', '減少するごとに、メンタルを1回復'],
    init: 12,
    ary: [1, 5, 9, 13, 17, 21, 25, 29],
  },
  [BONUS_SKILL_NAMES.BEAT_HEART_UP]: {
    text: ['ビートハートの出現量+', '%'],
    ary: null,
  },
  [BONUS_SKILL_NAMES.LOVE_BONUS]: {
    text: ['ハート回収時のLOVE獲得量+', '%'],
    ary: [
      { limit: 5, baseValue: 0, multiplier: 10, subtractLevel: 0 },
      { limit: 10, baseValue: 50, multiplier: 5, subtractLevel: 5 },
      { limit: 25, baseValue: 75, multiplier: 4, subtractLevel: 10 },
      { limit: 50, baseValue: 135, multiplier: 3, subtractLevel: 25 },
      { limit: Infinity, baseValue: 210, multiplier: 2.5, subtractLevel: 50 },
    ],
  },
} as const;
export type BonusSkillList =
  (typeof bonusSkillList)[keyof typeof bonusSkillList];

export const DEFAULT_BONUS_SKILL_LIST = {
  [BONUS_SKILL_NAMES.VOLTAGE_UP]: 0,
  [BONUS_SKILL_NAMES.MENTAL_RECOVER]: 0,
  [BONUS_SKILL_NAMES.BEAT_HEART_UP]: 0,
  [BONUS_SKILL_NAMES.LOVE_BONUS]: 0,
} as const;
