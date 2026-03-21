<template>
  <v-responsive :aspect-ratio="1">
    <v-img class="h-100 w-100" :src="currentSrc" :alt="songTitle" cover>
      <template #placeholder>
        <v-skeleton-loader type="image" class="h-100 w-100" />
      </template>
      <template #error>
        <v-img :src="noImage" cover class="h-100 w-100" />
      </template>
    </v-img>
  </v-responsive>

  <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">
    {{ songTitle }}
  </v-card-title>

  <v-divider class="mb-1 border-opacity-25" />

  <v-card-text v-if="contentTag === 'text'" class="pt-0 px-1 pb-1">
    <ul class="d-flex">
      <li class="skillIconArea mr-1">
        <img
          :src="store.getImagePath('icons/bonusSkill', musicData.bonusSkill)"
          :alt="musicData.bonusSkill"
        />
      </li>
      <li class="skillIconArea mr-1">
        <img
          :src="
            store.getImagePath('icons/attribute', `icon_${musicData.attribute}`)
          "
          :alt="musicData.attribute"
        />
      </li>
      <li class="skillIconArea mr-1">
        <img
          :src="
            store.getImagePath('icons/member', `icon_SD_${musicData.center}`)
          "
          :alt="musicData.center"
        />
      </li>
      <li class="align-self-center text-caption">
        MLv.{{ store.musicLevel[musicData.ID] }}
      </li>
    </ul>
  </v-card-text>

  <v-card-item v-else class="pt-0 px-1 pb-1">
    <ul class="d-flex">
      <li class="skillIconArea mr-1">
        <img
          :src="store.getImagePath('icons/bonusSkill', musicData.bonusSkill)"
          :alt="musicData.bonusSkill"
        />
      </li>
      <li class="skillIconArea mr-1">
        <img
          :src="
            store.getImagePath('icons/attribute', `icon_${musicData.attribute}`)
          "
          :alt="musicData.attribute"
        />
      </li>
      <li class="skillIconArea mr-1">
        <img
          :src="
            store.getImagePath('icons/member', `icon_SD_${musicData.center}`)
          "
          :alt="musicData.center"
        />
      </li>
      <li class="align-self-center text-caption">
        MLv.{{ store.musicLevel[musicData.ID] }}
      </li>
    </ul>
  </v-card-item>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import noImage from '@/assets/images/NO IMAGE_music.webp';
import type { MusicItemData } from '@/types/musicList';

defineProps<{
  musicData: MusicItemData;
  songTitle: string;
  currentSrc: string;
  contentTag: 'text' | 'item';
}>();

const store = useStateStore();
</script>

<style lang="scss" scoped>
.skillIconArea {
  width: 28px;
  height: 28px;

  img {
    width: 100%;
    border-radius: 3px;
  }
}
</style>
