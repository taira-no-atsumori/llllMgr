<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Link！Like！ラブライブ！ 管理ツール</h1>
        Ver.ε.01(アーリーアクセス)
      </v-col>
    </v-row>
    <v-row v-if="this.eventCheck()">
      <v-col cols="12">
        <h2>ライブ・イベント情報</h2>
        <v-carousel
          cycle
          hide-delimiters
          :show-arrows="false"
          style="max-width: 900px; height: auto; margin: 0 auto;"
        >
          <v-carousel-item
            v-for="(event, eventName) in this.eventList"
            :key="eventName"
            class="text-center"
          >
            <v-card tile>
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
        <v-btn tile block @click="pageMove('simulation')">Simulation</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('cardlist')">Card List</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('musiclist')">Music List</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('itemlist')">Item List</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>About</h2>
        このサイトは、アプリ「Link！Like！ラブライブ！」(通称リンクラ)をもっと楽しく！もっと深く！もっと便利に！をモットーに作成された非公式のサイトです。<br>
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください。<br>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Attention</h2>
        このサイトは、PCからの利用を想定しています。<br>
        スマートフォン用対応は、機能が一通り実装し終えた後の対応となります。<br>
        <br>
        バックアップや同期機能は現在ありませんので、別ブラウザからアクセスする場合は一からデータ入力をやり直す必要があります。<br>
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
        SIMULATION(獲得グランプリPt.計算ツール)<br>
        獲得グランプリPt.を計算できます。<br>
        なお、簡単な編成シミュレーションと編成情報の保存機能を搭載し、リニューアルする予定です。<br>
        <br>
        CARD LIST(カード一覧)<br>
        リンクラ内に実装されているカードの一覧と、カードの属性/スペシャルアピール/スキルレベルでの絞り込みができます。<br>
        <br>
        ITEM LIST(アイテム一覧)<br>
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
          title: '103期11月度サークル対抗戦',
          text: '',
          type: 'liveGP',
          firstDay: [2023, 11, 20, 10, 0],
          lastDay: [2023, 11, 27, 4, 0],
          url: 'https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2023-11-20-30-blt2fqd1hq',
          img: '103期11月度サークル対抗戦_logo.jpg'
        },
        '1stLive_aichi': {
          title: '「ラブライブ！蓮ノ空女学院スクールアイドルクラブ 1st Live Tour ～RUN！CAN！FUN！～」',
          text: '愛知公演',
          type: 'live',
          firstDay: [2023, 11, 25, 0, 0],
          lastDay: [2023, 11, 26, 0, 0],
          url: 'https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=RCF',
          img: 'RUN_CAN_FUN_logo.png'
        },
        'ijigenFes': {
          title: '異次元フェス アイドルマスター★♥︎ラブライブ！歌合戦',
          firstDay: [2023, 12, 9, 0, 0],
          lastDay: [2023, 12, 10, 0, 0],
          url: 'https://ijigen-fes.jp/utagassen/',
          text: '',
          type: 'live',
          img: 'ijigenFes_logo.png'
        },
        'unitKoushien': {
          title: 'LoveLive! Series Presents ユニット甲子園 2024',
          firstDay: [2024, 3, 9, 0, 0],
          lastDay: [2024, 3, 10, 0, 0],
          url: 'https://lovelive-anime.jp/special/live/live_detail.php?p=unitlive2024',
          text: '',
          type: 'live',
          img: 'unitKoushien_logo.png'
        }
      }
    }
  },
  computed() {},
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    },
    eventCheck() {
      let result = Object.keys(this.eventList).length;

      for (const iterator in this.eventList) {
        const lastDay = new Date(this.eventList[iterator].lastDay[0], (this.eventList[iterator].lastDay[1] - 1), this.eventList[iterator].lastDay[2], this.eventList[iterator].lastDay[3], this.eventList[iterator].lastDay[4], 0);

        if (this.dateCul(lastDay) === -1) {
          --result;
        }
      }

      return result > 0;
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

@media screen and (max-width: 600px) {
}
</style>