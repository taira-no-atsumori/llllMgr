<template>
<v-container fluid class="pa-2">
<h1 class="mb-1">CARD LIST ～ カード一覧 / 所持カード設定 ～</h1>

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
  class="mb-1 mr-2 px-3"
  @click="store.showModalEvent('CardListFilter')"
  color="pink"
><v-icon class="mr-2">mdi-filter</v-icon>絞り込み</v-btn>

<v-btn
  elevation="3"
  class="mb-1 mr-2 px-3"
  @click="store.showModalEvent('CardListSort')"
  color="blue"
><v-icon class="mr-2">mdi-sort</v-icon>ソート</v-btn>

<v-btn-toggle
  v-model="store.sortSettings.cardList.order"
  density="compact"
  variant="outlined"
  color="pink"
  class="mb-1 mr-2"
  mandatory
>
  <v-btn v-model="store.sortSettings.cardList.order" value="descending" class="px-0 px-sm-2">
    <v-icon>mdi-sort-descending</v-icon>
    <span class="ml-2 hidden-sm-and-down">降順</span>
  </v-btn>
  <v-btn v-model="store.sortSettings.cardList.order" value="ascending" class="px-0 px-sm-2">
    <v-icon>mdi-sort-ascending</v-icon>
    <span class="ml-2 hidden-sm-and-down">昇順</span>
  </v-btn>
</v-btn-toggle>

<div class="d-inline-block mr-1">
  絞り込み結果：{{ store.outputCardList.length }}枚 / 
</div>

<div class="d-inline-block">
  現在のソート：{{ store.sortTypeList[store.sortSettings.cardList.sortType] }}
</div>

<v-divider class="my-2"></v-divider>

<v-tabs v-model="selectTab" slider-color="pink" density="compact" v-if="false">
  <v-tab value="single">単一選択</v-tab>
  <v-tab value="multi">一括選択</v-tab>
</v-tabs>

<v-window v-model="selectTab" :touch="false">
  <v-window-item value="single">
  <ul id="cardListArea" class="mt-2">
    <li v-if="store.outputCardList.length === 0">
      見つからなかったよ😢<br>
      絞り込み条件を変えてね
    </li>
    <li
      v-else
      v-for="key in store.outputCardList"
      :key="key"
      class="ma-1 card"
    >
      <v-card
        v-if="store.siteSettings.cardList.hover === 'false' || windowSize.w <= 600"
        :color="moodColor[key.mood]"
        @click="store.showModalEvent('setCardData'); store.cardSelect(key.memberName, key.rare, key.cardName)"
      >
        <v-img
          :lazy-src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.memberName[key.memberName].last}_覚醒後.webp`)"
          :src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.memberName[key.memberName].last}_覚醒後.webp`)"
        ></v-img>
        <v-card-title class="d-flex align-center text-subtitle-2 px-2 pt-1 hamidashi" style="padding-bottom: 2px;">
          <img
            :src="require(`@/assets/styleType_icon/icon_${key.styleType}.png`)"
            class="icon type mr-1"
          ><span style="padding-top: 2px;" class="hamidashi">{{ key.cardName }}</span>
        </v-card-title>

        <v-card-text class="pa-0 cardName" v-if="store.siteSettings.cardList.isShowDetail !== 'false'">
          <v-divider opacity="100"></v-divider>

          <v-row no-gutters class="pa-1">
            <v-col cols="6" class="status">
              <span>特訓 </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.trainingLevel }}
            </v-col>
            <v-col cols="6" class="status">
              <span>Level </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.cardLevel }}
            </v-col>
            <v-col cols="6" class="status">
              <span>SA Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].specialAppeal !== undefined ? store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SALevel : '-' }}
            </v-col>
            <v-col cols="6" class="status">
              <span>S Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].skill !== undefined ? store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SLevel : '-' }}
            </v-col>
            <v-col cols="6" class="status">
              <span>解放Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.releaseLevel }}
            </v-col>
            <v-col cols="6" class="status">
              <span>GP Pt. </span>{{ /^DR$/.test(store.card[key.memberName][key.rare][key.cardName].rare) || store.card[key.memberName][key.rare][key.cardName].specialAppeal === undefined ? '-' : `+${store.grandprixBonus.releaseLv[store.card[key.memberName][key.rare][key.cardName].rare][store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.releaseLevel - 1] * 100}%` }}
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>

      <template v-else>
        <v-tooltip
          location="bottom"
          open-delay="250"
        >
          <template v-slot:activator="{ props }">
            <v-card
              v-bind="props"
              :color="moodColor[key.mood]"
              @click="store.showModalEvent('setCardData'); store.cardSelect(key.memberName, key.rare, key.cardName)"
            >
              <v-img
                :lazy-src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.memberName[key.memberName].last}_覚醒後.webp`)"
                :src="require(`@/assets/card_illust/${store.conversion(key.cardName)}_${store.memberName[key.memberName].last}_覚醒後.webp`)"
              ></v-img>
              <v-card-title class="d-flex align-center text-subtitle-2 px-2 pt-1" style="padding-bottom: 2px;">
                <img
                  :src="require(`@/assets/styleType_icon/icon_${key.styleType}.png`)"
                  class="icon type mr-1"
                ><span style="padding-top: 2px;" class="hamidashi">{{ key.cardName }}</span>
              </v-card-title>
              <v-card-text class="pa-0 cardName" v-if="store.siteSettings.cardList.isShowDetail !== 'false'">
                <v-divider opacity="50"></v-divider>

                <v-row no-gutters class="pa-1">
                  <v-col cols="6" class="status"><span>特訓 </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.trainingLevel }}</v-col>
                  <v-col cols="6" class="status"><span>カードLv. </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.cardLevel }}</v-col>
                  <v-col cols="6" class="status"><span>SA Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].specialAppeal !== undefined ? store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SALevel : '-' }}</v-col>
                  <v-col cols="6" class="status"><span>S Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].skill !== undefined ? store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SLevel : '-' }}</v-col>
                  <v-col cols="6" class="status"><span>解放Lv. </span>{{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.releaseLevel }}</v-col>
                  <v-col cols="6" class="status"><span>GP Pt. </span>{{ /^DR$/.test(store.card[key.memberName][key.rare][key.cardName].rare) || store.card[key.memberName][key.rare][key.cardName].specialAppeal === undefined ? '-' : `+${store.grandprixBonus.releaseLv[store.card[key.memberName][key.rare][key.cardName].rare][store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.releaseLevel - 1] * 100}%` }}</v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </template>

          <div>
            <p class="mb-2">
              {{ key.rare }}{{ ['', '+', '++'][store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.trainingLevel < 3 ? store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.trainingLevel : 2] }} [{{ key.cardName }}] {{ store.makeFullName(key.memberName) }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.cardLevel }})
            </p>
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
                    <v-col class="pa-0">{{ store.cardParam('mental', {memberName: key.memberName, rare: key.rare, cardName: key.cardName}) }}</v-col>
                  </v-row>
                  <v-row no-gutters>
                    <v-col class="pa-0">BP</v-col>
                    <v-col class="pa-0">{{ store.card[key.memberName][key.rare][key.cardName].uniqueStatus.BP }}</v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <p v-if="store.card[key.memberName][key.rare][key.cardName].specialAppeal !== undefined"><span class="mr-3">スペシャルアピール</span>{{ store.card[key.memberName][key.rare][key.cardName].specialAppeal.name }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SALevel }})</p>
            <p v-if="store.card[key.memberName][key.rare][key.cardName].skill !== undefined"><span class="mr-3">スキル</span>{{ store.card[key.memberName][key.rare][key.cardName].skill.name }} (Lv. {{ store.card[key.memberName][key.rare][key.cardName].fluctuationStatus.SLevel }})</p>
            <p v-if="store.card[key.memberName][key.rare][key.cardName].characteristic !== undefined"><span class="mr-3">特性</span>{{ store.card[key.memberName][key.rare][key.cardName].characteristic.name }}</p>
          </div>
        </v-tooltip>
      </template>
    </li>
  </ul>
  </v-window-item>
  <v-window-item value="multi">
    <v-btn class="my-2"></v-btn>
    <v-data-table
      density="compact"
      :headers="tableHeaders"
      :items="makeCardList(store)"
      show-select
    ></v-data-table>
  </v-window-item>
</v-window>

<ul id="possessionCard_header" v-if="false">
  <li v-for="(name_ja, name_en) in store.memberName" :key="name_ja" :data-character="name_en" :data-selected="selectTab2 === name_en" @click="changeTab(name_en)">
    {{ name_ja.last }}
  </li>
</ul>
<ul id="possessionCard_container" v-if="false">
  <li v-for="(name_ja, name_en) in store.memberName" :key="name_en" :data-character="name_en" v-show="selectTab2 === name_en">
    <dl v-for="rare in store.rare" :key="rare" :data-rare="rare">
      <dt>
        {{ rare }}
      </dt>
      <dd>
        <v-btn
          v-for="(ary, cardName) in store.card[name_en][rare]"
          :key="ary"
          :data-mood="ary.mood"
          class="abc"
          @click="store.showModalEvent('setCardData'); store.cardSelect(name_en, rare, cardName);"
        >{{ cardName }}</v-btn>
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
  data() {
    return {
      selectTab: 'single',
      selectTab2: 'kaho',
      tableHeaders: [
        {title: 'レア度', key: 'rare'},
        {title: 'カード名', key: 'cardName'},
        {title: '名前', key: 'memberName'},
        {title: 'カードLv.', key: 'cardLevel'},
        {title: 'SALv.', key: 'SALevel'},
        {title: 'スキルLv.', key: 'SLevel'},
      ],
      moodColor: {
        happy: '#EF8DC8',
        neutral: '#A9FCC7',
        melow: '#A1BAFA'
      },
      windowSize: {
        w: 0,
        h: 0,
      }
    }
  },
  created() {},
  mounted() {
    this.onResize();
  },
  computed: {},
  methods: {
    changeTab(selectCharacter) {
      this.selectTab2 = selectCharacter;
    },
    makeCardList(store) {
      const list = [];

      for (const key of store.outputCardList) {
        list.push({
          cardName: key.cardName,
          memberName: store.makeFullName(key.memberName),
          rare: key.rare,
          cardLevel: key.fluctuationStatus.cardLevel,
          SALevel: key.fluctuationStatus.SALevel,
          SLevel: key.fluctuationStatus.SLevel
        });
      }

      return list;
    },
    onResize() {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#cardListArea {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  //justify-content: space-between;

  .card {
    width: 190px;
  }

  .status {
    font-size: 14px;
  }

  .status:nth-child(odd) {
    border-right: 1px solid #555;
  }

  .status:nth-child(even) {
    padding-left: 4px;
  }

  .status:nth-child(1),
  .status:nth-child(2) {
    padding-bottom: 2px;
    border-bottom: 1px solid #555;
  }

  .status:nth-child(3) {
    padding: 1px 0;
    border-bottom: 1px solid #555;
  }

  .status:nth-child(4) {
    padding: 1px 0 1px 4px;
    border-bottom: 1px solid #555;
  }

  .status:nth-child(5),
  .status:nth-child(6) {
    padding-top: 1px;
  }
}

#possessionCard_container {
  border: 1px solid #555;
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
    border-bottom: 1px dashed #555;
    margin-bottom: 15px;

    &:last-child {
      border-bottom: 0;
      margin-bottom: 0;
    }
  }

  dt {
    margin-bottom: 5px;
  }
  
  .abc {
    padding: 5px 10px;
    border: 2px solid #555;
    border-radius: 50px;
    margin: 0 10px 10px 0;
  }
}

@media screen and (max-width: 600px) {
  #cardListArea {
    .card {
      width: calc(50% - 8px);
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