<template>
<v-container fluid class="px-2 pt-2 pb-0">
<h1 class="mb-1">MUSIC LIST ～ 楽曲一覧 / 楽曲マスタリーレベル設定 ～</h1>

<v-expansion-panels class="mb-2">
  <v-expansion-panel>
    <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
    <v-expansion-panel-text>
      リンクラに実装されている楽曲一覧です。<br>
      各ジャケットをクリックすると、楽曲の詳細が見られます。<br>
      詳細画面に設定した楽曲マスタリーLv.は、絞り込みの下に表示されます。
    </v-expansion-panel-text>
  </v-expansion-panel>
</v-expansion-panels>

<v-row no-gutters class="mb-3">
  <v-col cols="12" class="mb-2">
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
                    :src="require(`@/assets/bonusSkill_icon/${item.title}.webp`)"
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
                        :src="require(`@/assets/bonusSkill_icon/${item.title}.webp`)"
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
                        :src="require(`@/assets/member_icon/icon_SD_${item.title}.webp`)"
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
              <h3 class="mb-2">楽曲属性で絞り込み</h3>
              <v-select
                v-model="selectAttrList"
                :items="attrList"
                clearable
                color="pink"
                hint="絞り込みたい楽曲属性を選んでください"
                label="楽曲属性"
                multiple
                persistent-hint
                variant="outlined"
              >
                <template v-slot:selection="{ item }">
                  <v-img
                    :src="require(`@/assets/attribute_icon/icon_${item.title}.webp`)"
                    style="width: 25px"
                  ></v-img>
                </template>
                <template v-slot:item="{ item }">
                  <v-list-item
                    :title="store.attribute[item.title]"
                    @click="selectAttr(item.title)"
                  >
                    <template v-slot:prepend>
                      <v-checkbox-btn
                        color="pink"
                        :model-value="selectAttrList.some((elm) => elm === item.title)"
                      ></v-checkbox-btn>
                      <v-img
                        :src="require(`@/assets/attribute_icon/icon_${item.title}.webp`)"
                        :alt="store.attribute[item.title]"
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
              class="pl-sm-2"
              v-if="false"
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

  <v-col cols="12">
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-title>楽曲マスタリーボーナス効果量一覧</v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-row>
            <v-col cols="12" sm="3">
              <h3>ボルテージアップ</h3>
              <v-table>
                <thead>
                  <tr>
                    <th>1～5</th>
                    <th>6～10</th>
                    <th>11～15?</th>
                    <th>16?～</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>11</td>
                    <td>10</td>
                    <td>9</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="12" sm="3">
              <h3>メンタルリカバー</h3>
              <v-table>
                <thead>
                  <tr>
                    <th>1</th>
                    <th>2～4</th>
                    <th>5～9</th>
                    <th>10～14?</th>
                    <th>15?～?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>12</td>
                    <td>11</td>
                    <td>10</td>
                    <td>9</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
            <v-col cols="12" sm="3">
              <h3>ビートハートアップ</h3>
              ビートハートアップレベル×0.5%
            </v-col>
            <v-col cols="12" sm="3">
              <h3>LOVEボーナス</h3>
              LOVEボーナスレベル×0.5%
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

  <template
    v-for="(arr, memberName) in store.memberName"
    :key="memberName"
  >
    <v-col
      v-if="!store.isExclusionMember(memberName)"
      cols="6"
      md="4"
      lg="2"
      :class="`text-center ${windowSize.w > 600 ? '' : 'px-1'}`"
    >
      <v-row no-gutters class="mb-1">
        <v-col
          v-resize="onResize"
          cols="12"
          class="d-flex flex-row align-center justify-center mb-1"
        >
          <h4 class="d-flex flex-row align-center">
            <img
              :src="require(`@/assets/member_icon/icon_SD_${memberName}.webp`)"
              style="width: 30px;"
            >
            <span class="pt-1 pl-1">{{ store.makeFullName(memberName) }} <span class="text-body-2">(Lv.{{ store.makeTotalMasteryLv(memberName) }})</span></span>
          </h4>
        </v-col>
        <v-col
          cols="12"
          class="px-sm-2"
        >
          <p class="font-weight-bold mb-2 subtitle">獲得ボーナススキル</p>
          <v-row no-gutters>
            <v-col
              cols="3"
              sm="3"
              v-for="skillName in bonusSkillList"
              :key="skillName"
              class="d-flex flex-row justify-center align-center mb-1"
            >
              <v-row no-gutters>
                <v-col
                  cols="12"
                  sm="6"
                  style="height: 30px;"
                >
                  <img
                    :src="require(`@/assets/bonusSkill_icon/${skillName}.webp`)"
                    style="width: 30px;"
                  >
                </v-col>
                <v-col
                  cols="12"
                  sm="6"
                  style="font-size: 15px;"
                  :class="`d-flex align-center ${windowSize.w > 600 ? '' : 'justify-center'}`"
                >
                  <span style="padding: 0 1px;">×</span>{{ store.setBonusSkillLevel(memberName, skillName) }}
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </template>

  <v-col
    cols="6"
    md="4"
    lg="2"
    align="center"
    class="align-self-center"
  >
    <v-btn @click="store.showModalEvent('masteryLevel');">詳細を見る</v-btn>
  </v-col>

  <v-col
    cols="6"
    md="4"
    lg="2"
    align="center"
    class="align-self-center"
    v-if="false"
  >
    <v-btn color="blue" @click="store.showModalEvent('masteryLevel');">ソート</v-btn>
  </v-col>
</v-row>
      
<v-divider class="mb-3"></v-divider>
</v-container>

<ul id="CDJacketArea">
  <li v-if="Object.keys(makeMusicList(store)).length === 0" class="w-100">見つかりませんでした…</li>
  <li
    v-else
    v-for="(ary, songTitle) in makeMusicList(store)"
    :key="ary"
  >
    <v-card
      v-if="store.siteSettings.musicList.hover === 'false' || windowSize.w <= 600"
      :color="attributeColor[ary.attribute]"
      @click="store.showModalEvent('setLeaningLevel'); store.selectMusic(songTitle);"
    >
      <v-img
        :lazy-src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.webp`)"
        :src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.webp`)"
        :alt="songTitle"
      ></v-img>
      <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">{{ songTitle }}</v-card-title>
      <v-divider class="mb-1 border-opacity-25"></v-divider>
      <v-card-text class="pt-0 px-1 pb-1">
        <ul class="d-flex">
          <li class="mr-1"><v-img :src="require(`@/assets/bonusSkill_icon/${ary.bonusSkill}.webp`)" :alt="ary.bonusSkill" class="skillIcon"></v-img></li>
          <li class="mr-1"><v-img :src="require(`@/assets/attribute_icon/icon_${ary.attribute}.webp`)" :alt="ary.attribute" class="skillIcon"></v-img></li>
          <li class="mr-1"><v-img :src="require(`@/assets/member_icon/icon_SD_${ary.center}.webp`)" :alt="ary.center" class="skillIcon"></v-img></li>
          <li class="align-self-center text-caption">MLv.{{ store.musicList[songTitle].level }}</li>
        </ul>
      </v-card-text>
    </v-card>

    <v-tooltip location="bottom" v-else>
      <template v-slot:activator="{ props }">
        <v-card
          :color="attributeColor[ary.attribute]"
          v-bind="props"
          @click="store.showModalEvent('setLeaningLevel'); store.selectMusic(songTitle);"
        >
          <v-img
            :lazy-src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.webp`)"
            :src="require(`@/assets/CD_jacket/${store.conversion(songTitle)}.webp`)"
            :alt="songTitle"
          ></v-img>
          <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">{{ songTitle }}</v-card-title>
          <v-divider class="mb-1 border-opacity-25"></v-divider>
          <v-card-item class="pt-0 px-1 pb-1">
            <ul class="d-flex">
              <li class="mr-1"><v-img :src="require(`@/assets/bonusSkill_icon/${ary.bonusSkill}.webp`)" :alt="ary.bonusSkill" class="skillIcon"></v-img></li>
              <li class="mr-1"><v-img :src="require(`@/assets/attribute_icon/icon_${ary.attribute}.webp`)" :alt="ary.attribute" class="skillIcon"></v-img></li>
              <li class="mr-1"><v-img :src="require(`@/assets/member_icon/icon_SD_${ary.center}.webp`)" :alt="ary.center" class="skillIcon"></v-img></li>
              <li class="align-self-center text-caption">MLv.{{ store.musicList[songTitle].level }}</li>
            </ul>
          </v-card-item>
        </v-card>
      </template>
      <p class="mb-2">{{ songTitle }}</p>
      センター：{{ store.makeFullName(ary.center) }}<br>
      楽曲マスタリーLv.：{{ ary.level }}<br>
      獲得ボーナススキル：{{ ary.bonusSkill }} × {{ Math.floor(ary.level / 10)}}
    </v-tooltip>
  </li>
  <li v-if="Object.keys(makeMusicList(store)).length === 0" class="w-100">見つかりませんでした…</li>
</ul>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
  store.setSupportSkillLevel();
  const memberNameList = [];

  for (const memberName in store.memberName) {
    if (!store.isExclusionMember(memberName)) {
      memberNameList.push(memberName);
    }
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
      selectBonusSkillList: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
      attrList: ['smile', 'pure', 'cool'],
      selectAttrList: ['smile', 'pure', 'cool'],
      attributeColor: {
        smile: '#EF8DC8',
        pure: '#A9FCC7',
        cool: '#A1BAFA'
      }
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
              for (const attrName of this.selectAttrList) {
                if (targetMusicList.attribute === attrName) {
                  list[musicTitle] = targetMusicList;
                }
              }
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
    selectAttr(selector) {
      if (this.selectAttrList.some((x) => x === selector)) {
        const result = [];

        for (const skill of this.selectAttrList) {
          if (skill !== selector) {
            result.push(skill);
          }
        }

        this.selectAttrList = result;
      } else {
        this.selectAttrList.push(selector);
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
#CDJacketArea {
  display: flex;
  flex-wrap: wrap;

  >li {
    width: 150px;
    margin: 0 5px 10px 5px;
  }
}

.skillIcon {
  width: 28px;
  border-radius: 3px;
}

.member {
  display: inline-block;
  margin-right: 10px;
}

.icon {
  margin-right: 5px;

  &.member {
    width: 35px;
  }
}

@media screen and (max-width: 600px) {
  #CDJacketArea > li {
    width: 47%;
    margin: 0 1.5% 10px 1.5%;
  }
}
</style>