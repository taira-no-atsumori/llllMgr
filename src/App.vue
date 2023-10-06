<template>
  <v-app>
    <v-app-bar
      color="pink"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>リンクラ管理ツール</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="d-none d-sm-block" text @click="pageMove('/llll_mgr/')">Home</v-btn>
      <v-btn class="d-none d-sm-block" text @click="pageMove('formation')" disabled>Formation</v-btn>
      <v-btn class="d-none d-sm-block" text @click="pageMove('cardlist')" disabled>Card List</v-btn>
      <v-btn class="d-none d-sm-block" text @click="pageMove('musiclist/llll_mgr')">Music List</v-btn>
      <v-btn class="d-none d-sm-block" text disabled>Item List</v-btn>
      <!--<v-icon @click="store.showModalEvent('settings');" style="margin-right: 10px;">mdi-cog</v-icon>-->
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item @click="pageMove('/')">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <!--<v-list-item>
            <v-list-item-title>Formation</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Card List</v-list-item-title>
          </v-list-item>-->

          <v-list-item @click="pageMove('musiclist')">
            <v-list-item-title>Music List</v-list-item-title>
          </v-list-item>

          <!--<v-list-item>
            <v-list-item-title>Item List</v-list-item-title>
          </v-list-item>-->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <div style="padding-top: 10px;">
        <router-view/>
      </div>
    </v-main>
    <Modal/>
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
      group: null,
    }
  },
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    }
  },
  watch: {
    group () {
      this.drawer = false;
    },
  },
}
</script>

<script setup>
  import { useStoreCounter } from './stores/counter';
  const store = useStoreCounter();
  store.getLocalStorage();
</script>

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

main,
footer {
  width: 1600px;
  margin: 0 auto 30px auto;
}

select,
input {
  border: 1px solid #000;
  border-radius: 5px;
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

.modalCloseButtonArea {
  text-align: center;
}

.sliderArea {
  display: grid;
  grid-template-columns: 50px 65px 1fr 65px;
}

.sliderPadding {
  padding: 0 10px;
}
</style>