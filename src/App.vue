<template>
  <v-app>
    <v-app-bar density="comfortable" color="pink">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title class="d-none d-sm-block">リンクラ マネージャー！</v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-up">リンマネ</v-toolbar-title>
      <v-spacer></v-spacer>
      <a
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        class="twitter-share-button"
        data-url="x.gd/VR5u2"
        data-hashtags="リンマネ"
        data-show-count="false"
      >
        Share
      </a>
      <span class="ml-3"></span>
      <span
        v-for="(arr, pageTitle) of pageList"
        :key="arr"
      >
        <v-tooltip location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn
              v-bind="props"
              v-if="pageTitle !== 'License'"
              class="d-none d-sm-block"
              text
              @click="pageMove(arr.url)"
            >{{ pageTitle }}</v-btn>
          </template>
          {{ arr.name }}
        </v-tooltip>
      </span>
      <v-icon
        @click="store.showModalEvent('settings');"
        class="mr-2"
        v-if="false"
      >mdi-cog</v-icon>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
      class="py-2"
      active-class="deep-purple--text text--accent-4"
    >
      <v-list-item
        class="px-2 pt-0 pb-2"
        title="リンクラ マネージャー！"
        :subtitle="`Ver. ${store.version}`"
      ></v-list-item>
      <v-divider class="pb-1"></v-divider>
      <v-list-item
        v-for="(arr, pageTitle) of pageList"
        :key="arr"
        :title="pageTitle.toUpperCase()"
        :subtitle="arr.name"
        class="px-2"
        @click="pageMove(arr.url)">
      </v-list-item>
    </v-navigation-drawer>

    <v-main>
      <router-view/>
    </v-main>

    <Modal/>

    <v-footer color="pink">
      <v-row no-gutters justify="center">
        <v-col cols="12" class="mt-2 mb-3 text-center">
          <a
            v-for="(arr, pageTitle) of pageList"
            :key="arr"
            href="javascript:void(0)"
            class="mx-3 mb-2 footer-link"
            @click="pageMove(arr.url)"
          >{{ pageTitle.toUpperCase() }}</a>
        </v-col>
        <v-col cols="12" class="text-center">
          © 2023 - {{ new Date().getFullYear() }} <strong>taira no atsumori</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
// import './reset.css'
import Modal from './components/ModalArea.vue'

export default {
  name: 'App',
  components: {
    Modal
  },
  data() {
    return {
      drawer: false,
      pageList: {
        'Home': {
          url: '/llllMgr/',
          name: 'ホーム'
        },
        'Simulation': {
          url: 'simulation',
          name: '獲得グランプリPt.計算ツール'
        },
        'Card List': {
          url: 'cardlist',
          name: 'カード一覧 / 所持カード設定'
        },
        'Music List': {
          url: 'musiclist',
          name: '楽曲一覧 / 楽曲マスタリーレベル設定'
        },
        'Item List': {
          url: 'Itemlist',
          name: 'スキルアップ素材獲得ステージリスト'
        },
        'License': {
          url: 'license',
          name: 'ライセンス'
        }
      }
    }
  },
  created() {
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
      alert('本サイトはInternet Explorerに対応しておりません。\n別のブラウザから閲覧することを推奨します。');
    }

    if (localStorage.inflow !== undefined) {
      const pageName = localStorage.inflow;
      localStorage.removeItem('inflow');
      this.pageMove(`/llllMgr/${pageName}`);
    }
  },
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    }
  }
}
</script>

<script setup>
  import { useStoreCounter } from './stores/counter';
  const store = useStoreCounter();
  store.init();
</script>

<style lang="scss" scoped>
.footer-link {
  display: inline-block;
  color: #fff;
}
</style>

<style lang="scss">
/* メンバーイメージカラー */
$kaho: #F8B500;
$sayaka: #5383C3;
$rurino: #E7609E;
$kozue: #68BE8D;
$tsuzuri: #BA2636;
$megumi: #C8C2C6;

/* ムードカラー */
$happy: #EF8DC8;
$neutral: #A9FCC7;
$melow: #A1BAFA;

/* コンテンツカラー */
$series: #ff1493;
$hasunosora: #ffc0cb;

h1 {
  font-weight: normal;
}

a {
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}

.pc {
  display: block;
}

.sp {
  display: none;
}

.pb10 {
  padding-bottom: 10px;
}

.mr5 {
  margin-right: 5px;
}

.mr10 {
  margin-right: 10px;
}

.ml5 {
  margin-left: 5px;
}

.ml10 {
  margin-left: 10px;
}

.mb5 {
  margin-bottom: 5px;
}

.mb10 {
  margin-bottom: 10px;
}

main {
  width: 1600px;
  margin: 0 auto;
}

.charactorArea {
  border: 3px solid;

  &[data-charactorname="kaho"] {
    border-color: $kaho;

    .charactorDetailArea {
      background-color: rgba($color: $kaho, $alpha: 0.75);
    }
  }

  &[data-charactorname="sayaka"] {
    border-color: $sayaka;

    .charactorDetailArea {
      background-color: rgba($color: $sayaka, $alpha: 0.75);
    }
  }
  
  &[data-charactorname="rurino"] {
    border-color: $rurino;

    .charactorDetailArea {
      background-color: rgba($color: $rurino, $alpha: 0.75);
    }
  }
  
  &[data-charactorname="kozue"] {
    border-color: $kozue;

    .charactorDetailArea {
      background-color: rgba($color: $kozue, $alpha: 0.75);
    }
  }
  
  &[data-charactorname="tsuzuri"] {
    border-color: $tsuzuri;

    .charactorDetailArea {
      background-color: rgba($color: $tsuzuri, $alpha: 0.75);
    }
  }
  
  &[data-charactorname="megumi"] {
    border-color: $megumi;

    .charactorDetailArea {
      background-color: rgba($color: $megumi, $alpha: 0.75);
    }
  }
}

.cardList {
  width: 100%;
}

#otherArea {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  grid-column-gap: 15px;
}

#textOutputArea label {
  display: block;
}

#textOutput {
  width: 100%;
  height: 500px;
  padding: 5px;
  border: 3px solid #000;
  border-radius: 5px;
}

#possessionCard_header {
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;

  li {
    padding: 10px;
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    cursor: pointer;

    &:last-child {
      border-right: 1px solid #000;
    }

    &:not([data-selected="true"]) {
      background: #999;
      border-bottom: 1px solid #000;
    }
  }
}

.hamidashi {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media screen and (max-width: 600px) {
  .pc {
    display: none;
  }

  .sp {
    display: block;
  }
}
</style>