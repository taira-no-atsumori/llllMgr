<template>
  <v-container
    fluid
    class="px-2 px-sm-0 pt-2 pb-0"
  >
    <h1 class="mb-1">MUSIC LIST ～ 楽曲一覧 / 楽曲マスタリーレベル設定 ～</h1>

    <v-expansion-panels class="mb-2">
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          リンクラに実装されている楽曲一覧です。<br />
          各ジャケットをクリックすると、楽曲の詳細が見られます。<br />
          詳細画面に設定した楽曲マスタリーLv.は、絞り込みの下に表示されます。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row
      no-gutters
      class="mb-3"
    >
      <v-col
        cols="12"
        class="mb-2"
      >
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title> <v-icon class="mr-2">mdi-filter</v-icon>絞り込み </v-expansion-panel-title>
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
                        :src="store.getImagePath('bonusSkill_icon', item.title)"
                        style="width: 25px; border-radius: 3px"
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
                            :src="store.getImagePath('bonusSkill_icon', item.title)"
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
                    v-model="selectCenterList"
                    clearable
                    label="センター"
                    :items="Object.keys(store.memberColor)"
                    variant="outlined"
                    color="pink"
                    hint="絞り込みたいセンターメンバーを選んでください"
                    multiple
                    persistent-hint
                    @click:clear="selectCenter(store, null)"
                  >
                    <template v-slot:selection="{ item }">
                      <v-img
                        :src="store.getImagePath('member_icon', `icon_SD_${item.title}`)"
                        class="icon member"
                        style="width: 25px;"
                      ></v-img>
                    </template>
                    <template v-slot:item="{ item }">
                      <v-list-item
                        :title="store.makeFullName(item.title)"
                        @click="selectCenter(store, item.title)"
                      >
                        <template v-slot:prepend>
                          <v-checkbox-btn
                            color="pink"
                            :model-value="selectCenterList.some((elm) => elm === item.title)"
                          ></v-checkbox-btn>
                          <v-img
                            :src="store.getImagePath('member_icon', `icon_SD_${item.title}`)"
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
                    max="50"
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
                        :src="store.getImagePath('attribute_icon', `icon_${item.title}`)"
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
                            :src="store.getImagePath('attribute_icon', `icon_${item.title}`)"
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
                <v-col
                  cols="12"
                  sm="5"
                >
                  <h3>ボルテージアップ</h3>
                  <p class="mb-1">
                    ボルテージPt.を一定量獲得するごとに、1pt.追加獲得する。<br />
                    一定量は以下のとおり。
                  </p>
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-center">Lv</th>
                        <th class="text-center">1～5</th>
                        <th class="text-center">6～10</th>
                        <th class="text-center">11～15</th>
                        <th class="text-center">16～20</th>
                        <th class="text-center">21～25</th>
                        <th class="text-center">26～30</th>
                        <th class="text-center">31～39</th>
                        <th class="text-center">40～</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">一定量</td>
                        <td class="text-center">11</td>
                        <td class="text-center">10</td>
                        <td class="text-center">9</td>
                        <td class="text-center">8</td>
                        <td class="text-center">7</td>
                        <td class="text-center">6</td>
                        <td class="text-center">5</td>
                        <td class="text-center">4</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-col>
                <v-col
                  cols="12"
                  sm="5"
                >
                  <h3>メンタルリカバー</h3>
                  <p class="mb-1">
                    メンタルが一定量減少するごとに、メンタルを1回復する。<br />
                    一定量は以下のとおり。
                  </p>
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-center">Lv</th>
                        <th class="text-center">1</th>
                        <th class="text-center">2～4</th>
                        <th class="text-center">5～9</th>
                        <th class="text-center">10～13</th>
                        <th class="text-center">14～17</th>
                        <th class="text-center">18～21</th>
                        <th class="text-center">22～25</th>
                        <th class="text-center">26～29</th>
                        <th class="text-center">30～</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">一定量</td>
                        <td class="text-center">12</td>
                        <td class="text-center">11</td>
                        <td class="text-center">10</td>
                        <td class="text-center">9</td>
                        <td class="text-center">8</td>
                        <td class="text-center">7</td>
                        <td class="text-center">6</td>
                        <td class="text-center">5</td>
                        <td class="text-center">4</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-col>
                <v-col
                  cols="12"
                  sm="2"
                >
                  <div class="mb-3 mb-md-10">
                    <h3>ビートハートアップ</h3>
                    ビートハートアップレベル×0.5%
                  </div>
                  <div>
                    <h3>LOVEボーナス</h3>
                    LOVEボーナスレベル×0.5%
                  </div>
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
        v-for="memberName in store.memberNameList"
        :key="memberName"
      >
        <v-col
          v-if="!store.isOtherMember(memberName)"
          cols="6"
          md="4"
          lg="2"
          :class="`text-center align-self-end ${windowSize.w > 600 ? '' : 'px-1'}`"
        >
          <v-row
            no-gutters
            class="mb-1"
          >
            <v-col
              v-resize="onResize"
              cols="12"
              class="d-flex flex-row align-center justify-center mb-1"
            >
              <h4 class="d-flex flex-row align-center">
                <img
                  :src="store.getImagePath('member_icon', `icon_SD_${memberName}`)"
                  style="width: 30px"
                />
                <span class="pt-1 pl-1" :style="`font-size: ${windowSize.w > 600 && memberName === 'seras' ? 0.8 : 1}em;`">
                  {{ store.makeFullName(memberName) }} <span class="text-body-2">
                    (Lv.{{ store.makeTotalMasteryLv(memberName) }})
                  </span>
                </span>
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
                      style="height: 30px"
                    >
                      <img
                        :src="store.getImagePath('bonusSkill_icon', skillName)"
                        style="width: 30px; border-radius: 3px"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      sm="6"
                      style="font-size: 15px"
                      :class="`d-flex align-center ${windowSize.w > 600 ? '' : 'justify-center'}`"
                    >
                      <span style="padding: 0 1px">×</span>{{ store.setBonusSkillLevel(memberName, skillName) }}
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
        align-self="center"
        class="text-center"
      >
        <v-btn
          @click="store.showModalEvent('masteryLevel')"
        >
          詳細を見る
        </v-btn>
      </v-col>
    </v-row>

    <v-divider class="mb-2"></v-divider>

    <div class="align-self-center d-inline-block mb-2 mb-md-0">
      <v-btn
        color="blue"
        class="mr-2"
      >
        <v-icon class="mr-2">mdi-sort</v-icon>ソート
        <v-menu
          activator="parent"
          transition="slide-y-transition"
        >
          <v-list>
            <v-list-item
              v-for="(label, val) in sortTypeList"
              :key="val"
              :value="val"
              @click="
                store.localStorageData.sortSettings.musicList.sortType = val;
                store.changeSettings('sortSettings');
              "
            >
              <v-list-item-title>
                {{ label }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>

      <v-btn-toggle
        v-model="store.localStorageData.sortSettings.musicList.order"
        density="compact"
        variant="outlined"
        color="pink"
        class="mr-2"
        mandatory
      >
        <v-btn
          v-model="store.localStorageData.sortSettings.musicList.order"
          value="descending"
          class="px-0 px-sm-2"
          @click="store.changeSettings('sortSettings');"
        >
          <v-icon>mdi-sort-descending</v-icon>
          <span class="ml-2 hidden-sm-and-down">降順</span>
        </v-btn>
        <v-btn
          v-model="store.localStorageData.sortSettings.musicList.order"
          value="ascending"
          class="px-0 px-sm-2"
          @click="store.changeSettings('sortSettings');"
        >
          <v-icon>mdi-sort-ascending</v-icon>
          <span class="ml-2 hidden-sm-and-down">昇順</span>
        </v-btn>
      </v-btn-toggle>
    </div>

    <p class="align-self-center d-block d-md-inline-block">
      絞り込み結果：{{ Object.keys(makeMusicList(store)).length }} 曲<span class="ml-1 mr-md-1">/</span>
    </p>
    <p class="align-self-center d-block d-md-inline-block">
      現在のソート：{{ sortTypeList[store.localStorageData.sortSettings.musicList.sortType] }}
    </p>

    <v-divider class="my-2"></v-divider>

    <ul id="CDJacketArea">
      <li
        v-if="Object.keys(makeMusicList(store)).length === 0"
        class="w-100"
      >
        見つかりませんでした…
      </li>
      <li
        v-else
        v-for="(ary, songTitle) in makeMusicList(store)"
        :key="ary"
      >
        <v-card
          v-if="store.localStorageData.siteSettings.musicList.hover === 'false' || windowSize.w <= 600"
          :color="attributeColor[ary.attribute]"
          @click="
            store.showModalEvent('setLeaningLevel');
            store.selectMusic(songTitle);
          "
        >
          <v-img
            :lazy-src="store.getImagePath('CD_jacket', store.conversion(songTitle))"
            :src="store.getImagePath('CD_jacket', store.conversion(songTitle))"
            :alt="songTitle"
          ></v-img>
          <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">{{ songTitle }}</v-card-title>
          <v-divider class="mb-1 border-opacity-25"></v-divider>
          <v-card-text class="pt-0 px-1 pb-1">
            <ul class="d-flex">
              <li class="mr-1">
                <v-img
                  :src="store.getImagePath('bonusSkill_icon', ary.bonusSkill)"
                  :alt="ary.bonusSkill"
                  class="skillIcon"
                ></v-img>
              </li>
              <li class="mr-1">
                <v-img
                  :src="store.getImagePath('attribute_icon', `icon_${ary.attribute}`)"
                  :alt="ary.attribute"
                  class="skillIcon"
                ></v-img>
              </li>
              <li class="mr-1">
                <v-img
                  :src="store.getImagePath('member_icon', `icon_SD_${ary.center}`)"
                  :alt="ary.center"
                  class="skillIcon"
                ></v-img>
              </li>
              <li class="align-self-center text-caption">MLv.{{ store.musicList[songTitle].level }}</li>
            </ul>
          </v-card-text>
        </v-card>

        <v-tooltip
          location="bottom"
          v-else
        >
          <template v-slot:activator="{ props }">
            <v-card
              :color="attributeColor[ary.attribute]"
              v-bind="props"
              @click="
                store.showModalEvent('setLeaningLevel');
                store.selectMusic(songTitle);
              "
            >
              <v-img
                :lazy-src="store.getImagePath('CD_jacket', store.conversion(songTitle))"
                :src="store.getImagePath('CD_jacket', store.conversion(songTitle))"
                :alt="songTitle"
              ></v-img>
              <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">{{ songTitle }}</v-card-title>
              <v-divider class="mb-1 border-opacity-25"></v-divider>
              <v-card-item class="pt-0 px-1 pb-1">
                <ul class="d-flex">
                  <li class="mr-1">
                    <v-img
                      :src="store.getImagePath('bonusSkill_icon', ary.bonusSkill)"
                      :alt="ary.bonusSkill"
                      class="skillIcon"
                    ></v-img>
                  </li>
                  <li class="mr-1">
                    <v-img
                      :src="store.getImagePath('attribute_icon', `icon_${ary.attribute}`)"
                      :alt="ary.attribute"
                      class="skillIcon"
                    ></v-img>
                  </li>
                  <li class="mr-1">
                    <v-img
                      :src="store.getImagePath('member_icon', `icon_SD_${ary.center}`)"
                      :alt="ary.center"
                      class="skillIcon"
                    ></v-img>
                  </li>
                  <li
                    class="align-self-center text-caption"
                  >
                    MLv.{{ store.musicList[songTitle].level }}
                  </li>
                </ul>
              </v-card-item>
            </v-card>
          </template>
          <p class="mb-2">{{ songTitle }}</p>
          センター：{{ store.makeFullName(ary.center) }}<br />
          楽曲マスタリーLv.：{{ ary.level }}<br />
          獲得ボーナススキル：{{ ary.bonusSkill }} × {{ Math.floor(ary.level / 10) }}
        </v-tooltip>
      </li>
      <li
        v-if="Object.keys(makeMusicList(store)).length === 0"
        class="w-100"
      >
        見つかりませんでした…
      </li>
    </ul>
  </v-container>
</template>

<script setup lang="ts">
import { useStoreCounter } from '../stores/counter';
const store = useStoreCounter();
store.setSupportSkillLevel();
</script>

<script lang="ts">
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
      masteryLv: [0, 50],
      selectCenterList: [],
      bonusSkillList: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
      selectBonusSkillList: ['ボルテージアップ', 'メンタルリカバー', 'ビートハートアップ', 'LOVEボーナス'],
      attrList: ['smile', 'pure', 'cool'],
      selectAttrList: ['smile', 'pure', 'cool'],
      attributeColor: {
        smile: '#EF8DC8',
        pure: '#A9FCC7',
        cool: '#A1BAFA',
      },
      sortTypeList: {
        default: '標準',
        level: 'マスタリーレベル',
        kana: '五十音',
        BHcount: 'ビートハート発生回数',
        time: '秒数',
        releaseDate: '発売日',
      },
    };
  },
  created() {},
  computed: {
    makeMusicList() {
      return (store): Object => {
        const list = Array.from(
          Object.entries(store.musicList),
          ([key, value]) => ({ title: key, ...value })
        );

        const result = list.filter((musicData) => {
          if (typeof musicData.level !== 'number') {
            musicData.level = 0;
          }

          if (
            musicData.level < this.masteryLv[0] || musicData.level > this.masteryLv[1] ||
            // this.inputMusicTitle && !musicData.musicData.kana.includes(this.inputMusicTitle) ||
            this.selectCenterList.length > 0 && !this.selectCenterList.includes(musicData.center) ||
            this.selectBonusSkillList.length > 0 && !this.selectBonusSkillList.includes(musicData.bonusSkill) ||
            this.selectAttrList.length > 0 && !this.selectAttrList.includes(musicData.attribute)) {
            return false;
          } else {
            return true;
          }
        });

        result.sort((a, b) => {
          switch (store.localStorageData.sortSettings.musicList.sortType) {
            case 'level':
            case 'BHcount':
              return sorting(
                store.localStorageData.sortSettings.musicList.order === 'ascending',
                a[store.localStorageData.sortSettings.musicList.sortType],
                b[store.localStorageData.sortSettings.musicList.sortType]
              );
              break;
            case 'kana':
            case 'time':
              return sorting(
                store.localStorageData.sortSettings.musicList.order === 'ascending',
                a.musicData[store.localStorageData.sortSettings.musicList.sortType],
                b.musicData[store.localStorageData.sortSettings.musicList.sortType]
              );
              break;
            case 'releaseDate':
              return sorting(
                store.localStorageData.sortSettings.musicList.order === 'ascending',
                new Date(a.musicData.releaseDate.year, a.musicData.releaseDate.month - 1, a.musicData.releaseDate.date),
                new Date(b.musicData.releaseDate.year, b.musicData.releaseDate.month - 1, b.musicData.releaseDate.date)
              );
              break;
            default:
              return sorting(
                store.localStorageData.sortSettings.musicList.order === 'ascending',
                a.ID,
                b.ID
              );
              break;
          }
        });

        return result.reduce((acc, curr) => {
          const title = curr.title;
          delete curr.title;
          acc[title] = curr;
          return acc;
        }, {});

        function sorting(isAscending, aa, bb) {
          if (isAscending) {
            return aa < bb ? -1 : aa > bb ? 1 : 0;
          } else {
            return aa > bb ? -1 : aa < bb ? 1 : 0;
          }
        }
      };
    },
  },
  mounted() {
    this.onResize();
  },
  methods: {
    selectCenter(store, selector: string | null): void {
      if (selector === null) {
        this.selectCenterList = [];
      } else if (this.selectCenterList.some((x) => x === selector)) {
        const result = [];

        for (const skill of this.selectCenterList) {
          if (skill !== selector) {
            result.push(skill);
          }
        }

        this.selectCenterList = result;
      } else {
        this.selectCenterList.push(selector);
      }
    },
    selectSkill(selector: string | null): void {
      if (selector === null) {
        this.selectBonusSkillList = [];
      } else if (this.selectBonusSkillList.some((x) => x === selector)) {
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
    selectAttr(selector: string | null): void {
      if (selector === null) {
        this.selectAttrList = [];
      } else if (this.selectAttrList.some((x) => x === selector)) {
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
    onResize(): void {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
#CDJacketArea {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  > li {
    width: calc((100% - 72px) / 10);
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
  #CDJacketArea {
    gap: 10px 2%;

    > li {
      width: 49%;
    }
  }
}
</style>