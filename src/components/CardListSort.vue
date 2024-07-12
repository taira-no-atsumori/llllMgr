<template>
<v-row no-gutters>
  <v-col>
    <v-radio-group
      v-model="store.selectSortType"
      inline
      density="compact"
      hide-details="false"
      v-for="(label, val) in sortTypeList"
      :key="val"
    >
      <v-radio
        color="pink"
        :value="val"
        :label="label"
      ></v-radio>
    </v-radio-group>
  </v-col>
</v-row>
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
        normal: '通常',
        all: '総合',
        cardLevel: 'カードレベル',
        specialAppealLevel: 'SAレベル',
        skillLevel: 'スキルレベル',
        releaseLevel: '解放レベル',
        releaseBonus: '解放ボーナス',
        trainingLevel: '特訓度',
        smile: 'スマイル',
        pure: 'ピュア',
        cool: 'クール',
        mental: 'メンタル',
        japanese: '五十音'
      }
    }
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>