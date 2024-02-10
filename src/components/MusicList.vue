<template>
  <v-container fluid class="px-2 pt-2 pb-0">
    <v-row no-gutters class="mb-3">
      <v-col cols="12" class="mb-2">
        <h1>MUSIC LIST ～ 楽曲一覧 / 楽曲マスタリーレベル設定 ～</h1>
      </v-col>
      <v-col cols="12" class="mb-2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
            <v-expansion-panel-text>
              リンクラに実装されている楽曲一覧です。<br>
              各ジャケットをクリックすると、楽曲の詳細が見られます。<br>
              詳細画面に設定した楽曲マスタリーLv.は、絞り込みの下に表示されます。
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col cols="12">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-icon class="mr-2">mdi-filter</v-icon>絞り込み
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  sm="3"
                  class="pr-2 mb-3 mb-sm-0"
                >
                  <h3 class="mb-2">獲得ボーナススキルで絞り込み</h3>
                  <v-select
                    v-model="selectBonusSkillList"
                    :items="bonusSkillList"
                    clearable
                    color="pink"
                    hint="絞り込みたい獲得ボーナススキルを選んでください"
                    label="獲得ボーナススキル"
                    multiple
                    persistent-hint
                    variant="outlined"
                  >
                    <template v-slot:selection="{ item }">
                      <v-img
                        :src="require(`@/assets/${item.title}.png`)"
                        style="width: 25px"
                      ></v-img>
                    </template>
                    <template v-slot:item="{ item }">
                      <v-list-item
                        :title="item.title"
                        @click="selectSkill(item.title)"
                      >
                        <template v-slot:prepend>
                          <v-checkbox-btn
                            color="pink"
                            :model-value="selectBonusSkillList.some((elm) => elm === item.title)"
                          ></v-checkbox-btn>
                          <v-img
                            :src="require(`@/assets/${item.title}.png`)"
                            :alt="item.title"
                            class="mr-2"
                            style="width: 40px"
                          ></v-img>
                        </template>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>

                <v-col
                  cols="12"
                  sm="3"
                  class="px-sm-2 mb-3 mb-sm-0"
                >
                  <h3 class="mb-2">センターで絞り込み</h3>
                  <v-select
                    v-model="center_ja"
                    clearable
                    label="センター"
                    :items="memberNameList"
                    variant="outlined"
                    color="pink"
                    hint="絞り込みたいセンターメンバーを選んでください"
                    persistent-hint
                    @click:clear="selectCenter(store, null)"
                  >
                    <template v-slot:item="{ item }">
                      <v-list-item
                        :title="store.makeFullName(item.title)"
                        @click="selectCenter(store, item.title)"
                      >
                        <template v-slot:prepend>
                          <v-img
                            :src="require(`@/assets/member_icon/icon_SD_${item.title}.png`)"
                            class="icon member"
                          ></v-img>
                        </template>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>

                <v-col
                  cols="12"
                  sm="3"
                  class="px-sm-2 mb-3 mb-sm-0"
                >
                  <h3>マスタリーLv.で絞り込み</h3>
                  <v-range-slider
                    v-model="masteryLv"
                    max="30"
                    min="0"
                    thumb-label="always"
                    step="1"
                    color="pink"
                    thumb-color="pink"
                    density="compact"
                    class="px-2 mt-8"
                    messages="絞り込みたいマスタリーLv.の範囲を設定してください"
                  ></v-range-slider>
                </v-col>

                <v-col
                  cols="12"
                  sm="3"
                  class="pl-sm-2"
                >
                  <h3 class="mb-2">曲名で絞り込み</h3>
                  <v-text-field
                    v-model="inputMusicTitle"
                    clearable
                    color="pink"
                    label="曲名"
                    messages="絞り込みたい曲をひらがなで入力してください"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <h3 class="mb-1">各メンバーのボーナス</h3>
      </v-col>
      <v-col
        v-for="(arr, memberName) in store.charactorName"
        :key="memberName"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        class="text-center mb-2"
      >
        <v-row no-gutters>
          <v-col
            v-resize="onResize"
            cols="4"
            sm="12"
            :class="`d-flex flex-row align-center ${windowSize.w > 600 ? 'justify-center mb-1' : ''}`"
          >
            <h4 class="d-flex flex-row align-center">
              <img
                :src="require(`@/assets/member_icon/icon_SD_${memberName}.png`)"
                style="width: 35px;"
              >
              <span class="pt-1 pl-1">{{ store.makeFullName(memberName) }}</span>
            </h4>
          </v-col>
          <v-col
            cols="8"
            sm="12"
            class="pl-3 px-sm-2"
          >
            <div class="mb-1" style="font-size: 14px;">
              合計マスタリーレベル {{ store.makeTotalMastaryLv(memberName) }}<br>
              (ハート回収時、LOVE値+{{ (Math.floor((store.makeTotalMastaryLv(memberName) * 0.05) * 100) / 100).toFixed(2) }}%)
            </div>
            <p class="font-weight-bold mb-2 subtitle">獲得ボーナススキル</p>
            <v-row no-gutters>
              <v-col
                cols="3"
                v-for="skillName in bonusSkillList"
                :key="skillName"
                class="d-flex flex-row justify-center align-center mb-1"
              >
                <img
                  :src="require(`@/assets/${skillName}.png`)"
                  style="width: 30px;"
                >
                <span class="pt-1" style="font-size: 15px;"><span style="padding: 0 1px;">×</span>{{ store.memberData.centerList[memberName].bonusSkill[skillName] }}</span>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        
        <v-divider class="mt-1"></v-divider>
      </v-col>
    </v-row>
  </v-container>

  <dl id="CDJaketArea">
    <div
      class="CDJaketInnerArea"
      v-for="(ary, songTitle) in makeMusicList(store)"
      :key="ary"
      @click="store.showModalEvent('setLeaningLevel'); store.selectMusic(songTitle)"
    >
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <div v-bind="props">
            <p><img :src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.jpg`)" :alt="songTitle" class="songJacket"></p>
          </div>
        </template>
        <p class="mb-2">{{ songTitle }}</p>
        センター：{{ store.makeFullName(ary.center) }}<br>
        楽曲マスタリーLv.：{{ ary.level }}<br>
        獲得ボーナススキル：{{ ary.bonusSkill }} × {{ Math.floor(ary.level / 10)}}
      </v-tooltip>
      <dt class="songTitle mb-2 hamidashi">{{ songTitle }}</dt>
      <dd>獲得ボーナススキル:<img :src="require(`@/assets/${ary.bonusSkill}.png`)" :alt="ary.bonusSkill" class="skillIcon"></dd>
    </div>
    <div v-if="Object.keys(makeMusicList(store)).length === 0">見つかりませんでした…</div>
  </dl>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
  const memberNameList = [];

  for (const memberName in store.charactorName) {
    memberNameList.push(memberName);
  }
</script>

<script>
export default {
  name: 'MusicList',
  components: {},
  data() {
    return {
      windowSize: {
        w: 0,
        h: 0,
      },
      inputMusicTitle: null,
      masteryLv: [0, 30],
      center_en: null,
      center_ja: null,
      bonusSkillList: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
      selectBonusSkillList: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス']
    }
  },
  created() {},
  computed: {
    makeMusicList() {
      return (store) => {
        const list = {};
        let targetMusicList;

        for (const musicTitle in store.musicList) {
          targetMusicList = store.musicList[musicTitle];

          if (typeof targetMusicList.level !== 'number') {
            targetMusicList.level = 0;
          }

          if (targetMusicList.level < this.masteryLv[0] || targetMusicList.level > this.masteryLv[1]) {
            continue;
          }

          if (this.inputMusicTitle && !targetMusicList.musicData.kana.includes(this.inputMusicTitle)) {
            continue;
          }

          for (const skillName of this.selectBonusSkillList) {
            if (this.center_en !== null && targetMusicList.center !== this.center_en) {
              continue;
            }

            if (targetMusicList.bonusSkill === skillName) {
              list[musicTitle] = targetMusicList;
            }
          }
        }

        return list;
      }
    }
  },
  mounted() {
    this.onResize();
  },
  methods: {
    selectCenter(store, select) {
      this.center_en = select;
      this.center_ja = select === null ? null : store.makeFullName(select);
    },
    selectSkill(selector) {
      if (this.selectBonusSkillList.some((x) => x === selector)) {
        const result = [];

        for (const skill of this.selectBonusSkillList) {
          if (skill !== selector) {
            result.push(skill);
          }
        }

        this.selectBonusSkillList = result;
      } else {
        this.selectBonusSkillList.push(selector);
      }
    },
    onResize() {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#CDJaketArea {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
}

.CDJaketInnerArea {
  width: 150px;
  height: 100%;
  margin: 0 5px 5px 5px;
  cursor: pointer;
}

.songTitle {
  border: 2px solid #000;
  border-radius: 5px;
  padding: 3px;
  margin-bottom: 5px;
  text-align: center;
}

.skillIcon {
  width: 35px;
}

.songJacket {
  width: 150px;
}

.member {
  display: inline-block;
  margin-right: 10px;
}

img {
  width: 100%;
}

.icon {
  margin-right: 5px;

  &.member {
    width: 35px;
  }
}

.subtitle {
  color: #fff;
  background: #e5762c;
  border-radius: 15px;
  font-size: 14px;
}

@media screen and (max-width: 600px) {
  .CDJaketInnerArea {
    width: 47%;
    height: 100%;
    margin: 0 1.5% 5px 1.5%;
  }

  .songTitle {
    border: 2px solid #000;
    border-radius: 5px;
    padding: 3px;
    margin-bottom: 5px;
    text-align: center;
  }

  .skillIcon {
    width: 35px;
  }

  .songJacket {
    width: 100%;
  }
}
</style>