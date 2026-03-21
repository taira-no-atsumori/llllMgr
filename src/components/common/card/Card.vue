<template>
  <p
    v-if="
      store.toBool(store.siteSettings.cardList.dot_releaseLevel) &&
      cardData.fluctuationStatus.cardLevel > 0 &&
      MAX_CARD_LEVEL[cardData.rare][MAX_CARD_LEVEL[cardData.rare].length - 1] >
        cardData.fluctuationStatus.cardLevel &&
      MAX_CARD_LEVEL[cardData.rare][
        cardData.fluctuationStatus.trainingLevel
      ] === cardData.fluctuationStatus.cardLevel
    "
    class="dot bg-green-accent-4"
  />
  <p
    v-if="
      store.toBool(store.siteSettings.cardList.dot_cardLevel) &&
      cardData.fluctuationStatus.cardLevel > 0 &&
      MAX_CARD_LEVEL[cardData.rare][cardData.fluctuationStatus.trainingLevel] >
        cardData.fluctuationStatus.cardLevel
    "
    class="dot bg-red-accent-3"
  />
  <p
    v-if="
      store.toBool(store.siteSettings.cardList.dot_releasePoint) &&
      cardData.fluctuationStatus.cardLevel > 0 &&
      getReleasePoint(cardData.rare, 'point') <=
        cardData.fluctuationStatus.releasePoint
    "
    class="dot bg-blue-accent-4"
  />
  <!-- ↓hover off↓ -->
  <v-card
    v-if="
      !store.toBool(store.siteSettings.cardList.hover) ||
      display.smAndDown.value
    "
    :color="moodColor[cardData.mood]"
    hover
    @click="handleClick"
  >
    <CardItem :card-data="cardData" :current-src="currentSrc" />
  </v-card>
  <!-- ↑hover off↑ -->

  <v-tooltip v-else location="bottom" open-delay="250">
    <template #activator="{ props: activatorProps }">
      <v-card
        v-bind="activatorProps"
        :color="moodColor[cardData.mood]"
        @click="handleClick"
      >
        <CardItem :card-data="cardData" :current-src="currentSrc" />
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
                  store.card[cardData.memberName][cardData.rare][cardData.ID]
                    .uniqueStatus.BP
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
          store.card[cardData.memberName][cardData.rare][cardData.ID].skill ??
          false
        "
      >
        <span class="mr-3">スキル</span>
        {{
          store.card[cardData.memberName][cardData.rare][cardData.ID].skill.name
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

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { useStateStore } from '@/stores/stateStore';
import { MAX_CARD_LEVEL } from '@/constants/cards';
import { getReleasePoint } from '@/constants/releasePoint';
import { makeMemberFullName } from '@/constants/memberNames';
import type { CardDataType } from '@/types/cardList';
import CardItem from './CardItem.vue';

const props = defineProps<{
  cardData: CardDataType;
}>();

const store = useStateStore();
const display = useDisplay();

const moodColor = {
  happy: '#EF8DC8',
  neutral: '#A9FCC7',
  melow: '#A1BAFA',
} as const;

const getCardParam = (
  paramKey:
    | 'releaseLevel'
    | 'cardLevel'
    | 'trainingLevel'
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
  return urls && urls[props.cardData.ID]?.after;
});

const currentSrc = computed(() => {
  return imageUrl.value ?? '';
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
