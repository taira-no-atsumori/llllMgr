<template>
  <v-row class="text-center">
    <v-col cols="6">
      <p class="mb-1">URLをコピー</p>
      <v-btn color="pink" prepend-icon="mdi-content-copy" @click="copyUrl()"> COPY </v-btn>
    </v-col>
    <v-col cols="6">
      <p class="mb-1">Xでシェア</p>
      <v-btn
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        data-url="x.gd/VR5u2"
        data-hashtags="リンマネ"
        data-show-count="false"
        prepend-icon="mdi-alpha-x-box-outline"
        color="black"
      >
        Share
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-divider></v-divider>
    </v-col>
    <v-col cols="12">
      <p>QRコードでシェア</p>
      <img
        :lazy-src="store.getImagePath('images', 'QRcode')"
        :src="store.getImagePath('images', 'QRcode')"
        style="width: 310px"
      />
    </v-col>
  </v-row>

  <v-snackbar v-model="snackbar" timeout="2000" color="success"> URLをコピーしました </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStoreCounter } from '@/stores/counter';
const store = useStoreCounter();

const snackbar = ref(false);

const copyUrl = () => {
  navigator.clipboard.writeText('https://x.gd/VR5u2');
  snackbar.value = true;
};
</script>
