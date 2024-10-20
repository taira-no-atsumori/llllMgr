<template>
<h1>SITE SETTINGS</h1>

<v-tabs
  v-model="pageName"
  :items="tabs"
  slider-color="pink"
  density="compact"
  grow
  class="mb-2"
>
  <template v-slot:tab="{ item }">
    <v-tab
      :value="item.value"
      :text="item.text"
      :class="`${item.value === 'music' ? 'd-none d-sm-block': ''}`"
    ></v-tab>
  </template>
</v-tabs>

<v-tabs-window v-model="pageName">
  <v-tabs-window-item value="all">
    <v-switch
      v-model="store.siteSettings.all.headerTracking"
      color="pink"
      density="comfortable"
      false-value="hide"
      true-value=""
      label="ヘッダー追従"
      class="pl-2"
      hide-details
      @change="store.changeSettings('siteSettings')"
    ></v-switch>
    <v-switch
      v-model="store.siteSettings.all.darkMode"
      color="pink"
      density="comfortable"
      false-value="light"
      true-value="dark"
      label="ダークモード"
      class="pl-2"
      hide-details
      @change="store.changeSettings('siteSettings')"
    ></v-switch>
  </v-tabs-window-item>

  <v-tabs-window-item value="card">
    <div class="mb-3">
      <p class="font-weight-bold">ドット表示</p>
      <v-row no-gutters>
        <v-col cols="12" sm="4">
          <v-switch
            v-model="store.siteSettings.cardList.dot_cardLevel"
            color="pink"
            density="comfortable"
            false-value="false"
            true-value="true"
            label="🔴カードレベル"
            class="pl-2"
            hide-details
            @change="store.changeSettings('siteSettings')"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4">
          <v-switch
            v-model="store.siteSettings.cardList.dot_releaseLevel"
            color="pink"
            density="comfortable"
            false-value="false"
            true-value="true"
            label="🟢特訓"
            class="pl-2"
            hide-details
            @change="store.changeSettings('siteSettings')"
          ></v-switch>
        </v-col>
        <v-col cols="12" sm="4">
          <v-switch
            v-model="store.siteSettings.cardList.dot_releasePoint"
            color="pink"
            density="comfortable"
            false-value="false"
            true-value="true"
            label="🔵解放Pt."
            class="pl-2"
            hide-details
            @change="store.changeSettings('siteSettings')"
          ></v-switch>
        </v-col>
      </v-row>
    </div>

    <div>
      <p class="font-weight-bold">その他</p>
      <v-switch
        v-model="store.siteSettings.cardList.isShowDetail"
        color="pink"
        density="comfortable"
        false-value="false"
        true-value="true"
        label="詳細表示"
        class="pl-2"
        hide-details
        @change="store.changeSettings('siteSettings')"
      ></v-switch>
      <v-switch
        v-model="store.siteSettings.cardList.hover"
        color="pink"
        density="comfortable"
        false-value="false"
        true-value="true"
        label="ホバー表示"
        class="pl-2 d-none d-sm-block"
        hide-details
        @change="store.changeSettings('siteSettings')"
      ></v-switch>
    </div>
  </v-tabs-window-item>

  <v-tabs-window-item value="music">
    <v-switch
      v-model="store.siteSettings.musicList.hover"
      color="pink"
      density="comfortable"
      false-value="false"
      true-value="true"
      label="ホバー表示"
      class="pl-2 d-none d-sm-block"
      hide-details
      @change="store.changeSettings('siteSettings')"
    ></v-switch>
  </v-tabs-window-item>
</v-tabs-window>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      pageName: 'all',
      tabs: [
        {text: 'ALL', value: 'all'},
        {text: 'CARD LIST', value: 'card'},
        {text: 'MUSIC LIST', value: 'music'}
      ]
    }
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>