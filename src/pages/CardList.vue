<template>
  <v-container v-if="!store.loading" fluid class="pa-2">
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
          <span class="text-green-accent-4">●</span
          >←特訓Lv.が上げられるときに表示されます。<br />
          <span class="text-red-accent-3">●</span
          >←カードLv.が上げられるときに表示されます。<br />
          <span class="text-blue-accent-4">●</span
          >←解放Lv.が上げられるときに表示されます。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-btn
      elevation="3"
      class="mb-1 mr-2 px-3"
      color="pink"
      @click="store.showModalEvent('CardListFilter')"
    >
      <v-icon class="mr-2">mdi-filter</v-icon>
      絞り込み
    </v-btn>

    <v-btn
      elevation="3"
      class="mb-1 mr-2 px-3"
      color="yellow"
      @click="dialog = true"
    >
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
              store.sortSettings.cardList.sortType = val;
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
      v-model="store.sortSettings.cardList.order"
      density="compact"
      variant="outlined"
      color="pink"
      class="mb-1 mr-2"
      mandatory
    >
      <v-btn
        value="descending"
        class="px-0 px-sm-2"
        @click="store.changeSettings('sortSettings')"
      >
        <v-icon>mdi-sort-descending</v-icon>
        <span class="ml-2 hidden-sm-and-down">降順</span>
      </v-btn>
      <v-btn
        value="ascending"
        class="px-0 px-sm-2"
        @click="store.changeSettings('sortSettings')"
      >
        <v-icon>mdi-sort-ascending</v-icon>
        <span class="ml-2 hidden-sm-and-down">昇順</span>
      </v-btn>
    </v-btn-toggle>

    <div class="d-inline-block mr-1">
      絞り込み結果：{{ outputCardList.length }}枚 /
    </div>

    <div class="d-inline-block">
      現在のソート：{{ sortTypeList[store.sortSettings.cardList.sortType] }}
    </div>

    <v-divider class="my-2"></v-divider>

    <v-tabs
      v-if="false"
      v-model="selectTab"
      slider-color="pink"
      density="compact"
    >
      <v-tab value="single">単一選択</v-tab>
      <v-tab value="multi">一括選択</v-tab>
    </v-tabs>

    <v-tabs-window v-model="selectTab">
      <v-tabs-window-item value="single">
        <ul id="cardListArea" class="mt-1">
          <li v-if="outputCardList.length === 0">
            見つからなかったよ😢<br />
            絞り込み条件を変えてね
          </li>
          <li
            v-for="cardData in outputCardList"
            v-else
            :key="cardData"
            class="card position-relative"
          >
            <p
              v-if="
                store.toBool(store.siteSettings.cardList.dot_releaseLevel) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                MAX_CARD_LEVEL[cardData.rare][
                  MAX_CARD_LEVEL[cardData.rare].length - 1
                ] > cardData.fluctuationStatus.cardLevel &&
                MAX_CARD_LEVEL[cardData.rare][
                  cardData.fluctuationStatus.trainingLevel
                ] === cardData.fluctuationStatus.cardLevel
              "
              class="dot bg-green-accent-4"
            ></p>
            <p
              v-if="
                store.toBool(store.siteSettings.cardList.dot_cardLevel) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                MAX_CARD_LEVEL[cardData.rare][
                  cardData.fluctuationStatus.trainingLevel
                ] > cardData.fluctuationStatus.cardLevel
              "
              class="dot bg-red-accent-3"
            ></p>
            <p
              v-if="
                store.toBool(store.siteSettings.cardList.dot_releasePoint) &&
                cardData.fluctuationStatus.cardLevel > 0 &&
                getReleasePoint(cardData.rare, 'point') <=
                  cardData.fluctuationStatus.releasePoint
              "
              class="dot bg-blue-accent-4"
            ></p>
            <v-card
              v-if="
                !store.toBool(store.siteSettings.cardList.hover) ||
                windowSize.w <= 600
              "
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
                    store.makeCardIllustName(cardData.ID)
                  )
                "
                :src="
                  store.getImagePath(
                    'images/cardIllust',
                    store.makeCardIllustName(cardData.ID)
                  )
                "
                :alt="`${store.conversion(
                  cardData.cardName
                )}_${conversionCardIdToMemberName(cardData.ID)}`"
              ></v-img>
              <v-card-title
                class="d-flex align-center text-subtitle-2 px-2 pt-1 hamidashi"
                style="padding-bottom: 2px"
              >
                <img
                  :src="
                    store.getImagePath(
                      'icons/styleType',
                      `icon_${cardData.styleType}`
                    )
                  "
                  :alt="`${cardData.memberName}_${conversionCardIdToMemberName(
                    cardData.ID
                  )}`"
                  class="icon type mr-1"
                />
                <span style="padding-top: 2px" class="hamidashi">
                  {{ cardData.cardName }}
                </span>
              </v-card-title>

              <v-card-text
                v-if="store.toBool(store.siteSettings.cardList.isShowDetail)"
                class="pa-0 cardName"
              >
                <v-divider opacity="100"></v-divider>

                <v-row no-gutters class="pa-1">
                  <v-col cols="6" class="status">
                    <span>特訓 </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.cardName
                      ].fluctuationStatus.trainingLevel
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>Level </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.cardName
                      ].fluctuationStatus.cardLevel
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>SA Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.cardName
                      ].specialAppeal ?? false
                        ? store.card[cardData.memberName][cardData.rare][
                            cardData.cardName
                          ].fluctuationStatus.SALevel
                        : '-'
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>S Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.cardName
                      ].skill ?? false
                        ? store.card[cardData.memberName][cardData.rare][
                            cardData.cardName
                          ].fluctuationStatus.SLevel
                        : '-'
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>解放Lv. </span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].fluctuationStatus.releaseLevel
                    }}
                  </v-col>
                  <v-col cols="6" class="status">
                    <span>GP Pt. </span>
                    {{
                      /^DR$/.test(
                        store.card[cardData.memberName][cardData.rare][
                          cardData.ID
                        ].rare
                      ) ||
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].specialAppeal === undefined
                        ? '-'
                        : `+${
                            GRANDPRIX_BONUS.releaseLv[
                              store.card[cardData.memberName][cardData.rare][
                                cardData.ID
                              ].rare
                            ][
                              store.card[cardData.memberName][cardData.rare][
                                cardData.ID
                              ].fluctuationStatus.releaseLevel - 1
                            ] * 100
                          }%`
                    }}
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>

            <template v-else>
              <v-tooltip location="bottom" open-delay="250">
                <template #activator="{ props }">
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
                          store.makeCardIllustName(cardData.ID)
                        )
                      "
                      :src="
                        store.getImagePath(
                          'images/cardIllust',
                          store.makeCardIllustName(cardData.ID)
                        )
                      "
                      :alt="`${store.conversion(
                        cardData.cardName
                      )}_${conversionCardIdToMemberName(cardData.ID)}`"
                    ></v-img>
                    <v-card-title
                      class="d-flex align-center text-subtitle-2 px-2 pt-1"
                      style="padding-bottom: 2px"
                    >
                      <img
                        :src="
                          store.getImagePath(
                            'icons/styleType',
                            `icon_${cardData.styleType}`
                          )
                        "
                        :alt="`${
                          cardData.memberName
                        }_${conversionCardIdToMemberName(cardData.ID)}`"
                        class="icon type mr-1"
                      />
                      <span style="padding-top: 2px" class="hamidashi">
                        {{ cardData.cardName }}
                      </span>
                    </v-card-title>
                    <v-card-text
                      v-if="
                        store.toBool(store.siteSettings.cardList.isShowDetail)
                      "
                      class="pa-0 cardName"
                    >
                      <v-divider opacity="50"></v-divider>

                      <v-row no-gutters class="pa-1">
                        <v-col cols="6" class="status">
                          <span>特訓 </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].fluctuationStatus.trainingLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>カードLv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].fluctuationStatus.cardLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>SA Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].specialAppeal ?? false
                              ? store.card[cardData.memberName][cardData.rare][
                                  cardData.cardName
                                ].fluctuationStatus.SALevel
                              : '-'
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>S Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].skill ?? false
                              ? store.card[cardData.memberName][cardData.rare][
                                  cardData.cardName
                                ].fluctuationStatus.SLevel
                              : '-'
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>解放Lv. </span>
                          {{
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].fluctuationStatus.releaseLevel
                          }}
                        </v-col>
                        <v-col cols="6" class="status">
                          <span>GP Pt. </span>
                          {{
                            /^DR$/.test(
                              store.card[cardData.memberName][cardData.rare][
                                cardData.cardName
                              ].rare
                            ) ||
                            store.card[cardData.memberName][cardData.rare][
                              cardData.cardName
                            ].specialAppeal === undefined
                              ? '-'
                              : `+${
                                  GRANDPRIX_BONUS.releaseLv[
                                    store.card[cardData.memberName][
                                      cardData.rare
                                    ][cardData.cardName].rare
                                  ][
                                    store.card[cardData.memberName][
                                      cardData.rare
                                    ][cardData.cardName].fluctuationStatus
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
                    {{ cardData.rare
                    }}{{ ['', '+', '++'][getTrainingLevelMark(cardData)] }} [{{
                      cardData.cardName
                    }}] {{ makeMemberFullName(cardData.memberName) }} (Lv.
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].fluctuationStatus.cardLevel
                    }})
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
                            {{
                              store.card[cardData.memberName][cardData.rare][
                                cardData.ID
                              ].uniqueStatus.BP
                            }}
                          </v-col>
                        </v-row>
                      </v-col>
                    </v-row>
                  </v-container>
                  <p
                    v-if="
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].specialAppeal ?? false
                    "
                  >
                    <span class="mr-3">スペシャルアピール</span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].specialAppeal.name
                    }}
                    (Lv.
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].fluctuationStatus.SALevel
                    }})
                  </p>
                  <p
                    v-if="
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].skill ?? false
                    "
                  >
                    <span class="mr-3">スキル</span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].skill.name
                    }}
                    (Lv.
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].fluctuationStatus.SLevel
                    }})
                  </p>
                  <p
                    v-if="
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].characteristic ?? false
                    "
                  >
                    <span class="mr-3">特性</span>
                    {{
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].characteristic.name
                    }}
                  </p>
                </div>
              </v-tooltip>
            </template>
          </li>
        </ul>
      </v-tabs-window-item>
      <v-tabs-window-item value="multi">
        <v-btn class="my-2"></v-btn>
        <v-data-table
          density="compact"
          :headers="tableHeaders"
          :items="makeCardList(store)"
          show-select
        ></v-data-table>
      </v-tabs-window-item>
    </v-tabs-window>

    <ul v-if="false" id="possessionCard_header">
      <li
        v-for="memberKey in MEMBER_KEYS"
        :key="conversionKeyToId(memberKey)"
        :data-character="memberKey"
        :data-selected="selectTab2 === memberKey"
        @click="changeTab(memberKey)"
      >
        {{ MEMBER_NAMES[memberKey].last }}
      </li>
    </ul>
    <ul v-if="false" id="possessionCard_container">
      <li
        v-for="memberKey in MEMBER_KEYS"
        v-show="selectTab2 === memberKey"
        :key="conversionKeyToId(memberKey)"
        :data-character="memberKey"
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
        <Chart
          :member-name-list="chartMemberNames"
          :card-data-length="chartCardList"
        />
      </div>
      <div class="mt-2 text-center">
        <v-btn
          prepend-icon="mdi-close"
          :theme="store.siteSettings.all.darkMode"
          @click="dialog = false"
        >
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { RARE } from '@/constants/cards';
import { useStateStore } from '@/stores/stateStore';
import Chart from '@/components/modal/Chart.vue';
import {
  MEMBER_KEYS,
  MEMBER_NAMES,
  conversionKeyToId,
  makeMemberFullName,
  conversionCardIdToMemberName,
} from '@/constants/memberNames';
import { getReleasePoint } from '@/constants/releasePoint';
import { MAX_CARD_LEVEL, SPECIAL_CARD_IDS } from '@/constants/cards';
import { MEMBER_COLOR } from '@/constants/colorConst';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { SKILL_LIST } from '@/constants/skillList';
import { SKILL_DETAIL } from '@/constants/skillDetail';
import { CardDefaultData, CardDataType } from '@/types/cardList';

const store = useStateStore();
const memberKeys = Object.keys(MEMBER_COLOR);
const dialog = ref(false);
const selectTab = ref('single');
const selectTab2 = ref('kaho');
const windowSize = ref({ w: 0, h: 0 });
const tableHeaders = [
  { title: 'レア度', key: 'rare' },
  { title: 'カード名', key: 'cardName' },
  { title: '名前', key: 'memberName' },
  { title: 'カードLv.', key: 'cardLevel' },
  { title: 'SALv.', key: 'SALevel' },
  { title: 'スキルLv.', key: 'SLevel' },
];
const sortTypeList = {
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
};
const moodColor = {
  happy: '#EF8DC8',
  neutral: '#A9FCC7',
  melow: '#A1BAFA',
};

/**
 * カード絞り込み
 */
const outputCardList = computed(() => {
  let result: CardDataType[] = store.cardList.slice();
  let filterList;

  if (result.length > 0) {
    for (const searchKey in store.search.cardList) {
      filterList = store.search.cardList[searchKey];
      result = result.filter((cardData) => {
        switch (searchKey) {
          case 'cardLevel':
          case 'SALevel':
          case 'SLevel':
          case 'releaseLevel':
          case 'trainingLevel':
            return (
              filterList[0] <= cardData.fluctuationStatus[searchKey] &&
              cardData.fluctuationStatus[searchKey] <= filterList[1]
            );
          case 'SAAP':
            if (cardData.specialAppeal === undefined) {
              return true;
            } else {
              const AP =
                cardData.specialAppeal.AP -
                (MAX_CARD_LEVEL[cardData.rare].length - 2 >
                cardData.fluctuationStatus.trainingLevel
                  ? cardData.fluctuationStatus.trainingLevel
                  : MAX_CARD_LEVEL[cardData.rare].length - 3);
              return filterList[0] <= AP && AP <= filterList[1];
            }
          case 'SAP':
            if (cardData.skill === undefined) {
              return true;
            } else {
              return (
                filterList[0] <= cardData.skill.AP &&
                cardData.skill.AP <= filterList[1]
              );
            }
          case 'favorite':
            if (store.search.cardList.favorite.length === 0) {
              return true;
            } else {
              return store.search.cardList.favorite.some((v) => {
                return cardData.favorite.length === 0
                  ? false
                  : cardData.favorite.indexOf(v) > -1;
              });
            }
          case 'releaseStatus':
            if (store.search.cardList.releaseStatus === 'none') {
              return true;
            }

            if (cardData.fluctuationStatus.cardLevel === 0) {
              return false;
            }

            if (store.search.cardList.releaseStatus === 'cardLevel') {
              if (
                MAX_CARD_LEVEL[cardData.rare][
                  MAX_CARD_LEVEL[cardData.rare].length - 1
                ] === cardData.fluctuationStatus.cardLevel
              ) {
                return false;
              } else {
                return (
                  MAX_CARD_LEVEL[cardData.rare][
                    cardData.fluctuationStatus.trainingLevel
                  ] > cardData.fluctuationStatus.cardLevel
                );
              }
            }

            if (store.search.cardList.releaseStatus === 'trainingLevel') {
              if (
                MAX_CARD_LEVEL[cardData.rare][
                  MAX_CARD_LEVEL[cardData.rare].length - 1
                ] === cardData.fluctuationStatus.cardLevel
              ) {
                return false;
              } else {
                return (
                  MAX_CARD_LEVEL[cardData.rare][
                    cardData.fluctuationStatus.trainingLevel
                  ] === cardData.fluctuationStatus.cardLevel
                );
              }
            }

            if (store.search.cardList.releaseStatus === 'releaseLevel') {
              if (
                cardData.fluctuationStatus.releasePoint === 0 ||
                cardData.fluctuationStatus.releaseLevel === 5
              ) {
                return false;
              } else {
                return (
                  getReleasePoint(cardData.rare, 'point') <=
                  cardData.fluctuationStatus.releasePoint
                );
              }
            }

            return true;
          case 'memberName':
            if (
              filterList.includes('special') &&
              SPECIAL_CARD_IDS.includes(cardData.ID)
            ) {
              return true;
            }

            return filterList.some((val: string) => {
              return cardData[searchKey] === val;
            });
          default:
            return filterList.some((val: string) => {
              return cardData[searchKey] === val;
            });
        }
      });
    }
  }

  if (result.length > 0) {
    for (const searchKey in store.search.skillList[
      store.search.skillList.skillFilterType
    ]) {
      filterList =
        store.search.skillList[store.search.skillList.skillFilterType][
          searchKey
        ];

      if (filterList.length === 0) {
        continue;
      }

      result = result.filter((cardData) => {
        if (cardData[searchKey] !== undefined) {
          return filterList.some((val) => {
            if (store.search.skillList.skillFilterType === 'skillType') {
              const skillID = Object.values(SKILL_DETAIL).find((key) => {
                return key.name_ja === val;
              });

              if (!skillID) {
                return false;
              }

              return SKILL_LIST[cardData[searchKey].name][
                cardData[searchKey].ID
              ].detail.type.some((key) => {
                return key.name_ja === skillID.name_ja;
              });
            } else {
              return cardData[searchKey].name === val;
            }
          });
        } else {
          return false;
        }
      });
    }
  }

  if (result.length > 0) {
    filterList = store.search.cardSeries;

    if (filterList.length > 0) {
      result = result.filter((cardData) => {
        return filterList.some((val) => {
          return cardData.series === val;
        });
      });
    }
  }

  if (result.length > 0) {
    if (store.sortSettings.cardList.sortType === 'rare') {
      if (store.sortSettings.cardList.order === 'ascending') {
        result.reverse();
      }
    } else {
      let aa: number;
      let bb: number;
      const mergeList = [];

      if (store.sortSettings.cardList.sortType === 'releaseBonus') {
        result = result.filter((cardData) => {
          if (cardData.rare === 'DR' || cardData.specialAppeal === undefined) {
            mergeList.push(cardData);
            return false;
          } else {
            return true;
          }
        });
      }

      result.sort((a: CardDefaultData, b: CardDefaultData) => {
        if (store.sortSettings.cardList.sortType === 'releaseBonus') {
          aa = a.fluctuationStatus.releaseLevel - 1;
          bb = b.fluctuationStatus.releaseLevel - 1;

          if (store.sortSettings.cardList.order === 'ascending') {
            return GRANDPRIX_BONUS.releaseLv[a.rare][aa] <
              GRANDPRIX_BONUS.releaseLv[b.rare][bb]
              ? -1
              : GRANDPRIX_BONUS.releaseLv[a.rare][aa] >
                GRANDPRIX_BONUS.releaseLv[b.rare][bb]
              ? 1
              : 0;
          } else {
            return GRANDPRIX_BONUS.releaseLv[a.rare][aa] >
              GRANDPRIX_BONUS.releaseLv[b.rare][bb]
              ? -1
              : GRANDPRIX_BONUS.releaseLv[a.rare][aa] <
                GRANDPRIX_BONUS.releaseLv[b.rare][bb]
              ? 1
              : 0;
          }
        } else if (
          /(card|SA|S|release|training)Level/.test(
            store.sortSettings.cardList.sortType
          )
        ) {
          aa = a.fluctuationStatus[store.sortSettings.cardList.sortType];
          bb = b.fluctuationStatus[store.sortSettings.cardList.sortType];

          if (store.sortSettings.cardList.order === 'ascending') {
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          } else {
            return aa > bb ? -1 : aa < bb ? 1 : 0;
          }
        } else {
          aa = a[store.sortSettings.cardList.sortType];
          bb = b[store.sortSettings.cardList.sortType];

          if (store.sortSettings.cardList.order === 'ascending') {
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          } else {
            return aa > bb ? -1 : aa < bb ? 1 : 0;
          }
        }
      });

      if (mergeList.length > 0) {
        result = result.concat(mergeList);
      }
    }
  }

  return result;
});

const chartMemberNames: string[] = memberKeys.map((memberKey) => {
  return MEMBER_NAMES[memberKey][
    memberKey === MEMBER_KEYS.SERAS ? 'first' : 'last'
  ];
});

const cardList_max = memberKeys.map((memberKey) => {
  return store.cardList.filter((cardData) => {
    return cardData.memberName === memberKey;
  }).length;
});

const chartCardList = computed(() => {
  return memberKeys.map((memberKey, i) => {
    const a = store.cardList.filter((cardData) => {
      return (
        cardData.memberName === memberKey &&
        cardData.fluctuationStatus.cardLevel > 0
      );
    }).length;

    const percentage = (a / cardList_max[i]) * 100;
    return Math.round(percentage * 100) / 100;
  });
});

const changeTab = (selectCharacter: string) => {
  selectTab2.value = selectCharacter;
};

const makeCardList = computed(() => {
  return outputCardList.value.map((cardData) => {
    return {
      cardName: cardData.cardName,
      memberName: makeMemberFullName(cardData.memberName),
      rare: cardData.rare,
      cardLevel: cardData.fluctuationStatus.cardLevel,
      SALevel: cardData.fluctuationStatus.SALevel,
      SLevel: cardData.fluctuationStatus.SLevel,
    };
  });
});

const onResize = () => {
  windowSize.value = {
    w: window.innerWidth,
    h: window.innerHeight,
  };
};

const getTrainingLevelMark = (cardData: CardDataType): number => {
  return store.card[cardData.memberName][cardData.rare][cardData.ID]
    .fluctuationStatus.trainingLevel +
    (cardData.rare === 'LR' ? 1 : 0) <
    3
    ? store.card[cardData.memberName][cardData.rare][cardData.ID]
        .fluctuationStatus.trainingLevel + (cardData.rare === 'LR' ? 1 : 0)
    : 2;
};

onMounted(() => {
  onResize();
});
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
