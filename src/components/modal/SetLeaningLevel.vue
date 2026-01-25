<template>
  <v-container class="pa-0">
    <h3 class="text-center mb-2">
      <v-tooltip location="bottom">
        <template #activator="{ props }">
          <a
            :href="`https://wikiwiki.jp/llll_wiki/${store.selectMusicTitle
              .replaceAll('（', '(')
              .replaceAll('）', ')')}`"
            target="_blank"
            v-bind="props"
            :class="`text-${store.isDarkMode ? 'white' : 'black'}`"
          >
            {{ store.selectMusicTitle }}
          </a>
        </template>
        Wikiの楽曲ページを見る
      </v-tooltip>
      <p v-if="selectMusicData">{{ selectMusicData.musicData.singer }}</p>
    </h3>

    <v-row v-if="selectMusicData" no-gutters>
      <v-col cols="12" sm="6" class="mb-3 mb-sm-0">
        <v-img
          :src="firebaseImage || noImage"
          :alt="store.selectMusicTitle"
          aspect-ratio="1"
          cover
          class="mb-2"
        >
          <template #placeholder>
            <v-skeleton-loader type="image" class="h-100 w-100" />
          </template>
          <template #error>
            <v-img :src="noImage" aspect-ratio="1" cover class="h-100 w-100" />
          </template>
        </v-img>

        <div v-if="selectMusicData?.scoreData">
          <h4 class="subtitle">楽曲難易度・コンボ数</h4>

          <v-table density="compact" class="mb-2">
            <thead>
              <tr>
                <th></th>
                <template
                  v-for="(difficulty, key) in selectMusicData.scoreData
                    .difficultyLevel"
                  :key="key"
                >
                  <th class="px-1 text-center">{{ key }}</th>
                </template>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>難易度</td>
                <template
                  v-for="difficulty in selectMusicData.scoreData
                    .difficultyLevel"
                  :key="difficulty"
                >
                  <td class="px-1 text-center">{{ difficulty }}</td>
                </template>
              </tr>
              <tr>
                <td>コンボ数</td>
                <template
                  v-for="maxCombo in selectMusicData.scoreData.maxCombo"
                  :key="maxCombo"
                >
                  <td class="px-1 text-center">{{ maxCombo }}</td>
                </template>
              </tr>
            </tbody>
          </v-table>
        </div>
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>楽曲情報</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col cols="12" class="mb-1">
                  <h4>発売(発表)日</h4>
                  {{ releaseDate }}
                </v-col>
                <v-col
                  v-if="selectMusicData.musicData.numbering"
                  cols="12"
                  class="mb-1"
                >
                  <h4>収録CD</h4>
                  {{ selectMusicData.musicData.numbering }}
                </v-col>
                <v-col cols="12" class="mb-1">
                  <h4>原曲BPM</h4>
                  {{ selectMusicData.musicData.BPM.original }}
                </v-col>
                <v-col
                  v-if="selectMusicData.musicData.time > 0"
                  cols="12"
                  class="mb-1"
                >
                  <h4>秒数</h4>
                  {{ selectMusicData.musicData.time }}
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" sm="6" class="pl-sm-3" style="font-size: 15px">
        <div class="mb-2">
          <h4 class="subtitle">センター</h4>
          <div>
            <v-chip
              pill
              class="pl-0"
              :color="MEMBER_COLOR[selectMusicData.center]"
            >
              <v-avatar left>
                <v-img
                  :src="
                    store.getImagePath(
                      'icons/member',
                      `icon_SD_${selectMusicData.center}`,
                    )
                  "
                  width="30px"
                  eager
                />
              </v-avatar>
              <span class="ml-1">{{
                makeMemberFullName(selectMusicData.center)
              }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-1">
          <h4 class="subtitle">歌唱メンバー</h4>
          <div>
            <v-chip
              v-for="memberName in selectMusicData.singingMembers"
              :key="memberName"
              pill
              class="member"
              :color="MEMBER_COLOR[memberName]"
            >
              <v-avatar left>
                <v-img
                  :src="
                    store.getImagePath('icons/member', `icon_SD_${memberName}`)
                  "
                  width="30px"
                  eager
                />
              </v-avatar>
              <span class="ml-1">{{ makeMemberFullName(memberName) }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-3">
          <h4 class="subtitle">楽曲マスタリーLv.</h4>
          <div class="paramSetArea mt-1">
            <div>
              <v-btn
                size="small"
                :disabled="musicLevel === initMusicLevel"
                @click="
                  store.valueChange(
                    'musicLevel',
                    musicLevel >= 10 + initMusicLevel
                      ? musicLevel - 10
                      : musicLevel - (musicLevel - initMusicLevel),
                  )
                "
                >{{
                  musicLevel >= 10 + initMusicLevel
                    ? '-10'
                    : musicLevel === initMusicLevel
                      ? 0
                      : `-${musicLevel - initMusicLevel}`
                }}
              </v-btn>
            </div>
            <div>
              <v-btn
                text="-1"
                size="small"
                :disabled="musicLevel === initMusicLevel"
                @click="store.valueChange('musicLevel', musicLevel - 1)"
              />
            </div>
            <div>
              {{ musicLevel }}
            </div>
            <div>
              <v-btn
                text="+1"
                size="small"
                :disabled="musicLevel === 50"
                @click="store.valueChange('musicLevel', musicLevel + 1)"
              />
            </div>
            <div>
              <v-btn
                size="small"
                :disabled="musicLevel === 50"
                @click="
                  store.valueChange(
                    'musicLevel',
                    musicLevel <= 40 ? musicLevel + 10 : 50,
                  )
                "
                >{{
                  musicLevel <= 40
                    ? '+10'
                    : 50 - musicLevel === 0
                      ? 0
                      : `+${50 - musicLevel}`
                }}
              </v-btn>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="subtitle">獲得ボーナススキル</h4>
          <div class="d-flex flex-row align-center">
            <img
              :src="
                store.getImagePath(
                  'icons/bonusSkill',
                  selectMusicData.bonusSkill,
                )
              "
              :alt="selectMusicData.bonusSkill"
              class="mr-1"
              style="width: 30px; border-radius: 3px"
            />
            {{ selectMusicData.bonusSkill }} × {{ Math.floor(musicLevel / 10) }}
          </div>
        </div>
        <div class="mb-1">
          <h4 class="subtitle">属性</h4>
          <div>
            <v-chip
              pill
              class="member"
              :color="attributeName[selectMusicData.attribute].color"
            >
              <v-avatar left>
                <v-img
                  :src="
                    store.getImagePath(
                      'icons/attribute',
                      `icon_${selectMusicData.attribute}`,
                    )
                  "
                  eager
                />
              </v-avatar>
              <span class="ml-2">{{
                attributeName[selectMusicData.attribute].name
              }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="subtitle">ゲーム内BPM</h4>
          <div>{{ selectMusicData.musicData.BPM.inGame }}</div>
        </div>
        <div v-if="selectMusicData.BHcount > 0">
          <h4 class="subtitle">ビートハート発生回数</h4>
          <div>{{ selectMusicData.BHcount }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { makeMemberFullName } from '@/constants/memberNames';
import { MEMBER_COLOR } from '@/constants/colorConst';
import { ATTRIBUTE } from '@/constants/music';
// import { MUSIC_LIST } from '@/constants/musicList';
// import type { MusicItem } from '@/types/musicList';
import { useMusicData } from '@/composables/useMusicData';
import noImage from '@/assets/images/cdJacket/NO IMAGE.webp';

const store = useStateStore();
const attributeName = {
  [ATTRIBUTE.SMILE.en]: {
    name: ATTRIBUTE.SMILE.ja,
    color: 'pink',
  },
  [ATTRIBUTE.COOL.en]: {
    name: ATTRIBUTE.COOL.ja,
    color: 'blue',
  },
  [ATTRIBUTE.PURE.en]: {
    name: ATTRIBUTE.PURE.ja,
    color: 'green',
  },
};

const { dbImageUrls, initMusicData, getMusicIdByTitle } = useMusicData();

const selectMusicData = computed(() => {
  const id = getMusicIdByTitle(store.selectMusicTitle);
  return id ? store.musicList[id] : undefined;
});

const initMusicLevel = computed(() => {
  return selectMusicData.value?.level ?? 0;
});

const musicLevel = computed(() => {
  return store.musicLevel[getMusicIdByTitle(store.selectMusicTitle)];
});

const releaseDate = computed(() => {
  const data = selectMusicData.value;

  if (!data) {
    return '';
  }

  const date = data.musicData.releaseDate;

  return `${date.year}年${date.month}月${date.date}日(${
    ['日', '月', '火', '水', '木', '金', '土'][
      new Date(date.year, date.month - 1, date.date).getDay()
    ]
  })`;
});

const firebaseImage = computed(() => {
  const id = getMusicIdByTitle(store.selectMusicTitle);
  return (id && dbImageUrls.value[id]) || '';
});

onMounted(() => {
  // 念のため初期化を呼ぶ（MusicListを経由せず直接開かれた場合などのため）
  initMusicData(store.isDev);
});
</script>

<style lang="scss" scoped>
.member {
  padding-left: 0 !important;
  margin: 0 10px 5px 0;
}

img {
  width: 100%;
}

.subtitle {
  display: inline-block;
  color: #fff;
  background: #e5762c;
  padding: 2px 10px 2px 5px;
  border-radius: 0 15px 15px 0;
  margin: 0 0 4px 0;
}
</style>
