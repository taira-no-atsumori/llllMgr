<template>
  <v-container fluid class="pa-0">
    <div class="mb-2 text-center">
      <h2 class="hidden-xs">
        <v-tooltip location="bottom">
          <template #activator="{ props }">
            <a
              :href="makeWikiLink()"
              target="_blank"
              :class="`text-${settingsStore.isDarkMode ? 'white' : 'black'}`"
              v-bind="props"
            >
              {{ makeCardName() }}
            </a>
          </template>
          Wikiを開く
        </v-tooltip>
      </h2>
      <h3 class="hidden-sm-and-up">
        <a
          :href="makeWikiLink()"
          target="_blank"
          :class="`text-${settingsStore.isDarkMode ? 'white' : 'black'}`"
        >
          {{ makeCardName() }}
        </a>
      </h3>
    </div>

    <v-row no-gutters class="mb-2">
      <v-col cols="12" sm="7" class="py-0 pl-0 pr-0 pr-sm-4">
        <v-tabs
          v-model="selectIllust"
          color="pink"
          density="compact"
          grow
          class="mb-1"
        >
          <v-tab
            v-for="kakusei in getIllustList"
            :key="kakusei"
            :value="kakusei"
            :text="`覚醒${kakusei === 'before' ? '前' : '後'}`"
          />
        </v-tabs>
        <v-carousel
          v-model="selectIllust"
          height="auto"
          hide-delimiter-background
          :show-arrows="false"
          hide-delimiters
          class="mb-1"
        >
          <v-carousel-item
            v-for="kakusei in getIllustList"
            :key="kakusei"
            :value="kakusei"
          >
            <v-responsive :aspect-ratio="16 / 9">
              <v-img
                class="h-100"
                :src="
                  cardImageUrls[store.getSettingCard.ID][kakusei] || noImage
                "
                cover
              >
                <template #placeholder>
                  <v-skeleton-loader type="image" class="h-100 w-100" />
                </template>
              </v-img>
            </v-responsive>
          </v-carousel-item>
        </v-carousel>
        <v-row id="styleAndMoodArea" no-gutters class="text-center">
          <v-col cols="12" sm="6" class="pt-2 pb-1">
            <span class="left">タイプ</span>
            <span class="right">
              <v-img
                v-if="false"
                :src="
                  imageStore.getImagePath(
                    'icons/styleType',
                    `icon_${store.settingCardData.styleType}`,
                  )
                "
                class="icon type"
              />
              {{ convertStyleEnToJp(store.settingCardData.styleType) }}
            </span>
          </v-col>
          <v-col cols="12" sm="6" class="pt-2 pb-1">
            <span class="left">ムード</span>
            <span class="right pl-1">
              <v-img
                v-if="false"
                :src="
                  imageStore.getImagePath(
                    '',
                    `icon_${store.settingCardData.mood}`,
                  )
                "
                class="icon mood"
              />
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
              <v-col cols="12">
                {{ store.settingCardData.gacha.addSeason }}
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row no-gutters>
              <v-col cols="12" class="pb-1 font-weight-bold">入手期間</v-col>
              <v-col cols="12">
                {{ LIMITED[store.settingCardData.gacha.period].jp }}
              </v-col>
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
                text="-1"
                :disabled="
                  store.settingCardData.fluctuationStatus.trainingLevel === 0
                "
                @click="
                  store.valueChange(
                    'trainingLevel',
                    store.settingCardData.fluctuationStatus.trainingLevel - 1,
                  )
                "
              />
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
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.trainingLevel ===
                  store.maxTrainingLevel
                "
                @click="
                  store.valueChange(
                    'trainingLevel',
                    store.settingCardData.fluctuationStatus.trainingLevel + 1,
                  )
                "
              />
            </v-col>
          </v-row>
        </div>
        <div class="mb-3">
          <h4 class="mb-1">カードLv.</h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                text="MIN"
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
                      : store.minCardLevel,
                  )
                "
              />
            </div>
            <div>
              <v-btn
                text="-1"
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  (store.settingCardData.fluctuationStatus.trainingLevel === 0
                    ? 0
                    : store.minCardLevel)
                "
                @click="
                  store.valueChange(
                    'cardLevel',
                    store.settingCardData.fluctuationStatus.cardLevel - 1,
                  )
                "
              />
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.cardLevel }}
            </div>
            <div>
              <v-btn
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  store.maxCardLevel
                "
                @click="
                  store.valueChange(
                    'cardLevel',
                    store.settingCardData.fluctuationStatus.cardLevel + 1,
                  )
                "
              />
            </div>
            <div>
              <v-btn
                text="MAX"
                :disabled="
                  store.settingCardData.fluctuationStatus.cardLevel ===
                  store.maxCardLevel
                "
                @click="store.valueChange('cardLevel', store.maxCardLevel)"
              />
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
            />
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                text="MIN"
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel === 1
                "
                @click="store.valueChange('SALevel', 1)"
              />
            </div>
            <div>
              <v-btn
                text="-1"
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel === 1
                "
                @click="
                  store.valueChange(
                    'SALevel',
                    store.settingCardData.fluctuationStatus.SALevel - 1,
                  )
                "
              />
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.SALevel }}
            </div>
            <div>
              <v-btn
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel ===
                  store.changeSkillLevel
                "
                @click="
                  store.valueChange(
                    'SALevel',
                    store.settingCardData.fluctuationStatus.SALevel + 1,
                  )
                "
              />
            </div>
            <div>
              <v-btn
                text="MAX"
                :disabled="
                  store.settingCardData.fluctuationStatus.SALevel ===
                  store.changeSkillLevel
                "
                @click="store.valueChange('SALevel', store.changeSkillLevel)"
              />
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
            />
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                text="MIN"
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', 1)"
              />
            </div>
            <div>
              <v-btn
                text="-1"
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="
                  store.valueChange(
                    'SLevel',
                    store.settingCardData.fluctuationStatus.SLevel - 1,
                  )
                "
              />
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.SLevel }}
            </div>
            <div>
              <v-btn
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.SLevel ===
                  store.changeSkillLevel
                "
                @click="
                  store.valueChange(
                    'SLevel',
                    store.settingCardData.fluctuationStatus.SLevel + 1,
                  )
                "
              />
            </div>
            <div>
              <v-btn
                text="MAX"
                :disabled="
                  store.settingCardData.fluctuationStatus.SLevel ===
                  store.changeSkillLevel
                "
                @click="store.valueChange('SLevel', store.changeSkillLevel)"
              />
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
              />
            </span>
          </h4>
          <div class="paramSetArea mb-1">
            <div>
              <v-btn
                text="MIN"
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 1
                "
                @click="
                  store.valueChange('releaseLevel', 1);
                  store.valueChange('releasePoint', maxReleasePoint());
                "
              />
            </div>
            <div>
              <v-btn
                text="-1"
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 1
                "
                @click="
                  store.valueChange(
                    'releaseLevel',
                    store.settingCardData.fluctuationStatus.releaseLevel - 1,
                  );
                  store.valueChange('releasePoint', maxReleasePoint());
                "
              />
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.releaseLevel }}
            </div>
            <div>
              <v-btn
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 5
                "
                @click="
                  store.valueChange(
                    'releaseLevel',
                    store.settingCardData.fluctuationStatus.releaseLevel + 1,
                  );
                  store.valueChange(
                    'releasePoint',
                    Math.max(
                      0,
                      store.settingCardData.fluctuationStatus.releasePoint -
                        getReleasePoint(store.settingCardData.rare, 'point'),
                    ),
                  );
                "
              />
            </div>
            <div>
              <v-btn
                text="MAX"
                :disabled="
                  store.settingCardData.fluctuationStatus.releaseLevel === 5
                "
                @click="
                  store.valueChange('releaseLevel', 5);
                  store.valueChange('releasePoint', 0);
                "
              />
            </div>
          </div>
        </div>
        <div
          v-if="store.settingCardData.fluctuationStatus.releaseLevel < 5"
          class="mb-3"
        >
          <h4 class="mb-1 d-flex flex-row">
            解放Pt.
            <span class="ml-1">(上限：{{ limitReleasePoint() }})</span>
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="openDialog('releasePoint', 600, null)"
            />
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
                        getReleasePoint(store.settingCardData.rare, 'point'),
                    ),
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
                text="-1"
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint === 0
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    store.settingCardData.fluctuationStatus.releasePoint - 1,
                  )
                "
              />
            </div>
            <div>
              {{ store.settingCardData.fluctuationStatus.releasePoint }}
            </div>
            <div>
              <v-btn
                text="+1"
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint ===
                  limitReleasePoint()
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    store.settingCardData.fluctuationStatus.releasePoint + 1,
                  )
                "
              />
            </div>
            <div>
              <v-btn
                :disabled="
                  store.settingCardData.fluctuationStatus.releasePoint ===
                  limitReleasePoint()
                "
                @click="
                  store.valueChange(
                    'releasePoint',
                    Math.min(
                      store.settingCardData.fluctuationStatus.releasePoint +
                        getReleasePoint(store.settingCardData.rare, 'point'),
                      limitReleasePoint(),
                    ),
                  )
                "
              >
                +{{
                  store.settingCardData.fluctuationStatus.releasePoint +
                    getReleasePoint(store.settingCardData.rare, 'point') >
                  limitReleasePoint()
                    ? limitReleasePoint() -
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
              :max="limitReleasePoint()"
              min="0"
              step="1"
              color="pink"
              thumb-color="pink"
              class="mb-2 px-2"
              density="compact"
            />
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
              />
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-tabs v-model="gameMode" color="pink" grow>
      <v-tab value="stage" text="スクールアイドルステージ" />
      <v-tab value="show" text="スクールアイドルショウ" />
    </v-tabs>

    <v-divider class="border-opacity-50" />

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
            :src="imageStore.getImagePath('icons/bonusSkill', supportSkillName)"
            class="mr-1"
            style="width: 50px; border-radius: 5px"
          />
          <span style="font-size: 18px">
            Lv.{{ makeSupportSkillLevel(supportSkillName) }}
          </span>
        </li>
      </ul>
    </div>
  </v-container>

  <v-dialog v-model="dialog" scrollable :max-width="dialogSize">
    <v-sheet class="pa-3">
      <div v-if="openDialogName === 'skillList'">
        <h2 class="text-center mb-2">スキル効果量一覧</h2>
        <v-tabs v-model="selectAddSkillDetail" color="pink" grow>
          <v-tab value="mainSkill" text="メインスキル" />
          <v-tab
            v-for="(addSkillData, i) in store.settingCardData[targetSkill]
              .addSkill"
            :key="i"
            :value="addSkillData.name"
            :text="`${addSkillData?.modeName ?? `追加スキル${i + 1}`}`"
          />
        </v-tabs>

        <v-divider class="mb-3" />

        <v-tabs-window v-model="selectAddSkillDetail">
          <v-tabs-window-item value="mainSkill">
            スキル名：{{ store.settingCardData[targetSkill].name }}

            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-center px-1 font-weight-bold">Lv</th>
                  <th
                    v-if="store.settingCardData[targetSkill]?.EXAP"
                    class="text-center px-2 font-weight-bold"
                  >
                    AP
                  </th>
                  <th class="text-center px-1 font-weight-bold">効果</th>
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
                        { targetSkillLv: i - 1 },
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
                  <th class="text-center px-1 font-weight-bold">Lv</th>
                  <th
                    v-if="skillData?.EXAP"
                    class="text-center px-2 font-weight-bold"
                  >
                    AP
                  </th>
                  <th class="text-center px-1 font-weight-bold">効果</th>
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
                      store.skillText(targetSkill, skillData, {
                        targetSkillLv: skillLevel - 1,
                        addSkillNum: i,
                      })
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
        <HowToGPPT />
      </div>
      <div v-else-if="openDialogName === 'releasePoint'">
        <howToReleasePoint />
      </div>
      <div class="mt-1 text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          @click="switchDialog(null)"
        />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { useStateStore } from '@/stores/stateStore';
import { useImageStore } from '@/stores/imageStore';
import { useSettingsStore } from '@/stores/settingsStore';

import {
  convertStyleEnToJp,
  convertMoodEnToJp,
  FAVORITE,
  LIMITED,
} from '@/constants/cards';
import { makeMemberFullName } from '@/constants/memberNames';
import { getReleasePoint } from '@/constants/releasePoint';
import { GRANDPRIX_BONUS } from '@/constants/grandprixBonus';
import { DEFAULT_SEARCH } from '@/constants/defaultSettings';
import type { BonusSkillNames } from '@/constants/bonusSkills';
import { LOCAL_DB_KEY_NAMES } from '@/constants/localDBKeyNames';

import howToReleasePoint from '@/components/howTo/HowToReleasePoint.vue';
import HowToGPPT from '@/components/howTo/HowToGPPT.vue';
import skillArea from '@/components/SkillAreaComponent.vue';

import noImage from '@/assets/images/NO IMAGE_card.webp';

const store = useStateStore();
const imageStore = useImageStore();
const settingsStore = useSettingsStore();

// const tab_addSkill = ref('one');
const dialog = ref(false);
const openDialogName = ref<
  'skillList' | 'skillDescription' | 'GPPT' | 'releasePoint'
>('skillList');
const dialogSize = ref(0);
const targetSkill = ref('');
const skillID = ref('');
// const isAlternate = ref(false);
const selectAddSkillDetail = ref('');
const gameMode = ref('stage');

const cardImageUrls = computed(
  () => imageStore.imageCache[LOCAL_DB_KEY_NAMES.CACHE_IMAGE_CARD] || {},
);

const selectIllust = ref(
  !cardImageUrls.value[store.getSettingCard.ID]?.before ? 'after' : 'before',
);

const dynamicWidth = computed(() => {
  const releaseLevel: number =
    store.settingCardData.fluctuationStatus.releaseLevel;
  return `calc(${100 / (5 - releaseLevel)}% + ${1 / releaseLevel}px)`;
});

const getIllustList = computed(() => {
  return !cardImageUrls.value[store.getSettingCard.ID]?.before
    ? ['after']
    : ['before', 'after'];
});

const releasePoint_underlineColor = computed(() => {
  return settingsStore.isDarkMode ? 'white' : 'black';
});

/**
 * リンク作成
 *
 * @returns リンク
 */
const makeWikiLink = () => {
  return `https://wikiwiki.jp/llll_wiki/［${store.getSettingCard.cardName
    .replaceAll('&', '＆')
    .replaceAll('/', '／')}］${makeMemberFullName(
    store.getSettingCard.memberName,
  )}`;
};
/**
 * カード名作成
 *
 * @returns カード名
 */
const makeCardName = () => {
  return `${store.getSettingCard.rare} [${
    store.getSettingCard.cardName
  }] ${makeMemberFullName(store.getSettingCard.memberName)}`;
};

/**
 * サポートスキル作成
 *
 * @param supportSkillName サポートスキル名
 * @returns サポートスキルレベル
 */
const makeSupportSkillLevel = (supportSkillName: BonusSkillNames) => {
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
};

/**
 * ダイアログスイッチ
 *
 * @description
 * ダイアログの表示・非表示を切り替える。
 *
 * @param flg フラグ
 * @returns void
 */
const switchDialog = (flg: null | boolean) => {
  dialog.value = flg === null ? !dialog.value : flg;
};

/**
 * ダイアログ開閉処理
 *
 * @param openDialogNameA 開きたいダイアログ名
 * @param dialogSizeA ダイアログの横幅
 * @param option オプション
 * @returns void
 */
const openDialog = (
  openDialogNameA: string,
  dialogSizeA: number,
  option?: { targetSkill?: string; skillID?: string } | null,
) => {
  targetSkill.value = option === null ? null : option.targetSkill;
  openDialogName.value = openDialogNameA;
  dialogSize.value = dialogSizeA;

  if (openDialogName.value === 'skillDescription') {
    skillID.value = option.skillID;
  }

  switchDialog(null);
};

/**
 * 解放Pt.最大値計算
 *
 * @description
 * 各カードの解放Pt.の最大値を計算する。
 *
 * @returns 最大値
 */
const maxReleasePoint = () => {
  const point = Math.min(
    store.settingCardData.fluctuationStatus.releasePoint,
    limitReleasePoint(),
  );
  store.valueChange('releasePoint', point);

  return point;
};

/**
 * 解放Pt.上限計算
 *
 * @returns 上限値
 */
const limitReleasePoint = () => {
  return (
    getReleasePoint(store.settingCardData.rare, 'max') -
    getReleasePoint(store.settingCardData.rare, 'point') *
      (store.settingCardData.fluctuationStatus.releaseLevel - 1)
  );
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
