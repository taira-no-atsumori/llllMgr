<template>
  <v-carousel
    :model-value="props.modelValue"
    hide-delimiters
    :show-arrows="display.smAndDown.value ? 'hover' : false"
    style="max-width: 800px; height: auto"
    cycle
    @update:model-value="emit('update:modelValue', $event)"
  >
    <v-carousel-item
      v-for="(event, i) in props.outputEventList"
      :key="i"
      class="text-center"
    >
      <v-card variant="flat" rounded="0">
        <v-responsive v-if="event.type === 'other'" :aspect-ratio="16 / 9">
          <v-img
            class="white--text align-end text-center h-100"
            :src="event.imageUrl"
            cover
            eager
          >
            <template #placeholder>
              <v-skeleton-loader type="image" class="h-100 w-100" />
            </template>
          </v-img>
        </v-responsive>
        <a v-else :href="event.link" target="_blank" class="mainVisual">
          <v-responsive :aspect-ratio="16 / 9">
            <v-img
              class="white--text align-end text-center h-100"
              :src="event.imageUrl"
              cover
              eager
            >
              <template #placeholder>
                <v-skeleton-loader type="image" class="h-100 w-100" />
              </template>
            </v-img>
          </v-responsive>
        </a>
        <v-card-title class="text-left">
          {{ event.title }}
          <div v-if="event.type === 'other'">
            {{ event.text }}
          </div>
          <div v-else-if="event.state === 'prev'">
            {{ event.text }}まで<span class="d-inline-block">
              あと
              <template v-if="event.count.day > 0">
                <b class="text-red">{{ event.count.day }}</b>
                日
              </template>
              <template v-else>
                <b class="text-red">{{ event.count.time }}</b>
                時間
              </template>
            </span>
          </div>
          <div v-else>
            {{ event.text }}
            <span class="d-inline-block">
              <b class="text-red">
                <span v-if="event.type === 'movie'">公開</span>
                <span v-else>開催</span>
                <span v-if="event.type === 'live'">日</span>
                <span v-else>中</span>
              </b>
            </span>
          </div>
        </v-card-title>
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup lang="ts">
import type { EventItem } from '@/types/event';
import { useDisplay } from 'vuetify';

const display = useDisplay();

const props = defineProps<{
  outputEventList: EventItem[];
  modelValue: number;
}>();

const emit = defineEmits(['update:modelValue']);
</script>

<style lang="scss" scoped>
.mainVisual {
  &:hover {
    opacity: 0.75;
  }
}
</style>
