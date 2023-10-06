<template>
  <div id="possessionCardSettingArea">
    <p class="mb10">所持カード設定</p>
    <ul id="possessionCard_header">
      <li v-for="(name_ja, name_en) in store.charactorName" :key="name_ja" :data-charactor="name_en" :data-selected="selectTab === name_en" @click="changeTab(name_en)">
        {{ name_ja.last }}
      </li>
    </ul>
    <ul id="possessionCard_container">
      <li v-for="(name_ja, name_en) in store.charactorName" :key="name_en" :data-charactor="name_en" v-show="selectTab === name_en">
        <dl v-for="rare in rarity" :key="rare" :data-rare="rare">
          <dt>
            {{ rare }}
          </dt>
          <dd>
            <button v-for="(ary, cardName) in store.card[name_en][rare]" :key="ary" :data-mood="ary.mood" @click="store.showModalEvent('setCardData'); store.cardSelect(name_en, rare, cardName)">{{ cardName }}</button>
          </dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: ['updateData'],
  data() {
    return {
      styleType: {
        performer: 'パフォーマー',
        moodMaker: 'ムードメーカー',
        cheerLeader: 'チアリーダー',
        trickStar: 'トリックスター'
      },
      mood: {
        happy: 'ハッピー',
        neutral: 'ニュートラル',
        melow: 'メロウ'
      },
      rarity: ['DR', 'UR', 'SR', 'R'],
      styleHeadline: {
        main: 'MAIN STYLE',
        side1: 'SIDE STYLE 1',
        side2: 'SIDE STYLE 2'
      },
      selectTab: 'kaho'
    }
  },
  created() {
    
  },
  mounted() {
  },
  computed: {
    setCard() {
      return this.updateData.selectCard;
    }
  },
  methods: {
    changeTab(selectCharactor) {
      this.selectTab = selectCharactor;
    },
    submitCardData(charactorName, style) {
      return {
        charactorName: charactorName,
        style: style
      };
    }
  }
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
/* ムードカラー */
$happy: #EF8DC8;
$neutral: #A9FCC7;
$melow: #A1BAFA;

#possessionCard_container {
  border: 1px solid #000;
  border-top: none;

  li {
    padding: 10px 10px  0 10px;

    label {
      margin-right: 10px;

      input {
        margin-right: 5px;
      }
    }
  }

  dl {
    border-bottom: 1px dashed #000;
    margin-bottom: 15px;

    &:last-child {
      border-bottom: 0;
      margin-bottom: 0;
    }
  }

  dt {
    margin-bottom: 5px;
  }
  
  button {
    padding: 5px 10px;
    border: 2px solid #000;
    border-radius: 50px;
    margin: 0 10px 10px 0;
    
    &[data-mood="happy"] {
      border-color: $happy;
    }
    
    &[data-mood="neutral"] {
      border-color: $neutral;
    }
    
    &[data-mood="melow"] {
      border-color: $melow;
    }
  }
}
</style>