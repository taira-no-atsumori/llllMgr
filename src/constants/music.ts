/** 楽曲の属性 */
export const ATTRIBUTE = {
  SMILE: {
    en: 'smile',
    ja: 'スマイル',
  },
  PURE: {
    en: 'pure',
    ja: 'ピュア',
  },
  COOL: {
    en: 'cool',
    ja: 'クール',
  },
} as const;

/** EN表記の型 */
export type AttributeEn = (typeof ATTRIBUTE)[keyof typeof ATTRIBUTE]['en'];

/** JA表記の型 */
export type AttributeJa = (typeof ATTRIBUTE)[keyof typeof ATTRIBUTE]['ja'];

/**
 *
 * @returns EN表記のスタイルタイプのリスト
 */
export const getAttributeListEn = (): AttributeEn[] => {
  return Object.values(ATTRIBUTE).map((attribute) => attribute.en);
};

/**
 *
 * @returns JA表記のスタイルタイプのリスト
 */
export const getAttributeListJa = (): AttributeJa[] => {
  return Object.values(ATTRIBUTE).map((attribute) => attribute.ja);
};

/**
 * EN → JA の変換
 * @param en
 * @returns
 */
export const convertAttributeEnToJa = (
  en: AttributeEn,
): AttributeJa | undefined => {
  const entry = Object.values(ATTRIBUTE).find(
    (attribute) => attribute.en === en,
  );
  return entry?.ja;
};

/**
 * JA → EN の変換
 * @param ja
 * @returns
 */
export const convertAttributeJaToEn = (
  ja: AttributeJa,
): AttributeEn | undefined => {
  const entry = Object.values(ATTRIBUTE).find(
    (attribute) => attribute.ja === ja,
  );
  return entry?.en;
};

/** 楽曲難易度のラベル */
export const DIFFICULTY_LABEL = ['NORMAL', 'HARD', 'EXPERT', 'MASTER'] as const;
