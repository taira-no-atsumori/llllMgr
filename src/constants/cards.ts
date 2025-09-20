/**
 * カードのレアリティ
 */
export const RARE = ['DR', 'LR', 'BR', 'UR', 'SR', 'R'] as const;
export type Rare = (typeof RARE)[number];

/**
 * カードのスタイルタイプ
 */
export const STYLE_TYPE = {
  PERFORMER: {
    en: 'performer',
    jp: 'パフォーマー',
  },
  MOOD_MAKER: {
    en: 'moodMaker',
    jp: 'ムードメーカー',
  },
  CHEER_LEADER: {
    en: 'cheerLeader',
    jp: 'チアリーダー',
  },
  TRICK_STAR: {
    en: 'trickStar',
    jp: 'トリックスター',
  },
} as const;

/** EN表記の型 */
export type StyleTypeEn = (typeof STYLE_TYPE)[keyof typeof STYLE_TYPE]['en'];

/** JP表記の型 */
export type StyleTypeJp = (typeof STYLE_TYPE)[keyof typeof STYLE_TYPE]['jp'];

/**
 *
 * @returns EN表記のスタイルタイプのリスト
 */
export const getStyleTypeListEn = (): StyleTypeEn[] => {
  return Object.values(STYLE_TYPE).map((style) => style.en);
};

/**
 *
 * @returns JP表記のスタイルタイプのリスト
 */
export const getStyleTypeListJp = (): StyleTypeJp[] => {
  return Object.values(STYLE_TYPE).map((style) => style.jp);
};

/**
 * EN → JP の変換
 * @param en
 * @returns
 */
export const convertStyleEnToJp = (en: StyleTypeEn): StyleTypeJp | undefined => {
  const entry = Object.values(STYLE_TYPE).find((style) => style.en === en);
  return entry?.jp;
};

/**
 * JP → EN の変換
 * @param jp
 * @returns
 */
export const convertStyleJpToEn = (jp: StyleTypeJp): StyleTypeEn | undefined => {
  const entry = Object.values(STYLE_TYPE).find((style) => style.jp === jp);
  return entry?.en;
};

/**
 * カードのムード
 */
export const MOOD = {
  HAPPY: {
    en: 'happy',
    jp: 'ハッピー',
  },
  NEUTRAL: {
    en: 'neutral',
    jp: 'ニュートラル',
  },
  MELOW: {
    en: 'melow',
    jp: 'メロウ',
  },
} as const;

/** EN表記の型 */
export type MoodEn = (typeof MOOD)[keyof typeof MOOD]['en'];

/** JP表記の型 */
export type MoodJp = (typeof MOOD)[keyof typeof MOOD]['jp'];

/**
 *
 * @returns EN表記のスタイルタイプのリスト
 */
export const getMoodListEn = (): MoodEn[] => {
  return Object.values(MOOD).map((mood) => mood.en);
};

/**
 *
 * @returns JP表記のスタイルタイプのリスト
 */
export const getMoodListJp = (): MoodJp[] => {
  return Object.values(MOOD).map((mood) => mood.jp);
};

/**
 * EN → JP の変換
 * @param en
 * @returns
 */
export const convertMoodEnToJp = (en: MoodEn): MoodJp | undefined => {
  const entry = Object.values(MOOD).find((mood) => mood.en === en);
  return entry?.jp;
};

/**
 * JP → EN の変換
 * @param jp
 * @returns
 */
export const convertMoodJpToEn = (jp: MoodJp): MoodEn | undefined => {
  const entry = Object.values(MOOD).find((mood) => mood.jp === jp);
  return entry?.en;
};

/**
 * お気に入りアイコン
 */
export const FAVORITE = ['heart', 'circle', 'triangle', 'square', 'rhombus', 'star'] as const;
export type FavoriteIcon = (typeof FAVORITE)[number];

/**
 * 解放ステータス
 */
export const RELEASE_STATUS = ['none', 'trainingLevel', 'cardLevel', 'releaseLevel'] as const;
export type ReleaseStatus = (typeof RELEASE_STATUS)[number];

/**
 * カードの入手期間と表示ラベル
 */
export const LIMITED = {
  spring: {
    filterLabel: 'SPRING LIMITED',
    cardLabel: '春限定',
  },
  summer: {
    filterLabel: 'SUMMER LIMITED',
    cardLabel: '夏限定',
  },
  autumn: {
    filterLabel: 'AUTUMN LIMITED',
    cardLabel: '秋限定',
  },
  winter: {
    filterLabel: 'WINTER LIMITED',
    cardLabel: '冬限定',
  },
  graduation: {
    filterLabel: 'GRADUATION LIMITED',
    cardLabel: '卒業限定',
  },
  party: {
    filterLabel: 'PARTY! LIMITED',
    cardLabel: '宴限定',
  },
  birthday: {
    filterLabel: 'BIRTHDAY LIMITED',
    cardLabel: '誕生日限定',
  },
  collaboration: {
    filterLabel: 'コラボ',
    cardLabel: 'コラボ限定',
  },
  prize: {
    filterLabel: 'GP PRIZE',
    cardLabel: 'ライブGP報酬',
  },
  normal: {
    filterLabel: '通常',
    cardLabel: '通常',
  },
} as const;
export type Limited = keyof typeof LIMITED;

/**
 * レア度ごとの最大レベル
 */
export const MAX_CARD_LEVEL = {
  DR: [100, 120, 130, 140],
  LR: [100, 120, 130, 140],
  BR: [80, 100, 110, 120],
  UR: [60, 80, 100, 110, 120],
  SR: [40, 60, 80, 90, 100],
  R: [30, 40, 60, 70, 80],
} as const;
export type MaxCardLevel = (typeof MAX_CARD_LEVEL)[keyof typeof MAX_CARD_LEVEL];

export const RELEASE_POINT = {
  DR: {
    point: 100,
    max: 400,
  },
  LR: {
    point: 100,
    max: 400,
  },
  BR: {
    point: 75,
    max: 300,
  },
  UR: {
    point: 100,
    max: 400,
  },
  SR: {
    point: 50,
    max: 200,
  },
  R: {
    point: 25,
    max: 100,
  },
} as const;
export type ReleasePoint = (typeof RELEASE_POINT)[keyof typeof RELEASE_POINT];
