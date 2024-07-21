<template>
  <v-radio-group
    v-model="store.selectSortType"
    inline
    density="compact"
    hide-details="false"
  >
    <template
      v-for="(label, val) in store.sortTypeList"
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
    return {}
  },
  created() {},
  computed: {},
  methods: {},
  watch: {}
}
</script>