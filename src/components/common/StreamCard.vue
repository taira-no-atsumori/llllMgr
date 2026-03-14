<template>
  <v-badge
    :model-value="isToday(item)"
    :content="STREAM_LABEL_CONST[isLive(item) ? 'LIVE' : 'TODAY']"
    :color="isLive(item) ? 'red' : 'orange'"
    :offset-x="isLive(item) ? '56' : '33'"
    offset-y="-2"
    class="pt-3 d-block"
  >
    <v-card
      :color="`${item.type === 'FES' ? 'pink' : item.type === 'YT' ? 'red' : 'blue'}-lighten-3`"
      class="w-100"
    >
      <v-card-title class="d-flex align-center">
        <v-chip
          :color="
            item.type === 'FES'
              ? 'pink'
              : item.type === 'YT'
                ? 'red-accent-4'
                : 'blue'
          "
          :prepend-icon="`mdi-${
            item.type === 'WM'
              ? 'access-point'
              : item.type === 'YT'
                ? 'play-circle'
                : 'music'
          }`"
          variant="flat"
          :text="STREAM_LABEL_CONST[item.type]"
          density="compact"
          class="mr-2"
        />
        <p class="text-subtitle-1 font-weight-bold">
          {{ store.formatDate(item.startDate, 'ja') }}
        </p>
      </v-card-title>
      <v-card-text>
        <v-avatar
          v-for="m in item.member"
          :key="m"
          :image="store.getImagePath('icons/member', `icon_SD_${m}`)"
          class="mr-1"
          size="38"
        />
      </v-card-text>
    </v-card>
  </v-badge>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { STREAM_LABEL_CONST } from '@/constants/streamLabelConst';
import type { StreamInfoItem } from '@/types/stream';

defineProps<{
  item: StreamInfoItem;
}>();

/**
 * 配信中判定処理
 *
 * @param item 配信情報データ
 * @returns 配信中 = true | 配信外 = false
 */
const isLive = (item: StreamInfoItem) => {
  const now = new Date();
  return now >= item.startDate && now <= item.endDate;
};

/**
 * 配信日判定処理
 *
 * @param item 配信情報データ
 * @returns 配信日が今日 = true | 配信日が今日以外 = false
 */
const isToday = (item: StreamInfoItem) => {
  const now = new Date();
  const startDate = item.startDate;
  return (
    now.getFullYear() === startDate.getFullYear() &&
    now.getMonth() === startDate.getMonth() &&
    now.getDate() === startDate.getDate()
  );
};

const store = useStateStore();
</script>
