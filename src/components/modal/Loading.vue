<template>
  <v-dialog v-model="store.loading" :max-width="400" persistent>
    <v-sheet class="pa-3">
      <p class="mb-3">Now Loading…</p>
      <v-progress-linear v-if="!store.dialogError" color="pink" indeterminate />
      <div v-else>
        <v-alert type="error">
          データの取得に失敗しました。<br />
          時間を置いてからリロードしてください。
        </v-alert>
        <div class="mt-2 text-center">
          <v-btn
            prepend-icon="mdi-close"
            text="Close"
            :theme="settingsStore.siteSettings.all.darkMode"
            @click="store.loading = false"
          />
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { useSettingsStore } from '@/stores/settingsStore';

const store = useStateStore();
const settingsStore = useSettingsStore();
</script>
