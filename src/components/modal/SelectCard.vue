<template>
  <v-container fluid class="pa-0">
    <div class="d-inline-block">
      <v-switch
        v-model="store.isParamReflect"
        label="CARD LISTのパラメータを反映する"
        color="pink"
        density="compact"
        hide-details
      />
    </div>
    <div class="d-inline-block ml-sm-3">
      <v-switch
        v-model="store.isPossessionFlg"
        label="所持済みのカードのみ表示"
        color="pink"
        density="compact"
        hide-details
      />
    </div>
    <v-row
      v-for="rare in RARE"
      :key="rare"
      no-gutters
      :class="rare !== 'R' ? 'mb-3' : ''"
    >
      <!--<template>-->
      <v-col cols="12">
        <h3
          v-if="
            outputCardList(store).filter((data) => data.rare === rare).length >
            0
          "
          class="px-1"
        >
          {{ rare }}
        </h3>
      </v-col>
      <v-col
        v-for="(cardData, i) in outputCardList(store).filter(
          (data) => data.rare === rare,
        )"
        :key="i"
        cols="6"
        sm="2"
        class="pa-1"
      >
        <v-card
          v-if="!!searchSetCard(cardData.ID)"
          :disabled="!!searchSetCard(cardData.ID)"
          @click="openCheckDialog(cardData.cardName, rare, cardData)"
        >
          <v-img
            :src="cardImageUrls[cardData.ID]?.after || noImage"
            gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)"
            class="d-flex align-center"
          >
            <p class="text-center text-white font-weight-bold text-h6">
              {{ STYLE_HEADLINE[searchSetCard(cardData.ID)] }}<br />
              選択中
            </p>
          </v-img>
          <v-card-title class="px-2 py-1">{{ cardData.cardName }}</v-card-title>
        </v-card>
        <v-card
          v-else
          @click="openCheckDialog(cardData.cardName, rare, cardData)"
        >
          <v-img :src="cardImageUrls[cardData.ID]?.after || noImage" />
          <v-card-title class="px-2 py-1">{{ cardData.cardName }}</v-card-title>
        </v-card>
        <!--<v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-card
                v-if="searchSetCard(cardName)"
                v-bind="props"
                @click="openCheckDialog(cardName, rare)"
              >
                <v-img
                  :src="store.getImagePath(
                    'images/cardIllust',
                    `${store.conversion(cardName)}_${MEMBER_NAMES[store.openCard.name].last}_覚醒後`
                  )"
                  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)"
                  class="d-flex align-center"
                >
                  <p class="text-center text-white font-weight-bold text-h6">
                    {{ STYLE_HEADLINE[searchSetCard(cardName)] }}<br>
                    選択中
                  </p>
                </v-img>
                <v-card-title class="px-2 py-1">{{ cardName }}</v-card-title>
              </v-card>
              <v-card
                v-else
                v-bind="props"
                @click="openCheckDialog(cardName, rare)"
              >
                <v-img
                  :src="store.getImagePath(
                    'images/cardIllust',
                    `${store.conversion(cardName)}_${MEMBER_NAMES[store.openCard.name].last}_覚醒後`
                  )"
                />
                <v-card-title class="px-2 py-1">{{ cardName }}</v-card-title>
              </v-card>
            </template>
            <p class="mb-1">
              {{ rare }}{{ ['', '+', '++'][store.cardParam('trainingLevel', {memberName: store.openCard.name, rare: rare, cardName: cardName})] }} [{{ cardName }}] {{ store.fullName(store.openCard.name) }} (Lv. {{ store.cardParam('cardLevel', {memberName: store.openCard.name, rare: rare, cardName: cardName}) }})
            </p>
            <v-row no-gutters class="mb-1">
              <v-col cols="5">
                <v-row no-gutters>
                  <v-col cols="6">スマイル</v-col>
                  <v-col cols="6">
                    {{ store.card[store.openCard.name][rare][cardName].uniqueStatus.smile }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="6">クール</v-col>
                  <v-col cols="6">
                    {{ store.card[store.openCard.name][rare][cardName].uniqueStatus.cool }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="6">ピュア</v-col>
                  <v-col cols="6">
                    {{ store.card[store.openCard.name][rare][cardName].uniqueStatus.pure }}
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="7">
                <v-row no-gutters>
                  <v-col cols="8">メンタル</v-col>
                  <v-col cols="4">
                    {{ store.card[store.openCard.name][rare][cardName].uniqueStatus.mental }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="8">BP</v-col>
                  <v-col cols="4">
                    {{ store.card[store.openCard.name][rare][cardName].uniqueStatus.BP }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="8">解放Lv.</v-col>
                  <v-col cols="4">
                    {{ store.card[store.openCard.name][rare][cardName].fluctuationStatus.trainingLevel }}
                  </v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="8">解放ボーナス</v-col>
                  <v-col cols="4">
                    {{ rare === 'DR' ? '-' : GRANDPRIX_BONUS.releaseLv[rare][store.card[store.openCard.name][rare][cardName].fluctuationStatus.trainingLevel] }}
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <p>
              <span class="mr-3">スペシャルアピール</span>
              {{ store.card[store.openCard.name][rare][cardName].specialAppeal.name }}
            </p>
            <p>
              <span class="mr-3">スキル</span>
              {{ store.card[store.openCard.name][rare][cardName].skill.name }}
            </p>
            <p v-if="rare !== 'R'">
              <span class="mr-3">特性</span>
              {{ store.card[store.openCard.name][rare][cardName].characteristic.name }}
            </p>
          </v-tooltip>-->
      </v-col>
      <!--</template>-->
    </v-row>
  </v-container>

  <v-dialog v-model="dialog" max-width="600">
    <v-sheet class="pa-2">
      <div class="text-center mb-2">カードを入れ替えますか？</div>
      <v-alert
        v-if="rarity === 'DR'"
        type="warning"
        variant="outlined"
        class="mb-2"
      >
        ドリームスタイル(DR)のカードはライブグランプリでは使用できません。
      </v-alert>
      <v-row no-gutters>
        <v-col cols="12" sm="5">
          <v-card>
            <v-img
              :src="
                cardImageUrls[
                  store.searchSelectDeckCard(
                    store.openCard.name,
                    store.openCard.style,
                  )
                ]?.after || noImage
              "
            />
            <v-card-title class="pa-2">{{
              store.conversion(
                store.searchSelectDeckCard(
                  store.openCard.name,
                  store.openCard.style,
                ),
              )
            }}</v-card-title>
            <v-card-text class="px-2 pb-2">
              <v-row no-gutters>
                <v-col cols="6">カードレベル</v-col>
                <v-col cols="6">{{ getCardStatus('cardLevel', true) }}</v-col>
                <v-col cols="6">解放Lv.</v-col>
                <v-col cols="3">{{
                  getCardStatus('releaseLevel', true)
                }}</v-col>
                <v-col cols="3" :class="makeClass('releaseLevel', true)">{{
                  makeWhichText('releaseLevel', true)
                }}</v-col>
                <v-col cols="6">解放Lv.ボーナス</v-col>
                <v-col cols="3">{{ makeReleaseBonus(true) }}%</v-col>
                <v-col cols="3" :class="makeClass('releaseBonus', true)"
                  >{{ makeWhichText('releaseBonus', true) }}%</v-col
                >
                <v-col cols="6">スマイル</v-col>
                <v-col cols="3">{{ getCardStatus('smile', true) }}</v-col>
                <v-col cols="3" :class="makeClass('smile', true)">{{
                  makeWhichText('smile', true)
                }}</v-col>
                <v-col cols="6">クール</v-col>
                <v-col cols="3">{{ getCardStatus('cool', true) }}</v-col>
                <v-col cols="3" :class="makeClass('cool', true)">{{
                  makeWhichText('cool', true)
                }}</v-col>
                <v-col cols="6">ピュア</v-col>
                <v-col cols="3">{{ getCardStatus('pure', true) }}</v-col>
                <v-col cols="3" :class="makeClass('pure', true)">{{
                  makeWhichText('pure', true)
                }}</v-col>
                <v-col cols="6">メンタル</v-col>
                <v-col cols="3">{{ culMental(true) }}</v-col>
                <v-col cols="3" :class="makeClass('mental', true)">{{
                  makeWhichText('mental', true)
                }}</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex align-center">
          <v-icon
            icon="mdi-arrow-right-bold"
            class="my-0 mx-auto pc"
            style="font-size: 50px"
          />
          <v-icon
            icon="mdi-arrow-down-bold"
            class="my-0 mx-auto sp"
            style="font-size: 50px"
          />
        </v-col>
        <v-col cols="12" sm="5">
          <v-card>
            <v-img :src="cardImageUrls[selectCardId]?.after || noImage" />
            <v-card-title class="pa-2">{{
              store.conversion(selectCard)
            }}</v-card-title>
            <v-card-text class="px-2 pb-2">
              <v-row no-gutters>
                <v-col cols="6">カードレベル</v-col>
                <v-col cols="6">{{ getCardStatus('cardLevel', false) }}</v-col>
                <v-col cols="6">解放Lv.</v-col>
                <v-col cols="3">{{
                  getCardStatus('releaseLevel', false)
                }}</v-col>
                <v-col cols="3" :class="makeClass('releaseLevel', false)">{{
                  makeWhichText('releaseLevel', false)
                }}</v-col>
                <v-col cols="6">解放Lv.ボーナス</v-col>
                <v-col cols="3">{{ makeReleaseBonus(false) }}%</v-col>
                <v-col cols="3" :class="makeClass('releaseBonus', false)"
                  >{{ makeWhichText('releaseBonus', false) }}%</v-col
                >
                <v-col cols="6">スマイル</v-col>
                <v-col cols="3">{{ getCardStatus('smile', false) }}</v-col>
                <v-col cols="3" :class="makeClass('smile', false)">{{
                  makeWhichText('smile', false)
                }}</v-col>
                <v-col cols="6">クール</v-col>
                <v-col cols="3">{{ getCardStatus('cool', false) }}</v-col>
                <v-col cols="3" :class="makeClass('cool', false)">{{
                  makeWhichText('cool', false)
                }}</v-col>
                <v-col cols="6">ピュア</v-col>
                <v-col cols="3">{{ getCardStatus('pure', false) }}</v-col>
                <v-col cols="3" :class="makeClass('pure', false)">{{
                  makeWhichText('pure', false)
                }}</v-col>
                <v-col cols="6">メンタル</v-col>
                <v-col cols="3">{{ culMental(false) }}</v-col>
                <v-col cols="3" :class="makeClass('mental', false)">{{
                  makeWhichText('mental', false)
                }}</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="mt-3 text-center">
        <v-btn text="CANCEL" class="mr-4" @click="dialog = false" />
        <v-btn
          text="OK"
          @click="
            dialog = false;
            store.setSelectCard(
              store.findCardId(store.openCard.name, selectCard),
            );
            store.switchDialog(false);
          "
        />
      </div>
    </v-sheet>
  </v-dialog>

  <div v-if="false">
    <label for="cardList">カード名</label>
    <select
      id="cardList"
      v-model="store.selectCard[store.openCard.name][store.openCard.style]"
      name="cardList"
    >
      <option label="" value="default"></option>
      <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
        <option
          v-for="(ary, cardName) in store.card[store.openCard.name][rare]"
          :key="ary"
          :label="cardName"
          :value="cardName"
        ></option>
      </optgroup>
    </select>
  </div>

  <v-snackbar v-model="snackbar.sameCard" color="warning" :timeout="2000">
    すでに編成済みです
  </v-snackbar>

  <v-snackbar
    v-model="snackbar.sachi"
    color="light-green-darken-4"
    :timeout="3000"
  >
    {{ sachiMessage }}
  </v-snackbar>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { ref, computed, watch } from 'vue';
import { RARE } from '@/constants/cards';
import { useStateStore } from '@/stores/stateStore';
import { FORMATION_MEMBER } from '@/constants/memberNames';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { STYLE_HEADLINE } from '@/constants/styleHeadline';
import noImage from '@/assets/images/cardIllust/NO IMAGE.webp';
import type { CardDataType } from '@/types/cardList';

const store = useStateStore();
const dialog: boolean = ref(false);
const selectCard = ref(undefined);
const selectCardId = ref('');
const rarity = ref(undefined);
const snackbar = ref({
  sameCard: false,
  sachi: false,
});
const sachiMessage = ref('私はMAIN STYLEには設定できないんだよねぃ');
const cardStatus = ref({
  before: {
    status: {},
    rare: 'default',
  },
  after: {
    status: {},
    rare: 'default',
  },
});

const cardImageUrls = computed(
  () => store.imageCache['llllMgr_cardImageUrls_v2'] || {},
);

watch(
  () => store.openCard.name,
  (newMemberName) => {
    if (!newMemberName) return;

    const cards: CardDataType[] = [];
    const memberCards = store.card[newMemberName];

    if (memberCards) {
      Object.values(memberCards).forEach((rarityGroup) => {
        Object.values(rarityGroup).forEach((card) => {
          if (card.cardName !== 'default') {
            cards.push(card);
          }
        });
      });
    }

    if (FORMATION_MEMBER[104].some((name) => name === newMemberName)) {
      if (store.card.kozutsuzumegu?.UR)
        cards.push(...Object.values(store.card.kozutsuzumegu.UR));
      if (store.card.selaIzu?.SR)
        cards.push(...Object.values(store.card.selaIzu.SR));
    }
    if (FORMATION_MEMBER[103].some((name) => name === newMemberName)) {
      if (store.card.sachi?.UR)
        cards.push(...Object.values(store.card.sachi.UR));
    }

    store.fetchImages(
      'llllMgr_cardImageUrls_v2',
      cards,
      (card) => card.ID,
      (card) => ({
        before: `cardIllust/${store.makeCardIllustName(card.ID, false)}.webp`,
        after: `cardIllust/${store.makeCardIllustName(card.ID, true)}.webp`,
      }),
    );
  },
  { immediate: true },
);

const searchSetCard = (cardId: string) => {
  let result = false;

  for (const name in store.selectDeck.cardData) {
    for (const style in store.selectDeck.cardData[name]) {
      if (store.searchSelectDeckCard(store.openCard.name, style) === cardId) {
        result = name;
        break;
      }
    }
  }

  return result;
};

const sameCardCheck = (cardName: string) => {
  for (const style in store.selectDeck.cardData[store.openCard.name]) {
    if (
      store.selectDeck.cardData[store.openCard.name][style].cardName ===
      cardName
    ) {
      return true;
    }
  }

  return false;
};

const getCardStatus = (attr: string, isBefore: boolean) => {
  if (/smile|cool|pure/.test(attr)) {
    return (
      cardStatus.value[isBefore ? 'before' : 'after'].status.uniqueStatus[
        attr
      ] +
      (cardStatus.value[isBefore ? 'before' : 'after'].status.fluctuationStatus
        .cardLevel -
        1) *
        (cardStatus.value[isBefore ? 'before' : 'after'].rare === 'R' ? 25 : 30)
    );
  } else {
    return cardStatus[isBefore ? 'before' : 'after'].status[
      /mental|BP/.test(attr) ? 'uniqueStatus' : 'fluctuationStatus'
    ][attr];
  }
};

const culMental = (isBefore: boolean) => {
  if (cardStatus[isBefore ? 'before' : 'after'].status.rare === 'R') {
    return (
      getCardStatus('mental', isBefore) +
      Math.ceil((getCardStatus('cardLevel', isBefore) - 1) / 2) * 2 +
      Math.floor((getCardStatus('cardLevel', isBefore) - 1) / 2) * 3
    );
  } else {
    return (
      getCardStatus('mental', isBefore) +
      getCardStatus('cardLevel', isBefore) * 3
    );
  }
};

const makeReleaseBonus = (isBefore: boolean) => {
  if (isBefore) {
    return (
      (1 +
        GRANDPRIX_BONUS.releaseLv[
          store.searchRarity(
            store.findCardId(
              store.openCard.name,
              store.searchSelectDeckCard(
                store.openCard.name,
                store.openCard.style,
              ),
            ),
          )
        ][getCardStatus('releaseLevel', true) - 1]) *
      100
    );
  } else {
    return (
      (1 +
        GRANDPRIX_BONUS.releaseLv[this.rarity][
          getCardStatus('releaseLevel', false) - 1
        ]) *
      100
    );
  }
};

const whichParam = (attr, isBefore: boolean) => {
  if (attr === 'releaseBonus') {
    return makeReleaseBonus(isBefore) - makeReleaseBonus(!isBefore);
  } else if (attr === 'mental') {
    return culMental(isBefore) - culMental(!isBefore);
  } else {
    return getCardStatus(attr, isBefore) - getCardStatus(attr, !isBefore);
  }
};

const makeWhichText = (attr, isBefore) => {
  const result = whichParam(attr, isBefore);
  return `${result < 0 ? '↓' : result > 0 ? '↑' : '→'}${
    result < 0 ? -result : result
  }`;
};

const makeClass = (attr, isBefore) => {
  const result = whichParam(attr, isBefore);
  return result < 0 ? 'down' : result > 0 ? 'up' : '';
};

/**
 * @description
 * 選択したカードが選択中のカードと同じかどうかをチェックし、\
 * 違っていた場合は選択中のカードを更新。\
 * 同じ場合は toast を表示。
 *
 * @param cardName 選択したカード名
 * @param rare 選択したカードのレアリティ
 * @param ary 選択したカードのデータ
 */
const openCheckDialog = (cardName: string, rare: string, ary) => {
  const p = (() => {
    selectCardId.value = ary.ID;
    if (store.isParamReflect) {
      return {
        cardLevel: ary.fluctuationStatus.cardLevel,
        SALevel: ary.fluctuationStatus.SALevel,
        SLevel: ary.fluctuationStatus.SLevel,
        releaseLevel: ary.fluctuationStatus.releaseLevel,
      };
    } else {
      return store.selectDeck.cardData[
        ary.memberName === store.openCard.style
          ? ary.memberName
          : store.openCard.name
      ][store.openCard.style].param;
    }
  })();

  if (sameCardCheck(cardName)) {
    snackbar.value.sameCard = true;
  } else if (
    store.findCardData(store.findCardId(store.openCard.name, cardName))
      .memberName ??
    '' === 'sachi'
  ) {
    if (store.openCard.style === 'main') {
      sachiMessage.value = '私はMAIN STYLEには設定できないんだよねぃ';
      snackbar.value.sachi = true;
      return;
    } else {
      for (const name in store.selectDeck.cardData) {
        for (const style in store.selectDeck.cardData[name]) {
          if (
            store.findCardData(store.selectDeck.cardData[name][style].id)
              .cardName === cardName
          ) {
            sachiMessage.value = 'すでに編成されてるんだよねぃ';
            snackbar.value.sachi = true;
            return;
          }
        }
      }
    }

    store.setSelectCard(store.findCardId(store.openCard.name, cardName), p);
    store.switchDialog(false);
  } else if (
    store.searchSelectDeckCard(store.openCard.name, store.openCard.style) ===
    'default'
  ) {
    /*for (const style in store.selectDeck.cardData[store.openCard.name]) {
        const data = { ...{}, ...store.selectDeck.cardData[store.openCard.name][style] };
        console.log(data);
        store.selectDeck.cardData[store.openCard.name][style].cardName === cardName;
      }*/
    store.setSelectCard(store.findCardId(store.openCard.name, cardName), p);
    store.switchDialog(false);
  } else {
    store.setSelectCard(store.findCardId(store.openCard.name, cardName), p);
    store.switchDialog(false);
    console.log(rare);
    // this.selectCard = cardName;
    // this.rarity = rare;
    // this.dialog = true;
    // this.cardStatus = {
    //   before: {
    //     status: store.cardParam('all', {memberName: store.openCard.name, rare: store.searchRarity(store.openCard.name, store.searchSelectDeckCard(store.openCard.name, store.openCard.style)), cardName: store.conversion(store.searchSelectDeckCard(store.openCard.name, store.openCard.style))}),
    //     rare: store.searchRarity(store.openCard.name, store.searchSelectDeckCard(store.openCard.name, store.openCard.style))
    //   },
    //   after: {
    //     status: store.cardParam('all', {memberName: store.openCard.name, rare: rare, cardName: store.conversion(cardName)})},
    //     rare: rare
    // };
  }
};
</script>

<script lang="ts">
export default {
  name: 'SelectCard',
  data() {
    return;
  },
  computed: {
    outputCardList() {
      return (store) => {
        let result = [];

        for (const key in store.card[store.openCard.name]) {
          if (key !== 'default') {
            result = result.concat(
              [],
              Object.values(store.card[store.openCard.name][key]),
            );
          }
        }

        if (
          FORMATION_MEMBER[104].some((name) => name === store.openCard.name)
        ) {
          result = result.concat(
            [],
            Object.values(store.card.kozutsuzumegu.UR),
            Object.values(store.card.selaIzu.SR),
          );
        }

        if (
          FORMATION_MEMBER[103].some((name) => name === store.openCard.name)
        ) {
          result = result.concat([], Object.values(store.card.sachi.UR));
        }

        if (store.isPossessionFlg) {
          result = result.filter(
            (data) => data.fluctuationStatus.cardLevel > 1,
          );
        }

        return store.openCard.style === 'main'
          ? result.filter((cardData) => cardData?.specialAppeal)
          : result;
      };
    },
  },
  created() {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.up {
  color: green;
}

.down {
  color: red;
}
</style>
