<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters class="mb-2 text-center">
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
    <v-row no-gutters class="mb-5">
      <v-col
        cols="12"
        sm="7"
        class="py-0 pl-0 pr-0 pr-sm-4 pr-md-4 pr-lg-4 pr-xl-4"
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
            :src="require(`@/assets/card_illust/${store.conversion(store.settingCard.card)}_${store.charactorName[store.settingCard.name].last}_覚醒${kakusei}.png`)"
          >
          </v-carousel-item>
        </v-carousel>
        <v-row no-gutters id="styleAndMoodArea" class="text-center mb-1">
          <v-col
            cols="12"
            sm="6"
            class="py-2"
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
            class="py-2"
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
        <table id="statusDisplayArea" class="mb-2">
          <thead>
            <tr>
              <th>スマイル</th>
              <th>ピュア</th>
              <th>クール</th>
              <th>メンタル</th>
              <th>BP</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ store.cardParam('smile') }}</td>
              <td>{{ store.cardParam('pure') }}</td>
              <td>{{ store.cardParam('cool') }}</td>
              <td>{{ store.mentalCul() }}</td>
              <td>{{ store.settingCardData.uniqueStatus.BP }}</td>
            </tr>
          </tbody>
        </table>
        <v-row no-gutters class="text-center">
          <v-col cols="12" sm="10">
            <v-row no-gutters class="mb-2">
              <v-col cols="12" class="pb-1">初登場時期</v-col>
              <v-col cols="12">{{ store.settingCardData.gacha.addSeason }}</v-col>
            </v-row>
          </v-col>
          <v-col cols="12" sm="2">
            <v-row no-gutters class="mb-2">
              <v-col cols="12" class="pb-1">入手期間</v-col>
              <v-col cols="12">{{ store.settingCardData.gacha.period }}</v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        cols="12"
        sm="5"
        class="pa-0"
      >
        <h4 class="mb-4">特訓度</h4>
        <v-row class="mb-5">
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
            align="center"
            justify="center"
            class="px-0 pt-1 pb-0"
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
        <h4 class="mb-4">レベル</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="px-0 pt-2 pb-0"
          >
            {{ store.settingCardData.fluctuationStatus.cardLevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
        <h4 class="mb-4">スペシャルアピール</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="px-0 pt-2 pb-0"
          >
            {{ store.settingCardData.fluctuationStatus.SALevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
        <h4 class="mb-4">スキル</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="px-0 pt-2 pb-0"
          >
            {{ store.settingCardData.fluctuationStatus.SLevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
        <h4 class="mb-4">解放Lv</h4>
        <v-row class="mb-5">
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="px-0 pt-2 pb-0"
          >
            {{ store.settingCardData.fluctuationStatus.releaseLevel }}
          </v-col>
          <v-spacer></v-spacer>
          <v-col
            align="center"
            justify="center"
            class="pa-0"
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
            align="center"
            justify="center"
            class="pa-0"
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
        <h4>お気に入り</h4>
        <v-row class="mb-0 text-center">
          <v-col
            cols="2"
            v-for="favorite in store.favorite"
            :key="favorite"
          >
            <v-btn
              :icon="`mdi-${favorite}`"
              variant="text"
              density="comfortable"
              size="small"
              :color="store.settingCardData.favorite.some(v => v === favorite) ? 'pink' : ''"
              @click="store.changeFav(favorite)"
            ></v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">スペシャルアピール</span>{{ store.settingCardData.specialAppeal.name }}
        <span class="AP">AP{{ store.settingCardData.specialAppeal.AP - store.settingCardData.fluctuationStatus.trainingLevel }}</span>
      </v-col>
      <v-col cols="12" class="pa-0 mb-3">
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SALevel }}</span>
        {{ store.makeSkillText('specialAppeal') }}
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">スキル</span>{{ store.settingCardData.skill.name }}
        <span class="AP">AP{{ store.settingCardData.skill.AP }}</span>
      </v-col>
      <v-col cols="12" class="pa-0 mb-3">
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus.SLevel }}</span>
        {{ store.makeSkillText('skill') }}
      </v-col>
    </v-row>
    <v-row no-gutters v-if="store.settingCard.rare !== 'R'">
      <v-col cols="12" class="px-0 pt-0 pb-1">
        <span class="specialAppeal">特性</span>{{ store.settingCardData.characteristic.name }}
      </v-col>
      <v-col cols="12" class="pa-0">
        {{ store.settingCardData.characteristic.detail }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CardSetting',
  methods: {
    makeWikiLink(cardName, memberName) {
      return `https://wikiwiki.jp/llll_wiki/スクステ/カード/［${cardName.replaceAll('&', '＆')}］${memberName}`;
    }
  }
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
#statusDisplayArea {
  width: 100%;
  border-collapse: collapse;

  th,
  td {
    width: 80px;
    border-right: 1px solid #000;
    text-align: center;

    &:last-child {
      width: 50px;
      border-right: 0px;
    }
  }
  
  th {
    padding-bottom: 5px;
    border-bottom: 1px solid #000;
  }

  td {
    padding-top: 5px;
  }
}

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

  &.mood {
    width: 20px;
  }

  &.type {
    width: 20px;
  }

  &.member {
    width: 35px;
  }
}
</style>