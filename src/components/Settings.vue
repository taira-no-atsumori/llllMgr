<template>
<h1>SITE SETTINGS</h1>

<v-tabs
  v-model="pageName"
  :items="tabs"
  slider-color="pink"
  density="compact"
  grow
>
  <template v-slot:tab="{ item }">
    <v-tab
      :value="item.value"
      :text="item.text"
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