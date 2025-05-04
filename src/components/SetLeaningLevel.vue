<template>
  <v-container class="pa-0">
    <h3 class="text-center mb-2">
      <v-tooltip location="bottom" v-if="store.musicList[store.selectMusicTitle].musicData.link !== ''">
        <template v-slot:activator="{ props }">
          <a
            :href="store.musicList[store.selectMusicTitle].musicData.link !== '' ? store.musicList[store.selectMusicTitle].musicData.link : 'javascript:void(0)'"
            target="_blank"
            v-bind="props"
            :class="`text-${store.isDarkMode ? 'white' : 'black'}`"
          >{{ store.selectMusicTitle }}</a>
        </template>
        YouTubeで試聴する
      </v-tooltip>
      <span v-else>{{ store.selectMusicTitle }}</span>
      <p>{{ store.musicList[store.selectMusicTitle].musicData.singer }}</p>
    </h3>

    <v-row no-gutters>
      <v-col class="mb-3" cols="12" sm="6">
        <v-img
          :lazy-src="store.getImagePath('CD_jacket', store.conversion(store.selectMusicTitle))"
          :src="store.getImagePath('CD_jacket', store.conversion(store.selectMusicTitle))"
          :alt="store.selectMusicTitle"
          class="mb-2"
        ></v-img>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>楽曲情報</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col cols="12" class="mb-1">
                  <h4>発売(発表)日</h4>
                  {{ store.makeReleaseDate }}
                </v-col>
                <v-col cols="12" class="mb-1" v-if="store.musicList[store.selectMusicTitle].musicData.numbering">
                  <h4>収録CD</h4>
                  {{ store.musicList[store.selectMusicTitle].musicData.numbering }}
                </v-col>
                <v-col cols="12" class="mb-1">
                  <h4>原曲BPM</h4>
                  {{ store.musicList[store.selectMusicTitle].musicData.BPM.original }}
                </v-col>
                <v-col cols="12" class="mb-1" v-if="store.musicList[store.selectMusicTitle].musicData.time > 0">
                  <h4>秒数</h4>
                  {{ store.musicList[store.selectMusicTitle].musicData.time }}
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" sm="6" class="pl-sm-3" style="font-size: 15px;">
        <div class="mb-2">
          <h4 class="subtitle">センター</h4>
          <div>
            <v-chip
              pill
              class="pl-0"
              :color="store.memberColor[store.musicList[store.selectMusicTitle].center]"
            >
              <v-avatar left>
                <v-img
                  :src="store.getImagePath('member_icon', `icon_SD_${store.musicList[store.selectMusicTitle].center}`)"
                  width="30px"
                ></v-img>
              </v-avatar>
              <span class="ml-1">{{ store.makeFullName(store.musicList[store.selectMusicTitle].center) }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-1">
          <h4 class="subtitle">歌唱メンバー</h4>
          <div>
            <v-chip
              pill
              v-for="memberName in store.musicList[store.selectMusicTitle].singingMembers"
              :key="memberName"
              class="member"
              :color="store.memberColor[memberName]"
            >
              <v-avatar left>
                <v-img
                  :src="store.getImagePath('member_icon', `icon_SD_${memberName}`)"
                  width="30px"
                ></v-img>
              </v-avatar>
              <span class="ml-1">{{ store.makeFullName(memberName) }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-3">
          <h4 class="subtitle">楽曲マスタリーLv.</h4>
          <div class="paramSetArea mt-1">
            <div>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level >= 10 ? store.musicList[store.selectMusicTitle].level - 10 : 0)"
                :disabled="store.musicList[store.selectMusicTitle].level === 0"
              >{{
                  store.musicList[store.selectMusicTitle].level >= 10 ?
                    '-10' :
                    store.musicList[store.selectMusicTitle].level === 0 ?
                      0 :
                      `-${store.musicList[store.selectMusicTitle].level}`
                }}
              </v-btn>
            </div>
            <div>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level - 1)"
                :disabled="store.musicList[store.selectMusicTitle].level === 0"
              >-1
              </v-btn>
            </div>
            <div>
              {{ store.musicList[store.selectMusicTitle].level }}
            </div>
            <div>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level + 1)"
                :disabled="store.musicList[store.selectMusicTitle].level === 50"
              >+1
              </v-btn>
            </div>
            <div>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level <= 40 ? store.musicList[store.selectMusicTitle].level + 10 : 50)"
                :disabled="store.musicList[store.selectMusicTitle].level === 50"
              >{{
                  store.musicList[store.selectMusicTitle].level <= 40 ?
                    '+10' :
                    50 - store.musicList[store.selectMusicTitle].level === 0 ?
                      0 :
                      `+${50 - store.musicList[store.selectMusicTitle].level}`
                }}
              </v-btn>
            </div>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="subtitle">獲得ボーナススキル</h4>
          <div class="d-flex flex-row align-center">
            <img
              :src="store.getImagePath('bonusSkill_icon', store.musicList[store.selectMusicTitle].bonusSkill)"
              :alt="store.musicList[store.selectMusicTitle].bonusSkill"
              class="mr-1"
              style="width: 30px; border-radius: 3px;"
            >
            {{ store.musicList[store.selectMusicTitle].bonusSkill }} × {{
              Math.floor(store.musicList[store.selectMusicTitle].level / 10)
            }}
          </div>
        </div>
        <div class="mb-1">
          <h4 class="subtitle">属性</h4>
          <div>
            <v-chip
              pill
              class="member"
              :color="attributeName[store.musicList[store.selectMusicTitle].attribute].color"
            >
              <v-avatar left>
                <v-img
                  :src="store.getImagePath('attribute_icon', `icon_${store.musicList[store.selectMusicTitle].attribute}`)"
                ></v-img>
              </v-avatar>
              <span class="ml-2">{{ attributeName[store.musicList[store.selectMusicTitle].attribute].name }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="subtitle">ゲーム内BPM</h4>
          <div>{{ store.musicList[store.selectMusicTitle].musicData.BPM.inGame }}</div>
        </div>
        <div v-if="store.musicList[store.selectMusicTitle].BHcount > 0">
          <h4 class="subtitle">ビートハート発生回数</h4>
          <div>{{ store.musicList[store.selectMusicTitle].BHcount }}</div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import {useStoreCounter} from '../stores/counter';

const store = useStoreCounter();
</script>

<script>
export default {
  data() {
    return {
      attributeName: {
        smile: {
          name: 'スマイル',
          color: 'pink'
        },
        cool: {
          name: 'クール',
          color: 'blue'
        },
        pure: {
          name: 'ピュア',
          color: 'green'
        }
      }
    };
  },
  created() {
  },
  computed: {},
  methods: {}
};
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