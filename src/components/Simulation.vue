<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="pb-3">
        <h1>SIMULATION ～ 獲得グランプリPt.計算ツール ～</h1>
      </v-col>
      <v-col cols="12" class="pt-0 pb-3">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
            <v-expansion-panel-text>
              <ul>
                <li>ライブグランプリの獲得グランプリPt.の計算ツールです。</li>
                <li>各項目を入力すると、獲得グランプリPt.を算出します。</li>
                <li>解放Lv.は、歌唱メンバー(名前の横にチェックが入っているメンバー)のメインスタイルに設定しているカードのレア度を設定すると変更できるようになります。</li>
              </ul>
              <br>
              <b>注意事項</b><br>
              ※突貫で作ったため、スマホでの表示を考慮していません。横画面にするか、PCからアクセスしてください。<br>
              ※この機能は暫定機能です。今後のアップデートでリニューアルします。
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
      <v-col
        v-for="i in 2"
        :key="i"
        cols="12"
        sm="6"
        md="6"
        lg="6"
        xl="6"
      >
        <v-card elevation="2">
          <v-card-title>楽曲{{ i }}</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">
                <h2>予想獲得グランプリPt. {{ GPpt[i - 1] }}</h2>
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="this.selectMusic[i - 1]"
                  :items="musicTitleList"
                  label="課題曲"
                  :hint="this.makeText(i - 1, store)"
                  :change="changePerformance(i - 1, musicDataList)"
                  persistent-hint
                  clearable
                ></v-select>
              </v-col>

              <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"
                xl="6"
              >
                <v-text-field
                  v-model="score[i - 1]"
                  label="スコア"
                  hint="スコアを入力してください"
                  :rules="rules"
                  :change="makeGPpt(i - 1)"
                  persistent-hint
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="6"
                lg="6"
                xl="6"
                class="mb-5"
              >
                <v-select
                  v-model="clearStage[i - 1]"
                  :items="[1, 2, 3, 4]"
                  label="ステージ"
                  hint="ステージを選択してください"
                  persistent-hint
                ></v-select>
              </v-col>
            </v-row>

            <div
              v-for="(arr, memberName) in store.charactorName"
              :key="memberName"
            >
              <v-checkbox
                v-model="performance[i - 1]"
                :label="arr.last"
                :value="memberName"
                hide-details
                color="pink"
                disabled
              ></v-checkbox>
              <v-row no-gutters>
                <v-col cols="2">レア度</v-col>
                <v-col cols="5" class="text-center">Season Fan Lv.</v-col>
                <v-col cols="5" class="text-center">解放Lv.</v-col>
                <v-col cols="2">
                  <v-select
                    v-model="bonus.rare[i - 1][memberName]"
                    :items="['UR', 'SR', 'R']"
                    hint="メインスタイルに設定している花帆のカードのレア度を選択してください"
                  ></v-select>
                </v-col>
                <v-col cols="5">
                  <v-row no-gutters>
                    <v-spacer></v-spacer>
                    <v-col
                      align="center"
                      justify="center"
                      class="pa-0"
                    >
                      <v-btn
                        x-small
                        :disabled="bonus.seasonFan[i - 1][memberName] === 1"
                        @click="setValue(['seasonFan', i - 1, memberName], bonus.seasonFan[i - 1][memberName] - 1)">-1
                      </v-btn>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="px-0 pt-1 pb-0"
                    >
                      {{ bonus.seasonFan[i - 1][memberName] }}
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="pa-0"
                    >
                      <v-btn
                        x-small
                        :disabled="bonus.seasonFan[i - 1][memberName] === 10"
                        @click="setValue(['seasonFan', i - 1, memberName], bonus.seasonFan[i - 1][memberName] + 1)">+1
                      </v-btn>
                    </v-col>
                  </v-row>
                  <v-spacer></v-spacer>
                </v-col>
                <v-col cols="5">
                  <v-row no-gutters>
                    <v-spacer></v-spacer>
                    <v-col
                      align="center"
                      justify="center"
                      class="pa-0"
                    >
                      <v-btn
                        x-small
                        :disabled="bonus.rare[i - 1][memberName] === undefined || bonus.release[i - 1][memberName] === 1"
                        @click="setValue(['release', i - 1, memberName], bonus.release[i - 1][memberName] - 1)">-1
                      </v-btn>
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="px-0 pt-1 pb-0"
                    >
                      {{ bonus.release[i - 1][memberName] }}
                    </v-col>
                    <v-col
                      align="center"
                      justify="center"
                      class="pa-0"
                    >
                      <v-btn
                        x-small
                        :disabled="bonus.rare[i - 1][memberName] === undefined || bonus.release[i - 1][memberName] === 5"
                        @click="setValue(['release', i - 1, memberName], bonus.release[i - 1][memberName] + 1)">+1
                      </v-btn>
                    </v-col>
                    <v-spacer></v-spacer>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <div v-if="false">
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
        <div v-for="(ary, styleName) in store.styleHeadline" :key="styleName" :data-style="styleName">
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
          <dl v-for="rare in store.rarity" :key="rare" :data-rare="rare">
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
  </div>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
  const musicDataList = store.musicList;

  let list = [];

  for (const key in musicDataList) {
    list.push(key);
  }

  const musicTitleList = list;
</script>

<script>
export default {
  name: 'Simulation',
  data() {
    return {
      score: [0, 0],
      GPpt: [0, 0],
      clearStage: [1, 1],
      performance: [[], []],
      selectMusic: [null, null],
      bonus: {
        rare: [
          {
            kaho: undefined,
            sayaka: undefined,
            rurino: undefined,
            kozue: undefined,
            tsuzuri: undefined,
            megumi: undefined
          },
          {
            kaho: undefined,
            sayaka: undefined,
            rurino: undefined,
            kozue: undefined,
            tsuzuri: undefined,
            megumi: undefined
          }
        ],
        seasonFan: [
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          },
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          }
        ],
        release: [
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          },
          {
            kaho: 1,
            sayaka: 1,
            rurino: 1,
            kozue: 1,
            tsuzuri: 1,
            megumi: 1
          }
        ]
      },
      clearRank: [1, 1.1, 1.2, 1.3],
      seasonFanLv: [0, 0.2, 0.275, 0.35, 0.425, 0.5, 0.55, 0.6, 0.65, 0.7],
      releaseLv: {
        UR: [0, 0.2, 0.3, 0.35, 0.4],
        SR: [0, 0.15, 0.25, 0.3, 0.35],
        R: [0, 0.1, 0.15, 0.2, 0.25]
      },
      rules: [
        value => !isNaN(value) || '半角数字で入力してください'
      ],
      mood: {
        happy: 'ハッピー',
        neutral: 'ニュートラル',
        melow: 'メロウ'
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
    },
    setValue(target, v) {
      this.bonus[target[0]][target[1]][target[2]] = v;
    },
    makeGPpt(target) {
      let releaseLv = 0;
      let seasonFanLv = 0;

      for (const memberName in this.bonus.seasonFan[target]) {
        seasonFanLv += this.seasonFanLv[this.bonus.seasonFan[target][memberName] - 1];

        if (this.bonus.rare[target][memberName] !== undefined) {
          releaseLv += this.releaseLv[this.bonus.rare[target][memberName]][this.bonus.release[target][memberName] - 1];
        }
      }

      this.GPpt[target] = Math.ceil(this.score[target] * this.clearRank[this.clearStage[target] - 1] * (1 + releaseLv) * (1 + seasonFanLv)).toLocaleString();
    },
    changePerformance(i, musicDataList) {
      if (this.selectMusic[i] === null) {
        this.performance[i] = [];
      } else {
        this.performance[i] = musicDataList[this.selectMusic[i]].singingMembers;
      }
    },
    makeText(i, store) {
      if (this.selectMusic[i] === null) {
        return '課題曲を選択してください';
      } else {
        let list = [];

        for (const memberName of store.musicList[this.selectMusic[i]].singingMembers) {
          list.push(store.charactorName[memberName].last);
        }
        
        return 'センター：' + store.charactorName[store.musicList[this.selectMusic[i]].center].last + ' / 歌唱メンバー：' + list.join('、');
      }
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