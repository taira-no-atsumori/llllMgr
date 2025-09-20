<template>
  <v-app :theme="store.localStorageData.siteSettings.all.darkMode">
    <v-app-bar
      :scroll-behavior="store.localStorageData.siteSettings.all.headerTracking"
      density="comfortable"
      color="pink"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-sm-and-up"
      ></v-app-bar-nav-icon>
      <v-bottom-sheet
        v-model="drawer"
        v-if="false"
      >
        <template v-slot:activator="{ props }">
          <v-icon
            v-bind="props"
            @click="drawer = true"
            class="ml-3 hidden-sm-and-up"
          >
            mdi-menu
          </v-icon>
        </template>

        <v-sheet class="py-2">
          <v-list-item
            class="px-2 pt-0 pb-2"
            title="リンクラ マネージャー！"
            :subtitle="`Ver. ${siteVersion}`"
          ></v-list-item>

          <v-divider class="pb-1"></v-divider>

          <v-list-item
            v-for="(arr, pageTitle) of pageList"
            :key="arr"
            :title="pageTitle.toUpperCase()"
            :subtitle="arr.name_ja"
            class="px-2"
            @click="
              pageMove(arr.name_en);
              drawer = false;
            "
          >
            <template v-slot:prepend>
              <v-icon>{{ `mdi-${arr.icon}` }}</v-icon>
            </template>
          </v-list-item>
        </v-sheet>
      </v-bottom-sheet>

      <v-toolbar-title class="d-none d-sm-block">
        リンクラ マネージャー！<span class="text-subtitle-2">Ver.{{ siteVersion }}</span>
      </v-toolbar-title>
      <v-toolbar-title class="hidden-sm-and-up">リンマネ</v-toolbar-title>

      <v-spacer></v-spacer>

      <ul class="d-none d-sm-flex">
        <template
          v-for="(arr, pageTitle) of pageList"
          :key="arr"
        >
          <v-tooltip
            location="bottom"
            v-if="pageTitle !== 'License'"
          >
            <template v-slot:activator="{ props }">
              <li style="border-right: 1px solid">
                <v-btn
                  v-bind="props"
                  class="px-2"
                  @click="pageMove(arr.name_en)"
                >
                  <v-icon class="mr-1">{{ `mdi-${arr.icon}` }}</v-icon>
                  {{ pageTitle }}
                </v-btn>
              </li>
            </template>
            {{ arr.name_ja }}
          </v-tooltip>
        </template>
      </ul>

      <ul
        class="d-flex"
        style="height: 36px"
      >
        <li class="align-self-center ml-1">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                @click="store.showModalEvent('share')"
                class="ml-1 mr-2"
              >
                mdi-share-variant
              </v-icon>
            </template>
            シェア
          </v-tooltip>
        </li>
        <li class="d-none d-sm-flex">
          <v-divider
            class="border-opacity-100"
            vertical
          ></v-divider>
        </li>
        <li class="align-self-center ml-1">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                @click="store.showModalEvent('backup')"
                class="ml-1 mr-2"
              >
                mdi-backup-restore
              </v-icon>
            </template>
            データバックアップ・リセット
          </v-tooltip>
        </li>
        <li class="d-none d-sm-flex">
          <v-divider
            class="border-opacity-100"
            vertical
          ></v-divider>
        </li>
        <li class="align-self-center ml-1">
          <v-tooltip location="bottom">
            <template v-slot:activator="{ props }">
              <v-icon
                v-bind="props"
                @click="store.showModalEvent('settings')"
                class="ml-1 mr-2"
              >
                mdi-cog
              </v-icon>
            </template>
            サイト設定
          </v-tooltip>
        </li>
      </ul>
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
        :subtitle="`Ver.${siteVersion}`"
      ></v-list-item>

      <v-divider class="pb-1"></v-divider>

      <v-list-item
        v-for="(arr, pageTitle) of pageList"
        :key="arr"
        :title="pageTitle.toUpperCase()"
        :subtitle="arr.name_ja"
        class="px-2"
        @click="pageMove(arr.name_en)"
      >
        <template v-slot:prepend>
          <v-icon>{{ `mdi-${arr.icon}` }}</v-icon>
        </template>
      </v-list-item>
    </v-navigation-drawer>

    <v-main class="pb-2">
      <router-view />
    </v-main>

    <v-fab
      v-if="false"
      icon="mdi-arrow-up"
      app
      location="bottom"
      class="mb-10"
      @click="goToTop()"
    ></v-fab>

    <Modal />
    <Loading />

    <v-footer
      color="pink"
      class="mb-10"
    >
      <v-row
        no-gutters
        justify="center"
      >
        <v-col
          cols="12"
          class="mx-2 text-center"
        >
          <a
            v-for="(arr, pageTitle) of pageList"
            :key="arr"
            href="javascript:void(0)"
            class="mx-3 mb-2 footer-link"
            @click="pageMove(arr.name_en)"
          >
            {{ pageTitle.toUpperCase() }}
          </a>
        </v-col>
        <v-col
          cols="12"
          class="text-center"
        >
          © 2023 - {{ new Date().getFullYear() }}
          <strong>taira no atsumori</strong>
        </v-col>
      </v-row>
    </v-footer>

    <v-bottom-navigation
      bg-color="pink"
      density="compact"
      class="d-flex flex-row align-center"
    >
      ご意見・ご要望・バグ報告は「
      <a
        href="https://odaibako.net/u/taira_no_atsumori"
        target="_blank"
        class="text-white font-weight-bold"
      >
        お題箱 </a
      >」まで
    </v-bottom-navigation>
  </v-app>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useGoTo } from 'vuetify';
import Modal from '@/components/modal/ModalArea.vue';
import Loading from '@/components/modal/Loading.vue';
import { useStateStore } from '@/stores/stateStore';

interface pageContents {
  name_en: string;
  name_ja: string;
  url: string;
  icon: string;
}

const siteVersion = ref(import.meta.env.VITE_SITEVERSION || '0.0.0');
const store = useStateStore();
const router = useRouter();
const route = useRoute();
const goTo = useGoTo();

const drawer = ref(false);
const siteName = 'リンクラ マネージャー！(リンマネ)';
const pageList: Record<string, pageContents> = {
  Home: {
    name_en: 'Home',
    name_ja: 'ホーム',
    url: `/${import.meta.env.VITE_PATHNAME}/`,
    icon: 'home',
  },
  Simulation: {
    name_en: 'Simulation',
    name_ja: '編成シミュレーション',
    url: 'simulation',
    icon: 'calculator',
  },
  'Card List': {
    name_en: 'CardList',
    name_ja: 'カード一覧 / 所持カード設定',
    url: 'cardList',
    icon: 'cards',
  },
  'Music List': {
    name_en: 'MusicList',
    name_ja: '楽曲一覧 / 楽曲マスタリーレベル設定',
    url: 'musicList',
    icon: 'music',
  },
  'Item List': {
    name_en: 'ItemList',
    name_ja: 'スキルアップ素材獲得ステージリスト',
    url: 'itemList',
    icon: 'book',
  },
  License: {
    name_en: 'License',
    name_ja: 'ライセンス',
    url: 'license',
    icon: 'text-box-outline',
  },
};

/* ----- Methods Start ----- */
/**
 * ページ遷移処理
 * @param movePageName 遷移先のページ名
 * @returns void
 */
const pageMove = (movePageName: string): void => {
  router.replace({
    name: movePageName,
  });
  window.scrollTo(0, 0);
};

/**
 * ページトップへスクロール
 * @returns void
 */
const goToTop = (): void => {
  goTo(0);
};
/* ----- Methods End ----- */

/* ----- Created Start ----- */
const userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf('msie') !== -1 || userAgent.indexOf('trident') !== -1) {
  alert('本サイトはInternet Explorerに対応しておりません。\n別のブラウザから閲覧することを推奨します。');
}

if (localStorage.inflow !== undefined) {
  const pageName: string = localStorage.inflow;
  localStorage.removeItem('inflow');

  for (const listName in pageList) {
    if (pageList[listName].name_en.toLowerCase() === pageName.toLowerCase()) {
      pageMove(pageList[listName].name_en);
      break;
    }
  }
}
/* ----- Created End ----- */

/* ----- Watch Start ----- */

// ページタイトルをルートに応じて更新
watch(
  () => route.meta,
  (newMeta) => {
    if (newMeta && newMeta.title) {
      document.title = `${newMeta.title} | ${siteName}`;
    } else {
      document.title = siteName;
    }
  },
  { immediate: true }
);

/* ----- Watch Start ----- */

store.init();

onMounted(() => {
  store.initializeWindowResize();
});

onUnmounted(() => {
  store.cleanupWindowResize();
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.footer-link {
  display: inline-block;
  color: #fff;
}
</style>

<style lang="scss">
.v-list-item__spacer {
  width: 12px !important;
}

/* メンバーイメージカラー */
$kaho: #f8b500;
$sayaka: #5383c3;
$rurino: #e7609e;
$kozue: #68be8d;
$tsuzuri: #ba2636;
$megumi: #c8c2c6;
$ginko: #a2d7dd;
$kosuzu: #fad664;
$hime: #9c8de2;
$seras: #f56455;
$izumi: #1ebecd;

/* ムードカラー */
$happy: #ef8dc8;
$neutral: #a9fcc7;
$melow: #a1bafa;

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

ul {
  list-style-type: none;
}

.pc {
  display: block;
}

.sp {
  display: none;
}

main {
  width: 1600px;
  margin: 0 auto;
}

.subtitle {
  color: #fff;
  background: #e5762c;
  border-radius: 15px;
  font-size: 14px;
}

.memberArea {
  border: 3px solid;

  &[data-member_name='kaho'] {
    border-color: $kaho;

    .characterDetailArea {
      background-color: rgba($color: $kaho, $alpha: 0.75);
    }
  }

  &[data-member_name='sayaka'] {
    border-color: $sayaka;

    .characterDetailArea {
      background-color: rgba($color: $sayaka, $alpha: 0.75);
    }
  }

  &[data-member_name='rurino'] {
    border-color: $rurino;

    .characterDetailArea {
      background-color: rgba($color: $rurino, $alpha: 0.75);
    }
  }

  &[data-member_name='kozue'] {
    border-color: $kozue;

    .characterDetailArea {
      background-color: rgba($color: $kozue, $alpha: 0.75);
    }
  }

  &[data-member_name='tsuzuri'] {
    border-color: $tsuzuri;

    .characterDetailArea {
      background-color: rgba($color: $tsuzuri, $alpha: 0.75);
    }
  }

  &[data-member_name='megumi'] {
    border-color: $megumi;

    .characterDetailArea {
      background-color: rgba($color: $megumi, $alpha: 0.75);
    }
  }

  &[data-member_name='ginko'] {
    border-color: $ginko;

    .characterDetailArea {
      background-color: rgba($color: $ginko, $alpha: 0.75);
    }
  }

  &[data-member_name='kosuzu'] {
    border-color: $kosuzu;

    .characterDetailArea {
      background-color: rgba($color: $kosuzu, $alpha: 0.75);
    }
  }

  &[data-member_name='hime'] {
    border-color: $hime;

    .characterDetailArea {
      background-color: rgba($color: $hime, $alpha: 0.75);
    }
  }

  &[data-member_name='seras'] {
    border-color: $seras;

    .characterDetailArea {
      background-color: rgba($color: $seras, $alpha: 0.75);
    }
  }

  &[data-member_name='izumi'] {
    border-color: $izumi;

    .characterDetailArea {
      background-color: rgba($color: $izumi, $alpha: 0.75);
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

    &:not([data-selected='true']) {
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

.v-expansion-panel-title {
  padding: 0 16px;
}

.v-expansion-panel-text__wrapper {
  padding: 16px;
}

.v-label {
  opacity: 0.8;
}

.paramSetArea {
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 22.5% 22.5% 10% 22.5% 22.5%;
  align-items: center;
  text-align: center;

  div:first-child,
  div:nth-child(2) {
    text-align: left;
  }

  div:nth-child(4),
  div:last-child {
    text-align: right;
  }
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
