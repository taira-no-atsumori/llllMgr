<template>
  <v-container fluid class="pa-2">
    <v-row no-gutters>
      <v-col cols="12">
        <h1>リンクラ マネージャー！</h1>
        Ver. {{ store.version }}
      </v-col>
    </v-row>
    <v-row v-if="Object.keys(outputEventList).length > 0">
      <v-col cols="12">
        <h2>ライブ・イベント情報</h2>
        <v-carousel
          cycle
          hide-delimiters
          :show-arrows="false"
          style="max-width: 800px; height: auto; margin: 0 auto;"
        >
          <v-carousel-item
            v-for="(event, eventName) in outputEventList"
            :key="eventName"
            class="text-center"
          >
            <v-card variant="flat">
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
      <v-col v-if="false">
        <v-btn block @click="pageMove('withStarMgr')">WithStar Mgr</v-btn>
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
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください！<br>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Attention</h2>
        このサイトは、PC/スマホ両方からの利用に対応していますが、一部ページはスマホで利用する場合、表示崩れが起こる可能性があります。<br>
        利用できないほどの重大なものでない限り、メイン機能を一通り実装し終えた後の対応となります。
      </v-col>
      <v-col cols="12">
        このサイトは、スクステをある程度理解している(ライブグランプリに参加するような)方に向けたサイトになります。<br>
        「スクステってなに？」という方は、<a href="https://youtu.be/fkcQL4Mnz4k?si=FqGv2R0JHBPiEV5C" target="_blank">公式のチュートリアル動画</a>や<a href="https://wikiwiki.jp/llll_wiki/%E3%82%B9%E3%82%AF%E3%82%B9%E3%83%86/%E6%94%BB%E7%95%A5/%E3%82%B9%E3%82%AF%E3%82%B9%E3%83%86%E3%81%AE%E9%81%8A%E3%81%B3%E6%96%B9" target="_blank">Wiki</a>、SNS/動画サイトで解説してくださっている方がいるので、そちらをご覧ください。
      </v-col>
      <v-col cols="12">
        バックアップや同期機能は現在ありませんので、別ブラウザ・別端末からアクセスする場合は一からデータ入力をやり直す必要があります。<br>
        バックアップ機能の対応を正式リリース後に予定しています。
      </v-col>
      <v-col cols="12">
        完全個人制作のため、一部デザインが崩れていたり、動かない場合があります。<br>
        順次対応していきますので、大目に見てください…<br>
        (あと、教えてもらえると助かります…)
      </v-col>
      <v-col cols="12">
        このサイトは、原則リンクフリーです。<br>
        SNSや動画などで紹介する場合の許可も不要ですので、ガンガン広めてください！
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>Page Introduction</h2>
        各ページを簡単に紹介します。
      </v-col>
      <v-col cols="12">
        <b>SIMULATION(獲得グランプリPt.計算ツール)</b><br>
        獲得グランプリPt.を計算できます。<br>
        なお、簡単な編成シミュレーションと編成情報の保存機能を搭載し、リニューアルする予定です。
      </v-col>
      <v-col cols="12">
        <b>CARD LIST(カード一覧)</b><br>
        リンクラ内に実装されているカードの一覧と、カードの属性/スペシャルアピール/スキルレベル/カードシリーズでの絞り込みができます。<br>
        また、自分が所持しているカードのデータを入力して管理することもできます。
      </v-col>
      <v-col cols="12">
        <b>MUSIC LIST(楽曲一覧)</b><br>
        リンクラ内に実装されている楽曲の一覧と、獲得ボーナススキル/センター/マスタリーレベル/曲名で絞り込みができます。<br>
        また、自分のアカウントの楽曲マスタリーレベルの設定ができます。
      </v-col>
      <v-col cols="12">
        <b>ITEM LIST(アイテム一覧)</b><br>
        Quest Liveの各ステージで獲得できるスキルレベルアップ用アイテムの一覧表示と検索ができます。
      </v-col>
      <v-col cols="12">
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

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      eventList: {
        /*'liveGP': {
          title: 'ライブグランプリ「103期第9回個人戦」',
          text: '',
          type: 'liveGP',
          firstDay: [2024, 3, 10, 10, 0],
          lastDay: [2024, 3, 16, 3, 59],
          url: 'https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2024-03-08-20-r1h1jj6fmf',
          img: '103期第9回個人戦_logo.webp'
        },*/
        'liveGP': {
          title: 'ライブグランプリ「103期3月度サークル対抗戦」',
          text: '',
          type: 'liveGP',
          firstDay: [2024, 3, 20, 10, 0],
          lastDay: [2024, 3, 26, 3, 59],
          url: 'https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2024-03-18-40-t3xz8b31x1',
          img: '103期3月度サークル対抗戦_logo.webp'
        },
        '2ndLive_chiba': {
          title: 'ライブ「ラブライブ！ 蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour ～Blooming with ◯◯◯～」',
          text: '千葉公演',
          type: 'live',
          firstDay: [2024, 4, 20, 0, 0],
          lastDay: [2024, 4, 21, 23, 59],
          url: 'https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BLW',
          img: '2ndLIVE_logo.webp'
        },
        '2ndLive_hyougo': {
          title: 'ライブ「ラブライブ！ 蓮ノ空女学院スクールアイドルクラブ 2nd Live Tour ～Blooming with ◯◯◯～」',
          text: '兵庫公演',
          type: 'live',
          firstDay: [2024, 5, 18, 0, 0],
          lastDay: [2024, 5, 19, 23, 59],
          url: 'https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=BLW',
          img: '2ndLIVE_logo.webp'
        },
        'anisama': {
          title: 'ライブ「Animelo Summer Live 2024 -Stargazer-」',
          text: 'Day2(出演日)',
          type: 'live',
          firstDay: [2024, 8, 31, 0, 0],
          lastDay: [2024, 8, 31, 23, 59],
          url: 'https://anisama.tv/2024/liveinfo/',
          img: 'anisama_logo.webp'
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