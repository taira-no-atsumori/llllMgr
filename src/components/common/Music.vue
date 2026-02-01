<template>
  <li>
    <v-card
      v-if="
        store.siteSettings.musicList.hover === 'false' || windowWidth <= 600
      "
      :color="attributeColor[musicData.attribute]"
      @click="handleClick"
    >
      <v-img
        :src="currentSrc"
        :alt="songTitle"
        aspect-ratio="1"
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
      <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">
        {{ songTitle }}
      </v-card-title>

      <v-divider class="mb-1 border-opacity-25" />

      <v-card-text class="pt-0 px-1 pb-1">
        <ul class="d-flex">
          <li class="skillIconArea mr-1">
            <img
              :src="
                store.getImagePath('icons/bonusSkill', musicData.bonusSkill)
              "
              :alt="musicData.bonusSkill"
            />
          </li>
          <li class="skillIconArea mr-1">
            <img
              :src="
                store.getImagePath(
                  'icons/attribute',
                  `icon_${musicData.attribute}`,
                )
              "
              :alt="musicData.attribute"
            />
          </li>
          <li class="skillIconArea mr-1">
            <img
              :src="
                store.getImagePath(
                  'icons/member',
                  `icon_SD_${musicData.center}`,
                )
              "
              :alt="musicData.center"
            />
          </li>
          <li class="align-self-center text-caption">
            MLv.{{ store.musicLevel[musicData.ID] }}
          </li>
        </ul>
      </v-card-text>
    </v-card>

    <v-tooltip v-else location="bottom">
      <template #activator="{ props: tooltipProps }">
        <v-card
          :color="attributeColor[musicData.attribute]"
          v-bind="tooltipProps"
          @click="handleClick"
        >
          <v-img
            :src="currentSrc"
            :alt="songTitle"
            aspect-ratio="1"
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
          <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">
            {{ songTitle }}
          </v-card-title>

          <v-divider class="mb-1 border-opacity-25" />

          <v-card-item class="pt-0 px-1 pb-1">
            <ul class="d-flex">
              <li class="skillIconArea mr-1">
                <img
                  :src="
                    store.getImagePath('icons/bonusSkill', musicData.bonusSkill)
                  "
                  :alt="musicData.bonusSkill"
                />
              </li>
              <li class="skillIconArea mr-1">
                <img
                  :src="
                    store.getImagePath(
                      'icons/attribute',
                      `icon_${musicData.attribute}`,
                    )
                  "
                  :alt="musicData.attribute"
                />
              </li>
              <li class="skillIconArea mr-1">
                <img
                  :src="
                    store.getImagePath(
                      'icons/member',
                      `icon_SD_${musicData.center}`,
                    )
                  "
                  :alt="musicData.center"
                />
              </li>
              <li class="align-self-center text-caption">
                MLv.{{ store.musicLevel[musicData.ID] }}
              </li>
            </ul>
          </v-card-item>
        </v-card>
      </template>
      <p class="mb-2">{{ songTitle }}</p>
      センター：{{ makeMemberFullName(musicData.center) }}<br />
      楽曲マスタリーLv.：{{ store.musicLevel[musicData.ID] }}<br />
      獲得ボーナススキル：{{ musicData.bonusSkill }} ×
      {{ Math.floor(store.musicLevel[musicData.ID] / 10) }}
    </v-tooltip>
  </li>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { makeMemberFullName } from '@/constants/memberNames';
import noImage from '@/assets/images/cdJacket/NO IMAGE.webp';
import type { MusicItem } from '@/types/musicList';

const props = defineProps<{
  musicData: MusicItem;
  songTitle: string;
  windowWidth: number;
}>();

const store = useStateStore();

const attributeColor: Record<string, string> = {
  smile: '#EF8DC8',
  pure: '#A9FCC7',
  cool: '#A1BAFA',
};

const imageUrl = computed(() => {
  const urls = store.imageCache['llllMgr_musicImageUrls'];
  return (urls && urls[props.musicData.ID]) || noImage;
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
  store.selectMusicTitle = props.songTitle;
  store.showModalEvent('setLeaningLevel');
};
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
