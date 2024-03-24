<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="mb-1 text-center">
      <v-col class="pa-0">
        <h2 class="hidden-xs">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <a :href="makeWikiLink(store.settingCard.card, store.charactorName[store.settingCard.name].first + store.charactorName[store.settingCard.name].last)" target="_blank" style="color: #000;" v-bind="props">
                {{ store.settingCard.rare }} [{{ store.settingCard.card }}] {{ store.charactorName[store.settingCard.name].first }} {{ store.charactorName[store.settingCard.name].last }}
              </a>
            </template>
            Wikiを開く
          </v-tooltip>
        </h2>
        <h3 class="hidden-sm-and-up">
          <a :href="makeWikiLink(store.settingCard.card, store.charactorName[store.settingCard.name].first + store.charactorName[store.settingCard.name].last)" target="_blank" style="color: #000;">
            {{ store.settingCard.rare }} [{{ store.settingCard.card }}] {{ store.charactorName[store.settingCard.name].first }} {{ store.charactorName[store.settingCard.name].last }}
          </a>
        </h3>
      </v-col>
    </v-row>

    <v-row no-gutters class="mb-2">
      <v-col
        cols="12"
        sm="7"
        class="py-0 pl-0 pr-0 pr-sm-4"
      >
        <v-carousel
          class="mb-1"
          height="auto"
          hide-delimiter-background
          show-arrows-on-hover
          :show-arrows="false"
          :hide-delimiters="store.settingCard.rare === 'DR'"
          color="#e5762c"
        >
          <v-carousel-item
            v-for="kakusei in store.settingCard.rare === 'DR' ? ['後'] : ['前', '後']"
            :key="kakusei"
            :src="require(`@/assets/card_illust/${store.conversion(store.settingCard.card)}_${store.charactorName[store.settingCard.name].last}_覚醒${kakusei}.webp`)"
          >
          </v-carousel-item>
        </v-carousel>
        <v-row no-gutters id="styleAndMoodArea" class="text-center">
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
              ></v-img>{{ store.styleType[store.settingCardData.styleType] }}
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
        <v-table density="compact">
          <thead>
            <tr>
              <th
                v-for="a of ['スマイル', 'ピュア', 'クール', 'メンタル', 'BP']"
                :key="a"
                :style="`width: ${a === 'BP' ? 5 : 8}0px;`"
                
                class="px-0 text-center"
              >
                {{ a }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="width: 80px;" class="px-0 text-center">{{ store.cardParam('smile') }}</td>
              <td style="width: 80px;" class="px-0 text-center">{{ store.cardParam('pure') }}</td>
              <td style="width: 80px;" class="px-0 text-center">{{ store.cardParam('cool') }}</td>
              <td style="width: 80px;" class="px-0 text-center">{{ store.mentalCul() }}</td>
              <td style="width: 50px;" class="px-0 text-center">{{ store.settingCardData.uniqueStatus.BP }}</td>
            </tr>
          </tbody>
        </v-table>
        <v-row no-gutters class="text-center">
          <v-col cols="12" sm="10">
            <v-row no-gutters class="mb-2 mb-sm-0">
              <v-col cols="12" class="pb-1 font-weight-bold">初登場時期</v-col>
              <v-col cols="12">{{ store.settingCardData.gacha.addSeason }}</v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row no-gutters>
              <v-col cols="12" class="pb-1 font-weight-bold">入手期間</v-col>
              <v-col cols="12">{{ store.settingCardData.gacha.period }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        sm="5"
      >
        <div class="mb-6">
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
                @click="store.valueChange('trainingLevel', store.settingCardData.fluctuationStatus.trainingLevel - 1)">-1
              </v-btn>
            </v-col>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              {{ ['none', '+', '++'][store.settingCardData.fluctuationStatus.trainingLevel] }}
            </v-col>
            <v-col
              align="center"
              justify="center"
              class="pa-0"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.trainingLevel === store.setMaxTrainingLevel"
                @click="store.valueChange('trainingLevel', store.settingCardData.fluctuationStatus.trainingLevel + 1)">+1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        </div>
        <div class="mb-6">
          <h4 class="mb-4">レベル</h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === (store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === (store.settingCardData.fluctuationStatus.trainingLevel === 0 ? 0 : store.changeMinCardLevel)"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.cardLevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              {{ store.settingCardData.fluctuationStatus.cardLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.cardLevel === store.changeMaxCardLevel"
                @click="store.valueChange('cardLevel', store.settingCardData.fluctuationStatus.cardLevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
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
        <div class="mb-6">
          <h4 class="mb-4 d-flex flex-row align-center">
            スペシャルアピール<v-btn size="small" density="compact" icon="mdi-help" class="ml-1" @click="openDialog('skillList', 900, {targetSkill: 'specialAppeal'})"></v-btn>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === 1"
                @click="store.valueChange('SALevel', 1)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === 1"
                @click="store.valueChange('SALevel', store.settingCardData.fluctuationStatus.SALevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 d-flex flex-row align-center justify-center"
            >
              {{ store.settingCardData.fluctuationStatus.SALevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SALevel === store.changeSkillLevel"
                @click="store.valueChange('SALevel', store.settingCardData.fluctuationStatus.SALevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
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
        <div class="mb-6">
          <h4 class="mb-4 d-flex flex-row align-center">
            スキル<v-btn size="small" density="compact" icon="mdi-help" class="ml-1" @click="openDialog('skillList', 900, {targetSkill: 'skill'})"></v-btn>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', 1)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === 1"
                @click="store.valueChange('SLevel', store.settingCardData.fluctuationStatus.SLevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              {{ store.settingCardData.fluctuationStatus.SLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.SLevel === store.changeSkillLevel"
                @click="store.valueChange('SLevel', store.settingCardData.fluctuationStatus.SLevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
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
            解放Lv.<span v-if="store.settingCard.rare !== 'DR'" class="ml-1">(最終獲得GP Pt. +<span class="text-pink">{{ store.grandprixBonus.releaseLv[store.settingCard.rare][store.settingCardData.fluctuationStatus.releaseLevel - 1] * 100 }}</span>%)<v-btn size="small" density="compact" icon="mdi-help" class="ml-1" @click="openDialog('GPPT', 600)"></v-btn></span>
          </h4>
          <v-row>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 1"
                @click="store.valueChange('releaseLevel', 1)"
              >
                MIN
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 1"
                @click="store.valueChange('releaseLevel', store.settingCardData.fluctuationStatus.releaseLevel - 1)"
              >
                -1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              {{ store.settingCardData.fluctuationStatus.releaseLevel }}
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 5"
                @click="store.valueChange('releaseLevel', store.settingCardData.fluctuationStatus.releaseLevel + 1)"
              >
                +1
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
              class="pa-0 align-self-center text-center"
            >
              <v-btn
                :disabled="store.settingCardData.fluctuationStatus.releaseLevel === 5"
                @click="store.valueChange('releaseLevel', 5)"
              >
                MAX
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
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
                :color="store.settingCardData.favorite.some(v => v === favorite) ? 'pink' : ''"
                @click="store.changeFav(favorite)"
              ></v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-4 mb-2">
      <v-col cols="12" class="mb-1">
        <span class="specialAppeal">スペシャルアピール</span>{{ store.settingCardData.specialAppeal.name }}
        <span class="AP">AP{{ store.settingCardData.specialAppeal.AP - store.settingCardData.fluctuationStatus.trainingLevel }}</span>
      </v-col>
      <v-col cols="12">
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SALevel }}</span>
        {{ store.makeSkillText('specialAppeal') }}
      </v-col>
      <v-col cols="12">
        <v-chip
          v-for="(skillID, i) in store.skillList[store.settingCardData.specialAppeal.name][store.settingCardData.specialAppeal.ID].detail.type"
          :key="skillID"
          :color="store.skillColor[skillID].colorCode"
          :class="`chipSize mb-1 ${(i + 1) < store.skillList[store.settingCardData.specialAppeal.name][store.settingCardData.specialAppeal.ID].detail.type.length ? 'mr-1' : ''}`"
          @click="openDialog('skillDescription', 600, {'skillID': skillID})"
        >{{ store.skillColor[skillID].name }}</v-chip>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" class="mb-1">
        <span class="specialAppeal">スキル</span>{{ store.settingCardData.skill.name }}
        <span class="AP">AP{{ store.settingCardData.skill.AP }}</span>
      </v-col>
      <v-col cols="12">
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SLevel }}</span>
        {{ store.makeSkillText('skill') }}
      </v-col>
      <v-col cols="12">
        <v-chip
          v-for="(skillID, i) in store.skillList[store.settingCardData.skill.name][store.settingCardData.skill.ID].detail.type"
          :key="skillID"
          :color="store.skillColor[skillID].colorCode"
          :class="`chipSize mb-1 ${(i + 1) < store.skillList[store.settingCardData.skill.name][store.settingCardData.skill.ID].detail.type.length ? 'mr-1' : ''}`"
          @click="openDialog('skillDescription', 600, {'skillID': skillID})"
        >{{ store.skillColor[skillID].name }}</v-chip>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-2" v-if="store.settingCard.rare !== 'R'">
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">特性</span>{{ store.settingCardData.characteristic.name }}
      </v-col>
      <v-col cols="12" class="pa-0">
        {{ store.settingCardData.characteristic.detail }}
      </v-col>
    </v-row>
  </v-container>

  <v-dialog
    v-model="dialog"
    scrollable
    :max-width="dialogSize"
  >
    <v-sheet class="pa-3 bg-white">
      <div v-if="openDialogName === 'skillList'">
        <h2 class="text-center mb-2">スキル効果量一覧</h2>
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
              <td>
                {{ store.makeSkillText(targetSkill, {targetSkillLv: i - 1}) }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </div>
      <div v-else-if="openDialogName === 'skillDescription'">
        <h2 class="text-center mb-2">スキル詳細</h2>
        {{ store.skillColor[skillID].description }}

        <v-row no-gutters v-if="skillID === 'addCard'" class="mt-2">
          <v-col
            cols="12"
            v-for="(list, i) of store.settingCardData.specialAppeal.addSkill"
            :key="i"
            :class="`${(i + 1) < store.settingCardData.specialAppeal.addSkill.length ? 'mb-2' : ''}`"
          >
            <div class="mb-1">
              <span class="specialAppeal">スキル {{ i + 1 }}</span>{{ list.name }}
              <span class="AP">AP{{ list.AP }}</span>
            </div>
            {{ store.makeSkillText('specialAppeal', {addSkillNum: i}) }}
            <div>
              <v-chip
                v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                :key="skillID"
                :color="store.skillColor[skillID].colorCode"
                :class="`chipSize mb-1 ${(ii + 1) < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
              >{{ store.skillColor[skillID].name }}</v-chip>
            </div>
          </v-col>
        </v-row>
      </div>
      <div v-else-if="openDialogName === 'GPPT'">
        <h2 class="text-center mb-2">解放Lv.ボーナスとは？</h2>
        <p>
          楽曲の歌唱メンバーのMAIN STYLEに設定しているカードの解放Lv.を上げると、ライブグランプリのグランプリPt.を増加させることができます。<br>
          この増加できる値のことを「解放Lv.ボーナス」と呼びます。<br>
          解放Lv.ボーナスは、レアリティと解放状況によって以下のように変わります。
        </p>

        <v-table>
          <thead>
            <tr>
              <th rowspan="2" class="text-center">レアリティ</th>
              <th colspan="5" class="text-center">解放状況</th>
            </tr>
            <tr>
              <th
                v-for="i of 5"
                :key="i"
                class="text-center"
              >♪×{{ i }}</th>
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
              >+{{ bonus * 100 }}%</td>
            </tr>
          </tbody>
        </v-table>
        ※DRカードはライブグランプリに参加できないため、解放Lv.ボーナス対象外
      </div>
      <div class="mt-1 text-center">
        <v-btn @click="switchDialog()">閉じる</v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'CardSetting',
  data() {
    return {
      dialog: false,
      openDialogName: null,
      dialogSize: 0,
      targetSkill: null,
      skillID: ''
    }
  },
  created() {},
  mounted() {},
  computed: {},
  methods: {
    makeWikiLink(cardName, memberName) {
      return `https://wikiwiki.jp/llll_wiki/スクステ/カード/［${cardName.replaceAll('&', '＆')}］${memberName}`;
    },
    switchDialog(flg) {
      if (flg !== undefined) {
        this.dialog = flg;
      } else {
        this.dialog = !this.dialog;
      }
    },
    openDialog(openDialogName, dialogSize, option) {
      if (openDialogName === 'skillList') {
        this.targetSkill = option.targetSkill;
      } else if (openDialogName === 'skillDescription') {
        this.skillID = option.skillID;
      }

      this.openDialogName = openDialogName;
      this.dialogSize = dialogSize;

      this.switchDialog();
    }
  }
}
</script>

<style lang="scss" scoped>
.AP {
  font-weight: bold;
  color: pink;
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