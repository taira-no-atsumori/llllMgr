import { MEMBER_COLOR } from '@/constants/colorConst';

/** メンバーキーの定数 */
export const MEMBER_KEYS = {
  KAHO: 'kaho',
  SAYAKA: 'sayaka',
  RURINO: 'rurino',
  KOZUE: 'kozue',
  TSUZURI: 'tsuzuri',
  MEGUMI: 'megumi',
  GINKO: 'ginko',
  KOSUZU: 'kosuzu',
  HIME: 'hime',
  SERAS: 'seras',
  IZUMI: 'izumi',
  SACHI: 'sachi',
  SELAIZU: 'selaIzu',
  KOZUTSUZUMEGU: 'kozutsuzumegu',
} as const;
/** メンバーキーのキーの型 */
export type MemberKeyKeys = keyof typeof MEMBER_KEYS;

/** メンバーキーの値の型 */
export type MemberKeyValues = (typeof MEMBER_KEYS)[keyof typeof MEMBER_KEYS];

/**
 * メンバーカラーが設定されているメンバーのキー配列を取得
 * @returns {MemberKeyKeys[]}
 */
export const getMemberKeys = (): MemberKeyValues[] => {
  return Object.values(MEMBER_KEYS).filter((key) => key in MEMBER_COLOR);
};

/**
 * メンバーキーのキーから値を取得
 *
 * @param key
 * @returns MemberKeyValues
 * @example
 * 'KAHO' → 'kaho'
 */
export const getMemberKeyValue = (key: MemberKeyKeys): MemberKeyValues => {
  return MEMBER_KEYS[key];
};

/**
 * メンバーキーの値からキーを取得
 *
 * @param value
 * @returns MemberKeyKeys
 * @example
 * 'kaho' → 'KAHO'
 */
export const getMemberKeyFromValue = (value: MemberKeyValues): MemberKeyKeys => {
  return Object.keys(MEMBER_KEYS).find((key) => MEMBER_KEYS[key] === value);
};

/** メンバーIDの定数 */
export const MEMBER_IDS = {
  [MEMBER_KEYS.KAHO]: 'kh',
  [MEMBER_KEYS.SAYAKA]: 'sy',
  [MEMBER_KEYS.RURINO]: 'rr',
  [MEMBER_KEYS.KOZUE]: 'kz',
  [MEMBER_KEYS.TSUZURI]: 'tz',
  [MEMBER_KEYS.MEGUMI]: 'mg',
  [MEMBER_KEYS.GINKO]: 'gn',
  [MEMBER_KEYS.KOSUZU]: 'sz',
  [MEMBER_KEYS.HIME]: 'hm',
  [MEMBER_KEYS.SERAS]: 'sr',
  [MEMBER_KEYS.IZUMI]: 'iz',
  [MEMBER_KEYS.SACHI]: 'sc',
  [MEMBER_KEYS.SELAIZU]: 'is',
  [MEMBER_KEYS.KOZUTSUZUMEGU]: 'ktm',
} as const;
export type MemberIds = (typeof MEMBER_IDS)[keyof typeof MEMBER_IDS];

/**
 * メンバーIDをメンバーキーに変換
 *
 * @param id メンバーID
 * @returns メンバーキー
 */
export const conversionIdToKey = (id: MemberIds): MemberKeyValues => {
  return Object.keys(MEMBER_IDS).find((memberKey) => MEMBER_IDS[memberKey] === id);
};

/**
 * メンバーキーをメンバーIDに変換
 *
 * @param key メンバーキー
 * @returns メンバーID
 */
export const conversionKeyToId = (key: MemberKeyValues): MemberIds => {
  return MEMBER_IDS[Object.keys(MEMBER_KEYS).find((memberKey) => MEMBER_KEYS[memberKey] === key)];
};

export const MEMBER_NAMES = {
  [MEMBER_KEYS.KAHO]: {
    first: '日野下',
    last: '花帆',
  },
  [MEMBER_KEYS.SAYAKA]: {
    first: '村野',
    last: 'さやか',
  },
  [MEMBER_KEYS.RURINO]: {
    first: '大沢',
    last: '瑠璃乃',
  },
  [MEMBER_KEYS.KOZUE]: {
    first: '乙宗',
    last: '梢',
  },
  [MEMBER_KEYS.TSUZURI]: {
    first: '夕霧',
    last: '綴理',
  },
  [MEMBER_KEYS.MEGUMI]: {
    first: '藤島',
    last: '慈',
  },
  [MEMBER_KEYS.GINKO]: {
    first: '百生',
    last: '吟子',
  },
  [MEMBER_KEYS.KOSUZU]: {
    first: '徒町',
    last: '小鈴',
  },
  [MEMBER_KEYS.HIME]: {
    first: '安養寺',
    last: '姫芽',
  },
  [MEMBER_KEYS.SERAS]: {
    first: 'セラス',
    last: '柳田 リリエンフェルト',
  },
  [MEMBER_KEYS.IZUMI]: {
    first: '桂城',
    last: '泉',
  },
  [MEMBER_KEYS.SACHI]: {
    first: '大賀美',
    last: '沙知',
  },
  [MEMBER_KEYS.SELAIZU]: {
    first: '桂城泉＆',
    last: 'セラス 柳田 リリエンフェルト',
  },
  [MEMBER_KEYS.KOZUTSUZUMEGU]: {
    first: '乙宗梢＆夕霧綴理＆',
    last: '藤島慈',
  },
} as const;
export type MemberNames = (typeof MEMBER_NAMES)[keyof typeof MEMBER_NAMES];

/** 名字の型 */
export type MemberFirstName = (typeof MEMBER_NAMES)[keyof typeof MEMBER_NAMES]['first'];

/** 名前の型 */
export type MemberLastName = (typeof MEMBER_NAMES)[keyof typeof MEMBER_NAMES]['last'];

/**
 * メンバーフルネーム作成
 *
 * @param key MemberKeyValues
 * @param isSpace 名字と名前の間にスペースを入れるか（デフォルトはtrue）
 * @returns メンバーのフルネーム
 */
export const makeMemberFullName = (key: MemberKeyValues, isSpace = true) => {
  const memberData = MEMBER_NAMES[key];
  return `${memberData.first}${/kozutsuzumegu|selaIzu/.test(key) || !isSpace ? '' : ' '}${memberData.last}`;
};

/** メンバーデータ */
export const MEMBER_DATA = {
  KAHO: {
    id: 'kh',
    key: 'kaho',
    period: 103,
    color: {
      code: '#F8B500',
      name: 'おひさま色',
      kana: 'おひさまいろ',
    },
  },
  SAYAKA: {
    id: 'sy',
    key: 'sayaka',
    period: 103,
    color: {
      code: '#5383C3',
      name: '氷青色',
      kana: 'ひょうじょういろ',
    },
  },
  RURINO: {
    id: 'rr',
    key: 'rurino',
    period: 103,
    color: {
      code: '#E7609E',
      name: '瑠璃ピンク',
      kana: 'るりぴんく',
    },
  },
  KOZUE: {
    id: 'kz',
    key: 'kozue',
    period: 102,
    color: {
      code: '#68BE8D',
      name: 'マーメイドグリーン',
      kana: 'まーめいどぐりーん',
    },
  },
  TSUZURI: {
    id: 'tz',
    key: 'tsuzuri',
    period: 102,
    color: {
      code: '#BA2636',
      name: 'ボクの赤',
      kana: 'ぼくのあか',
    },
  },
  MEGUMI: {
    id: 'mg',
    key: 'megumi',
    period: 102,
    color: {
      code: '#C8C2C6',
      name: 'エンジェルホワイト',
      kana: 'えんじぇるほわいと',
    },
  },
  GINKO: {
    id: 'gn',
    key: 'ginko',
    period: 104,
    color: {
      code: '#A2D7DD',
      name: '天の原色',
      kana: 'あまのはらいろ',
    },
  },
  KOSUZU: {
    id: 'sz',
    key: 'kosuzu',
    period: 104,
    color: {
      code: '#FAD764',
      name: 'いちばん星色',
      kana: 'いちばんぼしいろ',
    },
  },
  HIME: {
    id: 'hm',
    key: 'hime',
    period: 104,
    color: {
      code: '#9D8DE2',
      name: 'シュガーパープル',
      kana: 'しゅがーぱーぷる',
    },
  },
  SERAS: {
    id: 'sr',
    key: 'seras',
    period: 105,
    color: {
      code: '#f56455',
      name: 'ライズスカーレット',
      kana: 'らいずすかーれっと',
    },
  },
  IZUMI: {
    id: 'iz',
    last: '泉',
    period: 105,
    color: {
      code: '#1ebecd',
      name: 'シュヴァリエグリーン',
      kana: 'しゅゔぁりえぐりーん',
    },
  },
  SACHI: {
    id: 'sc',
    key: 'sachi',
    period: 101,
    color: {
      code: null,
      name: null,
      kana: null,
    },
  },
  SELAIZU: {
    id: 'is',
    key: 'selaIzu',
    period: null,
    color: {
      code: null,
      name: null,
      kana: null,
    },
  },
  KOZUTSUZUMEGU: {
    id: 'ktm',
    key: 'kozutsuzumegu',
    period: null,
    color: {
      code: null,
      name: null,
      kana: null,
    },
  },
} as const;
export type MemberData = (typeof MEMBER_DATA)[keyof typeof MEMBER_DATA];

/** メンバーIDの型 */
export type MemberIds = (typeof MEMBER_DATA)[keyof typeof MEMBER_DATA]['id'];

/** メンバーキーの型 */
export type MemberKeys = (typeof MEMBER_DATA)[keyof typeof MEMBER_DATA]['key'];

/** メンバーカラーデータの型 */
export type MemberColors = (typeof MEMBER_DATA)[keyof typeof MEMBER_DATA]['color'];

/**
 * メンバーデータ取得処理
 *
 * メンバーネームキーからメンバーネームデータを取得する。
 *
 * @param key メンバーキー
 * @returns メンバーネームデータ
 */
export const getMemberData = (key: MemberKeyValues): MemberData => {
  return Object.values(MEMBER_DATA).find((memberData) => memberData.key === key);
};

/**
 *
 * @param generation
 * @returns MemberData
 */
export const getGenerationMembers = (generation: number): MemberData[] => {
  return Object.values(MEMBER_DATA).filter((memberData) => {
    return GENERATION_LIST[generation].includes(memberData.period);
  });
};

/**
 * 生徒リストの定数
 */
export const GENERATION_LIST = {
  103: [102, 103],
  104: [102, 103, 104],
  105: [103, 104, 105],
} as const;
export type GenerationList = (typeof GENERATION_LIST)[keyof typeof GENERATION_LIST];

export const EXCLUSION_MEMBER = [MEMBER_KEYS.SACHI, MEMBER_KEYS.SELAIZU, MEMBER_KEYS.KOZUTSUZUMEGU] as const;

/**
 * グループ名の定数
 */
export const GROUP_NAME = {
  HASUNOSORA: '蓮ノ空女学院スクールアイドルクラブ',
  CERISE_BOUQUET: 'スリーズブーケ',
  DOLLCHESTRA: 'DOLLCHESTRA',
  MIRA_CRA_PARK: 'みらくらぱーく！',
  KAHOMEGU_GELATO: 'かほめぐ♡じぇらーと',
  HASUNOKYUJITSU: '蓮ノ休日',
  RURINO_TSUZURI: 'るりのとゆかいなつづりたち',
  EDEL_NOTE: 'Edel Note',
  RITORURITO: 'Ruri&To',
  PRINCESS: 'PRINCEε>ε>',
} as const;
export type GroupName = (typeof GROUP_NAME)[keyof typeof GROUP_NAME];
