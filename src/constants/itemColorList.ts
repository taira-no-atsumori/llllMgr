import { ITEMS, PIECE_NAME, CHARM_NAME } from '@/constants/items';

export const ITEM_COLOR_LIST = {
  [ITEMS.SKILL_BOOK.LOW]: 'green',
  [ITEMS.SKILL_BOOK.MEDIUM]: 'orange',
  [ITEMS.SKILL_BOOK.HIGH]: 'red',
  [PIECE_NAME.GARNET]: 'pink-darken-1',
  [PIECE_NAME.EMERALD]: 'green-accent-3',
  [PIECE_NAME.CARNELIAN]: 'deep-orange-accent-3',
  [PIECE_NAME.DIA]: 'grey-darken-1',
  [PIECE_NAME.PERIDOT]: 'light-green-accent-3',
  [PIECE_NAME.RUBY]: 'pink-accent-3',
  [PIECE_NAME.SAPPHIRE]: 'blue-accent-4',
  [PIECE_NAME.TOPAZ]: 'yellow-darken-4',
  [PIECE_NAME.TURQUOISE]: 'cyan-lighten-3',
  [PIECE_NAME.AMETHYST]: 'deep-purple',
  [CHARM_NAME.SOL]: 'orange-darken-4',
  [CHARM_NAME.LUNA]: 'blue-accent-4',
  [CHARM_NAME.STELLA]: 'yellow-darken-3',
} as const;
type ItemColorList = (typeof ITEM_COLOR_LIST)[keyof typeof ITEM_COLOR_LIST];
