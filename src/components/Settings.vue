<template>
<h1>SITE SETTINGS</h1>
<v-switch
  v-model="store.siteSettings.headerTracking"
  color="pink"
  density="comfortable"
  false-value="hide"
  true-value=""
  label="ヘッダー追従"
  hide-details
></v-switch>
<v-switch
  v-model="store.siteSettings.isDarkMode"
  color="pink"
  density="comfortable"
  false-value="light"
  true-value="dark"
  label="ダークモード"
  hide-details
></v-switch>
お試し版のため、再読込するとダークモードは解除されます
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'Settings',
  data() {
    return {}
  },
  created() {},
  computed: {},
  mounted() {},
  methods: {}
}
</script>