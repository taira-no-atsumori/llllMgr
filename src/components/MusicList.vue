<template>
  <v-container fluid class="pa-2">
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
            <v-expansion-panel-title><v-icon class="mr-2">mdi-filter</v-icon>絞り込み</v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col
                  cols="12"
                  sm="4"
                  class="pr-2 mb-3 mb-sm-0"
                >
                  <h3 class="mb-2">獲得ボーナススキルで絞り込み</h3>
                  <v-select
                    v-model="selectBonusSkillList"
                    clearable
                    label="獲得ボーナススキル"
                    :items="bonusSkillList"
                    variant="outlined"
                    color="pink"
                    hint="獲得ボーナススキルを選んでください"
                    persistent-hint
                    multiple
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
                  sm="4"
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
                    hint="センターのメンバーを選んでください"
                    persistent-hint
                    @click:clear="selectCenter(store, null)"
                  >
                    <!--<template v-slot:selection="{ item, index }">
                      <v-chip
                        :color="store.memberColor[Object.keys(store.charactorName)[index]]"
                        class="pl-0"
                      >
                        <v-avatar left class="pr-2">
                          <v-img :src="require(`@/assets/member_icon/icon_SD_${Object.keys(store.charactorName)[index]}.png`)"></v-img>
                        </v-avatar>
                        {{ item.title }}
                      </v-chip>
                    </template>-->
                    <template v-slot:item="{ item }">
                      <v-list-item
                        :title="makeName(store, item.title)"
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
                  sm="4"
                  class="pl-sm-2"
                >
                  <h3 class="mb-2">マスタリーレベルで絞り込み</h3>
                  <v-range-slider
                    v-model="masteryLv"
                    max="30"
                    min="0"
                    thumb-label="always"
                    step="1"
                    color="pink"
                    thumb-color="pink"
                    hide-details
                    class="px-2 mt-9"
                  ></v-range-slider>
                </v-col>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col
        v-for="(arr, memberName) in store.charactorName"
        :key="memberName"
        cols="12"
        sm="6"
        md="4"
        lg="2"
        xl="2"
        class="text-center"
      >
        <v-sheet>
          <img
            :src="require(`@/assets/member_icon/icon_SD_${memberName}.png`)"
            class="mr-1"
            style="width: 35px;"
          >合計マスタリーLv. {{ store.makeTotalMastaryLv(memberName) }}
          <p>
            <span
              v-for="skillName in bonusSkillList"
              :key="skillName"
              class="mr-1"
            >
              <img
                :src="require(`@/assets/${skillName}.png`)"
                style="width: 30px;"
              >×{{ store.memberData.centerList[memberName].bonusSkill[skillName] }}
            </span>
          </p>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
  <v-divider class="mb-2"></v-divider>
  <dl>
    <div
      v-for="(ary, songTitle) in makeMusicList(store)"
      :key="ary"
      @click="store.showModalEvent('setLeaningLevel'); store.selectMusic(songTitle)"
    >
      <p><img :src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.jpg`)" :alt="songTitle" class="songJacket"></p>
      <dt class="mb-2">{{ songTitle }}</dt>
      <dd>獲得ボーナススキル:<img :src="require(`@/assets/${ary.bonusSkill}.png`)" :alt="ary.bonusSkill"></dd>
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
      masteryLv: [0, 30],
      center_en: null,
      center_ja: null,
      bonusSkillList: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス'],
      selectBonusSkillList: ['ビートハートアップ', 'ボルテージアップ', 'メンタルリカバー', 'LOVEボーナス']
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
  methods: {
    selectCenter(store, select) {
      this.center_en = select;
      this.center_ja = select === null ? null : this.makeName(store, select);
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
    makeName(store, select) {
      return `${store.charactorName[select].first} ${store.charactorName[select].last}`;
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;

  div {
    width: 150px;
    height: 100%;
    margin: 0 5px 10px 5px;
    cursor: pointer;

    dt {
      border: 2px solid #000;
      border-radius: 5px;
      padding: 3px;
      margin-bottom: 5px;
      text-align: center;
    }

    dd {
      img {
        width: 35px;
      }
    }
  }
}

.songJacket {
  width: 150px;
}

@media screen and (max-width: 600px) {
  dl {
    div {
      width: 47%;
      height: 100%;
      margin: 0 1.5% 10px 1.5%;

      dt {
        border: 2px solid #000;
        border-radius: 5px;
        padding: 3px;
        margin-bottom: 5px;
        text-align: center;
      }

      dd {
        img {
          width: 35px;
        }
      }
    }
  }

  .songJacket {
    width: 100%;
  }
}

#musicTitle {
  text-align: center;
}

.member {
  display: inline-block;
  margin-right: 10px;
}

.left {
  width: 300px;
}

.right {
  width: 300px;
  margin: 0 0 0 10px;
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
  margin: 0 0 3px 0;
}

.icon {
  margin-right: 5px;

  &.member {
    width: 35px;
  }
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