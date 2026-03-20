<template>
  <v-tooltip v-if="!display.smAndDown.value" location="bottom">
    <template #activator="{ props }">
      <v-icon
        v-bind="props"
        icon="mdi-backup-restore"
        class="ml-1 mr-2"
        @click="handleClick"
      />
    </template>
    データバックアップ・リセット
  </v-tooltip>

  <v-icon
    v-else
    icon="mdi-backup-restore"
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
