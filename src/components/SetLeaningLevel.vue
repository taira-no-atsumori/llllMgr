<template>
  <v-container style="padding: 0px;">
    <v-row no-gutters>
      <v-col>
        <h3 id="musicTitle" class="mb10">
          {{ store.selectMusicTitle }}<br>{{ store.musicList[store.selectMusicTitle].musicData.singer }}
        </h3>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col class="left" cols="12" sm="6">
        <img :src="require(`@/assets/CD_jacket/${store.selectMusicTitle}.jpg`)" :alt="store.selectMusicTitle">
      </v-col>
      <v-col class="right">
        <div class="mb10">
          <h4 class="subtitle">センター</h4>
          <div>
            <v-chip
              pill
              style="padding-left: 0;"
              :color="store.memberColor[store.musicList[store.selectMusicTitle].center]"
            >
              <v-avatar left>
                <v-img :src="require(`@/assets/member_icon/icon_SD_${store.musicList[store.selectMusicTitle].center}.png`)" width="30px"></v-img>
              </v-avatar>
              <span style="margin-left: 5px;">{{ store.charactorName[store.musicList[store.selectMusicTitle].center].first }} {{ store.charactorName[store.musicList[store.selectMusicTitle].center].last }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb5">
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
                <v-img :src="require(`@/assets/member_icon/icon_SD_${charactorName}.png`)" width="30px"></v-img>
              </v-avatar>
              <span style="margin-left: 5px;">{{ store.charactorName[charactorName].first }} {{ store.charactorName[charactorName].last }}</span>
            </v-chip>
          </div>
        </div>
        <div class="mb10">
          <h4 class="subtitle">楽曲マスタリーLv.</h4>
          <div class="sliderArea">
            <div>
              {{ store.musicList[store.selectMusicTitle].level }}
            </div>
            <v-btn x-small @click="store.valueChange('musicLevel', 0)">MIN</v-btn>
            <v-slider
              v-model="store.musicList[store.selectMusicTitle].level"
              class="sliderPadding"
              hide-details
              :min="0"
              :max="30"
              :step="1"
              @change="store.setMusicLevel"
            ></v-slider>
            <v-btn x-small @click="store.valueChange('musicLevel', 30)">MAX</v-btn>
          </div>
        </div>
        <div class="mb10">
          <h4 class="subtitle">獲得ボーナススキル</h4>
          <div>
            {{ store.musicList[store.selectMusicTitle].bonusSkill }} × {{ Math.floor(store.musicList[store.selectMusicTitle].level / 10) }}
          </div>
        </div>

        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>楽曲情報</v-expansion-panel-title>
            <v-expansion-panel-text>
              <dl>
                <div class="mb5" v-if="!store.musicList[store.selectMusicTitle].musicData.cover">
                  <dt>発売日</dt>
                  <dd>{{ store.makeReleaseDate() }}</dd>
                </div>
                <div class="mb5" v-if="!store.musicList[store.selectMusicTitle].musicData.cover">
                  <dt>収録CD</dt>
                  <dd>{{ store.musicList[store.selectMusicTitle].musicData.numbering }}</dd>
                </div>
                <div>
                  <dt>BPM</dt>
                  <dd>{{ store.musicList[store.selectMusicTitle].musicData.BPM }}</dd>
                </div>
              </dl>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
#musicTitle {
  text-align: center;
}

.member {
  padding-left: 0!important;
  margin: 0 10px 5px 0;
}

.left {
  width: 300px;
}

.right {
  width: 300px;
  margin: 0 0 0 10px;
  font-size: 15px;
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
  margin: 0 0 5px 0;
}

@media screen and (max-width: 600px) {
  .right {
    margin: 0 0 5px 0;
  }

  .left {
    margin-bottom: 10px;
  }

  .right, 
  .left {
    width: 100%;
  }
}
</style>