<template>
  <v-container
    fluid
    class="pa-0"
  >
    <v-row
      no-gutters
      class="mb-1 text-center"
    >
      <v-col class="pa-0">
        <h2 class="hidden-xs">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <a
                :href="makeWikiLink(store.settingCard.card, `${store.memberName[store.settingCard.name].first}${store.memberName[store.settingCard.name].last}`)"
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
            :href="makeWikiLink(store.settingCard.card, `${store.memberName[store.settingCard.name].first}${store.memberName[store.settingCard.name].last}`)"
            target="_blank"
            :class="`text-${store.isDarkMode ? 'white' : 'black'}`"
          >
            {{ makeCardName(store) }}
          </a>
        </h3>
      </v-col>
    </v-row>

    <v-row
      no-gutters
      class="mb-2"
    >
      <v-col
        cols="12"
        sm="7"
        class="py-0 pl-0 pr-0 pr-sm-4"
      >
        <v-carousel
          class="mb-1"
          height="auto"
          hide-delimiter-background
          show-arrows="hover"
          :hide-delimiters="/^(D|B)R$/.test(store.settingCard.rare)"
          color="#e5762c"
        >
          <v-carousel-item
            v-for="kakusei in /^(D|B)R$/.test(store.settingCard.rare) ? ['後'] : ['前', '後']"
            :key="kakusei"
            :src="require(`@/assets/card_illust/${
              store.conversion(store.settingCard.card)}_${
              store.makeCardMemberName(
                store.settingCard.ID
              )
            }_覚醒${kakusei}.webp`)"
          ></v-carousel-item>
        </v-carousel>
        <v-row
          no-gutters
          id="styleAndMoodArea"
          class="text-center"
        >
          <v-col
            cols="12"
            sm="6"
            class="pt-2 pb-1"
          >
            <span class="left">タイプ</span>
            <span class="right">
              <v-img
                :src="require(`@/assets/styleType_icon/icon_${store.settingCardData.styleType}.png`)"
                class="icon type"
                v-if="false"
              ></v-img
              >{{ store.styleType[store.settingCardData.styleType] }}
            </span>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            class="pt-2 pb-1"
          >
            <span class="left">ムード</span>
            <span class="right pl-1">
              <v-img
                :src="require(`@/assets/mood_icon/icon_${store.settingCardData.mood}.png`)"
                class="icon mood"
                v-if="false"
              ></v-img>
              {{ store.mood[store.settingCardData.mood] }}
            </span>
          </v-col>
        </v-row>
        <v-table
          density="compact"
          class="mb-1"
        >
          <thead>
            <tr>
              <th
                v-for="header of ['スマイル', 'ピュア', 'クール', 'メンタル', 'BP']"
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
              <td
                style="width: 80px"
                class="px-0 text-center"
              >
                {{ store.cardParam('smile') }}
              </td>
              <td
                style="width: 80px"
                class="px-0 text-center"
              >
                {{ store.cardParam('pure') }}
              </td>
              <td
                style="width: 80px"
                class="px-0 text-center"
              >
                {{ store.cardParam('cool') }}
              </td>
              <td
                style="width: 80px"
                class="px-0 text-center"
              >
                {{ store.cardParam('mental') }}
              </td>
              <td
                style="width: 50px"
                class="px-0 text-center"
              >
                {{ store.settingCardData.uniqueStatus.BP }}
              </td>
            </tr>
          </tbody>
        </v-table>
        <v-row
          no-gutters
          class="text-center"
        >
          <v-col
            cols="12"
            sm="10"
          >
            <v-row
              no-gutters
              class="mb-2 mb-sm-0"
            >
              <v-col
                cols="12"
                class="pb-1 font-weight-bold"
              >
                初登場時期
              </v-col>
              <v-col cols="12">{{ store.settingCardData.gacha.addSeason }}</v-col>
            </v-row>
          </v-col>
          <v-col
            cols="12"
            sm="2"
          >
            <v-row no-gutters>
              <v-col
                cols="12"
                class="pb-1 font-weight-bold"
              >
                入手期間
              </v-col>
              <v-col cols="12">{{ store.limited[store.settingCardData.gacha.period].cardLabel }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        sm="5"
      >
        <div class="mb-4">
          <h4 class="mb-4">特訓度</h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col
              align="center"
              justify="center"
              class="pa-0"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.trainingLevel === 0"
                @click="store.valueChange('trainingLevel', store.settingCardData.fluctuationStatus.trainingLevel - 1)"
                >-1
              </v-btn>
            </v-col>
            <v-col class="pa-0 align-self-center text-center">
              {{ [0, 1, 2, 3, 4][store.settingCardData.fluctuationStatus.trainingLevel] }}
            </v-col>
            <v-col
              align="center"
              justify="center"
              class="pa-0"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.trainingLevel === store.setMaxTrainingLevel"
                @click="store.valueChange('trainingLevel', store.settingCardData.fluctuationStatus.trainingLevel + 1)"
                >+1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div class="mb-6">
          <h4 class="mb-4">レベル</h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === (store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === (store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.cardLevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              {{ store.settingCardData.fluctuationStatus.cardLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === store.changeMaxCardLevel"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.cardLevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === store.changeMaxCardLevel"
                @click="store.valueChange('cardLevel', store.changeMaxCardLevel)"
              >
                MAX
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div
          class="mb-6"
          v-if="store.settingCardData?.specialAppeal"
        >
          <h4 class="mb-4 d-flex flex-row align-center">
            スペシャルアピール
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="openDialog('skillList', 900, { targetSkill: 'specialAppeal' })"
            ></v-btn>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === 1"
                @click="store.valueChange('SALevel', 1)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === 1"
                @click="store.valueChange('SALevel', store.settingCardData.fluctuationStatus.SALevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 d-flex flex-row align-center justify-center">
              {{ store.settingCardData.fluctuationStatus.SALevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === store.changeSkillLevel"
                @click="store.valueChange('SALevel', store.settingCardData.fluctuationStatus.SALevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === store.changeSkillLevel"
                @click="store.valueChange('SALevel', store.changeSkillLevel)"
              >
                MAX
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div
          class="mb-6"
          v-if="store.settingCardData?.skill"
        >
          <h4 class="mb-4 d-flex flex-row align-center">
            スキル
            <v-btn
              size="small"
              density="compact"
              icon="mdi-help"
              class="ml-1"
              @click="openDialog('skillList', 900, { targetSkill: 'skill' })"
            ></v-btn>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', 1)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', store.settingCardData.fluctuationStatus.SLevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              {{ store.settingCardData.fluctuationStatus.SLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === store.changeSkillLevel"
                @click="store.valueChange('SLevel', store.settingCardData.fluctuationStatus.SLevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === store.changeSkillLevel"
                @click="store.valueChange('SLevel', store.changeSkillLevel)"
              >
                MAX
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div class="mb-6">
          <h4 class="mb-4 d-flex flex-row align-center">
            解放Lv.
            <span
              v-if="store.settingCard.rare !== 'DR' && store.settingCardData?.specialAppeal"
              class="ml-1"
            >
              (最終獲得GP Pt. +<span class="text-pink"> {{ store.grandprixBonus.releaseLv[store.settingCard.rare][store.settingCardData.fluctuationStatus.releaseLevel - 1] * 100 }} </span>%)
              <v-btn
                size="small"
                density="compact"
                icon="mdi-help"
                class="ml-1"
                @click="openDialog('GPPT', 600, null)"
              ></v-btn
            ></span>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 1"
                @click="
                  store.valueChange('releaseLevel', 1);
                  store.valueChange('releasePoint', maxReleasePoint(store));
                "
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 1"
                @click="
                  store.valueChange('releaseLevel', store.settingCardData.fluctuationStatus.releaseLevel - 1);
                  store.valueChange('releasePoint', maxReleasePoint(store));
                "
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              {{ store.settingCardData.fluctuationStatus.releaseLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 5"
                @click="
                  store.valueChange('releaseLevel', store.settingCardData.fluctuationStatus.releaseLevel + 1);
                  store.valueChange('releasePoint', Math.max(0, store.settingCardData.fluctuationStatus.releasePoint - store.releasePoint[store.settingCardData.rare].point));
                "
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 5"
                @click="
                  store.valueChange('releaseLevel', 5);
                  store.valueChange('releasePoint', 0);
                "
              >
                MAX
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div class="mb-4">
          <h4 class="mb-4 d-flex flex-row align-center">
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
          <v-row class="mb-2">
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releasePoint === 0"
                @click="store.valueChange('releasePoint', Math.max(0, store.settingCardData.fluctuationStatus.releasePoint - store.releasePoint[store.settingCardData.rare].point))"
              >
                -{{ store.settingCardData.fluctuationStatus.releasePoint - store.releasePoint[store.settingCardData.rare].point < 0 ? store.settingCardData.fluctuationStatus.releasePoint : store.releasePoint[store.settingCardData.rare].point }}
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releasePoint === 0"
                @click="store.valueChange('releasePoint', store.settingCardData.fluctuationStatus.releasePoint - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              {{ store.settingCardData.fluctuationStatus.releasePoint }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releasePoint === limitReleasePoint(store)"
                @click="store.valueChange('releasePoint', store.settingCardData.fluctuationStatus.releasePoint + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="pa-0 align-self-center text-center">
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releasePoint === limitReleasePoint(store)"
                @click="store.valueChange('releasePoint', Math.min(store.settingCardData.fluctuationStatus.releasePoint + store.releasePoint[store.settingCardData.rare].point, limitReleasePoint(store)))"
              >
                +{{ store.settingCardData.fluctuationStatus.releasePoint + store.releasePoint[store.settingCardData.rare].point > limitReleasePoint(store) ? limitReleasePoint(store) - store.settingCardData.fluctuationStatus.releasePoint : store.releasePoint[store.settingCardData.rare].point }}
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
          <v-slider
            v-if="store.settingCardData.fluctuationStatus.releaseLevel < 5"
            hide-details
            v-model="store.settingCardData.fluctuationStatus.releasePoint"
            :max="limitReleasePoint(store)"
            min="0"
            step="1"
            color="pink"
            thumb-color="pink"
            class="mb-4 px-2"
          ></v-slider>
        </div>
        <div class="mb-4">
          <h4 class="mb-4">お気に入り</h4>
          <v-row class="text-center">
            <v-col
              cols="2"
              v-for="favorite in store.favorite"
              :key="favorite"
              class="pa-0"
            >
              <v-btn
                :icon="`mdi-${favorite}`"
                variant="text"
                density="compact"
                size="small"
                :color="store.settingCardData.favorite.some((v) => v === favorite) ? 'pink' : ''"
                @click="store.changeFav(favorite)"
              ></v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <skillArea skillType="specialAppeal" />
    <!-- <div
      class="mt-4"
      v-if="store.settingCardData?.specialAppeal"
    >
      <div class="mb-1">
        <span class="specialAppeal">スペシャルアピール</span>{{ store.settingCardData.specialAppeal.name }}
        <span class="AP">AP{{ store.settingCardData.specialAppeal.AP - (store.settingCardData.fluctuationStatus.trainingLevel < store.maxCardLevel[store.settingCardData.rare].length - 2 ? store.settingCardData.fluctuationStatus.trainingLevel : 2) }}</span>
      </div>
      <div>
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SALevel }}</span>
        {{ store.makeSkillText('specialAppeal') }}
      </div>
      <div>
        <v-chip
          v-for="(skillID, i) in store.skillList[store.settingCardData.specialAppeal.name][store.settingCardData.specialAppeal.ID].detail.type"
          :key="skillID"
          :color="store.skillColor[skillID].colorCode"
          :class="`chipSize mb-1 ${i + 1 < store.skillList[store.settingCardData.specialAppeal.name][store.settingCardData.specialAppeal.ID].detail.type.length ? 'mr-1' : ''}`"
          @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'specialAppeal' })"
        >
          {{ store.skillColor[skillID].name }}
        </v-chip>
      </div>

      <v-expansion-panels
        class="mt-1"
        v-if="outputAddSkillList?.specialAppeal"
      >
        <v-expansion-panel bg-color="yellow-darken-1">
          <v-expansion-panel-title> 追加カード・特性/モードチェンジ詳細 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="(list, i) of outputAddSkillList?.specialAppeal"
              :key="i"
              :class="`${i === 0 ? '' : 'mt-2'}`"
            >
              <v-divider class="mb-3 border-opacity-50"></v-divider>

              <div>
                <p>
                  <span
                    class="specialAppeal"
                    v-if="list?.modeName"
                  >
                    {{ list.modeName }}
                  </span>
                  <span
                    class="specialAppeal"
                    v-else
                  >
                    スキル {{ i + 1 }}
                  </span>
                  <span class="mr-1">
                    {{ list.name }}
                  </span>
                  <span
                    class="AP"
                    v-if="list?.AP"
                  >
                    AP{{ list.AP }}
                  </span>
                </p>
                <p class="mt-1">
                  {{ store.makeSkillText('specialAppeal', { addSkillNum: i }) }}
                </p>
                <div>
                  <v-chip
                    v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                    :key="skillID"
                    :color="store.skillColor[skillID].colorCode"
                    :class="`chipSize mt-1 ${ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
                    @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'specialAppeal' })"
                  >
                    {{ store.skillColor[skillID].name }}
                  </v-chip>
                </div>
              </div>

              <div
                class="mt-3"
                v-if="list?.characteristic"
              >
                <span class="specialAppeal characteristic"> 特性 {{ i + 1 }} </span>
                {{ list.characteristic.name }}
                <p class="mt-1">{{ list.characteristic.detail }}</p>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->

    <skillArea skillType="skill" />
    <!-- <div
      class="mt-4"
      v-if="store.settingCardData?.skill"
    >
      <div class="mb-1">
        <span class="specialAppeal">スキル</span>{{ store.settingCardData.skill.name }}
        <span class="AP">AP{{ store.settingCardData.skill.AP }}</span>
      </div>
      <div>
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SLevel }}</span>
        {{ store.makeSkillText('skill') }}
      </div>
      <div class="mb-1">
        <v-chip
          v-for="(skillID, i) in store.skillList[store.settingCardData.skill.name][store.settingCardData.skill.ID].detail.type"
          :key="skillID"
          :color="store.skillColor[skillID].colorCode"
          :class="`chipSize mb-1 ${i + 1 < store.skillList[store.settingCardData.skill.name][store.settingCardData.skill.ID].detail.type.length ? 'mr-1' : ''}`"
          @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'skill' })"
          >{{ store.skillColor[skillID].name }}</v-chip
        >
      </div>

      <v-expansion-panels
        class="mb-2"
        v-if="outputAddSkillList?.skill"
      >
        <v-expansion-panel bg-color="yellow-darken-1">
          <v-expansion-panel-title> 追加カード・特性/モードチェンジ詳細 </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-tabs
              v-model="tab_addSkill"
              color="pink"
              density="compact"
              grow
              show-arrows
            >
              <template
                v-for="(list, i) of outputAddSkillList?.skill"
                :key="i"
              >
                <v-tab>{{ list.name }}</v-tab>
              </template>
            </v-tabs>
            <v-divider class="border-opacity-50"></v-divider>
            <v-tabs-window v-model="tab_addSkill">
              <template
                v-for="(list, i) of outputAddSkillList?.skill"
                :key="i"
              >
                <v-tabs-window-item :value="i" class="pt-2">
                  <div>
                    <p>
                      <span
                        class="specialAppeal"
                        v-if="list?.modeName"
                      >{{ list.modeName }}</span>
                      <span
                        class="specialAppeal"
                        v-else
                      >スキル</span>
                      <span class="mr-1">{{ list.name }}</span>
                      <span
                        class="AP"
                        v-if="list?.AP"
                      >AP{{ list.AP }}</span>
                    </p>

                    <p class="mt-1">
                      {{ store.makeSkillText('skill', { addSkillNum: i }) }}
                    </p>

                    <div>
                      <v-chip
                        v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                        :key="skillID"
                        :color="store.skillColor[skillID].colorCode"
                        :class="`chipSize mt-1 ${ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
                        @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'skill' })"
                      >
                        {{ store.skillColor[skillID].name }}
                      </v-chip>
                    </div>
                  </div>

                  <div
                    class="mt-3"
                    v-if="list?.characteristic"
                  >
                    <span class="specialAppeal characteristic">特性</span>
                    {{ list.characteristic.name }}
                    <p class="mt-1">{{ list.characteristic.detail }}</p>
                  </div>

                  <v-expansion-panels
                    class="my-2"
                    v-if="list?.addSkill"
                  >
                    <v-expansion-panel bg-color="yellow-darken-1">
                      <v-expansion-panel-title> 追加カード・特性/モードチェンジ詳細 </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div
                          v-for="(addSkillList, addSkillNum) of list?.addSkill"
                          :key="addSkillNum"
                          :class="`${addSkillNum === 0 ? '' : 'mt-2'}`"
                        >
                          <v-divider class="mb-3 border-opacity-50"></v-divider>

                          <div>
                            <p>
                              <span
                                class="specialAppeal"
                                v-if="addSkillList?.modeName"
                              >
                                {{ addSkillList.modeName }}
                              </span>
                              <span
                                class="specialAppeal"
                                v-else
                              >
                                スキル {{ addSkillNum + 1 }}
                              </span>
                            <span class="mr-1">
                              {{ addSkillList.name }}
                            </span>
                            <span
                              class="AP"
                              v-if="list?.AP"
                            >
                              AP{{ addSkillList.AP }}
                            </span>
                          </p>

                          <p class="mt-1">
                            {{ store.makeSkillText('addSkill', {
                              addSkillNum: [i, addSkillNum]
                            })
                            }}
                          </p>

                          <div>
                            <v-chip
                              v-for="(skillID, ii) in store.skillList[addSkillList.name][addSkillList.ID].detail.type"
                              :key="skillID"
                              :color="store.skillColor[skillID].colorCode"
                              :class="`chipSize mt-1 ${ii + 1 < store.skillList[addSkillList.name][addSkillList.ID].detail.type.length ? 'mr-1' : ''}`"
                              @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'skill' })"
                            >
                              {{ store.skillColor[skillID].name }}
                            </v-chip>
                          </div>
                        </div>

                          <div
                            class="mt-3"
                            v-if="list?.characteristic"
                          >
                            <span class="specialAppeal characteristic"> 特性 {{ addSkillNum + 1 }} </span>
                            {{ addSkillList.characteristic.name }}
                            <p class="mt-1">{{ addSkillList.characteristic.detail }}</p>
                          </div>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-tabs-window-item>
              </template>
            </v-tabs-window>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->

    <skillArea skillType="characteristic" />
    <!-- <div
      class="mt-4"
      v-if="store.settingCardData?.characteristic"
    >
      <div class="px-0 pt-0 pb-1">
        <span class="specialAppeal characteristic">
          特性
        </span>{{ store.settingCardData.characteristic.name }}
      </div>
      <div class="pa-0">
        {{ store.settingCardData.characteristic.detail }}
      </div>

      <v-expansion-panels
        class="my-2"
        v-if="outputAddSkillList?.characteristic"
      >
        <v-expansion-panel bg-color="yellow-darken-1">
          <v-expansion-panel-title>追加カード・特性/モードチェンジ詳細</v-expansion-panel-title>
          <v-expansion-panel-text>
            <div
              v-for="(list, i) of outputAddSkillList?.characteristic"
              :key="i"
              :class="`${i === 0 ? '' : 'mt-2'}`"
            >
              <v-divider class="mb-3 border-opacity-50"></v-divider>

              <p>
                <span
                  class="specialAppeal"
                  v-if="list?.modeName"
                >{{ list.modeName }}</span>
                <span
                  class="specialAppeal"
                  v-else
                >スキル {{ i + 1 }}</span>
                <span class="mr-1">
                  {{ list.name }}
                </span>
                <span
                  class="AP"
                  v-if="list?.AP"
                >AP{{ list.AP }}</span>
              </p>
              <p class="mt-1">
                {{ list?.ID ? store.skillList[list.name][list.ID].text[0] : list.detail }}
              </p>

              <div v-if="list?.ID">
                <v-chip
                  v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                  :key="skillID"
                  :color="store.skillColor[skillID].colorCode"
                  :class="`chipSize mt-1 ${ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
                  @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'specialAppeal' })"
                >{{ store.skillColor[skillID].name }}</v-chip>
              </div>

              <div
                class="mt-3"
                v-if="list?.characteristic"
              >
                <span class="specialAppeal characteristic">特性{{ i + 1 }}</span>
                {{ list.characteristic.name }}
                <p class="mt-1">{{ list.characteristic.detail }}</p>
              </div>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </div> -->

    <div
      class="mt-2 px-0 pt-0 pb-1"
      v-if="store.settingCardData.uniqueStatus?.supportSkill"
    >
      <span class="specialAppeal supportSkill">
        サポートスキル
      </span>
      {{ store.settingCardData.uniqueStatus.supportSkill.supportSkillTitle }}
      <ul class="d-flex mt-2">
        <li
          v-for="(list, supportSkillName) in store.settingCardData.uniqueStatus.supportSkill.supportSkillList"
          :key="supportSkillName"
          class="pr-2"
        >
          <img
            :src="require(`@/assets/bonusSkill_icon/${supportSkillName}.webp`)"
            class="mr-1"
            style="width: 50px; border-radius: 5px"
          />
          <span style="font-size: 18px">Lv.{{ makeSupportSkillLevel(store, supportSkillName) }}</span>
        </li>
      </ul>
    </div>
  </v-container>

  <v-dialog
    v-model="dialog"
    scrollable
    :max-width="dialogSize"
  >
    <v-sheet class="pa-3">
      <div v-if="openDialogName === 'skillList'">
        <h2 class="text-center mb-2">スキル効果量一覧</h2>
        <v-tabs
          class="mb-2"
          v-model="selectAddSkillDetail"
          color="pink"
          grow
        >
          <v-tab value="mainSkill">メインスキル</v-tab>
          <v-tab
            v-for="(addSkillData, i) in store.settingCardData[targetSkill].addSkill"
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
                  <th class="text-center px-1">効果</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="i in 14"
                  :key="i"
                >
                  <th class="text-center px-1">{{ i }}</th>
                  <td class="px-1">
                    {{ store.makeSkillText(targetSkill, { targetSkillLv: i - 1 }) }}
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-tabs-window-item>
          <v-tabs-window-item
            v-for="(a, i) in store.settingCardData[targetSkill].addSkill"
            :key="i"
            :value="a.name"
          >
            スキル名：{{ a.name }}
            <v-table density="compact">
              <thead>
                <tr>
                  <th class="text-center px-1">Lv</th>
                  <th class="text-center px-1">効果</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="skillLevel in 14"
                  :key="skillLevel"
                >
                  <th class="text-center px-1">{{ skillLevel }}</th>
                  <td class="px-1">
                    {{ store.makeSkillText(targetSkill, { targetSkillLv: skillLevel - 1, addSkillNum: i }) }}
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
          楽曲の歌唱メンバーのMAIN STYLEに設定しているカードの解放Lv.を上げると、ライブグランプリのグランプリPt.を増加させることができます。<br />
          この増加できる値のことを「解放Lv.ボーナス」と呼びます。<br />
          解放Lv.ボーナスは、レアリティと解放状況によって以下のように変わります。
        </p>

        <v-table>
          <thead>
            <tr>
              <th
                rowspan="2"
                class="text-center"
              >
                レアリティ
              </th>
              <th
                colspan="5"
                class="text-center"
              >
                解放状況
              </th>
            </tr>
            <tr>
              <th
                v-for="i of 5"
                :key="i"
                class="text-center"
              >
                ♪×{{ i }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(list, rarity) of store.grandprixBonus.releaseLv"
              :key="rarity"
            >
              <th>{{ rarity }}</th>
              <td
                v-for="bonus of list"
                :key="bonus"
                class="text-center"
              >
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
          この解放Pt.を設定していると、カード一覧のカード画像の右上に<span class="text-blue-accent-4">●</span>がつきます。<br />
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
        <v-btn
          prepend-icon="mdi-close"
          @click="switchDialog(null);"
        >
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { useStoreCounter } from '@/stores/counter';
import skillArea from './SkillAreaComponent';
const store = useStoreCounter();
</script>

<script>
export default {
  name: 'CardSetting',
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
    };
  },
  components: {
    skillArea: skillArea
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    /**
     * リンク作成
     *
     * @param cardName カード名
     * @param memberName メンバー名
     * @returns string リンク
     */
    makeWikiLink(cardName, memberName) {
      return `https://wikiwiki.jp/llll_wiki/スクステ/カード/［${cardName.replaceAll('&', '＆').replaceAll('/', '／')}］${memberName}`;
    },
    /**
     * カードネーム作成
     *
     * @param store ストア
     * @returns string カード名
     */
    makeCardName(store) {
      return `${store.settingCard.rare} [${store.settingCard.card}] ${store.makeFullName(store.settingCard.name)}`;
    },
    /**
     * サポートスキル作成
     *
     * @param store ストア
     * @param supportSkillName サポートスキル名
     */
    makeSupportSkillLevel(store, supportSkillName) {
      const result = store.settingCardData.uniqueStatus.supportSkill.supportSkillList[supportSkillName].initLevel;

      if (store.settingCardData.fluctuationStatus.cardLevel === 0) {
        return 0;
      } else if (store.settingCardData.fluctuationStatus.releaseLevel >= store.settingCardData.uniqueStatus.supportSkill.supportSkillList[supportSkillName].levelUp) {
        return result + store.settingCardData.uniqueStatus.supportSkill.supportSkillList[supportSkillName].upLevel;
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
     */
    switchDialog(flg) {
      this.dialog = flg === null ? !this.dialog : flg;
    },
    /**
     * ダイアログ開閉処理
     *
     * @param openDialogName 開きたいダイアログ名
     * @param dialogSize ダイアログの横幅
     * @param option オプション
     */
    openDialog(openDialogName, dialogSize, option) {
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
     * @param {Object} store store
     * @returns number 最大値
     */
    maxReleasePoint(store) {
      const point = Math.min(store.settingCardData.fluctuationStatus.releasePoint, this.limitReleasePoint(store));
      store.valueChange('releasePoint', point);
      return point;
    },
    /**
     * 解放Pt.上限計算
     *
     * @param {Object} store store
     * @returns string 上限値
     */
    limitReleasePoint(store) {
      return store.releasePoint[store.settingCardData.rare].max - store.releasePoint[store.settingCardData.rare].point * (store.settingCardData.fluctuationStatus.releaseLevel - 1);
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