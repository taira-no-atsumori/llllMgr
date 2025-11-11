<template>
  <v-container fluid class="px-2 px-sm-0 pt-2 pb-0">
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

    <v-row no-gutters class="mb-3">
      <v-col cols="12" class="mb-2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              <v-icon class="mr-2">mdi-filter</v-icon>絞り込み
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <v-row no-gutters>
                <v-col cols="12" sm="3" class="pr-2 mb-3 mb-sm-0">
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
                    <template #selection="{ item }">
                      <v-img
                        :src="
                          store.getImagePath('icons/bonusSkill', item.title)
                        "
                        style="width: 25px; border-radius: 3px"
                      ></v-img>
                    </template>
                    <template #item="{ item }">
                      <v-list-item
                        :title="item.title"
                        @click="selectSkill(item.title)"
                      >
                        <template #prepend>
                          <v-checkbox-btn
                            color="pink"
                            :model-value="
                              selectBonusSkillList.some(
                                (elm) => elm === item.title
                              )
                            "
                          ></v-checkbox-btn>
                          <v-img
                            :src="
                              store.getImagePath('icons/bonusSkill', item.title)
                            "
                            :alt="item.title"
                            class="mr-2"
                            style="width: 40px"
                          ></v-img>
                        </template>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" sm="3" class="px-sm-2 mb-3 mb-sm-0">
                  <h3 class="mb-2">センターで絞り込み</h3>
                  <v-select
                    v-model="selectCenterList"
                    clearable
                    label="センター"
                    :items="Object.keys(MEMBER_COLOR)"
                    variant="outlined"
                    color="pink"
                    hint="絞り込みたいセンターメンバーを選んでください"
                    multiple
                    persistent-hint
                    @click:clear="selectCenter(null)"
                  >
                    <template #selection="{ item }">
                      <v-img
                        :src="
                          store.getImagePath(
                            'icons/member',
                            `icon_SD_${item.title}`
                          )
                        "
                        class="icon member"
                        style="width: 25px"
                      ></v-img>
                    </template>
                    <template #item="{ item }">
                      <v-list-item
                        :title="makeMemberFullName(item.title)"
                        @click="selectCenter(item.title)"
                      >
                        <template #prepend>
                          <v-checkbox-btn
                            color="pink"
                            :model-value="
                              selectCenterList.some((elm) => elm === item.title)
                            "
                          ></v-checkbox-btn>
                          <v-img
                            :src="
                              store.getImagePath(
                                'icons/member',
                                `icon_SD_${item.title}`
                              )
                            "
                            :alt="item.title"
                            class="icon member"
                          ></v-img>
                        </template>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>

                <v-col cols="12" sm="3" class="px-sm-2 mb-3 mb-sm-0">
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

                <v-col cols="12" sm="3" class="pl-sm-2">
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
                    <template #selection="{ item }">
                      <v-img
                        :src="
                          store.getImagePath(
                            'icons/attribute',
                            `icon_${item.title}`
                          )
                        "
                        style="width: 25px"
                      ></v-img>
                    </template>
                    <template #item="{ item }">
                      <v-list-item
                        :title="convertAttributeEnToJa(item.title)"
                        @click="selectAttr(item.title)"
                      >
                        <template #prepend>
                          <v-checkbox-btn
                            color="pink"
                            :model-value="
                              selectAttrList.some((elm) => elm === item.title)
                            "
                          ></v-checkbox-btn>
                          <v-img
                            :src="
                              store.getImagePath(
                                'icons/attribute',
                                `icon_${item.title}`
                              )
                            "
                            :alt="item.title"
                            class="mr-2"
                            style="width: 40px"
                          ></v-img>
                        </template>
                      </v-list-item>
                    </template>
                  </v-select>
                </v-col>

                <v-col v-if="false" cols="12" sm="3" class="pl-sm-2">
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
            <v-expansion-panel-title
              >楽曲マスタリーボーナス効果量一覧</v-expansion-panel-title
            >
            <v-expansion-panel-text>
              <v-row>
                <v-col cols="12" sm="6">
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
                <v-col cols="12" sm="6">
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
                <v-col cols="12" sm="6">
                  <h3>LOVEボーナス</h3>
                  <p class="mb-1">
                    LOVEボーナスレベルによって得られるLOVEが増加する。<br />
                    増加量は以下のとおり。
                  </p>
                  <v-table>
                    <thead>
                      <tr>
                        <th class="text-center">Lv</th>
                        <th class="text-center">1～5</th>
                        <th class="text-center">6～10</th>
                        <th class="text-center">11～25</th>
                        <th class="text-center">26～50</th>
                        <th class="text-center">51～</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-center">増加量</td>
                        <td class="text-center">(Lv.×10)%</td>
                        <td class="text-center">(50+(Lv.-5)×5)%</td>
                        <td class="text-center">(75+(Lv.-10)×4)%</td>
                        <td class="text-center">(135+(Lv.-25)×3)%</td>
                        <td class="text-center">(210+(Lv.-50)×2.5)%</td>
                      </tr>
                    </tbody>
                  </v-table>
                </v-col>
                <v-col cols="12" sm="6">
                  <h3>ビートハートアップ</h3>
                  ビートハートアップレベル×0.5%
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

      <template v-for="memberName in store.memberNameList" :key="memberName">
        <v-col
          v-if="!store.isOtherMember(memberName)"
          cols="4"
          lg="2"
          :class="`text-center align-self-end ${
            windowSize.w > 600 ? '' : 'px-1'
          }`"
        >
          <v-row no-gutters class="mb-1">
            <v-col
              v-resize="onResize"
              cols="12"
              class="d-flex flex-row align-center justify-center mb-1"
            >
              <h4 class="d-flex flex-row align-center">
                <img
                  :src="
                    store.getImagePath('icons/member', `icon_SD_${memberName}`)
                  "
                  style="width: 30px"
                />
                <span
                  v-if="windowSize.w > 600"
                  class="pt-1 pl-1"
                  :style="`font-size: ${memberName === 'seras' ? 0.8 : 1}em;`"
                >
                  {{ makeMemberFullName(memberName) }}
                  <span class="text-body-2">
                    (Lv.{{ store.makeTotalMasteryLv(memberName) }})
                  </span>
                </span>
                <span v-else class="pt-1 pl-1 text-body-2">
                  (Lv.{{ store.makeTotalMasteryLv(memberName) }})
                </span>
              </h4>
            </v-col>
            <v-col cols="12" class="px-sm-2">
              <p class="font-weight-bold mb-2 subtitle">
                <span v-if="windowSize.w > 600">獲得済</span>ボーナススキル
              </p>
              <v-row no-gutters>
                <v-col
                  v-for="skillName in bonusSkillList"
                  :key="skillName"
                  cols="6"
                  sm="3"
                  class="d-flex flex-row justify-center align-center mb-1"
                >
                  <v-row no-gutters>
                    <v-col
                      cols="12"
                      sm="6"
                      style="height: 30px; font-size: 15px"
                      :class="`d-flex align-center`"
                    >
                      <img
                        :src="store.getImagePath('icons/bonusSkill', skillName)"
                        style="width: 30px; border-radius: 3px"
                      />
                      <span style="padding: 0 1px 0 2px">×</span
                      >{{ store.setBonusSkillLevel(memberName, skillName) }}
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </template>

      <v-col cols="4" lg="2" align-self="center" class="text-center">
        <v-btn @click="store.showModalEvent('masteryLevel')">詳細を見る</v-btn>
      </v-col>
    </v-row>

    <v-divider class="mb-2"></v-divider>

    <div class="align-self-center d-inline-block mb-2 mb-md-0">
      <div class="d-flex flex-row align-center">
        <v-btn color="blue" class="mr-2">
          <v-icon class="mr-2">mdi-sort</v-icon>ソート
          <v-menu activator="parent" transition="slide-y-transition">
            <v-list density="compact">
              <template v-for="(label, val) in sortTypeList" :key="val">
                <v-list-item
                  v-if="!/difficultyLevel|maxCombo/.test(val)"
                  :title="label"
                  :value="val"
                  @click="sortingProcess('sortType', val)"
                >
                </v-list-item>
                <v-list-group
                  v-if="val === 'difficultyLevel' && isSchoolShow"
                  value="difficultyLevel"
                >
                  <template #activator="{ props }">
                    <v-list-item v-bind="props" :title="label"></v-list-item>
                  </template>

                  <v-list-item
                    v-for="difficulty_val in [
                      'NORMAL',
                      'HARD',
                      'EXPERT',
                      'MASTER',
                    ]"
                    :key="`difficultyLevel_${difficulty_val}`"
                    :title="difficulty_val"
                    @click="
                      sortingProcess(
                        'sortType',
                        `difficultyLevel_${difficulty_val}`
                      )
                    "
                  ></v-list-item>
                </v-list-group>
                <v-list-group
                  v-if="val === 'maxCombo' && isSchoolShow"
                  value="maxCombo"
                >
                  <template #activator="{ props }">
                    <v-list-item v-bind="props" :title="label"></v-list-item>
                  </template>

                  <v-list-item
                    v-for="combo_val in ['NORMAL', 'HARD', 'EXPERT', 'MASTER']"
                    :key="`maxCombo_${combo_val}`"
                    :title="combo_val"
                    @click="sortingProcess('sortType', `maxCombo_${combo_val}`)"
                  ></v-list-item>
                </v-list-group>
              </template>
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
            value="descending"
            class="px-0 px-sm-2"
            @click="store.changeSettings('sortSettings')"
          >
            <v-icon>mdi-sort-descending</v-icon>
            <span class="ml-2 hidden-sm-and-down">降順</span>
          </v-btn>
          <v-btn
            value="ascending"
            class="px-0 px-sm-2"
            @click="store.changeSettings('sortSettings')"
          >
            <v-icon>mdi-sort-ascending</v-icon>
            <span class="ml-2 hidden-sm-and-down">昇順</span>
          </v-btn>
        </v-btn-toggle>

        <v-switch
          v-model="isSchoolShow"
          label="スクショウ"
          density="compact"
          hide-details
          class="pl-2 mr-3"
          color="pink"
        ></v-switch>
      </div>
    </div>

    <p class="align-self-center d-block d-md-inline-block">
      絞り込み結果：{{ Object.keys(makeMusicList()).length }} 曲<span
        class="ml-1 mr-md-1"
        >/</span
      >
    </p>
    <p class="align-self-center d-block d-md-inline-block">
      現在のソート：{{
        sortTypeLabel(store.localStorageData.sortSettings.musicList.sortType)
      }}
    </p>

    <v-divider class="my-2"></v-divider>

    <ul id="CDJacketArea">
      <li v-if="Object.keys(makeMusicList()).length === 0" class="w-100">
        見つかりませんでした…
      </li>
      <li v-for="(ary, songTitle) in makeMusicList()" v-else :key="ary">
        <v-card
          v-if="
            store.localStorageData.siteSettings.musicList.hover === 'false' ||
            windowSize.w <= 600
          "
          :color="attributeColor[ary.attribute]"
          @click="
            store.showModalEvent('setLeaningLevel');
            store.selectMusic(songTitle);
          "
        >
          <v-img
            :lazy-src="
              store.getImagePath('images/cdJacket', store.conversion(songTitle))
            "
            :src="
              store.getImagePath('images/cdJacket', store.conversion(songTitle))
            "
            :alt="songTitle"
            eager
            @load="checkImagesLoaded(Object.keys(makeMusicList()).length)"
          ></v-img>
          <v-card-title class="text-subtitle-2 text-center px-2 pt-1 pb-0">{{
            songTitle
          }}</v-card-title>
          <v-divider class="mb-1 border-opacity-25"></v-divider>
          <v-card-text class="pt-0 px-1 pb-1">
            <ul class="d-flex">
              <li class="skillIconArea mr-1">
                <img
                  :src="store.getImagePath('icons/bonusSkill', ary.bonusSkill)"
                  :alt="ary.bonusSkill"
                />
              </li>
              <li class="skillIconArea mr-1">
                <img
                  :src="
                    store.getImagePath(
                      'icons/attribute',
                      `icon_${ary.attribute}`
                    )
                  "
                  :alt="ary.attribute"
                />
              </li>
              <li class="skillIconArea mr-1">
                <img
                  :src="
                    store.getImagePath('icons/member', `icon_SD_${ary.center}`)
                  "
                  :alt="ary.center"
                />
              </li>
              <li class="align-self-center text-caption">
                MLv.{{ store.musicLevel[songTitle] }}
              </li>
            </ul>
          </v-card-text>
        </v-card>

        <v-tooltip v-else location="bottom">
          <template #activator="{ props }">
            <v-card
              :color="attributeColor[ary.attribute]"
              v-bind="props"
              @click="
                store.showModalEvent('setLeaningLevel');
                store.selectMusic(songTitle);
              "
            >
              <v-img
                :lazy-src="
                  store.getImagePath(
                    'images/cdJacket',
                    store.conversion(songTitle)
                  )
                "
                :src="
                  store.getImagePath(
                    'images/cdJacket',
                    store.conversion(songTitle)
                  )
                "
                :alt="songTitle"
                eager
                @load="checkImagesLoaded(Object.keys(makeMusicList()).length)"
              ></v-img>
              <v-card-title
                class="text-subtitle-2 text-center px-2 pt-1 pb-0"
                >{{ songTitle }}</v-card-title
              >
              <v-divider class="mb-1 border-opacity-25"></v-divider>
              <v-card-item class="pt-0 px-1 pb-1">
                <ul class="d-flex">
                  <li class="skillIconArea mr-1">
                    <img
                      :src="
                        store.getImagePath('icons/bonusSkill', ary.bonusSkill)
                      "
                      :alt="ary.bonusSkill"
                    />
                  </li>
                  <li class="skillIconArea mr-1">
                    <img
                      :src="
                        store.getImagePath(
                          'icons/attribute',
                          `icon_${ary.attribute}`
                        )
                      "
                      :alt="ary.attribute"
                    />
                  </li>
                  <li class="skillIconArea mr-1">
                    <img
                      :src="
                        store.getImagePath(
                          'icons/member',
                          `icon_SD_${ary.center}`
                        )
                      "
                      :alt="ary.center"
                    />
                  </li>
                  <li class="align-self-center text-caption">
                    MLv.{{ store.musicLevel[songTitle] }}
                  </li>
                </ul>
              </v-card-item>
            </v-card>
          </template>
          <p class="mb-2">{{ songTitle }}</p>
          センター：{{ makeMemberFullName(ary.center) }}<br />
          楽曲マスタリーLv.：{{ store.musicLevel[songTitle] }}<br />
          獲得ボーナススキル：{{ ary.bonusSkill }} ×
          {{ Math.floor(store.musicLevel[songTitle] / 10) }}
        </v-tooltip>
      </li>
      <li v-if="Object.keys(makeMusicList()).length === 0" class="w-100">
        見つかりませんでした…
      </li>
    </ul>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { makeMemberFullName } from '@/constants/memberNames';
import { MEMBER_COLOR } from '@/constants/colorConst';
import { MUSIC_LIST } from '@/constants/musicList';
import { convertAttributeEnToJa } from '@/constants/music';

const store = useStateStore();
store.setSupportSkillLevel();
store.loading = true;
import { getAttributeListEn } from '@/constants/music';
import { BONUS_SKILL_NAMES } from '@/constants/bonusSkills';

const bonusSkillList = Object.values(BONUS_SKILL_NAMES);
const attrList = getAttributeListEn();

const windowSize = reactive({ w: 0, h: 0 });
const isSchoolShow = ref(false);
const inputMusicTitle = ref<string | null>(null);
const masteryLv = ref([0, 50]);
const selectCenterList = ref<string[]>([]);
const selectBonusSkillList = ref([...bonusSkillList]);
const selectAttrList = ref([...attrList]);
const loadedImagesCount = ref(0);

const attributeColor = {
  smile: '#EF8DC8',
  pure: '#A9FCC7',
  cool: '#A1BAFA',
};

const sortTypeList = {
  default: '標準',
  level: 'マスタリーレベル',
  kana: '五十音',
  BHcount: 'ビートハート発生回数',
  time: '秒数',
  releaseDate: '発売日',
  difficultyLevel: '難易度',
  maxCombo: 'コンボ数',
};

const makeMusicList = computed(() => (): Record<string, any> => {
  if (
    !isSchoolShow.value &&
    (store.localStorageData.sortSettings.musicList?.sortType?.includes(
      'difficultyLevel'
    ) ||
      store.localStorageData.sortSettings.musicList?.sortType?.includes(
        'maxCombo'
      ))
  ) {
    sortingProcess('sortType', 'default');
  }

  const list = Array.from(Object.entries(MUSIC_LIST), ([key, value]) => ({
    title: key,
    ...value,
  }));

  const result = list.filter((musicData) => {
    if (
      store.musicLevel[musicData.title] < masteryLv.value[0] ||
      store.musicLevel[musicData.title] > masteryLv.value[1] ||
      // inputMusicTitle.value && !musicData.musicData.kana.includes(inputMusicTitle.value) ||
      (selectCenterList.value.length > 0 &&
        !selectCenterList.value.includes(musicData.center)) ||
      (selectBonusSkillList.value.length > 0 &&
        !selectBonusSkillList.value.includes(musicData.bonusSkill)) ||
      (selectAttrList.value.length > 0 &&
        !selectAttrList.value.includes(musicData.attribute))
    ) {
      return false;
    } else if (!isSchoolShow.value) {
      return true;
    } else {
      return !!(musicData?.scoreData ?? false);
    }
  });

  result.sort((a, b) => {
    const sortType =
      store.localStorageData.sortSettings.musicList?.sortType?.split('_')[0];
    const difficulty =
      store.localStorageData.sortSettings.musicList?.sortType?.split('_')[1] ??
      '';

    if (isSchoolShow.value && /difficultyLevel|maxCombo/.test(sortType)) {
      return sorting(
        store.localStorageData.sortSettings.musicList.order === 'ascending',
        a.scoreData[sortType][difficulty],
        b.scoreData[sortType][difficulty]
      );
    } else {
      switch (sortType) {
        case 'level':
          return sorting(
            store.localStorageData.sortSettings.musicList.order === 'ascending',
            store.musicLevel[a.title],
            store.musicLevel[b.title]
          );
        case 'BHcount':
          return sorting(
            store.localStorageData.sortSettings.musicList.order === 'ascending',
            a[store.localStorageData.sortSettings.musicList.sortType],
            b[store.localStorageData.sortSettings.musicList.sortType]
          );
        case 'kana':
        case 'time':
          return sorting(
            store.localStorageData.sortSettings.musicList.order === 'ascending',
            a.musicData[store.localStorageData.sortSettings.musicList.sortType],
            b.musicData[store.localStorageData.sortSettings.musicList.sortType]
          );
        case 'releaseDate':
          return sorting(
            store.localStorageData.sortSettings.musicList.order === 'ascending',
            new Date(
              a.musicData.releaseDate.year,
              a.musicData.releaseDate.month - 1,
              a.musicData.releaseDate.date
            ),
            new Date(
              b.musicData.releaseDate.year,
              b.musicData.releaseDate.month - 1,
              b.musicData.releaseDate.date
            )
          );
        default:
          return sorting(
            store.localStorageData.sortSettings.musicList?.order ===
              'ascending',
            a.ID,
            b.ID
          );
      }
    }
  });

  return result.reduce((acc, curr) => {
    const title = curr.title;
    delete curr.title;
    acc[title] = curr;
    return acc;
  }, {});

  function sorting(isAscending: boolean, aa: any, bb: any): number {
    if (isAscending) {
      return aa < bb ? -1 : aa > bb ? 1 : 0;
    } else {
      return aa > bb ? -1 : aa < bb ? 1 : 0;
    }
  }
});

function sortingProcess(type: 'sortType' | 'order', val: string): void {
  if (store.localStorageData.sortSettings.musicList[type] !== val) {
    store.loading = true;

    if (type === 'sortType') {
      store.localStorageData.sortSettings.musicList[type] = val;
    }

    store.changeSettings('sortSettings');
  }
}

function selectCenter(selector: string | null): void {
  if (selector === null) {
    selectCenterList.value = [];
  } else if (selectCenterList.value.some((x) => x === selector)) {
    selectCenterList.value = selectCenterList.value.filter(
      (skill) => skill !== selector
    );
  } else {
    selectCenterList.value.push(selector);
  }
}

function selectSkill(selector: string | null): void {
  if (selector === null) {
    selectBonusSkillList.value = [];
  } else if (selectBonusSkillList.value.some((x) => x === selector)) {
    selectBonusSkillList.value = selectBonusSkillList.value.filter(
      (skill) => skill !== selector
    );
  } else {
    selectBonusSkillList.value.push(selector);
  }
}

function selectAttr(selector: string | null): void {
  if (selector === null) {
    selectAttrList.value = [];
  } else if (selectAttrList.value.some((x) => x === selector)) {
    selectAttrList.value = selectAttrList.value.filter(
      (skill) => skill !== selector
    );
  } else {
    selectAttrList.value.push(selector);
  }
}

function onResize(): void {
  windowSize.w = window.innerWidth;
  windowSize.h = window.innerHeight;
}

function checkImagesLoaded(totalImages: number): void {
  loadedImagesCount.value += 1;

  if (loadedImagesCount.value === totalImages) {
    store.loading = false;
    loadedImagesCount.value = 0;
  }
}

function sortTypeLabel(sortTypeValue: string): string {
  const sortType = sortTypeValue.split('_')[0];
  const difficulty = sortTypeValue.split('_')[1] ?? '';
  if (isSchoolShow.value && /difficultyLevel|maxCombo/.test(sortType)) {
    return `${sortTypeList[sortType]} (${difficulty})`;
  }
  return sortTypeList[sortType] || '標準';
}

onMounted(() => {
  onResize();
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', onResize);
});
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

.skillIconArea {
  width: 28px;
  height: 28px;

  img {
    width: 100%;
    border-radius: 3px;
  }
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
