<template>
  <v-container fluid class="pa-2">
    <h1 class="mb-3">CARD LIST ～ カード一覧 / 所持カード設定 ～</h1>
    <v-expansion-panels class="mb-3">
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          リンクラに実装されているカード一覧です。<br>
          各カードを選択すると、カードの詳細が見られます。<br>
          さらに、詳細画面では各カードにパラメータを設定できます。<br>
          ※アプリ本編ではカードレベル0は存在しませんが、本サイトではカードレベル0を未所持状態、レベル1以上を所持状態と定義しています。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn
      elevation="3"
      class="mb-1 mr-2"
      @click="store.showModalEvent('CardListFilter')"
      color="pink"
    ><v-icon class="mr-2">mdi-filter</v-icon>絞り込み</v-btn>
    絞り込み結果：{{ store.outputCardList.length }}枚

    <v-divider class="my-3"></v-divider>

    <div id="cardListArea">
      <div v-if="store.outputCardList.length === 0">
        見つからなかったよ😢<br>
        絞り込み条件を変えてね
      </div>
      <div v-else
        v-for="key in store.outputCardList"
        :key="key"
        :class="`ma-1 card ${key.mood}`"
        @click="store.showModalEvent('setCardData'); store.cardSelect(key.memberName, key.rare, key.cardName)"
      >
        <v-tooltip
          location="bottom"
          open-delay="250"
        >
          <template v-slot:activator="{ props }">
            <div v-bind="props">
              <v-img
                :lazy-src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.charactorName[key.memberName].last}_覚醒後.webp`)"
                :src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.charactorName[key.memberName].last}_覚醒後.webp`)"
              ></v-img>
              <div class="d-flex flex-row align-center pa-1 cardName">
                <img
                  :src="require(`@/assets/styleType_icon/icon_${key.styleType}.png`)"
                  class="icon type mr-1"
                  style="width: 20px;"
                >
                <span class="hamidashi" style="padding-top: 2px;">{{ key.cardName }}</span>
              </div>
            </div>
          </template>

          <div>
            <p class="mb-2">{{ key.rare }}{{ ['', '+', '++'][store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.trainingLevel] }} [{{ key.cardName }}] {{ store.makeFullName(key.memberName) }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.cardLevel }})</p>
            <v-container fluid class="mb-2 pa-0">
              <v-row no-gutters>
                <v-col cols="6" class="pa-0">
                  <v-row no-gutters>
                    <v-col class="pa-0">スマイル</v-col>
                    <v-col class="pa-0">{{ store.cardParam('smile', {memberName: key.memberName, rare: key.rare, cardName: key.cardName}) }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="pa-0">ピュア</v-col>
                    <v-col class="pa-0">{{ store.cardParam('pure', {memberName: key.memberName, rare: key.rare, cardName: key.cardName}) }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="pa-0">クール</v-col>
                    <v-col class="pa-0">{{ store.cardParam('cool', {memberName: key.memberName, rare: key.rare, cardName: key.cardName}) }}</v-col>
                  </v-row>
                </v-col>
                <v-col cols="6" class="pa-0">
                  <v-row no-gutters>
                    <v-col class="pa-0">メンタル</v-col>
                    <v-col class="pa-0">{{ store.mentalCul({memberName: key.memberName, rare: key.rare, cardName: key.cardName}) }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="pa-0">BP</v-col>
                    <v-col class="pa-0">{{ store.card[key.memberName][key.rare][key.cardName].uniqueStatus.BP }}</v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <p><span class="mr-3">スペシャルアピール</span>{{ store.card[key.memberName][key.rare][key.cardName].specialAppeal.name }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SALevel }})</p>
            <p><span class="mr-3">スキル</span>{{ store.card[key.memberName][key.rare][key.cardName].skill.name }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SLevel }})</p>
                <p v-if="key.rare !== 'R'"><span class="mr-3">特性</span>{{ store.card[key.memberName][key.rare][key.cardName].characteristic.name }}</p>
          </div>
        </v-tooltip>
      </div>
    </div>

    <ul id="possessionCard_header" v-if="false">
      <li v-for="(name_ja, name_en) in store.charactorName" :key="name_ja" :data-charactor="name_en" :data-selected="selectTab === name_en" @click="changeTab(name_en)">
        {{ name_ja.last }}
      </li>
    </ul>
    <ul id="possessionCard_container" v-if="false">
      <li v-for="(name_ja, name_en) in store.charactorName" :key="name_en" :data-charactor="name_en" v-show="selectTab === name_en">
        <dl v-for="rare in store.rarity" :key="rare" :data-rare="rare">
          <dt>
            {{ rare }}
          </dt>
          <dd>
            <button v-for="(ary, cardName) in store.card[name_en][rare]" :key="ary" :data-mood="ary.mood" @click="store.showModalEvent('setCardData'); store.cardSelect(name_en, rare, cardName)">{{ cardName }}</button>
          </dd>
        </dl>
      </li>
    </ul>
  </v-container>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'CardList',
  props: [],
  data() {
    return {
      selectTab: 'kaho',
      range: [0, 120]
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    changeTab(selectCharactor) {
      this.selectTab = selectCharactor;
    }
  }
}
</script>

<style lang="scss" scoped>
/* ムードカラー */
$happy: #EF8DC8;
$neutral: #A9FCC7;
$melow: #A1BAFA;

.happy {
  background: $happy;
}

.neutral {
  background: $neutral;
}

.melow {
  background: $melow;
}

#cardListArea {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  //justify-content: space-between;

  .card {
    box-shadow: 0px 0px 5px rgba(0,0,0,0.5);
    border-radius: 5px;
    cursor: pointer;
  }

  .cardName {
    width: 190px;
    font-weight: bold;
    font-size: 15px;
  }

  img {
    width: 190px;
    border-radius: 5px 5px 0 0;
  }
}

#possessionCard_container {
  border: 1px solid #000;
  border-top: none;

  li {
    padding: 10px 10px  0 10px;

    label {
      margin-right: 10px;

      input {
        margin-right: 5px;
      }
    }
  }

  dl {
    border-bottom: 1px dashed #000;
    margin-bottom: 15px;

    &:last-child {
      border-bottom: 0;
      margin-bottom: 0;
    }
  }

  dt {
    margin-bottom: 5px;
  }
  
  button {
    padding: 5px 10px;
    border: 2px solid #000;
    border-radius: 50px;
    margin: 0 10px 10px 0;
    
    &[data-mood="happy"] {
      border-color: $happy;
    }
    
    &[data-mood="neutral"] {
      border-color: $neutral;
    }
    
    &[data-mood="melow"] {
      border-color: $melow;
    }
  }
}

@media screen and (max-width: 600px) {
  #cardListArea {
    .card {
      width: calc(50% - 8px);
    }
    .cardName {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
}

.icon {
  display: inline-block;

  &.mood {
    width: 20px;
  }

  &.type {
    width: 18px;
  }

  &.member {
    width: 35px;
  }
}
</style>