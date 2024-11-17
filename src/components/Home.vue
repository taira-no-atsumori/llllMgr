<template>
  <v-container fluid class="pa-2">
    <v-row class="mt-0" v-if="Object.keys(outputEventList).length > 0">
      <v-col cols="12">
        <h2>ライブ・イベント情報</h2>
        <v-carousel
          cycle
          hide-delimiters
          show-arrows="hover"
          style="max-width: 800px; height: auto; margin: 0 auto"
        >
          <v-carousel-item
            v-for="(event, eventName) in outputEventList"
            :key="eventName"
            class="text-center"
          >
            <v-card variant="flat" rounded="0">
              <a :href="event.url" target="_blank" class="mainVisual">
                <v-img
                  class="white--text align-end text-center"
                  :src="require(`@/assets/event_information/${event.img}.webp`)"
                ></v-img>
              </a>
              <v-card-title class="text-left">
                {{ event.title }}
                <div v-if="event.state === 'prev'">
                  {{ event.text }}まで<span class="d-inline-block">
                    あと
                    <template v-if="event.count.day > 0">
                      <b class="text-red">{{ event.count.day }}</b>
                      日
                    </template>
                    <template v-else>
                      <b class="text-red">{{ event.count.time }}</b>
                      時間
                    </template>
                  </span>
                </div>
                <div v-else>
                  {{ event.text }}
                  <span class="d-inline-block">
                    <b class="text-red">
                      開催
                      <span v-if="event.type === 'live'"> 日 </span>
                      <span v-else>中</span>
                    </b>
                  </span>
                </div>
              </v-card-title>
            </v-card>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>メインメニュー</h2>
      </v-col>
      <v-col>
        <v-btn
          block
          prepend-icon="mdi-calculator"
          @click="pageMove('simulation')"
          :disabled="true"
        >
          Simulation
        </v-btn>
      </v-col>
      <v-col v-if="false">
        <v-btn block prepend-icon="mdi-star" @click="pageMove('withStarMgr')">
          WithStar Mgr
        </v-btn>
      </v-col>
      <v-col>
        <v-btn block prepend-icon="mdi-cards" @click="pageMove('cardlist')">
          Card List
        </v-btn>
      </v-col>
      <v-col>
        <v-btn block prepend-icon="mdi-music" @click="pageMove('musiclist')">
          Music List
        </v-btn>
      </v-col>
      <v-col>
        <v-btn block prepend-icon="mdi-book" @click="pageMove('itemlist')">
          Item List
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>About</h2>
        このサイトは、アプリ「Link！Like！ラブライブ！」(通称リンクラ)のゲームパートである「スクールアイドルステージ」(通称スクステ)をもっと楽しく！もっと深く！もっと便利に！をモットーに作成された、非公式のサイトです。<br />
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください！
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Attention</h2>
        このサイトは、PC/スマホ両方からの利用に対応していますが、一部ページはスマホで利用する場合、表示崩れが起こる可能性があります。<br />
        利用できないほどのものでない限り、メイン機能を一通り実装し終えた後の対応となります。
      </v-col>
      <v-col cols="12">
        このサイトは、スクステをある程度理解している(ライブグランプリに参加するような)方に向けたサイトになります。<br />
        「スクステってなに？」という方は、<a
          href="https://youtu.be/fkcQL4Mnz4k?si=FqGv2R0JHBPiEV5C"
          target="_blank"
          >公式のチュートリアル動画</a
        >や<a
          href="https://wikiwiki.jp/llll_wiki/%E3%82%B9%E3%82%AF%E3%82%B9%E3%83%86/%E6%94%BB%E7%95%A5/%E3%82%B9%E3%82%AF%E3%82%B9%E3%83%86%E3%81%AE%E9%81%8A%E3%81%B3%E6%96%B9"
          target="_blank"
          >Wiki</a
        >、SNS/動画サイトで解説してくださっている方がいるので、そちらをご覧ください。
      </v-col>
      <v-col cols="12">
        完全個人制作のため、一部デザインが崩れていたり、動かない場合があります。<br />
        順次対応していきますので、大目に見てください…<br />
        (あと、教えてもらえると助かります…)
      </v-col>
      <v-col cols="12">
        このサイトはリンクフリーです。<br />
        <u
          >SNSや動画などで紹介する場合の許可も不要ですので、ガンガン広めてください！</u
        >
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Page Introduction</h2>
        各ページを簡単に紹介します。
      </v-col>
      <v-col cols="12">
        <s
          ><b>SIMULATION(獲得グランプリPt.計算ツール)</b><br />
          獲得グランプリPt.を計算できます。<br />
          なお、簡単な編成シミュレーションと編成情報の保存機能を搭載し、リニューアルする予定です。</s
        ><br />
        →リニューアル準備中
      </v-col>
      <v-col cols="12">
        <b>CARD LIST(カード一覧)</b><br />
        リンクラ内に実装されているカードの一覧と、カードの属性/スペシャルアピール/スキルレベル/特性/カードシリーズでの絞り込みができます。<br />
        また、自分が所持しているカードのデータを入力して管理することもできます。
      </v-col>
      <v-col cols="12">
        <b>MUSIC LIST(楽曲一覧)</b><br />
        リンクラ内に実装されている楽曲の一覧と、獲得ボーナススキル/センター/マスタリーレベル/曲名で絞り込みができます。<br />
        また、自分のアカウントの楽曲マスタリーレベルの設定ができます。
      </v-col>
      <v-col cols="12">
        <b>ITEM LIST(アイテム一覧)</b><br />
        Quest
        Liveの各ステージで獲得できるスキルレベルアップ用アイテムの一覧表示と検索ができます。
      </v-col>
      <v-col cols="12"> ※機能は変更になる可能性があります。 </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Update Information</h2>
        下記ページにて更新情報をお知らせしています(別タブで開きます)。<br />
        <a
          href="https://github.com/taira-no-atsumori/llllMgr/releases"
          target="_blank"
          >Update Information</a
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      eventList: {
        liveGP: {
          title: "ライブグランプリ「104期 3rdTerm 第1回個人戦」",
          text: "",
          type: "liveGP",
          firstDay: [2024, 11, 17, 12, 0],
          lastDay: [2024, 11, 23, 3, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2024-11-16-40-f9ye1gw94i",
          img: "104期 3rdTerm 第1回個人戦_logo",
        },
        /*liveGP: {
          title: "ライブグランプリ「104期 2ndTerm 第3回サークル対抗戦」",
          text: "",
          type: "liveGP",
          firstDay: [2024, 10, 19, 12, 0],
          lastDay: [2024, 10, 24, 3, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/appnews/detail/?p=2024-10-18-10-de5bpp0jlv",
          img: "104期 2ndTerm 第3回サークル対抗戦_logo",
        },*/
        "3rdLiveTour_DOLLCHESTRA": {
          title:
            "ライブ「ラブライブ！ 蓮ノ空女学院スクールアイドルクラブ 3rd Live Tour TRY TRI UNITY!!!」",
          text: "with DOLLCHESTRA",
          type: "live",
          firstDay: [2024, 11, 24, 0, 0],
          lastDay: [2024, 11, 24, 23, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=TTUD",
          img: "3rdLiveTour_logo_DOLLCHESTRA",
        },
        "3rdLiveTour_スリーズブーケ": {
          title:
            "ライブ「ラブライブ！ 蓮ノ空女学院スクールアイドルクラブ 3rd Live Tour TRY TRI UNITY!!!」",
          text: "with スリーズブーケ",
          type: "live",
          firstDay: [2024, 12, 1, 0, 0],
          lastDay: [2024, 12, 1, 23, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=TTUC",
          img: "3rdLiveTour_logo_スリーズブーケ",
        },
        "Live&FanMeeting": {
          title:
            "ライブ&ファンミーティング「ラブライブ！蓮ノ空女学院スクールアイドルクラブ Live & Fan Meeting TRY TRY UNITY!!!」",
          text: "",
          type: "live",
          firstDay: [2024, 12, 21, 0, 0],
          lastDay: [2024, 12, 22, 23, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=TTY",
          img: "live&fanMeeting_logo",
        },
        "3rdLiveTour": {
          title:
            "ライブ「ラブライブ！ 蓮ノ空女学院スクールアイドルクラブ 3rd Live Tour TRI TRI UNITY!!!」",
          text: "",
          type: "live",
          firstDay: [2025, 1, 10, 0, 0],
          lastDay: [2025, 1, 11, 23, 59],
          url: "https://www.lovelive-anime.jp/hasunosora/live-event/live_detail.php?p=TTU",
          img: "3rdLiveTour_logo",
        },
        AsiaTour: {
          title:
            "ライブ「LoveLive! Series Asia Tour 2024 ～みんなで叶える物語 ～」",
          text: "横浜公演",
          type: "live",
          firstDay: [2025, 2, 1, 0, 0],
          lastDay: [2025, 2, 2, 23, 59],
          url: "https://lovelive-anime.jp/special/live/live_detail.php?p=asiatour_2024",
          img: "AsiaTour_kv",
        },
      },
      outputEventList: {},
    };
  },
  created() {
    for (const key in this.eventList) {
      const arr = this.countDown(key);

      if (arr.state !== "after") {
        this.outputEventList[key] = this.eventList[key];
        this.outputEventList[key].state = arr.state;

        if (arr.state === "prev") {
          this.outputEventList[key].count = {
            day: arr.day,
            time: arr.time,
          };
        }
      }
    }
  },
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
      window.scrollTo(0, 0);
    },
    countDown(eventName) {
      const firstDay = new Date(
        this.eventList[eventName].firstDay[0],
        this.eventList[eventName].firstDay[1] - 1,
        this.eventList[eventName].firstDay[2],
        this.eventList[eventName].firstDay[3],
        this.eventList[eventName].firstDay[4],
        0
      );
      const lastDay = new Date(
        this.eventList[eventName].lastDay[0],
        this.eventList[eventName].lastDay[1] - 1,
        this.eventList[eventName].lastDay[2],
        this.eventList[eventName].lastDay[3],
        this.eventList[eventName].lastDay[4],
        59
      );
      const today = new Date();

      const f = new Date(
        firstDay.getFullYear(),
        firstDay.getMonth(),
        firstDay.getDate()
      );
      const l = new Date(
        lastDay.getFullYear(),
        lastDay.getMonth(),
        lastDay.getDate()
      );
      const t = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate()
      );

      if (f.getTime() === t.getTime()) {
        if (today.getHours() < firstDay.getHours()) {
          return {
            state: "prev",
            day: 0,
            time: firstDay.getHours() - today.getHours(),
          };
        } else {
          return {
            state: "now",
          };
        }
      } else if (f.getTime() > t.getTime()) {
        return {
          state: "prev",
          day: -Math.floor(
            (today.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24)
          ),
          time: 0,
        };
      } else if (t.getTime() < l.getTime()) {
        return {
          state: "now",
        };
      } else if (l.getTime() === t.getTime()) {
        if (today.getTime() <= lastDay.getTime()) {
          return {
            state: "now",
          };
        }
      }

      return {
        state: "after",
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.mainVisual {
  &:hover {
    opacity: 0.75;
  }
}

@media screen and (max-width: 600px) {
}
</style>