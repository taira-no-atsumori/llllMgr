<template>
  <v-tooltip v-if="!display.smAndDown.value" location="bottom">
    <template #activator="{ props }">
      <v-icon
        v-bind="props"
        icon="mdi-share-variant"
        class="ml-1 mr-2"
        @click="handleClick"
      />
    </template>
    シェア
  </v-tooltip>

  <v-icon
    v-else
    icon="mdi-share-variant"
    class="ml-1 mr-2"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const emit = defineEmits<{
  click: [];
}>();

const display = useDisplay();

const handleClick = (): void => {
  emit('click');
};
</script>
