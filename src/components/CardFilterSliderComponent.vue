<template>
  <div class="d-flex mb-9">
    {{ label }}
    <v-spacer></v-spacer>
    <v-btn
      density="compact"
      elevation="1"
      @click="store.resetMusicFilter(resetMusicFilterName)"
      class="px-2"
    >
      リセット
    </v-btn>
  </div>
  <div class="px-1">
    <v-range-slider
      hide-details
      v-model="store.search.cardList[resetMusicFilterName]"
      :max="max"
      :min="min"
      thumb-label="always"
      step="1"
      color="pink"
      thumb-color="pink"
      class="px-2"
    ></v-range-slider>
  </div>
</template>

<script setup lang="ts">
import { useStoreCounter } from '@/stores/counter';

const props = defineProps<{
  label: string;
  resetMusicFilterName: string;
  min: number;
  max: number;
}>();

const store = useStoreCounter();
</script>
