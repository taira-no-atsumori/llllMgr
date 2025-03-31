<template>
  <v-container fluid class="pa-0">
    <div class="d-inline-block">
      <v-switch
        v-model="store.isParamReflect"
        label="CARD LISTのパラメータを反映する"
        color="pink"
        density="compact"
        hide-details
      ></v-switch>
    </div>
    <div class="d-inline-block ml-sm-3">
      <v-switch
        v-model="store.isPossessionFlg"
        label="所持済みのカードのみ表示"
        color="pink"
        density="compact"
        hide-details
      ></v-switch>
    </div>
    <v-row
      no-gutters
      v-for="rare in store.rare"
      :key="rare"
      :class="rare !== 'R' ? 'mb-3' : ''"
    >
      <!--<template>-->
        <v-col cols="12">
          <h3
            v-if="outputCardList(store).filter(data => data.rare === rare).length > 0"
            class="px-1"
          >
            {{ rare }}
          </h3>
        </v-col>
        <v-col
          v-for="(cardData, i) in outputCardList(store).filter(data => data.rare === rare)"
          :key="i"
          cols="6"
          sm="2"
          class="pa-1"
        >
          <v-card
            v-if="!!searchSetCard(store, cardData.ID)"
            :disabled="
              !!searchSetCard(store, cardData.ID)
            "
            @click="openCheckDialog(store, cardData.cardName, rare, cardData);"
          >
            <v-img
              :src="require(
                `@/assets/card_illust/${store.conversion(cardData.cardName)}_${
                  makeCardMemberName(store, cardData.ID)
                }_覚醒後.webp`
              )"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)"
              class="d-flex align-center"
            >
              <p class="text-center text-white font-weight-bold text-h6">
                {{ store.styleHeadline[searchSetCard(store, cardData.ID)] }}<br>
                選択中
              </p>
            </v-img>
            <v-card-title class="px-2 py-1">{{ cardData.cardName }}</v-card-title>
          </v-card>
          <v-card
            v-else
            @click="openCheckDialog(store, cardData.cardName, rare, cardData);"
          >
            <v-img
              :src="require(
                `@/assets/card_illust/${store.conversion(cardData.cardName)}_${
                  makeCardMemberName(store, cardData.ID)
                }_覚醒後.webp`
              )"
            ></v-img>
            <v-card-title class="px-2 py-1">{{ cardData.cardName }}</v-card-title>
          </v-card>
          <!--<v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-card
                v-if="searchSetCard(store, cardName)"
                v-bind="props"
                @click="openCheckDialog(store, cardName, rare)"
              >
                <v-img
                  :src="require(`@/assets/card_illust/${store.conversion(cardName)}_${store.memberName[store.openCard.name].last}_覚醒後.webp`)"
                  gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.3)"
                  class="d-flex align-center"
                ><p class="text-center text-white font-weight-bold text-h6">{{ store.styleHeadline[searchSetCard(store, cardName)] }}<br>選択中</p></v-img>
                <v-card-title class="px-2 py-1">{{ cardName }}</v-card-title>
              </v-card>
              <v-card
                v-else
                v-bind="props"
                @click="openCheckDialog(store, cardName, rare)"
              >
                <v-img
                  :src="require(`@/assets/card_illust/${store.conversion(cardName)}_${store.memberName[store.openCard.name].last}_覚醒後.webp`)"
                ></v-img>
                <v-card-title class="px-2 py-1">{{ cardName }}</v-card-title>
              </v-card>
            </template>
            <p class="mb-1">{{ rare }}{{ ['', '+', '++'][store.cardParam('trainingLevel', {memberName: store.openCard.name, rare: rare, cardName: cardName})] }} [{{ cardName }}] {{ store.makeFullName(store.openCard.name) }} (Lv. {{ store.cardParam('cardLevel', {memberName: store.openCard.name, rare: rare, cardName: cardName}) }})</p>
            <v-row no-gutters class="mb-1">
              <v-col cols="5">
                <v-row no-gutters>
                  <v-col cols="6">スマイル</v-col>
                  <v-col cols="6">{{ store.card[store.openCard.name][rare][cardName].uniqueStatus.smile }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                  <v-col cols="6">クール</v-col>
                  <v-col cols="6">{{ store.card[store.openCard.name][rare][cardName].uniqueStatus.cool }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                  <v-col cols="6">ピュア</v-col>
                  <v-col cols="6">{{ store.card[store.openCard.name][rare][cardName].uniqueStatus.pure }}</v-col>
                </v-row>
              </v-col>
              <v-col cols="7">
                <v-row no-gutters>
                  <v-col cols="8">メンタル</v-col>
                  <v-col cols="4">{{ store.card[store.openCard.name][rare][cardName].uniqueStatus.mental }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                  <v-col cols="8">BP</v-col>
                  <v-col cols="4">{{ store.card[store.openCard.name][rare][cardName].uniqueStatus.BP }}</v-col>
                </v-row>
                <v-row no-gutters>
                  <v-col cols="8">解放Lv.</v-col>
                  <v-col cols="4">{{ store.card[store.openCard.name][rare][cardName].fluctuationStatus.trainingLevel }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                  <v-col cols="8">解放ボーナス</v-col>
                  <v-col cols="4">{{ rare === 'DR' ? '-' : store.grandprixBonus.releaseLv[rare][store.card[store.openCard.name][rare][cardName].fluctuationStatus.trainingLevel] }}</v-col>
                </v-row>
              </v-col>
            </v-row>
            <p><span class="mr-3">スペシャルアピール</span>{{ store.card[store.openCard.name][rare][cardName].specialAppeal.name }}</p>
            <p><span class="mr-3">スキル</span>{{ store.card[store.openCard.name][rare][cardName].skill.name }}</p>
            <p v-if="rare !== 'R'"><span class="mr-3">特性</span>{{ store.card[store.openCard.name][rare][cardName].characteristic.name }}</p>
          </v-tooltip>-->
        </v-col>
      <!--</template>-->
    </v-row>
  </v-container>

  <v-dialog
    v-model="dialog"
    max-width="600"
  >
    <v-sheet
      class="pa-2"
    >
      <div class="text-center mb-2">
        カードを入れ替えますか？
      </div>
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
              :src="require(`@/assets/card_illust/${store.conversion(store.searchSelectDeckCard(store.openCard.name, store.openCard.style))}_${store.memberName[store.openCard.name].last}_覚醒後.webp`)"
            ></v-img>
            <v-card-title class="pa-2">{{ store.conversion(store.searchSelectDeckCard(store.openCard.name, store.openCard.style)) }}</v-card-title>
            <v-card-text class="px-2 pb-2">
              <v-row no-gutters>
                <v-col cols="6">カードレベル</v-col>
                <v-col cols="6">{{ getCardStatus('cardLevel', true) }}</v-col>
                <v-col cols="6">解放Lv.</v-col>
                <v-col cols="3">{{ getCardStatus('releaseLevel', true) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'releaseLevel', true)">{{ makeWhichText(store, 'releaseLevel', true) }}</v-col>
                <v-col cols="6">解放Lv.ボーナス</v-col>
                <v-col cols="3">{{ makeReleaseBonus(store, true) }}%</v-col>
                <v-col cols="3" :class="makeClass(store, 'releaseBonus', true)">{{ makeWhichText(store, 'releaseBonus', true) }}%</v-col>
                <v-col cols="6">スマイル</v-col>
                <v-col cols="3">{{ getCardStatus('smile', true) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'smile', true)">{{ makeWhichText(store, 'smile', true) }}</v-col>
                <v-col cols="6">クール</v-col>
                <v-col cols="3">{{ getCardStatus('cool', true) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'cool', true)">{{ makeWhichText(store, 'cool', true) }}</v-col>
                <v-col cols="6">ピュア</v-col>
                <v-col cols="3">{{ getCardStatus('pure', true) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'pure', true)">{{ makeWhichText(store, 'pure', true) }}</v-col>
                <v-col cols="6">メンタル</v-col>
                <v-col cols="3">{{ culMental(true) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'mental', true)">{{ makeWhichText(store, 'mental', true) }}</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" sm="2" class="d-flex align-center">
          <v-icon class="my-0 mx-auto pc" style="font-size: 50px;">mdi-arrow-right-bold</v-icon>
          <v-icon class="my-0 mx-auto sp" style="font-size: 50px;">mdi-arrow-down-bold</v-icon>
        </v-col>
        <v-col cols="12" sm="5">
          <v-card>
            <v-img
              :src="require(`@/assets/card_illust/${store.conversion(selectCard)}_${store.memberName[store.openCard.name].last}_覚醒後.webp`)"
            ></v-img>
            <v-card-title class="pa-2">{{ store.conversion(selectCard) }}</v-card-title>
            <v-card-text class="px-2 pb-2">
              <v-row no-gutters>
                <v-col cols="6">カードレベル</v-col>
                <v-col cols="6">{{ getCardStatus('cardLevel', false) }}</v-col>
                <v-col cols="6">解放Lv.</v-col>
                <v-col cols="3">{{ getCardStatus('releaseLevel', false) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'releaseLevel', false)">{{ makeWhichText(store, 'releaseLevel', false) }}</v-col>
                <v-col cols="6">解放Lv.ボーナス</v-col>
                <v-col cols="3">{{ makeReleaseBonus(store, false) }}%</v-col>
                <v-col cols="3" :class="makeClass(store, 'releaseBonus', false)">{{ makeWhichText(store, 'releaseBonus', false) }}%</v-col>
                <v-col cols="6">スマイル</v-col>
                <v-col cols="3">{{ getCardStatus('smile', false) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'smile', false)">{{ makeWhichText(store, 'smile', false) }}</v-col>
                <v-col cols="6">クール</v-col>
                <v-col cols="3">{{ getCardStatus('cool', false) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'cool', false)">{{ makeWhichText(store, 'cool', false) }}</v-col>
                <v-col cols="6">ピュア</v-col>
                <v-col cols="3">{{ getCardStatus('pure', false) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'pure', false)">{{ makeWhichText(store, 'pure', false) }}</v-col>
                <v-col cols="6">メンタル</v-col>
                <v-col cols="3">{{ culMental(false) }}</v-col>
                <v-col cols="3" :class="makeClass(store, 'mental', false)">{{ makeWhichText(store, 'mental', false) }}</v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="mt-3 text-center">
        <v-btn
          @click="dialog = false"
          class="mr-4"
        >
          CANCEL
        </v-btn>
        <v-btn
          @click="
            dialog = false;
            store.setSelectCard(
              store.findCardId(store.openCard.name, selectCard)
            );
            store.switchDialog(false);
          "
        >
          OK
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>

  <div v-if="false">
  <label for="cardList">カード名</label>
  <select v-model="store.selectCard[store.openCard.name][store.openCard.style]" name="cardList" id="cardList">
    <option label="" value="default"></option>
    <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
      <option v-for="(ary, cardName) in store.card[store.openCard.name][rare]" :key="ary" :label="cardName" :value="cardName"></option>
    </optgroup>
  </select>
  </div>

  <v-snackbar
    v-model="snackbar.sameCard"
    color="warning"
    :timeout="2000"
  >
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

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
  export default {
    name: 'selectCard',
    data() {
      return {
        dialog: false,
        selectCard: undefined,
        selectedCard: undefined,
        rarity: undefined,
        snackbar: {
          sameCard: false,
          sachi: false,
        },
        sachiMessage: '私はMAIN STYLEには設定できないんだよねぃ',
        cardStatus: {
          before: {
            status: {},
            rare: 'default'
          },
          after: {
            status: {},
            rare: 'default'
          }
        }
      }
    },
    created() {},
    mounted() {},
    computed: {
      outputCardList() {
        return (store) => {
          let result = [];

          for (const key in store.card[store.openCard.name]) {
            if (key !== 'default') {
              result = result.concat([], Object.values(store.card[store.openCard.name][key]));
            }
          }

          if (store.formationMember[104].some(name => name === store.openCard.name)) {
            result = result.concat([], Object.values(store.card.kozutsuzumegu.UR), Object.values(store.card.selaIzu.SR));
          }

          if (store.formationMember[103].some(name => name === store.openCard.name)) {
            result = result.concat([], Object.values(store.card.sachi.UR));
          }

          if (store.isPossessionFlg) {
            result = result.filter((data) => data.fluctuationStatus.cardLevel > 1);
          }

          if (store.openCard.style !== 'main') {
            return result;
          } else {
            return result.filter((cardData) => cardData?.specialAppeal);
          }
        }
      },
    },
    methods: {
      makeCardMemberName(store, cardId) {
        const cardMemberName = store.findOpenCardMemberName(cardId);
        
        return cardMemberName === 'selaIzu' ? '桂城泉＆セラス 柳田 リリエンフェルト' : cardMemberName === 'kozutsuzumegu' ? '乙宗梢＆夕霧綴理＆藤島慈' : store.memberName[cardMemberName].last;
      },
      searchSetCard(store, cardId) {
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
      },
      openMemberName(store) {
        return store.openCard.name;
      },
      /**
       * @description
       * 選択したカードが選択中のカードと同じかどうかをチェックし、
       * 違っていた場合は選択中のカードを更新、
       * 同じ場合は toast を表示
       * @param {Object} store - vuex store
       * @param {string} cardName - 選択したカード名
       * @param {string} rare - 選択したカードのレアリティ
       */
      openCheckDialog(store, cardName, rare, ary) {
        const p = (() => {
          if (store.isParamReflect) {
            return {
              cardLevel: ary.fluctuationStatus.cardLevel,
              SALevel: ary.fluctuationStatus.SALevel,
              SLevel: ary.fluctuationStatus.SLevel,
              releaseLevel: ary.fluctuationStatus.releaseLevel,
            };
          } else {
            return store.selectDeck.cardData[
              ary.memberName === store.openCard.style ? ary.memberName : store.openCard.name
            ][store.openCard.style].param;
          }
        })();

        if (
          this.sameCardCheck(store, cardName)
        ) {
          this.snackbar.sameCard = true;
        } else if (
          store.findOpenCardMemberName(store.findCardId(store.openCard.name, cardName)) === 'sachi'
        ) {
          if (store.openCard.style === 'main') {
            this.sachiMessage = '私はMAIN STYLEには設定できないんだよねぃ';
            this.snackbar.sachi = true;
            return;
          } else {
            for (const name in store.selectDeck.cardData) {
              for (const style in store.selectDeck.cardData[name]) {
                if (store.findCardData(store.selectDeck.cardData[name][style].id).cardName === cardName) {
                  this.sachiMessage = 'すでに編成されてるんだよねぃ';
                  this.snackbar.sachi = true;
                  return;
                }
              }
            }
          }

          store.setSelectCard(store.findCardId(store.openCard.name, cardName), p);
          store.switchDialog(false);
        } else if (
          store.searchSelectDeckCard(store.openCard.name, store.openCard.style) === 'default'
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
          rare;
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
      },
      sameCardCheck(store, cardName) {
        for (const style in store.selectDeck.cardData[store.openCard.name]) {
          if (store.selectDeck.cardData[store.openCard.name][style].cardName === cardName) {
            return true;
          }
        }

        return false;
      },
      getCardStatus(attr, isBefore) {
        if (/smile|cool|pure/.test(attr)) {
          return this.cardStatus[isBefore ? 'before' : 'after'].status.uniqueStatus[attr] + (this.cardStatus[isBefore ? 'before' : 'after'].status.fluctuationStatus.cardLevel - 1) * (this.cardStatus[isBefore ? 'before' : 'after'].rare === 'R' ? 25 : 30);
        } else {
          return this.cardStatus[isBefore ? 'before' : 'after'].status[/mental|BP/.test(attr) ? 'uniqueStatus' : 'fluctuationStatus'][attr];
        }
      },
      culMental(isBefore) {
        if (this.cardStatus[isBefore ? 'before' : 'after'].status.rare !== 'R') {
          return this.getCardStatus('mental', isBefore) + this.getCardStatus('cardLevel', isBefore) * 3;
        } else {
          return this.getCardStatus('mental', isBefore) + Math.ceil((this.getCardStatus('cardLevel', isBefore) - 1) / 2) * 2  + Math.floor((this.getCardStatus('cardLevel', isBefore) - 1) / 2) * 3;
        }
      },
      makeReleaseBonus(store, isBefore) {
        if (isBefore) {
          return (
            1 + store.grandprixBonus.releaseLv[
              store.searchRarity(
                store.findCardId(
                  store.openCard.name,
                  store.searchSelectDeckCard(store.openCard.name, store.openCard.style)
                )
              )
            ][this.getCardStatus('releaseLevel', true) - 1]
          ) * 100;
        } else {
          return (
            1 + store.grandprixBonus.releaseLv[
              this.rarity
            ][this.getCardStatus('releaseLevel', false) - 1]
          ) * 100;
        }
      },
      whichParam(store, attr, isBefore) {
        if (attr === 'releaseBonus') {
          return this.makeReleaseBonus(store, isBefore) - this.makeReleaseBonus(store, !isBefore);
        } else if (attr === 'mental') {
          return this.culMental(isBefore) - this.culMental(!isBefore);
        } else  {
          return this.getCardStatus(attr, isBefore) - this.getCardStatus(attr, !isBefore);
        }
      },
      makeWhichText(store, attr, isBefore) {
        const result = this.whichParam(store, attr, isBefore);
        return `${result < 0 ? '↓' : result > 0 ? '↑' : '→'}${result < 0 ? -(result) : result}`;
      },
      makeClass(store, attr, isBefore) {
        const result = this.whichParam(store, attr, isBefore);
        return result < 0 ? 'down' : result > 0 ? 'up' : '';
      }
    },
    watch: {},
  }
</script>

<style lang="scss" scoped>
  .up {
    color: green;
  }

  .down {
    color: red;
  }
</style>