import { defineStore } from 'pinia';
import type { CardListState } from '@/types/cardList';
import { STYLE_TYPE, MOOD } from '@/constants/cards';

import kahoData from '@/data/cards/kaho.json';
import sayakaData from '@/data/cards/sayaka.json';
import rurinoData from '@/data/cards/rurino.json';
import kozueData from '@/data/cards/kozue.json';
import tsuzuriData from '@/data/cards/tsuzuri.json';
import megumiData from '@/data/cards/megumi.json';
import ginkoData from '@/data/cards/ginko.json';
import kosuzuData from '@/data/cards/kosuzu.json';
import himeData from '@/data/cards/hime.json';
import serasData from '@/data/cards/seras.json';
import izumiData from '@/data/cards/izumi.json';
import sachiData from '@/data/cards/sachi.json';
import selaIzuData from '@/data/cards/selaIzu.json';
import kozutsuzumeguData from '@/data/cards/kozutsuzumegu.json';

export const useCardStore = defineStore('cardList', {
  state: (): CardListState => ({
    card: {
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
      kaho: kahoData,
      sayaka: sayakaData,
      rurino: rurinoData,
      kozue: kozueData,
      tsuzuri: tsuzuriData,
      megumi: megumiData,
      ginko: ginkoData,
      kosuzu: kosuzuData,
      hime: himeData,
      seras: serasData,
      izumi: izumiData,
      sachi: sachiData,
      selaIzu: selaIzuData,
      kozutsuzumegu: kozutsuzumeguData,
    },
  }),
  getters: {},
  actions: {},
});

// import { defineStore } from 'pinia';
// import { ref, watch } from 'vue';
// import { ref as dbRef, onValue, type Unsubscribe } from 'firebase/database';
// import { rtdb, rtdbDev } from '@/firebase';
// import { useStateStore } from '@/stores/stateStore';
// import type { CardListState } from '@/types/cardList';
// import { STYLE_TYPE, MOOD } from '@/constants/cards';
// import { RTDB_PATH } from '@/constants/envConst';

// const defaultCardData: CardListState['card'] = {
//   default: {
//     default: {
//       df_000: {
//         cardName: 'default',
//         styleType: STYLE_TYPE.PERFORMER.en,
//         mood: MOOD.NEUTRAL.en,
//         series: '',
//         kana: '',
//         gacha: {
//           addSeason: '',
//           period: 'normal',
//         },
//         uniqueStatus: {
//           smile: 30,
//           pure: 30,
//           cool: 30,
//           mental: 3,
//           BP: 100,
//         },
//         specialAppeal: {
//           name: '',
//           AP: 1,
//           detail: {},
//         },
//         skill: {
//           name: '',
//           AP: 1,
//           detail: {},
//         },
//         characteristic: {
//           name: '',
//           detail: '',
//           type: [],
//         },
//       },
//     },
//   },
// };

// export const useCardStore = defineStore('cardList', () => {
//   const stateStore = useStateStore();
//   const card = ref<CardListState['card']>(
//     JSON.parse(JSON.stringify(defaultCardData)),
//   );
//   const isLoaded = ref(false);
//   let unsubscribe: Unsubscribe | null = null;

//   const subscribe = () => {
//     if (unsubscribe) {
//       unsubscribe();
//       unsubscribe = null;
//     }
//     isLoaded.value = false;

//     const db = stateStore.isDev ? rtdbDev : rtdb;
//     const cardsRef = dbRef(db, RTDB_PATH.CARDS);

//     unsubscribe = onValue(cardsRef, (snapshot) => {
//       const data = snapshot.val() || {};
//       card.value = {
//         ...JSON.parse(JSON.stringify(defaultCardData)),
//         ...data,
//       };
//       if (!isLoaded.value) {
//         isLoaded.value = true;
//       }
//     });
//   };

//   watch(() => stateStore.isDev, subscribe, { immediate: true });

//   return {
//     card,
//     isLoaded,
//   };
// });
