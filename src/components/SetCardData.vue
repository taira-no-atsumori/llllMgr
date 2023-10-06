<template>
  <div id="setCardDataArea">
    <div>
      <h2 class="mb10">
        {{ store.charactorName[store.settingCard.name].first + ' ' + store.charactorName[store.settingCard.name].last }} カードステータス設定
      </h2>
      <p>{{ store.settingCard.rare + ' ' + store.settingCard.card }}</p>
      <img :src="require(`@/assets/card_illust/ペンギンアイス花帆_覚醒後.png`)" alt="ペンギンアイス花帆_覚醒後" class="mb10" style="max-width: 400px;">
      <!--
      <label for="cardList">カード名</label>
      <select v-model="store.selectCard[store.submitData.charactorName][store.submitData.style]" name="cardList" id="cardList">
        <option label="" value="none"></option>
        <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
          <option v-for="(ary, cardName) in store.card[store.submitData.charactorName][rare]" :key="ary" :label="cardName" :value="cardName"></option>
        </optgroup>
      </select>-->
      <ul id="styleAndMoodArea" class="mb10">
        <li>
          <span class="left">タイプ</span><span class="right">{{ store.styleType[store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].styleType] }}</span>
        </li>
        <li>
          <span class="left">ムード</span><span class="right">{{ store.mood[store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].mood] }}</span>
        </li>
      </ul>
      <table id="statusDisplayArea" class="mb10">
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
            <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.smile + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
            <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.pure + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
            <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.cool + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 30 }}</td>
            <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.mental + (store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel - 1) * 3 }}</td>
            <td>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].uniqueStatus.BP }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <ul id="cardSettingArea">
      <li>
        <v-subheader>特訓度</v-subheader>
        <div class="sliderArea">
          <div>
            {{ ['none', '+', '++'][store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel] }}
          </div>
          <div>
            <v-btn x-small @click="store.valueChange('trainingLevel', 0)">MIN</v-btn>
          </div>
          <v-slider
            v-model="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel"
            class="sliderPadding"
            hide-details
            :min="0"
            :max=store.setMaxTrainingLevel
            :step="1"
          ></v-slider>
          <div>
            <v-btn x-small @click="store.valueChange('trainingLevel', store.setMaxTrainingLevel)">MAX</v-btn>
          </div>
        </div>
      </li>
      <li>
        <v-subheader>レベル</v-subheader>
        <div class="sliderArea">
          <div>
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel }}
          </div>
          <div>
            <v-btn x-small @click="store.valueChange('cardLevel', 1)">MIN</v-btn>
          </div>
          <v-slider
            v-model="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.cardLevel"
            class="sliderPadding"
            hide-details
            :min="1"
            :max="store.changeMaxCardLevel"
            :step="1"
          ></v-slider>
          <div>
            <v-btn x-small @click="store.valueChange('cardLevel', store.changeMaxCardLevel)">MAX</v-btn>
          </div>
        </div>
      </li>
      <li>
        <v-subheader>スペシャルアピール</v-subheader>
        <div class="sliderArea">
          <div>
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level }}
          </div>
          <div>
            <v-btn x-small @click="store.valueChange('specialAppeal', 1)">MIN</v-btn>
          </div>
          <v-slider
            v-model="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level"
            class="sliderPadding"
            hide-details
            :min="1"
            :max="store.changeSkillLevel"
            :step="1"
          ></v-slider>
          <div>
            <v-btn x-small @click="store.valueChange('specialAppeal', store.changeSkillLevel)">MAX</v-btn>
          </div>
        </div>
      </li>
      <li>
        <v-subheader>スキル</v-subheader>
        <div class="sliderArea">
          <div>
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level }}
          </div>
          <div>
            <v-btn x-small @click="store.valueChange('skill', 1)">MIN</v-btn>
          </div>
          <v-slider
            v-model="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level"
            class="sliderPadding"
            hide-details
            :min="1"
            :max="store.changeSkillLevel"
            :step="1"
          ></v-slider>
          <div>
            <v-btn x-small @click="store.valueChange('skill', store.changeSkillLevel)">MAX</v-btn>
          </div>
        </div>
      </li>
      <li>
        <v-subheader>解放Lv</v-subheader>
        <div class="sliderArea">
          <div>
            {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel }}
          </div>
          <div>
            <v-btn x-small @click="store.valueChange('releaseLevel', 1)">MIN</v-btn>
          </div>
          <v-slider
            v-model="store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.releaseLevel"
            class="sliderPadding"
            hide-details
            :min="1"
            :max="5"
            :step="1"
          ></v-slider>
          <div>
            <v-btn x-small @click="store.valueChange('releaseLevel', 5)">MAX</v-btn>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <ul class="skillArea mb10">
    <li class="mb5">
      <span class="specialAppeal">スペシャルアピール</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.name }}
      <span class="AP">AP</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.AP - store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].fluctuationStatus.trainingLevel }}
    </li>
    <li>
      Lv {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].specialAppeal.level }}
      {{ store.setSkillText('specialAppeal') }}
    </li>
  </ul>
  <ul class="skillArea mb10">
    <li class="mb5">
      <span class="specialAppeal">スキル</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.name }}
      <span class="AP">AP</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.AP }}
    </li>
    <li>
      Lv {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].skill.level }}
      {{ store.setSkillText('skill') }}
    </li>
  </ul>
  <ul class="skillArea">
    <li class="mb5">
      <span class="specialAppeal">特性</span>{{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].characteristic.name }}
    </li>
    <li>
      {{ store.card[store.settingCard.name][store.settingCard.rare][store.settingCard.card].characteristic.detail }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CardSetting',
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
#setCardDataArea {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
}

#cardSettingArea {
  display: grid;
  grid-row-gap: 15px;
}

#statusDisplayArea {
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

#styleAndMoodArea {
  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    border-radius: 15px;
    text-align: center;

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
}

.skillArea {
  .specialAppeal {
    color: #fff;
    font-weight: bold;
    background-color: #e5762c;
    padding: 3px 7px 3px 3px;
    border: 2px solid #e5762c;
    border-radius: 0 15px 15px 0;
    margin-right: 7px;
  }

  /* .AP {
    font-weight: bold;
  } */
}
</style>