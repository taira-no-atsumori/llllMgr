import {
  RARE,
  getStyleTypeListEn,
  getMoodListEn,
  LIMITED,
} from '@/constants/cards';
import { MEMBER_KEYS } from '@/constants/memberNames';

/** デフォルト検索設定 */
export const DEFAULT_SEARCH = {
  cardList: {
    rare: [...RARE],
    styleType: getStyleTypeListEn(),
    mood: getMoodListEn(),
    limited: Object.keys(LIMITED),
    cardLevel: [0, 140],
    SALevel: [1, 14],
    SLevel: [1, 14],
    SAAP: [0, 99],
    SAP: [0, 99],
    releaseLevel: [1, 5],
    trainingLevel: [0, 4],
    memberName: [
      MEMBER_KEYS.KAHO,
      MEMBER_KEYS.SAYAKA,
      MEMBER_KEYS.RURINO,
      MEMBER_KEYS.KOZUE,
      MEMBER_KEYS.TSUZURI,
      MEMBER_KEYS.MEGUMI,
      MEMBER_KEYS.GINKO,
      MEMBER_KEYS.KOSUZU,
      MEMBER_KEYS.HIME,
      MEMBER_KEYS.SERAS,
      MEMBER_KEYS.IZUMI,
      'special',
    ],
    favorite: [],
    releaseStatus: 'none',
  },
  skillList: {
    skillFilterType: 'skillType',
    skillType: {
      specialAppeal: [],
      skill: [],
      characteristic: [],
    },
    skillName: {
      specialAppeal: [],
      skill: [],
      characteristic: [],
    },
  },
  cardSeries: [],
} as const;

/** デフォルトサイト設定 */
export const DEFAULT_SITE_SETTINGS = {
  all: {
    headerTracking: '',
    darkMode: 'light',
  },
  cardList: {
    isShowDetail: 'false',
    hover: 'true',
    dot_cardLevel: 'true',
    dot_releasePoint: 'true',
    dot_releaseLevel: 'true',
  },
  musicList: {
    hover: 'true',
  },
} as const;

/** デフォルトソート設定 */
export const DEFAULT_SORT_SETTINGS = {
  cardList: {
    sortType: 'rare',
    order: 'descending',
  },
  musicList: {
    sortType: 'default',
    order: 'ascending',
  },
} as const;
