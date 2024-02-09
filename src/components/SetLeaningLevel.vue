<template>
  <v-container class="pa-0">
    <v-row no-gutters class="mb-3">
      <v-col cols="12">
        <h3 class="text-center">
          {{ store.selectMusicTitle }}<br>
          {{ store.musicList[store.selectMusicTitle].musicData.singer }}
        </h3>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col class="mb-3" cols="12" sm="6">
        <img :src="require(`@/assets/CD_jacket/${store.conversion(store.selectMusicTitle)}.jpg`)" :alt="store.selectMusicTitle" class="mb-2">

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>楽曲情報</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col cols="12" class="mb-1">
                  <v-row no-gutters>
                    <v-col cols="12">発売/発表日</v-col>
                    <v-col cols="12">{{ store.makeReleaseDate }}</v-col>
                  </v-row>
                </v-col>
                <v-col cols="12" class="mb-1" v-if="store.musicList[store.selectMusicTitle].musicData.numbering">
                  <v-row no-gutters>
                    <v-col cols="12">収録CD</v-col>
                    <v-col cols="12">{{ store.musicList[store.selectMusicTitle].musicData.numbering }}</v-col>
                  </v-row>
                </v-col>
                <v-col cols="12">
                  <v-row no-gutters>
                    <v-col cols="12">BPM</v-col>
                    <v-col cols="12">{{ store.musicList[store.selectMusicTitle].musicData.BPM.original }}</v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>

      <v-col cols="12" sm="6" class="pl-sm-3" style="font-size: 15px;">
        <div class="mb-3">
          <h4 class="subtitle">センター</h4>
          <div>
            <v-chip
              pill
              class="pl-0"
              :color="store.memberColor[store.musicList[store.selectMusicTitle].center]"
            >
              <v-avatar left>
                <v-img
                  :src="require(`@/assets/member_icon/icon_SD_${store.musicList[store.selectMusicTitle].center}.png`)"
                  width="30px"
                ></v-img>
              </v-avatar>
              <span class="ml-1">{{ store.makeFullName(store.musicList[store.selectMusicTitle].center) }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-2">
          <h4 class="subtitle">歌唱メンバー</h4>
          <div>
            <v-chip
              pill
              v-for="charactorName in store.musicList[store.selectMusicTitle].singingMembers"
              :key="charactorName"
              class="member"
              :color="store.memberColor[charactorName]"
            >
              <v-avatar left>
                <v-img
                  :src="require(`@/assets/member_icon/icon_SD_${charactorName}.png`)"
                  width="30px"
                ></v-img>
              </v-avatar>
              <span class="ml-1">{{ store.makeFullName(charactorName) }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb-3">
          <h4 class="subtitle">楽曲マスタリーLv.</h4>
          <v-row no-gutters class="text-center">
            <v-col>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level >= 10 ? store.musicList[store.selectMusicTitle].level - 10 : 0)"
                :disabled="store.musicList[store.selectMusicTitle].level === 0"
              >{{ store.musicList[store.selectMusicTitle].level >= 10 ? '-10' : store.musicList[store.selectMusicTitle].level === 0 ?  0 : `-${store.musicList[store.selectMusicTitle].level}` }}</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level - 1)"
                :disabled="store.musicList[store.selectMusicTitle].level === 0"
              >-1</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="align-self-center">
              {{ store.musicList[store.selectMusicTitle].level }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level + 1)"
                :disabled="store.musicList[store.selectMusicTitle].level === 30"
              >+1</v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col>
              <v-btn
                size="small"
                @click="store.valueChange('musicLevel', store.musicList[store.selectMusicTitle].level <= 20 ? store.musicList[store.selectMusicTitle].level + 10 : 30)"
                :disabled="store.musicList[store.selectMusicTitle].level === 30"
              >{{ store.musicList[store.selectMusicTitle].level  <= 20 ? '+10' : 30 - store.musicList[store.selectMusicTitle].level === 0 ? 0 : `+${30 - store.musicList[store.selectMusicTitle].level}`}}</v-btn>
            </v-col>
          </v-row>
        </div>
        <div>
          <h4 class="subtitle">獲得ボーナススキル</h4>
          <div>
            {{ store.musicList[store.selectMusicTitle].bonusSkill }} × {{ Math.floor(store.musicList[store.selectMusicTitle].level / 10) }}
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.member {
  padding-left: 0!important;
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
  margin: 0 0 8px 0;
}
</style>