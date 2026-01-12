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
            text="CLOSE"
            :theme="store.siteSettings.all.darkMode"
            @click="store.loading = false"
          />
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { useStateStore } from '@/stores/stateStore';
const store = useStateStore();
</script>

<script>
export default {
  name: 'Loading',
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch() {},
  created() {},
  methods: {},
};
</script>
