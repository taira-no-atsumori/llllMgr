<template>
<h1>SITE SETTINGS</h1>
<v-switch v-model="store.isDarkMode" color="pink" density="comfortable" hide-details label="Dark Mode"></v-switch>
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