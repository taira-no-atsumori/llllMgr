<template>
  <v-row class="text-center">
    <v-col cols="6">
      <p class="mb-1">URLをコピー</p>
      <v-btn
        color="pink"
        prepend-icon="mdi-content-copy"
        text="COPY"
        @click="copyUrl()"
      />
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
        text="Share"
      />
    </v-col>

    <v-col cols="12">
      <v-divider />
    </v-col>

    <v-col cols="12">
      <p>QRコードでシェア</p>
      <v-img
        :width="310"
        :src="store.getImagePath('images', 'QRcode')"
        aspect-ratio="1"
        cover
        class="my-0 mx-auto"
      />
    </v-col>
  </v-row>

  <v-snackbar v-model="snackbar" timeout="2000" color="success">
    URLをコピーしました
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from '@/stores/stateStore';

const store = useStateStore();

const snackbar = ref(false);

const copyUrl = () => {
  navigator.clipboard.writeText('https://x.gd/VR5u2');
  snackbar.value = true;
};
</script>
