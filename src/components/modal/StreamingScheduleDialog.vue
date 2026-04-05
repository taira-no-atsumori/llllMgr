<template>
  <h2 class="mb-3">Streaming Schedule</h2>

  <v-calendar v-model="date" :value="date" class="mb-3" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const date = ref(new Date()); // Initial date for the calendar
</script>
