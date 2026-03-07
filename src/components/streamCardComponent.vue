<template>
  <v-card :color="`${item.type === 'FES' ? 'pink' : 'blue'}-lighten-3`">
    <v-card-title class="d-flex align-center">
      <v-chip
        :color="isLive(item) ? 'red' : item.type === 'FES' ? 'pink' : 'blue'"
        :prepend-icon="`mdi-${
          isLive(item)
            ? 'broadcast'
            : item.type === 'WM'
              ? 'access-point'
              : 'music'
        }`"
        variant="flat"
        :text="isLive(item) ? STREAM_CONST.LIVE : STREAM_CONST[item.type]"
        density="compact"
        class="mr-2"
      />
      <p class="text-subtitle-1 font-weight-bold">
        {{ store.formatDate(item.startDate) }}
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
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { STREAM_CONST } from '@/constants/streamConst';
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

const store = useStateStore();
</script>
