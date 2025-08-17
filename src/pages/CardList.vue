<template>
  <v-container fluid class="pa-2">
    <h1 class="mb-1">CARD LIST ～ カード一覧 / 所持カード設定 ～</h1>

    <v-expansion-panels class="mb-3">
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          リンクラに実装されているカード一覧です。<br />
          各カードを選択すると、カードの詳細が見られます。<br />
          さらに、詳細画面では各カードにパラメータを設定できます。<br />
          ※アプリ本編ではカードレベル0は存在しませんが、本サイトではカードレベル0を未所持状態、レベル1以上を所持状態と定義しています。<br /><br />

          右上にある●は、カードレベルが1以上かつ以下の条件でつきます。<br />
          <span class="text-green-accent-4">●</span>←特訓Lv.が上げられるときに表示されます。<br />
          <span class="text-red-accent-3">●</span>←カードLv.が上げられるときに表示されます。<br />
          <span class="text-blue-accent-4">●</span>←解放Lv.が上げられるときに表示されます。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn elevation="3" class="mb-1 mr-2 px-3" @click="store.showModalEvent('CardListFilter')" color="pink">
      <v-icon class="mr-2">mdi-filter</v-icon>
      絞り込み
    </v-btn>

    <v-btn elevation="3" class="mb-1 mr-2 px-3" @click="dialog = true" color="yellow">
      <v-icon class="mr-2">mdi-chart-box-outline</v-icon>
      分析
    </v-btn>

    <v-btn elevation="3" class="mb-1 mr-2 px-3" color="blue">
      <v-icon class="mr-2">mdi-sort</v-icon>
      ソート
      <v-menu activator="parent" transition="slide-y-transition">
        <v-list>
          <v-list-item
            v-for="(label, val) in sortTypeList"
            :key="val"
            :value="val"
            @click="
              store.localStorageData.sortSettings.cardList.sortType = val;
              store.changeSettings('sortSettings');
            "
          >
            <v-list-item-title>
              {{ label }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn-toggle
      v-model="store.localStorageData.sortSettings.cardList.order"
      density="compact"
      variant="outlined"
      color="pink"
      class="mb-1 mr-2"
      mandatory
    >
      <v-btn value="descending" class="px-0 px-sm-2" @click="store.changeSettings('sortSettings')">
        <v-icon>mdi-sort-descending</v-icon>
        <span class="ml-2 hidden-sm-and-down">降順</span>
      </v-btn>
      <v-btn value="ascending" class="px-0 px-sm-2" @click="store.changeSettings('sortSettings')">
        <v-icon>mdi-sort-ascending</v-icon>
        <span class="ml-2 hidden-sm-and-down">昇順</span>
      </v-btn>
    </v-btn-toggle>

    <div class="d-inline-block mr-1">絞り込み結果：{{ store.outputCardList.length }}枚 /</div>

    <div class="d-inline-block">
      現在のソート：{{ sortTypeList[store.localStorageData.sortSettings.cardList.sortType] }}
    </div>

    <v-divider class="my-2"></v-divider>

    <v-tabs v-model="selectTab" slider-color="pink" density="compact" v-if="false">
      <v-tab value="single">単一選択</v-tab>
      <v-tab value="multi">一括選択</v-tab>
    </v-tabs>

    <v-tabs-window v-model="selectTab">
      <v-tabs-window-item value="single">
        <ul id="cardListArea" class="mt-1">
          <li v-if="store.outputCardList.length === 0">
            見つからなかったよ😢<br />
            絞り込み条件を変えてね
          </li>
          <li v-else v-for="cardData in store.outputCardList" :key="cardData" class="card position-relative">
            <p
              v-if="
                store.toBool(store.localStorageData.siteSettings.cardList.dot_releaseLevel) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                store.maxCardLevel[cardData.rare][store.maxCardLevel[cardData.rare].length - 1] >
                  cardData.fluctuationStatus.cardLevel &&
                store.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] ===
                  cardData.fluctuationStatus.cardLevel
              "
              class="dot bg-green-accent-4"
            ></p>
            <p
              v-if="
                store.toBool(store.localStorageData.siteSettings.cardList.dot_cardLevel) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                store.maxCardLevel[cardData.rare][cardData.fluctuationStatus.trainingLevel] >
                  cardData.fluctuationStatus.cardLevel
              "
              class="dot bg-red-accent-3"
            ></p>
            <p
              v-if="
                store.toBool(store.localStorageData.siteSettings.cardList.dot_releasePoint) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                store.releasePoint[cardData.rare].point <= cardData.fluctuationStatus.releasePoint
              "
              class="dot bg-blue-accent-4"
            ></p>
            <v-card
              v-if="!store.toBool(store.localStorageData.siteSettings.cardList.hover) || windowSize.w <= 600"
              :color="moodColor[cardData.mood]"
              @click="
                store.showModalEvent('setCardData');
                store.setSettingCard(cardData.ID);
              "
            >
              <v-img
                :lazy-src="
                  store.getImagePath(
                    'images/cardIllust',
                    `${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}_覚醒後`,
                  )
                "
                :src="
                  store.getImagePath(
                    'images/cardIllust',
                    `${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}_覚醒後`,
                  )
                "
                :alt="`${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}`"
              ></v-img>
              <v-card-title class="d-flex align-center text-subtitle-2 px-2 pt-1 hamidashi" style="padding-bottom: 2px">
                <img
                  :src="store.getImagePath('icons/styleType', `icon_${cardData.styleType}`)"
                  :alt="`${cardData.memberName}_${store.makeCardMemberName(cardData.ID)}`"
                  class="icon type mr-1"
                />
                <span style="padding-top: 2px" class="hamidashi">
                  {{ cardData.cardName }}
                </span>
              </v-card-title>

              <v-card-text
                class="pa-0 cardName"
                v-if="store.toBool(store.localStorageData.siteSettings.cardList.isShowDetail)"
              >
                <v-divider opacity="100"></v-divider>

                <v-row no-gutters class="pa-1">
                  <v-col cols="6" class="status">
                    <span>特訓 </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.trainingLevel
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>Level </span>
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.cardLevel }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>SA Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal ?? false
                        ? store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.SALevel
                        : '-'
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>S Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][cardData.cardName].skill ?? false
                        ? store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.SLevel
                        : '-'
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>解放Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.releaseLevel
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>GP Pt. </span>
                    {{
                      /^DR$/.test(store.card[cardData.memberName][cardData.rare][cardData.cardName].rare) ||
                      store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal === undefined
                        ? '-'
                        : `+${
                            store.grandprixBonus.releaseLv[
                              store.card[cardData.memberName][cardData.rare][cardData.cardName].rare
                            ][
                              store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                                .releaseLevel - 1
                            ] * 100
                          }%`
                    }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <template v-else>
              <v-tooltip location="bottom" open-delay="250">
                <template v-slot:activator="{ props }">
                  <v-card
                    v-bind="props"
                    :color="moodColor[cardData.mood]"
                    @click="
                      store.showModalEvent('setCardData');
                      store.setSettingCard(cardData.ID);
                    "
                  >
                    <v-img
                      :lazy-src="
                        store.getImagePath(
                          'images/cardIllust',
                          `${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}_覚醒後`,
                        )
                      "
                      :src="
                        store.getImagePath(
                          'images/cardIllust',
                          `${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}_覚醒後`,
                        )
                      "
                      :alt="`${store.conversion(cardData.cardName)}_${store.makeCardMemberName(cardData.ID)}`"
                    ></v-img>
                    <v-card-title class="d-flex align-center text-subtitle-2 px-2 pt-1" style="padding-bottom: 2px">
                      <img
                        :src="store.getImagePath('icons/styleType', `icon_${cardData.styleType}`)"
                        :alt="`${cardData.memberName}_${store.makeCardMemberName(cardData.ID)}`"
                        class="icon type mr-1"
                      />
                      <span style="padding-top: 2px" class="hamidashi">
                        {{ cardData.cardName }}
                      </span>
                    </v-card-title>
                    <v-card-text
                      class="pa-0 cardName"
                      v-if="store.toBool(store.localStorageData.siteSettings.cardList.isShowDetail)"
                    >
                      <v-divider opacity="50"></v-divider>

                      <v-row no-gutters class="pa-1">
                        <v-col cols="6" class="status">
                          <span>特訓 </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                              .trainingLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>カードLv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                              .cardLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>SA Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal ?? false
                              ? store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                                  .SALevel
                              : '-'
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>S Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].skill ?? false
                              ? store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                                  .SLevel
                              : '-'
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>解放Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                              .releaseLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>GP Pt. </span>
                          {{
                            /^DR$/.test(store.card[cardData.memberName][cardData.rare][cardData.cardName].rare) ||
                            store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal ===
                              undefined
                              ? '-'
                              : `+${
                                  store.grandprixBonus.releaseLv[
                                    store.card[cardData.memberName][cardData.rare][cardData.cardName].rare
                                  ][
                                    store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus
                                      .releaseLevel - 1
                                  ] * 100
                                }%`
                          }}
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </template>

                <div>
                  <p class="mb-2">
                    {{ cardData.rare }}{{ ['', '+', '++'][rare(store, cardData)] }} [{{ cardData.cardName }}]
                    {{ store.makeFullName(cardData.memberName) }} (Lv.
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.cardLevel }})
                  </p>
                  <v-container fluid class="mb-2 pa-0">
                    <v-row no-gutters>
                      <v-col cols="6" class="pa-0">
                        <v-row no-gutters>
                          <v-col class="pa-0">スマイル</v-col>
                          <v-col class="pa-0">
                            {{ store.cardParam('smile', cardData.ID) }}
                          </v-col>
                        </v-row>
                        <v-row no-gutters>
                          <v-col class="pa-0">ピュア</v-col>
                          <v-col class="pa-0">
                            {{ store.cardParam('pure', cardData.ID) }}
                          </v-col>
                        </v-row>
                        <v-row no-gutters>
                          <v-col class="pa-0">クール</v-col>
                          <v-col class="pa-0">
                            {{ store.cardParam('cool', cardData.ID) }}
                          </v-col>
                        </v-row>
                      </v-col>
                      <v-col cols="6" class="pa-0">
                        <v-row no-gutters>
                          <v-col class="pa-0">メンタル</v-col>
                          <v-col class="pa-0">
                            {{ store.cardParam('mental', cardData.ID) }}
                          </v-col>
                        </v-row>
                        <v-row no-gutters>
                          <v-col class="pa-0">BP</v-col>
                          <v-col class="pa-0">
                            {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].uniqueStatus.BP }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                  <p v-if="store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal ?? false">
                    <span class="mr-3">スペシャルアピール</span>
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].specialAppeal.name }}
                    (Lv.
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.SALevel }})
                  </p>
                  <p v-if="store.card[cardData.memberName][cardData.rare][cardData.cardName].skill ?? false">
                    <span class="mr-3">スキル</span>
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].skill.name }}
                    (Lv.
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.SLevel }})
                  </p>
                  <p v-if="store.card[cardData.memberName][cardData.rare][cardData.cardName].characteristic ?? false">
                    <span class="mr-3">特性</span>
                    {{ store.card[cardData.memberName][cardData.rare][cardData.cardName].characteristic.name }}
                  </p>
                </div>
              </v-tooltip>
            </template>
          </li>
        </ul>
      </v-tabs-window-item>
      <v-tabs-window-item value="multi">
        <v-btn class="my-2"></v-btn>
        <v-data-table density="compact" :headers="tableHeaders" :items="makeCardList(store)" show-select></v-data-table>
      </v-tabs-window-item>
    </v-tabs-window>

    <ul id="possessionCard_header" v-if="false">
      <li
        v-for="(name_ja, name_en) in store.memberName"
        :key="name_ja"
        :data-character="name_en"
        :data-selected="selectTab2 === name_en"
        @click="changeTab(name_en)"
      >
        {{ name_ja.last }}
      </li>
    </ul>
    <ul id="possessionCard_container" v-if="false">
      <li
        v-for="(name_ja, name_en) in store.memberName"
        :key="name_en"
        :data-character="name_en"
        v-show="selectTab2 === name_en"
      >
        <dl v-for="rare in RARE" :key="rare" :data-rare="rare">
          <dt>{{ rare }}</dt>
          <dd>
            <v-btn
              v-for="(ary, cardName) in store.card[name_en][rare]"
              :key="ary"
              :data-mood="ary.mood"
              class="abc"
              @click="
                store.showModalEvent('setCardData');
                store.setSettingCard(ID);
              "
            >
              {{ cardName }}
            </v-btn>
          </dd>
        </dl>
      </li>
    </ul>
  </v-container>

  <v-dialog v-model="dialog" :max-width="600" :height="windowSize.h * 0.5">
    <v-sheet class="pa-2 d-flex flex-column" style="height: 100%">
      <div style="flex-grow: 1; overflow-y: auto; min-height: 0">
        <Chart :memberNameList="chartMemberNames" :cardDataLength="cardList" />
      </div>
      <div class="mt-2 text-center">
        <v-btn
          prepend-icon="mdi-close"
          :theme="store.localStorageData.siteSettings.all.darkMode"
          @click="dialog = false"
        >
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { computed } from 'vue';
import { RARE } from '@/constants/cards';
import { useStoreCounter } from '@/stores/counter';
import Chart from '@/components/modal/Chart.vue';

const store = useStoreCounter();
const memberIds = Object.keys(store.memberColor);

const chartMemberNames = computed(() => {
  return memberIds.map((memberId) => {
    return store.memberName[memberId][memberId === 'seras' ? 'first' : 'last'];
  });
});

const cardList_max = memberIds.map((memberId) => {
  return store.cardList.filter((cardData) => {
    return cardData.memberName === memberId;
  }).length;
});

const cardList = computed(() => {
  return memberIds.map((memberId, i) => {
    const a = store.cardList.filter((cardData) => {
      return cardData.memberName === memberId && cardData.fluctuationStatus.cardLevel > 0;
    }).length;

    const percentage = (a / cardList_max[i]) * 100;
    return Math.round(percentage * 100) / 100;
  });
});
</script>

<script>
export default {
  name: 'CardList',
  components: {
    Chart,
  },
  data() {
    return {
      dialog: false,
      selectTab: 'single',
      selectTab2: 'kaho',
      tableHeaders: [
        { title: 'レア度', key: 'rare' },
        { title: 'カード名', key: 'cardName' },
        { title: '名前', key: 'memberName' },
        { title: 'カードLv.', key: 'cardLevel' },
        { title: 'SALv.', key: 'SALevel' },
        { title: 'スキルLv.', key: 'SLevel' },
      ],
      sortTypeList: {
        rare: 'レア度(標準)',
        //timeline: '時系列',
        //all: '総合',
        cardLevel: 'カードLv.',
        SALevel: 'SA Lv.',
        SLevel: 'スキルLv.',
        releaseLevel: '解放Lv.',
        releaseBonus: '解放Lv.ボーナス',
        trainingLevel: '特訓度',
        //smile: 'スマイル',
        //pure: 'ピュア',
        //cool: 'クール',
        //mental: 'メンタル',
        kana: '五十音',
      },
      moodColor: {
        happy: '#EF8DC8',
        neutral: '#A9FCC7',
        melow: '#A1BAFA',
      },
      windowSize: {
        w: 0,
        h: 0,
      },
    };
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

      for (const cardData of store.outputCardList) {
        list.push({
          cardName: cardData.cardName,
          memberName: store.makeFullName(cardData.memberName),
          rare: cardData.rare,
          cardLevel: cardData.fluctuationStatus.cardLevel,
          SALevel: cardData.fluctuationStatus.SALevel,
          SLevel: cardData.fluctuationStatus.SLevel,
        });
      }

      return list;
    },
    onResize() {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight,
      };
    },
    rare(store, cardData) {
      return store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.trainingLevel +
        (cardData.rare === 'LR' ? 1 : 0) <
        3
        ? store.card[cardData.memberName][cardData.rare][cardData.cardName].fluctuationStatus.trainingLevel +
            (cardData.rare === 'LR' ? 1 : 0)
        : 2;
    },
  },
};
</script>

<style lang="scss" scoped>
$gap: 8px;

.dot {
  width: 13px;
  height: 13px;
  border: 1px solid #fff;
  border-radius: 50%;
  position: absolute;
  z-index: 1;
  top: -5px;
  right: -5px;
}

.dot:nth-child(1) + .dot:nth-child(2) {
  top: 12px;
}

#cardListArea {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: $gap;

  .card {
    width: 191px;
  }

  .status {
    font-size: 13px;
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
    padding: 10px 10px 0 10px;

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
      width: calc(50% - $gap / 2);
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
