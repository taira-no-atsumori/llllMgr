<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="mb-1 text-center">
      <v-col class="pa-0">
        <h2 class="hidden-xs">
          <v-tooltip location="bottom">
            <template #activator="{ props }">
              <a
                :href="makeWikiLink(store)"
                target="_blank"
                :class="`text-${store.isDarkMode ? 'white' : 'black'}`"
                v-bind="props"
              >
                {{ makeCardName(store) }}
              </a>
            </template>
            Wikiを開く
          </v-tooltip>
        </h2>
        <h3 class="hidden-sm-and-up">
          <a
            :href="makeWikiLink(store)"
            target="_blank"
            :class="`text-${store.isDarkMode ? 'white' : 'black'}`"
          >
            {{ makeCardName(store) }}
          </a>
        </h3>
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-2">
      <v-col cols="12" sm="7" class="py-0 pl-0 pr-0 pr-sm-4">
        <v-carousel
          class="mb-1"
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
          :hide-delimiters="/^(D|L|B)R$/.test(store.getSettingCard.rare)"
          color="#e5762c"
        >
          <v-carousel-item
            v-for="kakusei in /^(D|L|B)R$/.test(store.getSettingCard.rare)
              ? [true]
              : [false, true]"
            :key="kakusei"
            :lazy-src="
              store.getImagePath(
                'images/cardIllust',
                store.makeCardIllustName(store.getSettingCard.ID, kakusei)
              )
            "
            :src="
              store.getImagePath(
                'images/cardIllust',
                store.makeCardIllustName(store.getSettingCard.ID, kakusei)
              )
            "
            :aspect-ratio="1.542"
          ></v-carousel-item>
        </v-carousel>
        <v-row id="styleAndMoodArea" no-gutters class="text-center">
          <v-col cols="12" sm="6" class="pt-2 pb-1">
            <span class="left">タイプ</span>
            <span class="right">
              <v-img
                v-if="false"
                :src="
                  store.getImagePath(
                    'icons/styleType',
                    `icon_${store.settingCardData.styleType}`
                  )
                "
                class="icon type"
              ></v-img>
              {{ convertStyleEnToJp(store.settingCardData.styleType) }}
            </span>
          </v-col>
          <v-col cols="12" sm="6" class="pt-2 pb-1">
            <span class="left">ムード</span>
            <span class="right pl-1">
              <v-img
                v-if="false"
                :src="
                  store.getImagePath('', `icon_${store.settingCardData.mood}`)
                "
                class="icon mood"
              ></v-img>
              {{ convertMoodEnToJp(store.settingCardData.mood) }}
            </span>
          </v-col>
        </v-row>
        <v-table density="compact" class="mb-1">
          <thead>
            <tr>
              <th
                v-for="header of [
                  'スマイル',
                  'ピュア',
                  'クール',
                  'メンタル',
                  'BP',
                ]"
                :key="header"
                :style="`width: ${header === 'BP' ? 5 : 8}0px;`"
                class="px-0 text-center"
              >
                {{ header }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 80px" class="px-0 text-center">
                {{ store.cardParam('smile', store.getSettingCard.ID) }}
              </td>
              <td style="width: 80px" class="px-0 text-center">
                {{ store.cardParam('pure', store.getSettingCard.ID) }}
              </td>
              <td style="width: 80px" class="px-0 text-center">
                {{ store.cardParam('cool', store.getSettingCard.ID) }}
              </td>
              <td style="width: 80px" class="px-0 text-center">
                {{ store.cardParam('mental', store.getSettingCard.ID) }}
              </td>
              <td style="width: 50px" class="px-0 text-center">
                {{ store.settingCardData.uniqueStatus.BP }}
              </td>
            </tr>
          </tbody>
        </v-table>
        <v-row no-gutters class="text-center">
          <v-col cols="12" sm="10">
            <v-row no-gutters class="mb-2 mb-sm-0">
              <v-col cols="12" class="pb-1 font-weight-bold">
                初登場時期
              </v-col>
              <v-col cols="12">{{
                store.settingCardData.gacha.addSeason
              }}</v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row no-gutters>
              <v-col cols="12" class="pb-1 font-weight-bold"> 入手期間 </v-col>
              <v-col cols="12">{{
                LIMITED[store.settingCardData.gacha.period].cardLabel
              }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="12" sm="5">
        <div class="mb-5">
          <h4 class="mb-3">特訓度</h4>
          <v-row>
            <v-col cols="5" align-self="center" class="pa-0 text-right">
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.trainingLevel === 0
                "
                @click="
                  store.valueChange(
                    'trainingLevel',
                    store.settingCardData.fluctuationStatus.trainingLevel - 1
                  )
                "
                >-1
              </v-btn>
            </v-col>
            <v-col
              cols="2"
              align-self="center"
              justify="center"
              class="pa-0 text-center"
            >
              {{
                [0, 1, 2, 3, 4][
                  store.settingCardData.fluctuationStatus.trainingLevel
                ]
              }}
            </v-col>
            <v-col cols="5" align-self="center" justify="center" class="pa-0">
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.trainingLevel ===
                  store.maxTrainingLevel
                "
                @click="
                  store.valueChange(
                    'trainingLevel',
                    store.settingCardData.fluctuationStatus.trainingLevel + 1
                  )
                "
                >+1
              </v-btn>
            </v-col>
          </v-row>
        </div>
        <div class="mb-3">
          <h4 class="mb-1">カードLv.</h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  (store.settingCardData.fluctuationStatus.trainingLevel === 0
                    ? 0
                    : store.minCardLevel)
                "
                @click="
                  store.valueChange(
                    'cardLevel',
                    store.settingCardData.fluctuationStatus.trainingLevel === 0
                      ? 0
                      : store.minCardLevel
                  )
                "
              >
                MIN
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  (store.settingCardData.fluctuationStatus.trainingLevel === 0
                    ? 0
                    : store.minCardLevel)
                "
                @click="
                  store.valueChange(
                    'cardLevel',
                    store.settingCardData.fluctuationStatus.cardLevel - 1
                  )
                "
              >
                -1
              </v-btn>
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.cardLevel }}
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  store.maxCardLevel
                "
                @click="
                  store.valueChange(
                    'cardLevel',
                    store.settingCardData.fluctuationStatus.cardLevel + 1
                  )
                "
              >
                +1
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  store.maxCardLevel
                "
                @click="store.valueChange('cardLevel', store.maxCardLevel)"
              >
                MAX
              </v-btn>
            </div>
          </div>
        </div>
        <div v-if="store.settingCardData?.specialAppeal" class="mb-3">
          <h4 class="mb-1 d-flex flex-row">
            スペシャルアピールLv.（スクステ）
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="
                openDialog('skillList', 900, { targetSkill: 'specialAppeal' })
              "
            ></v-btn>
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel === 1
                "
                @click="store.valueChange('SALevel', 1)"
              >
                MIN
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel === 1
                "
                @click="
                  store.valueChange(
                    'SALevel',
                    store.settingCardData.fluctuationStatus.SALevel - 1
                  )
                "
              >
                -1
              </v-btn>
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.SALevel }}
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel ===
                  store.changeSkillLevel
                "
                @click="
                  store.valueChange(
                    'SALevel',
                    store.settingCardData.fluctuationStatus.SALevel + 1
                  )
                "
              >
                +1
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel ===
                  store.changeSkillLevel
                "
                @click="store.valueChange('SALevel', store.changeSkillLevel)"
              >
                MAX
              </v-btn>
            </div>
          </div>
        </div>
        <div v-if="store.settingCardData?.skill" class="mb-3">
          <h4 class="mb-1 d-flex flex-row">
            スキルLv.（スクステ）
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="openDialog('skillList', 900, { targetSkill: 'skill' })"
            ></v-btn>
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', 1)"
              >
                MIN
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="
                  store.valueChange(
                    'SLevel',
                    store.settingCardData.fluctuationStatus.SLevel - 1
                  )
                "
              >
                -1
              </v-btn>
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.SLevel }}
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SLevel ===
                  store.changeSkillLevel
                "
                @click="
                  store.valueChange(
                    'SLevel',
                    store.settingCardData.fluctuationStatus.SLevel + 1
                  )
                "
              >
                +1
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.SLevel ===
                  store.changeSkillLevel
                "
                @click="store.valueChange('SLevel', store.changeSkillLevel)"
              >
                MAX
              </v-btn>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <h4 class="mb-1 d-flex flex-row">
            解放Lv.
            <span
              v-if="
                store.getSettingCard.rare !== 'DR' &&
                store.settingCardData?.specialAppeal
              "
              class="ml-1"
            >
              (最終獲得GP Pt. +<span class="text-pink">
                {{
                  GRANDPRIX_BONUS.releaseLv[store.getSettingCard.rare][
                    store.settingCardData.fluctuationStatus.releaseLevel - 1
                  ] * 100
                }} </span
              >%)
              <v-btn
                size="small"
                density="compact"
                icon="mdi-help"
                class="ml-1"
                @click="openDialog('GPPT', 600, null)"
              ></v-btn
            ></span>
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 1
                "
                @click="
                  store.valueChange('releaseLevel', 1);
                  store.valueChange('releasePoint', maxReleasePoint(store));
                "
              >
                MIN
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 1
                "
                @click="
                  store.valueChange(
                    'releaseLevel',
                    store.settingCardData.fluctuationStatus.releaseLevel - 1
                  );
                  store.valueChange('releasePoint', maxReleasePoint(store));
                "
              >
                -1
              </v-btn>
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.releaseLevel }}
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 5
                "
                @click="
                  store.valueChange(
                    'releaseLevel',
                    store.settingCardData.fluctuationStatus.releaseLevel + 1
                  );
                  store.valueChange(
                    'releasePoint',
                    Math.max(
                      0,
                      store.settingCardData.fluctuationStatus.releasePoint -
                        getReleasePoint(store.settingCardData.rare, 'point')
                    )
                  );
                "
              >
                +1
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 5
                "
                @click="
                  store.valueChange('releaseLevel', 5);
                  store.valueChange('releasePoint', 0);
                "
              >
                MAX
              </v-btn>
            </div>
          </div>
        </div>
        <div
          v-if="store.settingCardData.fluctuationStatus.releaseLevel < 5"
          class="mb-3"
        >
          <h4 class="mb-1 d-flex flex-row">
            解放Pt.
            <span class="ml-1">(上限：{{ limitReleasePoint(store) }})</span>
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="openDialog('releasePoint', 600, null)"
            ></v-btn>
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint === 0
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    Math.max(
                      0,
                      store.settingCardData.fluctuationStatus.releasePoint -
                        getReleasePoint(store.settingCardData.rare, 'point')
                    )
                  )
                "
              >
                -{{
                  store.settingCardData.fluctuationStatus.releasePoint -
                    getReleasePoint(store.settingCardData.rare, 'point') <
                  0
                    ? store.settingCardData.fluctuationStatus.releasePoint
                    : getReleasePoint(store.settingCardData.rare, 'point')
                }}
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint === 0
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    store.settingCardData.fluctuationStatus.releasePoint - 1
                  )
                "
              >
                -1
              </v-btn>
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.releasePoint }}
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint ===
                  limitReleasePoint(store)
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    store.settingCardData.fluctuationStatus.releasePoint + 1
                  )
                "
              >
                +1
              </v-btn>
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint ===
                  limitReleasePoint(store)
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    Math.min(
                      store.settingCardData.fluctuationStatus.releasePoint +
                        getReleasePoint(store.settingCardData.rare, 'point'),
                      limitReleasePoint(store)
                    )
                  )
                "
              >
                +{{
                  store.settingCardData.fluctuationStatus.releasePoint +
                    getReleasePoint(store.settingCardData.rare, 'point') >
                  limitReleasePoint(store)
                    ? limitReleasePoint(store) -
                      store.settingCardData.fluctuationStatus.releasePoint
                    : getReleasePoint(store.settingCardData.rare, 'point')
                }}
              </v-btn>
            </div>
          </div>
          <div
            v-if="store.settingCardData.fluctuationStatus.releaseLevel < 5"
            class="mt-2"
          >
            <div class="d-flex justify-space-between">
              <template
                v-for="i in 6 -
                store.settingCardData.fluctuationStatus.releaseLevel"
                :key="i"
              >
                <p class="text-center text-body-2" :style="{ width: '2rem' }">
                  {{
                    (i - 1) *
                    getReleasePoint(store.settingCardData.rare, 'point')
                  }}
                </p>
              </template>
            </div>
            <div
              class="d-flex"
              :style="{
                width: '91.5%',
                borderBottom: `1px solid ${releasePoint_underlineColor}`,
                margin: '0 auto',
              }"
            >
              <div
                class="d-inline-flex"
                :style="{
                  height: '10px',
                  borderLeft: `1px solid ${releasePoint_underlineColor}`,
                }"
              ></div>
              <template
                v-for="i in 5 -
                store.settingCardData.fluctuationStatus.releaseLevel"
                :key="i"
              >
                <div
                  class="d-inline-flex"
                  :style="{
                    width: dynamicWidth,
                    height: '10px',
                    borderRight: `1px solid ${releasePoint_underlineColor}`,
                  }"
                ></div>
              </template>
            </div>
            <v-slider
              v-model="store.settingCardData.fluctuationStatus.releasePoint"
              hide-details
              :max="limitReleasePoint(store)"
              min="0"
              step="1"
              color="pink"
              thumb-color="pink"
              class="mb-2 px-2"
              density="compact"
            ></v-slider>
          </div>
        </div>
        <div class="mb-4">
          <h4 class="mb-4">お気に入り</h4>
          <v-row class="text-center">
            <v-col
              v-for="favorite in FAVORITE"
              :key="favorite"
              cols="2"
              class="pa-0"
            >
              <v-btn
                :icon="`mdi-${favorite}`"
                variant="text"
                density="compact"
                size="small"
                :color="
                  store.settingCardData.favorite.some((v) => v === favorite)
                    ? 'pink'
                    : ''
                "
                @click="store.changeFav(favorite)"
              ></v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-tabs v-model="gameMode" color="pink" grow>
      <v-tab value="stage">スクールアイドルステージ</v-tab>
      <v-tab value="show">スクールアイドルショウ</v-tab>
    </v-tabs>

    <v-divider class="border-opacity-50"></v-divider>

    <v-tabs-window v-model="gameMode">
      <v-tabs-window-item value="stage">
        <skillArea skill-type="specialAppeal" />

        <skillArea skill-type="skill" />

        <skillArea skill-type="characteristic" />
      </v-tabs-window-item>
      <v-tabs-window-item value="show">
        <div class="mt-4">Coming Soon...</div>
      </v-tabs-window-item>
    </v-tabs-window>

    <div
      v-if="store.settingCardData.uniqueStatus?.supportSkill"
      class="mt-2 px-0 pt-0 pb-1"
    >
      <span class="specialAppeal supportSkill">サポートスキル</span>
      {{ store.settingCardData.uniqueStatus.supportSkill.supportSkillTitle }}
      <ul class="d-flex mt-2">
        <li
          v-for="(list, supportSkillName) in store.settingCardData.uniqueStatus
            .supportSkill.supportSkillList"
          :key="supportSkillName"
          class="pr-2"
        >
          <img
            :src="store.getImagePath('icons/bonusSkill', supportSkillName)"
            class="mr-1"
            style="width: 50px; border-radius: 5px"
          />
          <span style="font-size: 18px"
            >Lv.{{ makeSupportSkillLevel(store, supportSkillName) }}</span
          >
        </li>
      </ul>
    </div>
  </v-container>

  <v-dialog v-model="dialog" scrollable :max-width="dialogSize">
    <v-sheet class="pa-3">
      <div v-if="openDialogName === 'skillList'">
        <h2 class="text-center mb-2">スキル効果量一覧</h2>
        <v-tabs v-model="selectAddSkillDetail" class="mb-2" color="pink" grow>
          <v-tab value="mainSkill">メインスキル</v-tab>
          <v-tab
            v-for="(addSkillData, i) in store.settingCardData[targetSkill]
              .addSkill"
            :key="i"
            :value="addSkillData.name"
          >
            {{ `${addSkillData?.modeName ?? `追加スキル${i + 1}`}` }}
          </v-tab>
        </v-tabs>

        <v-tabs-window v-model="selectAddSkillDetail">
          <v-tabs-window-item value="mainSkill">
            スキル名：{{ store.settingCardData[targetSkill].name }}
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-center px-1">Lv</th>
                  <th
                    v-if="store.settingCardData[targetSkill]?.EXAP"
                    class="text-center px-2"
                  >
                    AP
                  </th>
                  <th class="text-center px-1">効果</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in 14" :key="i">
                  <th class="text-center px-1">{{ i }}</th>
                  <th
                    v-if="store.settingCardData[targetSkill]?.EXAP"
                    class="text-center px-1"
                  >
                    {{ store.settingCardData[targetSkill]?.EXAP[i - 1] }}
                  </th>
                  <td class="px-1">
                    {{
                      store.skillText(
                        targetSkill,
                        store.settingCardData[targetSkill],
                        { targetSkillLv: i - 1 }
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-tabs-window-item>
          <v-tabs-window-item
            v-for="(skillData, i) in store.settingCardData[targetSkill]
              .addSkill"
            :key="i"
            :value="skillData.name"
          >
            スキル名：{{ skillData.name }}
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-center px-1">Lv</th>
                  <th v-if="skillData?.EXAP" class="text-center px-2">AP</th>
                  <th class="text-center px-1">効果</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="skillLevel in DEFAULT_SEARCH.cardList.SALevel[1]"
                  :key="skillLevel"
                >
                  <th class="text-center px-1">{{ skillLevel }}</th>
                  <th v-if="skillData?.EXAP" class="text-center px-1">
                    {{ skillData.EXAP[skillLevel - 1] }}
                  </th>
                  <td class="px-1">
                    {{
                      store.skillText(
                        targetSkill,
                        store.settingCardData[targetSkill],
                        {
                          targetSkillLv: skillLevel - 1,
                          addSkillNum: i,
                        }
                      )
                    }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>
      <!-- <div v-else-if="openDialogName === 'skillDescription'">
        <h2 class="text-center mb-2">スキル詳細</h2>
        {{ store.skillColor[skillID].description }}
      </div> -->
      <div v-else-if="openDialogName === 'GPPT'">
        <h2 class="text-center mb-2">解放Lv.ボーナスとは？</h2>
        <p>
          楽曲の歌唱メンバーのMAIN
          STYLEに設定しているカードの解放Lv.を上げると、ライブグランプリのグランプリPt.を増加させることができます。<br />
          この増加できる値のことを「解放Lv.ボーナス」と呼びます。<br />
          解放Lv.ボーナスは、レアリティと解放状況によって以下のように変わります。
        </p>

        <v-table>
          <thead>
            <tr>
              <th rowspan="2" class="text-center">レアリティ</th>
              <th colspan="5" class="text-center">解放状況</th>
            </tr>
            <tr>
              <th v-for="i of 5" :key="i" class="text-center">♪×{{ i }}</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(list, rarity) of GRANDPRIX_BONUS.releaseLv"
              :key="rarity"
            >
              <th>{{ rarity }}</th>
              <td v-for="bonus of list" :key="bonus" class="text-center">
                +{{ bonus * 100 }}%
              </td>
            </tr>
          </tbody>
        </v-table>
        ※DRカードはライブグランプリに参加できないため、解放Lv.ボーナス対象外
      </div>
      <div v-else-if="openDialogName === 'releasePoint'">
        <h2 class="text-center mb-2">解放Pt.とは？</h2>

        <p>
          ガチャで入手したカードが重複していた場合に獲得できるのが「解放Pt.」です。<br />
          この解放Pt.を設定していると、カード一覧のカード画像の右上に<span
            class="text-blue-accent-4"
            >●</span
          >がつきます。<br />
          なお、解放Lv.を上げると、現在設定されている解放Pt.から解放Lv.を上げるのに必要な解放Pt.を自動的に消費し、設定できる解放Pt.の上限も変化します。<br />
          ※解放Lv.を下げた場合は設定できる解放Pt.の上限は上がりますが、解放Pt.は変化しません。<br /><br />
        </p>
        <p>
          例1）解放Pt.を250に設定してURカードの解放Lv.を1から2に上げた場合<br />
          設定できる解放Pt.の上限：400→300<br />
          解放Pt.：250→150<br /><br />
        </p>
        <p>
          例2）解放Pt.を150に設定してURカードの解放Lv.を2から5(MAX)に上げた場合<br />
          設定できる解放Pt.の上限：300→0<br />
          解放Pt.：150→0<br /><br />
        </p>
        <p>
          例3）解放Pt.を98に設定してURカードの解放Lv.を4から1(MIN)に下げた場合<br />
          設定できる解放Pt.の上限：100→400<br />
          解放Pt.：98→98
        </p>
      </div>
      <div class="mt-1 text-center">
        <v-btn prepend-icon="mdi-close" @click="switchDialog(null)">
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import { computed } from 'vue';
import {
  convertStyleEnToJp,
  convertMoodEnToJp,
  FAVORITE,
  LIMITED,
} from '@/constants/cards';
import { StoreState } from '@/types/stateStore';
import { useStateStore } from '@/stores/stateStore';
import { MEMBER_NAMES, makeMemberFullName } from '@/constants/memberNames';
import { getReleasePoint } from '@/constants/releasePoint';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { DEFAULT_SEARCH } from '@/constants/defaultSettings';
import skillArea from '@/components/SkillAreaComponent.vue';

const store = useStateStore();

const dynamicWidth = computed(() => {
  const releaseLevel: number =
    store.settingCardData.fluctuationStatus.releaseLevel;
  return `calc(${100 / (5 - releaseLevel)}% + ${1 / releaseLevel}px)`;
});

const releasePoint_underlineColor = computed(() => {
  return store.isDarkMode ? 'white' : 'black';
});
</script>

<script lang="ts">
export default {
  name: 'CardSetting',
  components: {
    skillArea: skillArea,
  },
  data() {
    return {
      tab_addSkill: 'one',
      dialog: false,
      openDialogName: null,
      dialogSize: 0,
      targetSkill: null,
      skillID: '',
      isAlternate: false,
      selectAddSkillDetail: 'mainSkill',
      gameMode: 'stage',
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    /**
     * リンク作成
     *
     * @param store ストア
     * @returns string リンク
     */
    makeWikiLink(store: StoreState): string {
      const name = MEMBER_NAMES[store.getSettingCard.memberName];

      return `https://wikiwiki.jp/llll_wiki/［${store.getSettingCard.cardName
        .replaceAll('&', '＆')
        .replaceAll('/', '／')}］${name.first}${
        name.first === 'セラス' ? ' ' : ''
      }${name.last}`;
    },
    /**
     * カード名作成
     *
     * @param store ストア
     * @returns string カード名
     */
    makeCardName(store: StoreState): string {
      return `${store.getSettingCard.rare} [${
        store.getSettingCard.cardName
      }] ${makeMemberFullName(store.getSettingCard.memberName)}`;
    },
    /**
     * サポートスキル作成
     *
     * @param store ストア
     * @param supportSkillName サポートスキル名
     * @returns number サポートスキルレベル
     */
    makeSupportSkillLevel(store: StoreState, supportSkillName: string): number {
      const result =
        store.settingCardData.uniqueStatus.supportSkill.supportSkillList[
          supportSkillName
        ].initLevel;

      if (store.settingCardData.fluctuationStatus.cardLevel === 0) {
        return 0;
      } else if (
        store.settingCardData.fluctuationStatus.releaseLevel >=
        store.settingCardData.uniqueStatus.supportSkill.supportSkillList[
          supportSkillName
        ].levelUp
      ) {
        return (
          result +
          store.settingCardData.uniqueStatus.supportSkill.supportSkillList[
            supportSkillName
          ].upLevel
        );
      } else {
        return result;
      }
    },
    /**
     * ダイアログスイッチ
     *
     * ダイアログの表示・非表示を切り替える
     *
     * @param flg フラグ
     * @returns void
     */
    switchDialog(flg: null | boolean): void {
      this.dialog = flg === null ? !this.dialog : flg;
    },
    /**
     * ダイアログ開閉処理
     *
     * @param openDialogName 開きたいダイアログ名
     * @param dialogSize ダイアログの横幅
     * @param option オプション
     * @returns void
     */
    openDialog(openDialogName: string, dialogSize: number, option?: any): void {
      this.targetSkill = option === null ? null : option.targetSkill;
      this.openDialogName = openDialogName;
      this.dialogSize = dialogSize;

      if (openDialogName === 'skillDescription') {
        this.skillID = option.skillID;
      }

      this.switchDialog(null);
    },
    /**
     * 解放Pt.最大値計算
     *
     * 各カードの解放Pt.の最大値を計算する。
     *
     * @param store store
     * @returns number 最大値
     */
    maxReleasePoint(store: StoreState): number {
      const point = Math.min(
        store.settingCardData.fluctuationStatus.releasePoint,
        this.limitReleasePoint(store)
      );
      store.valueChange('releasePoint', point);
      return point;
    },
    /**
     * 解放Pt.上限計算
     *
     * @param {Object} store store
     * @returns string 上限値
     */
    limitReleasePoint(store: StoreState): number {
      return (
        getReleasePoint(store.settingCardData.rare, 'max') -
        getReleasePoint(store.settingCardData.rare, 'point') *
          (store.settingCardData.fluctuationStatus.releaseLevel - 1)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.AP {
  font-weight: bold;
  color: #e91e63;
}

.skillLevel {
  font-weight: bold;
}

#styleAndMoodArea {
  span {
    padding: 3px 10px;
    border: 2px solid #e5762c;
  }

  .left {
    color: #fff;
    font-weight: bold;
    background-color: #e5762c;
    border-radius: 15px 0 0 15px;
  }

  .right {
    border-radius: 0 15px 15px 0;
  }
}

.specialAppeal {
  color: #fff;
  font-weight: bold;
  background-color: #e5762c;
  padding: 3px 7px 3px 3px;
  border: 2px solid #e5762c;
  border-radius: 0 15px 15px 0;
  margin-right: 7px;

  &.characteristic {
    background-color: #b92aa7;
    border: 2px solid #b92aa7;
  }

  &.supportSkill {
    background-color: #34b72c;
    border: 2px solid #34b72c;
  }
}

.icon {
  display: inline-block;
  margin-right: 5px;

  &.mood,
  &.type {
    width: 20px;
  }

  &.member {
    width: 35px;
  }
}

.chipSize {
  font-size: 12px;
}
</style>
