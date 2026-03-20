<template>
  <v-card
    v-if="
      store.siteSettings.musicList.hover === 'false' || display.smAndDown.value
    "
    :color="attributeColor[musicData.attribute]"
    hover
    @click="handleClick"
  >
    <MusicItem
      :music-data="musicData"
      :song-title="songTitle"
      :current-src="currentSrc"
      content-tag="text"
    />
  </v-card>

  <v-tooltip v-else location="bottom">
    <template #activator="{ props: tooltipProps }">
      <v-card
        :color="attributeColor[musicData.attribute]"
        v-bind="tooltipProps"
        @click="handleClick"
      >
        <MusicItem
          :music-data="musicData"
          :song-title="songTitle"
          :current-src="currentSrc"
          content-tag="item"
        />
      </v-card>
    </template>
    <p class="mb-2">{{ songTitle }}</p>
    センター：{{ makeMemberFullName(musicData.center) }}<br />
    楽曲マスタリーLv.：{{ store.musicLevel[musicData.ID] }}<br />
    獲得ボーナススキル：{{ musicData.bonusSkill }} ×
    {{ Math.floor(store.musicLevel[musicData.ID] / 10) }}
  </v-tooltip>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { useStateStore } from '@/stores/stateStore';
import { makeMemberFullName } from '@/constants/memberNames';
import type { MusicItemData } from '@/types/musicList';
import MusicItem from './MusicItem.vue';

const props = defineProps<{
  musicData: MusicItemData;
  songTitle: string;
}>();

const store = useStateStore();
const display = useDisplay();

const attributeColor: Record<string, string> = {
  smile: '#EF8DC8',
  pure: '#A9FCC7',
  cool: '#A1BAFA',
};

const imageUrl = computed(() => {
  const urls = store.imageCache['llllMgr_musicImageUrls'];
  return urls && urls[props.musicData.ID];
});

const currentSrc = computed(() => {
  return imageUrl.value ?? '';
});

const handleClick = () => {
  store.selectMusicTitle = props.songTitle;
  store.showModalEvent('setLeaningLevel');
};
</script>
