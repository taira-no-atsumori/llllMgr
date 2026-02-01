<template>
  <li class="card position-relative" :data-card-id="cardData.ID">
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
    <!-- ↓ホバーなし↓ -->
    <v-card
      v-if="
        !store.toBool(store.siteSettings.cardList.hover) || windowWidth <= 600
      "
      :color="moodColor[cardData.mood]"
      @click="handleClick"
    >
      <v-img
        :src="currentSrc"
        :alt="`${store.conversion(cardData.cardName)}_${conversionCardIdToMemberName(cardData.ID)}`"
        aspect-ratio="16/9"
        cover
        @load="onImgLoad"
        @error="onImgError"
      >
        <template #placeholder>
          <v-skeleton-loader type="image" class="h-100 w-100" />
        </template>
        <template #error>
          <v-img :src="noImage" aspect-ratio="1" cover class="h-100 w-100" />
        </template>
      </v-img>
      <v-card-title
        class="d-flex align-center text-subtitle-2 px-2 pt-1 hamidashi"
        style="padding-bottom: 2px"
      >
        <img
          :src="
            store.getImagePath('icons/styleType', `icon_${cardData.styleType}`)
          "
          :alt="`${cardData.memberName}_${conversionCardIdToMemberName(cardData.ID)}`"
          class="icon type mr-1"
        />
        <span style="padding-top: 2px" class="hamidashi">
          {{ cardData.cardName }}
        </span>
      </v-card-title>

      <!-- ↓詳細表示↓ -->
      <v-card-text
        v-if="store.toBool(store.siteSettings.cardList.isShowDetail)"
        class="pa-0 cardName"
      >
        <v-divider opacity="100" />

        <v-row no-gutters class="pa-1">
          <v-col cols="6" class="status">
            <span>特訓 </span>
            {{ getCardParam('trainingLevel') }}
          </v-col>
          <v-col cols="6" class="status">
            <span>Level </span>
            {{ getCardParam('cardLevel') }}
          </v-col>
          <v-col cols="6" class="status">
            <span>SA Lv. </span>
            {{
              (store.card[cardData.memberName][cardData.rare][cardData.ID]
                .specialAppeal ?? false)
                ? getCardParam('SALevel')
                : '-'
            }}
          </v-col>
          <v-col cols="6" class="status">
            <span>S Lv. </span>
            {{
              (store.card[cardData.memberName][cardData.rare][cardData.ID]
                .skill ?? false)
                ? getCardParam('SLevel')
                : '-'
            }}
          </v-col>
          <v-col cols="6" class="status">
            <span>解放Lv. </span>
            {{ getCardParam('releaseLevel') }}
          </v-col>
          <v-col cols="6" class="status">
            <span>GP Pt. </span>
            {{
              /^DR$/.test(
                store.card[cardData.memberName][cardData.rare][cardData.ID]
                  .rare,
              ) ||
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .specialAppeal === undefined
                ? '-'
                : `+${
                    GRANDPRIX_BONUS.releaseLv[
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].rare
                    ][getCardParam('releaseLevel') - 1] * 100
                  }%`
            }}
          </v-col>
        </v-row>
      </v-card-text>
      <!-- ↑詳細表示↑ -->
    </v-card>
    <!-- ↑ホバーなし↑ -->

    <template v-else>
      <v-tooltip location="bottom" open-delay="250">
        <template #activator="{ props: activatorProps }">
          <v-card
            v-bind="activatorProps"
            :color="moodColor[cardData.mood]"
            @click="handleClick"
          >
            <!-- Same content as above -->
            <v-img
              :src="currentSrc"
              :alt="`${store.conversion(cardData.cardName)}_${conversionCardIdToMemberName(cardData.ID)}`"
              aspect-ratio="16/9"
              cover
              @load="onImgLoad"
              @error="onImgError"
            >
              <template #placeholder>
                <v-skeleton-loader type="image" class="h-100 w-100" />
              </template>
              <template #error>
                <v-img
                  :src="noImage"
                  aspect-ratio="1"
                  cover
                  class="h-100 w-100"
                />
              </template>
            </v-img>
            <v-card-title
              class="d-flex align-center text-subtitle-2 px-2 pt-1"
              style="padding-bottom: 2px"
            >
              <img
                :src="
                  store.getImagePath(
                    'icons/styleType',
                    `icon_${cardData.styleType}`,
                  )
                "
                :alt="`${cardData.memberName}_${conversionCardIdToMemberName(cardData.ID)}`"
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
              <v-divider opacity="50" />

              <v-row no-gutters class="pa-1">
                <v-col cols="6" class="status">
                  <span>特訓 </span>
                  {{ getCardParam('releaseLevel') }}
                </v-col>
                <v-col cols="6" class="status">
                  <span>カードLv. </span>
                  {{ getCardParam(cardLevel) }}
                </v-col>
                <v-col cols="6" class="status">
                  <span>SA Lv. </span>
                  {{
                    (store.card[cardData.memberName][cardData.rare][cardData.ID]
                      .specialAppeal ?? false)
                      ? getCardParam('SALevel')
                      : '-'
                  }}
                </v-col>
                <v-col cols="6" class="status">
                  <span>S Lv. </span>
                  {{
                    (store.card[cardData.memberName][cardData.rare][cardData.ID]
                      .skill ?? false)
                      ? getCardParam('SLevel')
                      : '-'
                  }}
                </v-col>
                <v-col cols="6" class="status">
                  <span>解放Lv. </span>
                  {{ getCardParam('releaseLevel') }}
                </v-col>
                <v-col cols="6" class="status">
                  <span>GP Pt. </span>
                  {{
                    /^DR$/.test(
                      store.card[cardData.memberName][cardData.rare][
                        cardData.ID
                      ].rare,
                    ) ||
                    store.card[cardData.memberName][cardData.rare][cardData.ID]
                      .specialAppeal === undefined
                      ? '-'
                      : `+${
                          GRANDPRIX_BONUS.releaseLv[
                            store.card[cardData.memberName][cardData.rare][
                              cardData.ID
                            ].rare
                          ][getCardParam('releaseLevel') - 1] * 100
                        }%`
                  }}
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </template>

        <div>
          <p class="mb-2">
            {{ cardData.rare }}
            {{ ['', '+', '++'][getTrainingLevelMark(cardData)] }} [{{
              cardData.cardName
            }}] {{ makeMemberFullName(cardData.memberName) }} (Lv.
            {{ getCardParam('cardLevel') }})
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
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .specialAppeal ?? false
            "
          >
            <span class="mr-3">スペシャルアピール</span>
            {{
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .specialAppeal.name
            }}
            (Lv. {{ getCardParam('SALevel') }})
          </p>
          <p
            v-if="
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .skill ?? false
            "
          >
            <span class="mr-3">スキル</span>
            {{
              store.card[cardData.memberName][cardData.rare][cardData.ID].skill
                .name
            }}
            (Lv. {{ getCardParam('SLevel') }})
          </p>
          <p
            v-if="
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .characteristic ?? false
            "
          >
            <span class="mr-3">特性</span>
            {{
              store.card[cardData.memberName][cardData.rare][cardData.ID]
                .characteristic.name
            }}
          </p>
        </div>
      </v-tooltip>
    </template>
  </li>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { MAX_CARD_LEVEL } from '@/constants/cards';
import { getReleasePoint } from '@/constants/releasePoint';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import {
  conversionCardIdToMemberName,
  makeMemberFullName,
} from '@/constants/memberNames';
import noImage from '@/assets/images/cardIllust/NO IMAGE.webp';
import type { CardDataType } from '@/types/cardList';

const props = defineProps<{
  cardData: CardDataType;
  windowWidth: number;
}>();

const store = useStateStore();

const moodColor = {
  happy: '#EF8DC8',
  neutral: '#A9FCC7',
  melow: '#A1BAFA',
} as const;

const getCardParam = (
  paramKey:
    | 'releaseLevel'
    | 'cardLevel'
    | 'SALevel'
    | 'SLevel'
    | 'smile'
    | 'pure'
    | 'cool'
    | 'mental',
): number => {
  return store.card[props.cardData.memberName][props.cardData.rare][
    props.cardData.ID
  ].fluctuationStatus[paramKey];
};

const imageUrl = computed(() => {
  const urls = store.imageCache['llllMgr_cardImageUrls'];
  return (urls && urls[props.cardData.ID]?.after) || noImage;
});

const isTimeout = ref(false);
let timer: ReturnType<typeof setTimeout> | undefined;

const currentSrc = computed(() => {
  return isTimeout.value ? noImage : imageUrl.value;
});

const clearTimer = () => {
  if (timer) {
    clearTimeout(timer);
    timer = undefined;
  }
};

const onImgLoad = () => {
  clearTimer();
};

const onImgError = () => {
  clearTimer();
};

watch(
  imageUrl,
  (newVal) => {
    clearTimer();
    isTimeout.value = false;
    if (newVal !== noImage) {
      timer = setTimeout(() => {
        isTimeout.value = true;
      }, 10000);
    }
  },
  { immediate: true },
);

onBeforeUnmount(() => {
  clearTimer();
});

const handleClick = () => {
  store.showModalEvent('setCardData');
  store.settingCardId = props.cardData.ID;
};

const getTrainingLevelMark = (cardData: CardDataType): number => {
  return getCardParam('trainingLevel') + (cardData.rare === 'LR' ? 1 : 0) < 3
    ? getCardParam('trainingLevel') + (cardData.rare === 'LR' ? 1 : 0)
    : 2;
};
</script>

<style lang="scss" scoped>
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
