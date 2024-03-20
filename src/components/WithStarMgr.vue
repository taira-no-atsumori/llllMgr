<template>
<v-container fluid class="px-2 pt-2 pb-0">
    <v-row no-gutters class="mb-3">
      <v-col cols="12" class="mb-2">
        <h1>WITH STAR MGR ～ 獲得With Star計算ツール ～</h1>
      </v-col>
      <v-col cols="12" class="mb-2">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
            <v-expansion-panel-text>
              With×MEETSを視聴したときに得られるWith Starを割り振りするときに使えるツールです。
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  <v-row no-gutters>
    <v-col cols="12">
      送ったギフトPt.
      <v-rating
        v-model="rating"
        active-color="pink"
        color="orange-lighten-1"
      ></v-rating>
      <v-btn @click="rating = 0">リセット</v-btn>
      <v-divider class="my-2"></v-divider>
    </v-col>

    <v-col
      v-for="(arr, memberName) in store.charactorName"
      :key="memberName"
      cols="6"
      md="4"
      lg="2"
      class="mt-2 px-1"
    >
      <v-card class="pa-2">
        <h4 class="d-flex flex-row align-center justify-center">
          <img
            :src="require(`@/assets/member_icon/icon_illust_${memberName}.png`)"
            style="width: 50px;"
          >
          <span class="pt-1 pl-2">{{ store.makeFullName(memberName) }}</span>
        </h4>

        <v-divider class="my-2"></v-divider>

        <v-row no-gutters class="mb-3">
          <v-col cols="4" align="center">
            <v-btn density="compact" icon="mdi-plus" :disabled="rating === 0"></v-btn>
          </v-col>
          <v-col cols="4" align="center" class="pt-1">
            <p>0</p>
          </v-col>
          <v-col cols="4" align="center">
            <v-btn density="compact" icon="mdi-minus" :disabled="rating === 0"></v-btn>
          </v-col>
        </v-row>

        <v-row no-gutters class="text-center">
          <v-col cols="12" v-if="false">
            獲得Fan Lv.
          </v-col>
          <v-col cols="12" class="mb-2">
            <p>Season Fan Lv.</p>
            <span class="text-h6 mr-2">10 / 10</span>
            <span class="text-caption">(1080 / {{ 120 * (9 - 1) + 200 }})</span>
            <v-progress-linear model-value="100" max="1000" color="pink" rounded></v-progress-linear>
          </v-col>
          <v-col cols="12" class="mb-2">
            <p>Member Fan Lv.</p>
            <span class="text-h6 mr-2">100</span>
            <span class="text-caption">(1080 / 1330)</span>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</v-container>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'WithStarMgr',
  data() {
    return {
      rating: 0,
      windowSize: {
        w: 0,
        h: 0,
      }
    }
  },
  created() {},
  computed: {},
  mounted() {
    this.onResize();
  },
  methods: {
    onResize() {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  }
}
</script>