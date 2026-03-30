import { defineStore } from 'pinia';

import { ref, computed } from 'vue';

import { FirebaseService } from '@/services/FirebaseService';

import { STYLE_TYPE, MOOD, type Rare, RARE } from '@/constants/cards';
import {
  MEMBER_KEYS,
  MEMBER_IDS,
  type MemberKeyValues,
} from '@/constants/memberNames';

import type {
  CardDataByMember,
  CardDataType,
  CardStatus,
} from '@/types/cardList';

const defaultCardData: CardDataByMember = {
  default: {
    default: {
      df_000: {
        cardName: 'default',
        styleType: STYLE_TYPE.PERFORMER.en,
        mood: MOOD.NEUTRAL.en,
        series: '',
        kana: '',
        gacha: {
          addSeason: '',
          period: 'normal',
        },
        uniqueStatus: {
          smile: 30,
          pure: 30,
          cool: 30,
          mental: 3,
          BP: 100,
        },
        specialAppeal: {
          name: '',
          AP: 1,
          detail: {},
        },
        skill: {
          name: '',
          AP: 1,
          detail: {},
        },
        characteristic: {
          name: '',
          detail: '',
          type: [],
        },
      },
    },
  },
};

export const useCardStore = defineStore('cardList', () => {
  const cardListFromDB = ref<CardDataByMember>({});
  const card = ref<CardDataByMember>(
    JSON.parse(JSON.stringify(defaultCardData)),
  );
  const isLoaded = ref(false);
  const currentEnv = ref<'prod' | 'dev'>('dev');

  const initCardData = async (isDev: boolean = false) => {
    const targetEnv = isDev ? 'dev' : 'prod';

    if (isLoaded.value && currentEnv.value === targetEnv) {
      return;
    }

    isLoaded.value = false;

    try {
      const data = await FirebaseService.getCardData(isDev);

      if (data) {
        cardListFromDB.value = data;
        const mergedData: CardDataByMember = {
          ...JSON.parse(JSON.stringify(defaultCardData)),
          ...data,
        };

        // データ拡張処理（以前は stateStore.ts の initializeData で行っていた処理）
        for (const memberName in mergedData) {
          for (const rare in mergedData[memberName]) {
            for (const cardId in mergedData[memberName][rare]) {
              const addStatus: CardStatus = {
                fluctuationStatus: {
                  cardLevel: 0,
                  trainingLevel: 0,
                  SALevel: 1,
                  SLevel: 1,
                  releaseLevel: 1,
                  releasePoint: 0,
                },
                sortPoint: 0,
                favorite: [],
              };

              mergedData[memberName][rare][cardId] = {
                ...addStatus,
                ...mergedData[memberName][rare][cardId],
                ID: cardId,
                rare: rare as Rare,
                memberName: memberName as MemberKeyValues,
                limited: mergedData[memberName][rare][cardId].gacha
                  .period as string,
              } as CardDataType;
            }
          }
        }

        card.value = mergedData;
        currentEnv.value = targetEnv;
        isLoaded.value = true;
      }
    } catch (e) {
      console.error('Failed to fetch card data:', e);
    }
  };

  /** フラット化されたカードリスト */
  const cardList = computed(() => {
    const result: CardDataType[] = [];

    for (const memberName of Object.values(MEMBER_KEYS)) {
      const memberCards = card.value[memberName];

      if (memberCards) {
        for (const rare of RARE) {
          const rarityCards: Record<string, CardDataType> | undefined =
            memberCards[rare];

          if (rarityCards) {
            result.push(...Object.values(rarityCards).reverse());
          }
        }
      }
    }

    return result;
  });

  /**
   * デフォルトカードID作成処理
   *
   * @description
   * 各メンバーのデフォルトのカードIDを作成。
   *
   * @param memberName メンバー名
   * @return デフォルトのカードID
   */
  const makeDefaultCardId = (memberName: MemberKeyValues) => {
    return `${memberName === 'default' ? 'df' : MEMBER_IDS[memberName]}_000`;
  };

  return {
    cardListFromDB,
    card,
    cardList,
    isLoaded,
    initCardData,
    makeDefaultCardId,
  };
});
