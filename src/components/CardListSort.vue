<template>
  <v-radio-group
    v-model="store.selectSortType"
    inline
    density="compact"
    hide-details="false"
  >
    <template
      v-for="(label, val) in sortTypeList"
      :key="val"
    >
      <v-radio
        color="pink"
        :value="val"
        :label="label"
        class="w-50 mb-1"
      ></v-radio>
    </template>
  </v-radio-group>
  ※先行実装のため、再読込するとソート内容は解除されます
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'CardListSort',
  data() {
    return {
      sortTypeList: {
        rare: 'レア度(標準)',
        //timeline: '時系列',
        //all: '総合',
        cardLevel: 'カード Lv.',
        SALevel: 'SA Lv.',
        SLevel: 'スキル Lv.',
        releaseLevel: '解放 Lv.',
        //releaseBonus: '解放ボーナス',
        trainingLevel: '特訓度',
        //smile: 'スマイル',
        //pure: 'ピュア',
        //cool: 'クール',
        //mental: 'メンタル',
        //kana: '五十音'
      }
    }
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>