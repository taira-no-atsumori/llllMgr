<template>
  <v-responsive :aspect-ratio="16 / 9">
    <v-img
      class="h-100 w-100"
      :src="currentSrc"
      :alt="`${store.conversion(cardData.cardName)}_${conversionCardIdToMemberName(cardData.ID)}`"
      cover
    >
      <template #placeholder>
        <v-skeleton-loader type="image" class="h-100 w-100" />
      </template>
      <template #error>
        <v-img :src="noImage" cover class="h-100 w-100" />
      </template>
    </v-img>
  </v-responsive>

  <v-card-title
    class="d-flex align-center text-subtitle-2 px-2 pt-1 hamidashi"
    style="padding-bottom: 2px"
  >
    <img
      :src="store.getImagePath('icons/styleType', `icon_${cardData.styleType}`)"
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
          (store.card[cardData.memberName][cardData.rare][cardData.ID].skill ??
            false)
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
            store.card[cardData.memberName][cardData.rare][cardData.ID].rare,
          ) ||
          store.card[cardData.memberName][cardData.rare][cardData.ID]
            .specialAppeal === undefined
            ? '-'
            : `+${
                GRANDPRIX_BONUS.releaseLv[
                  store.card[cardData.memberName][cardData.rare][cardData.ID]
                    .rare
                ][getCardParam('releaseLevel') - 1] * 100
              }%`
        }}
      </v-col>
    </v-row>
  </v-card-text>
  <!-- ↑詳細表示↑ -->
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { conversionCardIdToMemberName } from '@/constants/memberNames';
import noImage from '@/assets/images/NO IMAGE_card.webp';
import type { CardDataType } from '@/types/cardList';

const props = defineProps<{
  cardData: CardDataType;
  currentSrc: string;
}>();

const store = useStateStore();

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
</script>

<style lang="scss" scoped>
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
