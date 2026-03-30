/** IndexDBキー名 */
export const LOCAL_DB_KEY_NAMES = {
  CARD: 'llllMgr_card',
  CARD_LIST_FILTER: 'llllMgr_cardListFilter',
  MUSIC_DATA: 'llllMgr_musicData',
  SELECT_ITEM_LIST: 'llllMgr_selectItemList',
  SITE_SETTINGS: 'llllMgr_siteSettings',
  SORT_SETTINGS: 'llllMgr_sortSettings',
  INFLOW: 'inflow',
  CACHE_IMAGE_CARD: 'llllMgr_cardImageUrls',
  CACHE_IMAGE_MUSIC: 'llllMgr_musicImageUrls',
} as const;

/** IndexDBキー名の型 */
export type LocalDBKeyNames =
  (typeof LOCAL_DB_KEY_NAMES)[keyof typeof LOCAL_DB_KEY_NAMES];
