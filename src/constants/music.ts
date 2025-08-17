/**
 * ボーナススキルの定数
 */
export const BONUS_SKILL_NAME = {
  VOLTAGE_UP: 'ボルテージアップ',
  MENTAL_RECOVER: 'メンタルリカバー',
  BEAT_HEART_UP: 'ビートハートアップ',
  LOVE_BONUS: 'LOVEボーナス',
} as const;
export type BonusSkillName = (typeof BONUS_SKILL_NAME)[keyof typeof BONUS_SKILL_NAME];

/**
 * 楽曲の属性
 */
export const ATTRIBUTE = {
  SMILE: {
    en: 'smile',
    jp: 'スマイル',
  },
  PURE: {
    en: 'pure',
    jp: 'ピュア',
  },
  COOL: {
    en: 'cool',
    jp: 'クール',
  },
} as const;

/** EN表記の型 */
export type AttributeEn = (typeof ATTRIBUTE)[keyof typeof ATTRIBUTE]['en'];

/** JP表記の型 */
export type AttributeJp = (typeof ATTRIBUTE)[keyof typeof ATTRIBUTE]['jp'];

/**
 *
 * @returns EN表記のスタイルタイプのリスト
 */
export const getAttributeListEn = (): AttributeEn[] => {
  return Object.values(ATTRIBUTE).map((attribute) => attribute.en);
};

/**
 *
 * @returns JP表記のスタイルタイプのリスト
 */
export const getAttributeListJp = (): AttributeJp[] => {
  return Object.values(ATTRIBUTE).map((attribute) => attribute.jp);
};

/**
 * EN → JP の変換
 * @param en
 * @returns
 */
export const convertAttributeEnToJp = (en: AttributeEn): AttributeJp | undefined => {
  const entry = Object.values(ATTRIBUTE).find((attribute) => attribute.en === en);
  return entry?.jp;
};

/**
 * JP → EN の変換
 * @param jp
 * @returns
 */
export const convertAttributeJpToEn = (jp: AttributeJp): AttributeEn | undefined => {
  const entry = Object.values(ATTRIBUTE).find((attribute) => attribute.jp === jp);
  return entry?.en;
};
