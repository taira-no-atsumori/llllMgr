/**
 * メンバー名の定数
 */
export const MEMBER_NAME_KEYS = [
  'kaho',
  'sayaka',
  'rurino',
  'kozue',
  'tsuzuri',
  'megumi',
  'ginko',
  'kosuzu',
  'hime',
  'seras',
  'izumi',
] as const;
export type MemberNameKeys = (typeof MEMBER_NAME_KEYS)[number];

/**
 * メンバー名の定数
 */
export const MEMBER_NAMES = {
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
} as const;
export type MemberNames = (typeof MEMBER_NAMES)[keyof typeof MEMBER_NAMES];

const memberName = {
  KAHO: {
    key: 'kaho',
    first: '日野下',
    last: '花帆',
  },
  SAYAKA: {
    key: 'sayaka',
    first: '村野',
    last: 'さやか',
  },
  RURINO: {
    key: 'rurino',
    first: '大沢',
    last: '瑠璃乃',
  },
  KOZUE: {
    key: 'kozue',
    first: '乙宗',
    last: '梢',
  },
  TSUZURI: {
    key: 'tsuzuri',
    first: '夕霧',
    last: '綴理',
  },
  MEGUMI: {
    key: 'megumi',
    first: '藤島',
    last: '慈',
  },
  GINKO: {
    key: 'ginko',
    first: '百生',
    last: '吟子',
  },
  KOSUZU: {
    key: 'kosuzu',
    first: '徒町',
    last: '小鈴',
  },
  HIME: {
    key: 'hime',
    first: '安養寺',
    last: '姫芽',
  },
  SERAS: {
    key: 'seras',
    first: 'セラス',
    last: '柳田 リリエンフェルト',
  },
  IZUMI: {
    key: 'izumi',
    first: '桂城',
    last: '泉',
  },
  SACHI: {
    key: 'sachi',
    first: '大賀美',
    last: '沙知',
  },
  SELAIZU: {
    key: 'selaIzu',
    first: '桂城泉＆',
    last: 'セラス 柳田 リリエンフェルト',
  },
  KOZUTSUZUMEGU: {
    key: 'kozutsuzumegu',
    first: '乙宗梢＆夕霧綴理＆',
    last: '藤島慈',
  },
};

export const groupName = {
  hasunosora: '蓮ノ空女学院スクールアイドルクラブ',
  CeriseBouquet: 'スリーズブーケ',
  DOLLCHESTRA: 'DOLLCHESTRA',
  miraCraPark: 'みらくらぱーく！',
  kahomeguGelato: 'かほめぐ♡じぇらーと',
  hasunokyujitsu: '蓮ノ休日',
  rurinoTsuzuri: 'るりのとゆかいなつづりたち',
  EdelNote: 'Edel Note',
};
