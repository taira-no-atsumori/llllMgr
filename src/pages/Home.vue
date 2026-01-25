<template>
  <v-container fluid class="pa-2">
    <v-row v-if="Object.keys(outputEventList).length > 0" class="mt-0">
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
              <v-img
                v-if="event.type === 'other'"
                class="white--text align-end text-center"
                :src="event.imageUrl"
                aspect-ratio="16/9"
                cover
                eager
              >
                <template #placeholder>
                  <v-skeleton-loader type="image" class="h-100 w-100" />
                </template>
              </v-img>
              <a v-else :href="event.link" target="_blank" class="mainVisual">
                <v-img
                  class="white--text align-end text-center"
                  :src="event.imageUrl"
                  aspect-ratio="16/9"
                  cover
                  eager
                >
                  <template #placeholder>
                    <v-skeleton-loader type="image" class="h-100 w-100" />
                  </template>
                </v-img>
              </a>
              <v-card-title class="text-left">
                {{ event.title }}
                <div v-if="event.type === 'other'">
                  {{ event.text }}
                </div>
                <div v-else-if="event.state === 'prev'">
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
                      <span v-if="event.type === 'movie'">公開</span
                      ><span v-else>開催</span
                      ><span v-if="event.type === 'live'">日</span
                      ><span v-else>中</span>
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
      <v-col v-if="false">
        <v-btn
          block
          prepend-icon="mdi-calculator"
          text="Simulation"
          @click="pageMove('simulation')"
        />
      </v-col>
      <v-col v-if="false">
        <v-btn
          block
          prepend-icon="mdi-star"
          text="WithStar Mgr"
          @click="pageMove('withStarMgr')"
        />
      </v-col>
      <v-col>
        <v-btn
          block
          prepend-icon="mdi-cards"
          text="Card List"
          @click="pageMove('cardlist')"
        />
      </v-col>
      <v-col>
        <v-btn
          block
          prepend-icon="mdi-music"
          text="Music List"
          @click="pageMove('musiclist')"
        />
      </v-col>
      <v-col>
        <v-btn
          block
          prepend-icon="mdi-book"
          text="Item List"
          @click="pageMove('itemlist')"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>About</h2>
        このサイトは、アプリ「Link！Like！ラブライブ！」（通称リンクラ）のゲームパートである「スクールアイドルステージ」（通称スクステ）をもっと楽しく！もっと深く！もっと便利に！をモットーに作成された、非公式のサイトです。<br />
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください！
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h2>Attention</h2>
        このサイトは、PC／スマホ両方からの利用に対応していますが、一部ページはスマホで利用する場合、表示崩れが起こる可能性があります。<br />
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
        （あと、教えてもらえると助かります…）
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
      <v-col v-if="false" cols="12">
        <b>SIMULATION（獲得グランプリPt.計算ツール）</b><br />
        獲得グランプリPt.を計算できます。<br />
        なお、簡単な編成シミュレーションと編成情報の保存機能を搭載し、リニューアルする予定です。
      </v-col>
      <v-col v-if="false" cols="12">
        <b>SIMULATION（編成シミュレーション）</b><br />
        簡単な編成シミュレーションを行えます。<br />
        現在はおためし版となっております。<br />
        リロードすると編成データは消えるため、ご注意ください。<br />
        なお、このページのみ、PCからの利用を推奨しています。
      </v-col>
      <v-col cols="12">
        <b>CARD LIST（カード一覧）</b><br />
        リンクラ内に実装されているカードの一覧と、カードの属性／スペシャルアピール／スキルレベル／特性／カードシリーズでの絞り込みができます。<br />
        また、自分が所持しているカードのデータを入力して管理することもできます。
      </v-col>
      <v-col cols="12">
        <b>MUSIC LIST（楽曲一覧）</b><br />
        リンクラ内に実装されている楽曲の一覧と、獲得ボーナススキル／センター／マスタリーレベル／曲名で絞り込みができます。<br />
        また、自分のアカウントの楽曲マスタリーレベルの設定ができます。
      </v-col>
      <v-col cols="12">
        <b>ITEM LIST（アイテム一覧）</b><br />
        Quest
        Liveの各ステージで獲得できるスキルレベルアップ用アイテムの一覧表示と検索ができます。
      </v-col>
      <v-col cols="12">※機能は変更になる可能性があります。</v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <iframe
          src="https://tairanoatsumori.notion.site/ebd/1c7409d7465680edbd1bee7f2542a7a2"
          width="100%"
          height="600"
          frameborder="0"
          allowfullscreen
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { ref as dbRef, onValue } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';

const store = useStateStore();
const router = useRouter();

const eventList = ref<Record<string, EventItem>>({});

interface EventItem {
  title: string;
  text: string;
  type: string;
  firstDay: number[];
  lastDay: number[];
  link: string;
  imageUrl: string;
  state?: string;
  count?: {
    day?: number;
    time?: number;
  };
}

const outputEventList = reactive<Record<string, EventItem>>({});

function pageMove(movePageName: string): void {
  router.replace(movePageName);
  window.scrollTo(0, 0);
}

function countDown(eventName: string): {
  state: string;
  day?: number;
  time?: number;
} {
  const event = eventList.value[eventName];
  const firstDay = new Date(
    event.firstDay[0],
    event.firstDay[1] - 1,
    event.firstDay[2],
    event.firstDay[3],
    event.firstDay[4],
    0,
  );
  const lastDay = new Date(
    event.lastDay[0],
    event.lastDay[1] - 1,
    event.lastDay[2],
    event.lastDay[3],
    event.lastDay[4],
    59,
  );
  const today = new Date();

  const f = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate(),
  );
  const l = new Date(
    lastDay.getFullYear(),
    lastDay.getMonth(),
    lastDay.getDate(),
  );
  const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  if (f.getTime() === t.getTime()) {
    if (today.getHours() < firstDay.getHours()) {
      return {
        state: 'prev',
        day: 0,
        time: firstDay.getHours() - today.getHours(),
      };
    } else {
      return { state: 'now' };
    }
  } else if (f.getTime() > t.getTime()) {
    return {
      state: 'prev',
      day: -Math.floor(
        (today.getTime() - firstDay.getTime()) / (1000 * 60 * 60 * 24),
      ),
      time: 0,
    };
  } else if (t.getTime() < l.getTime()) {
    return { state: 'now' };
  } else if (l.getTime() === t.getTime()) {
    if (today.getTime() <= lastDay.getTime()) {
      return { state: 'now' };
    }
  }

  return { state: 'after' };
}

onMounted(() => {
  const eventRef = dbRef(store.isDev ? rtdbDev : rtdb, 'eventInformation');

  onValue(eventRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      eventList.value = data;
    }
  });
});

watch(eventList, (newList) => {
  for (const key in outputEventList) {
    delete outputEventList[key];
  }

  const sortedKeys = Object.keys(newList).sort((a, b) => {
    const eventA = newList[a];
    const eventB = newList[b];
    const dateA = new Date(
      eventA.firstDay[0],
      eventA.firstDay[1] - 1,
      eventA.firstDay[2],
      eventA.firstDay[3],
      eventA.firstDay[4],
    );
    const dateB = new Date(
      eventB.firstDay[0],
      eventB.firstDay[1] - 1,
      eventB.firstDay[2],
      eventB.firstDay[3],
      eventB.firstDay[4],
    );
    return dateA.getTime() - dateB.getTime();
  });

  for (const key of sortedKeys) {
    const arr = countDown(key);

    if (arr.state !== 'after') {
      outputEventList[key] = newList[key];
      outputEventList[key].state = arr.state;

      if (arr.state === 'prev') {
        outputEventList[key].count = {
          day: arr.day,
          time: arr.time,
        };
      }
    }
  }
});
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
