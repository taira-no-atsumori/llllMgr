<template>
  <div class="d-flex mb-9">
    {{ props.label }}

    <v-spacer />

    <v-btn
      density="compact"
      elevation="1"
      text="Reset"
      class="px-2"
      @click="store.resetMusicFilter(props.resetMusicFilterName)"
    />
  </div>
  <div class="px-1">
    <v-range-slider
      v-model="store.search.cardList[props.resetMusicFilterName]"
      hide-details
      :max="props.max"
      :min="props.min"
      thumb-label="always"
      step="1"
      color="pink"
      thumb-color="pink"
      class="px-2"
    />
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';

const props = defineProps<{
  label: string;
  resetMusicFilterName: string;
  min: number;
  max: number;
}>();

const store = useStateStore();
</script>
