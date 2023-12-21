<template>
  <v-container fluid class="pa-2">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>リンクラ マネージャー！</h1>
        Ver.ε.09(アーリーアクセス)
      </v-col>
    </v-row>
    <v-row v-if="Object.keys(outputEventList).length > 0">
      <v-col cols="12">
        <h2>ライブ・イベント情報</h2>
        <v-carousel
          cycle
          hide-delimiters
          :show-arrows="false"
          style="max-width: 900px; height: auto; margin: 0 auto;"
        >
          <v-carousel-item
            v-for="(event, eventName) in outputEventList"
            :key="eventName"
            class="text-center"
          >
            <v-card>
              <a :href="event.url" target="_blank" class="mainVisual">
                <v-img
                  class="white--text align-end text-center"
                  :src="require(`@/assets/event_information/${event.img}`)"
                ></v-img>
              </a>
              <v-card-title>
                {{ event.title }}
                <div v-if="countDown(eventName) > 0">
                  {{ event.text }}まで<span style="display: inline-block;">あと<b style="color: red;">{{ countDown(eventName) }}</b>日</span>
                </div>
                <div v-else-if="countDown(eventName) === 0">
                  {{ event.text }}<span style="display: inline-block;"><b style="color: red;">開催<span v-if="event.type === 'live'">日</span><span v-else>中</span></b></span>
                </div>
              </v-card-title>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>メインメニュー</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn block @click="pageMove('simulation')">Simulation</v-btn>
      </v-col>
      <v-col>
        <v-btn block @click="pageMove('cardlist')">Card List</v-btn>
      </v-col>
      <v-col>
        <v-btn block @click="pageMove('musiclist')">Music List</v-btn>
      </v-col>
      <v-col>
        <v-btn block @click="pageMove('itemlist')">Item List</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>About</h2>
        このサイトは、アプリ「Link！Like！ラブライブ！」(通称リンクラ)のゲームパートである「スクールアイドルステージ」(通称スクステ)をもっと楽しく！もっと深く！もっと便利に！をモットーに作成された非公式のサイトです。<br>
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください。<br>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Attention</h2>
        このサイトは、PCからの利用を想定しています。<br>
        本格的なスマートフォン用対応は、機能が一通り実装し終えた後の対応となります。<br>
        <br>
        このサイトは、スクステをある程度理解している(ライブグランプリに参加するような)方に向けたサイトになります。<br>
        「スクステってなに？」という方は、公式のチュートリアル動画やSNSなどで解説してくださっている方がいるので、そちらをご覧ください。<br>
        <br>
        バックアップや同期機能は現在ありませんので、別ブラウザ・別端末からアクセスする場合は一からデータ入力をやり直す必要があります。<br>
        バックアップ機能の対応を正式リリース後に予定しています。<br>
        <br>
        完全個人制作のため、一部デザインが崩れていたり、動かない場合があります。<br>
        順次対応していきますので、大目に見てください…<br>
        (あと、教えてもらえると助かります…)
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col>
        <h2>Bug</h2>
        現在確認しているバグは、以下のとおりです。<br>
        <br>
        
      </v-col>
    </v-row>-->
    <v-row>
      <v-col>
        <h2>Page Introduction</h2>
        各ページを簡単に紹介します。<br>
        <br>
        <b>SIMULATION(獲得グランプリPt.計算ツール)</b><br>
        獲得グランプリPt.を計算できます。<br>
        なお、簡単な編成シミュレーションと編成情報の保存機能を搭載し、リニューアルする予定です。<br>
        <br>
        <b>CARD LIST(カード一覧)</b><br>
        リンクラ内に実装されているカードの一覧と、カードの属性/スペシャルアピール/スキルレベル/カードシリーズでの絞り込みができます。<br>
        <br>
        <b>ITEM LIST(アイテム一覧)</b><br>
        Quest Liveの各ステージで獲得できるアイテムの一覧と検索ができます。<br>
        <br>
        ※機能は変更になる可能性があります。
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Update Information</h2>
        下記ページにて更新情報をお知らせしています(別タブで開きます)。<br>
        <a href="https://github.com/taira-no-atsumori/llllMgr/releases" target="_blank">Update Information</a>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      eventList: {
        'liveGP': {
          title: '「ライブグランプリ 103期12月度サークル対抗戦」',
          text: '',
          type: 'liveGP',
          firstDay: [2023, 12, 20, 10, 0],
          lastDay: [2023, 12, 26, 3, 59],
          url: 'https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2023-12-18-20-ds0qd9bpqa',
          img: '103期12月度サークル対抗戦_logo.png'
        },
        'unitKoushien': {
          title: '「LoveLive! Series Presents ユニット甲子園 2024」',
          firstDay: [2024, 3, 9, 0, 0],
          lastDay: [2024, 3, 10, 0, 0],
          url: 'https://lovelive-anime.jp/special/live/live_detail.php?p=unitlive2024',
          text: '',
          type: 'live',
          img: 'unitKoushien_logo.png'
        },
        '2ndLive_chiba': {
          title: '「ラブライブ！蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour ～Blooming with ◯◯◯～」',
          text: '千葉公演',
          type: 'live',
          firstDay: [2024, 4, 20, 0, 0],
          lastDay: [2024, 4, 21, 0, 0],
          url: 'https://www.lovelive-anime.jp/hasunosora/',
          img: '2ndLIVE_logo.png'
        },
        '2ndLive_hyougo': {
          title: '「ラブライブ！蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour ～Blooming with ◯◯◯～」',
          text: '兵庫公演',
          type: 'live',
          firstDay: [2024, 5, 18, 0, 0],
          lastDay: [2024, 5, 19, 0, 0],
          url: 'https://www.lovelive-anime.jp/hasunosora/',
          img: '2ndLIVE_logo.png'
        }
      }
    }
  },
  computed: {
    outputEventList() {
      const result = {};

      for (const key in this.eventList) {
        if (this.countDown(key) >= 0) {
          result[key] = this.eventList[key];
        }
      }

      return result;
    }
  },
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    },
    countDown(eventName) {
      const firstDay = new Date(this.eventList[eventName].firstDay[0], (this.eventList[eventName].firstDay[1] - 1), this.eventList[eventName].firstDay[2], this.eventList[eventName].firstDay[3], this.eventList[eventName].firstDay[4], 0);
      let countDay = this.dateCul(firstDay);

      if (countDay > 0) {
        return countDay;
      }

      const lastDay = new Date(this.eventList[eventName].lastDay[0], (this.eventList[eventName].lastDay[1] - 1), this.eventList[eventName].lastDay[2], this.eventList[eventName].lastDay[3], this.eventList[eventName].lastDay[4], 0);

      if (this.dateCul(lastDay) >= 0) {
        return 0;
      } else {
        return -1;
      }
    },
    dateCul(targetDay) {
      const today = new Date();
      return -(Math.floor((today.getTime() - targetDay.getTime()) / (1000 * 60 * 60 * 24)));
    }
  }
}
</script>

<style lang="scss" scoped>
.mainVisual{
  &:hover {
    opacity: 0.75;
  }
}

@media screen and (max-width: 600px) {}
</style>