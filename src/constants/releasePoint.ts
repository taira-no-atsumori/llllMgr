import { Rare } from '@/constants/cards';

/**
 * 解放レベル
 */
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

export const getReleasePoint = (rare: Rare, key: 'point' | 'max') => {
  return RELEASE_POINT[rare][key];
};
