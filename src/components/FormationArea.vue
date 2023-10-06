<template>
  <h1>編成</h1>
  <div id="gridArea">
    <div v-for="(name_ja, name_en) in store.charactorName" :key="name_ja" :data-charactorName="name_en" class="charactorArea">
      <div class="charactorDetailArea">
        <h2 class="charactorName mb10">
          <button name="characterSetting" data-show-modal-name="charactorSetting" @click="store.showModalEvent('charactorSetting')">{{ name_ja.first }} {{ name_ja.last }}</button>
        </h2>
        <img :src="require(`@/assets/${name_en}_winter.png`)" :alt="name_en" style="width: 100%;">
        <!--<h2 class="mb10">ボーナス関連</h2>
        <dl @click="store.showModalEvent('leaningLiveSetting')">
          <dt class="mb10"><span class="left">合計楽曲マスタリー</span><span class="right">37</span></dt>
          <dd></dd>
        </dl>
        <h3 class="mb10"><span class="left">ボーナススキル</span></h3>
        <dl>
          <dt><img src="" alt="test"></dt>
          <dd>Lv.2</dd>
        </dl>
        <h3 class="mb10"><span class="left">Season Fan Lv.</span><span class="right">7 / 10</span></h3>-->
      </div>
      <div class="charactor_detail" :style="setIcon(name_en)">
        <div v-for="(ary, styleName) in styleHeadline" :key="styleName" :data-style="styleName">
          <h3>{{ ary }}</h3>
          <div @click="store.showModalEvent('selectCard'); store.openCard(name_en, styleName)">
            <dl class="mb10">
              <dt>
                カード名
              </dt>
              <dd>
                {{ store.selectCard[name_en][styleName] }}
              </dd>
            </dl>
            <div>
              <dl>
                <dt>
                  特訓度
                </dt>
                <dd>
                  <!--{{ store.card[name_en][rare][store.selectCard[name_en][styleName]].fluctuationStatus.trainingLevel }}-->
                  {{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.trainingLevel }}
                </dd>
              </dl>
              <dl>
                <dt>
                  レベル
                </dt>
                <dd>
                  <!--{{ store.cardLevel }}-->
                  {{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.cardLevel }}
              </dd>
              </dl>
              <dl>
                <dt>
                  SA
                </dt>
                <dd>
                  <!--{{ store.SALevel }}-->
                  {{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.SALevel }}
                </dd>
              </dl>
              <dl>
                <dt>
                  S
                </dt>
                <dd>
                  <!--{{ store.SLevel }}-->
                  {{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.SLevel }}
                </dd>
              </dl>
              <dl>
                <dt>
                  解放Lv.
                </dt>
                <dd>
                  <!--{{ store.releaseLevel }}-->
                  {{ store.card[name_en][store.searchRarity(name_en, store.selectCard[name_en][styleName])][store.selectCard[name_en][styleName]].fluctuationStatus.releaseLevel }}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="otherArea">
    <div id="textOutputArea">
      <label for="textOutput" class="mb10">出力テキスト</label>
      <textarea name="textOutput" id="textOutput" class="mb10"></textarea>
      <p id="textLength"></p>
    </div>
    <!--<div id="possessionCardSettingArea">
      <p class="mb10">所持カード設定</p>
      <ul id="possessionCard_header">
        <li v-for="(name_ja, name_en) in charactorName" :key="name_ja" :data-charactor="name_en" :data-selected="selectTab === name_en" @click="changeTab(name_en)">
          {{ name_ja.last }}
        </li>
      </ul>
      <ul id="possessionCard_container">
        <li v-for="(name_ja, name_en) in charactorName" :key="name_en" :data-charactor="name_en" v-show="selectTab === name_en">
          <dl v-for="rare in rarity" :key="rare" :data-rare="rare">
            <dt>
              {{ rare }}
            </dt>
            <dd>
              <button v-for="(ary, cardName) in card[name_en][rare]" :key="ary" :data-mood="ary.mood" @click="showModalEvent('possessionCardSetting'); store.submitCardData({charactorName: name_en, rare: rare, selectedCard: cardName})">{{ cardName }}</button>
            </dd>
          </dl>
        </li>
      </ul>
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'FormationArea',
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
      selectCardList: {
        stageA: {
          kaho: {
            main: '',
            side1: '',
            side2: ''
          },
          sayaka: {
            main: '',
            side1: '',
            side2: ''
          },
          rurino: {
            main: '',
            side1: '',
            side2: ''
          },
          kozue: {
            main: '',
            side1: '',
            side2: ''
          },
          tsuzuri: {
            main: '',
            side1: '',
            side2: ''
          },
          megumi: {
            main: '',
            side1: '',
            side2: ''
          }
        },
        stageB: {},
        stageC: {}
      },
      selectTab: 'kaho'
    }
  },
  created() {},
  mounted() {},
  computed: {
    setCard() {
      return this.updateData.selectCard;
    }
  },
  methods: {
    possessionCardLoadAction() {

    },
    changeTab(selectCharactor) {
      this.selectTab = selectCharactor;
    },
    labelCaption(a, b) {
      return a + '_' + b;
    },
    setIcon(name_en) {
      return {
        'background-image':'url(' + require(`@/assets/member_icon/icon_${name_en}.png`) + ')',
        'background-position': 'center'
      };
    }
  },
  watch: {
    selectCardList: {
      deep: true,
      handler(newVal, oldVal) {
        console.log(oldVal);
        console.log(newVal);
      }
    }
  }
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
<style lang="scss" scoped>
#gridArea {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.charactorArea {
  display: grid;
  grid-template-columns: 0.75fr 1fr;
}

.charactor_detail {
  padding: 10px 10px 0 10px;

  >div {
    padding-bottom: 10px;
    font-size: 15px;

    >div >div {
      display: grid;
      grid-template-columns: 50px 50px 35px 35px 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 5px;

      input {
        width: 100%;
      }
    }
  }
}

.charactorName {
  text-align: center;
  padding: 10px 0;
  font-weight: bold;

  button {
    cursor: pointer;
    padding-bottom: 1px;
    
    /* &:hover {
      opacity: 0.7;
      padding-bottom: 0;
      border-bottom: 1px solid #000;
    } */
  }
}
</style>