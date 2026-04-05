<template>
  <h1>SITE SETTINGS</h1>

  <div class="mb-3">
    <div class="d-flex align-center">
      <v-divider />
      <h3 class="text-no-wrap mx-3">ALL</h3>
      <v-divider />
    </div>

    <v-row>
      <v-col cols="6">
        <v-switch
          v-model="settingsStore.siteSettings.all.headerTracking"
          color="pink"
          density="comfortable"
          false-value="hide"
          true-value=""
          label="ヘッダー追従"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
      <v-col cols="6">
        <v-switch
          v-model="settingsStore.siteSettings.all.darkMode"
          color="pink"
          density="comfortable"
          false-value="light"
          true-value="dark"
          label="ダークモード"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
    </v-row>
  </div>

  <div class="mb-3">
    <div class="d-flex align-center mb-2">
      <v-divider />
      <h3 class="text-no-wrap mx-3">CARD LIST</h3>
      <v-divider />
    </div>

    <h4>ドット表示</h4>

    <v-row no-gutters class="mb-3">
      <v-col cols="7" sm="4">
        <v-switch
          v-model="settingsStore.siteSettings.cardList.dot_cardLevel"
          color="pink"
          density="comfortable"
          false-value="false"
          true-value="true"
          label="🔴カードレベル"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
      <v-col cols="5" sm="4">
        <v-switch
          v-model="settingsStore.siteSettings.cardList.dot_releaseLevel"
          color="pink"
          density="comfortable"
          false-value="false"
          true-value="true"
          label="🟢特訓"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
      <v-col cols="12" sm="4">
        <v-switch
          v-model="settingsStore.siteSettings.cardList.dot_releasePoint"
          color="pink"
          density="comfortable"
          false-value="false"
          true-value="true"
          label="🔵解放Pt."
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
    </v-row>

    <h4>その他</h4>

    <v-row>
      <v-col cols="6">
        <v-switch
          v-model="settingsStore.siteSettings.cardList.isShowDetail"
          color="pink"
          density="comfortable"
          false-value="false"
          true-value="true"
          label="詳細表示"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
      <v-col cols="6">
        <v-switch
          v-model="settingsStore.siteSettings.cardList.hover"
          color="pink"
          density="comfortable"
          false-value="false"
          true-value="true"
          label="ホバー表示"
          class="d-none d-sm-block"
          hide-details
          @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
        />
      </v-col>
    </v-row>
  </div>

  <div class="d-none d-sm-block">
    <div class="d-flex align-center">
      <v-divider />
      <h3 class="text-no-wrap mx-3">MUSIC LIST</h3>
      <v-divider />
    </div>

    <v-switch
      v-model="settingsStore.siteSettings.musicList.hover"
      color="pink"
      density="comfortable"
      false-value="false"
      true-value="true"
      label="ホバー表示"
      class=""
      hide-details
      @change="store.changeSettings(LDB_KEY_NAMES.SITE_SETTINGS)"
    />
  </div>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { useSettingsStore } from '@/stores/settingsStore';
import { LOCAL_DB_KEY_NAMES as LDB_KEY_NAMES } from '@/constants/localDBKeyNames';

const store = useStateStore();
const settingsStore = useSettingsStore();
</script>
