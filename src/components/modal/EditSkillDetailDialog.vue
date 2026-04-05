<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title>Edit Skill Detail</v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="editedItem.ID"
              label="ID"
              :disabled="!isNew"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="editedItem.skillDetailName"
              label="Skill Detail Name"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="editedItem.colorCode"
              :item-props="itemProps"
              :items="colorList"
              item-title="name"
              label="Color Code"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="editedItem.skillTypeKey"
              :items="skillTypeOptions"
              item-title="title"
              item-value="value"
              label="Skill Type"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="12">
            <v-textarea
              v-model="editedItem.description"
              label="Description"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn text="Cancel" color="error" @click="dialog = false" />
        <v-btn text="Save" color="primary" @click="saveItem" />
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

import { ref as dbRef, update } from 'firebase/database';
import { rtdbDev } from '@/firebase';

import { SKILL_TYPE_KEY } from '@/constants/skillDetailType';
import { RTDB_PATH } from '@/constants/envConst';

import type { SkillDetailType, SkillType } from '@/types/skill';

const props = defineProps<{
  isNew: boolean;
  item: {
    ID: string;
    skillDetailName: string;
    colorCode: string;
    description: string;
    skillTypeKey: string;
  };
  existingItems: SkillType[];
}>();

const emit = defineEmits<{
  (e: 'saved'): void;
}>();

const dialog = defineModel<boolean>();

const editedItem = ref({ ...props.item });

watch(
  () => props.item,
  (newVal) => {
    editedItem.value = { ...newVal };
  },
  { deep: true },
);

const skillTypeOptions = computed(() => {
  return Object.entries(SKILL_TYPE_KEY).map(([key, skillDetailName]) => ({
    title: skillDetailName,
    value: key,
  }));
});

const colorList = [
  {
    name: 'red',
    caption: 'ハートキャプチャ系',
  },
  {
    name: 'lime-darken-3',
    caption: 'ラブアトラクト系',
  },
  {
    name: 'green',
    caption: 'メンタル系',
  },
  {
    name: 'lime-darken-4',
    caption: 'AP変化系',
  },
  {
    name: 'purple',
    caption: '手札枚数変更系',
  },
  {
    name: 'grey',
    caption: 'その他',
  },
];

function itemProps(item: { name: string; caption: string }) {
  return {
    title: item.name,
    subtitle: `主に${item.caption}に使用`,
  };
}

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const saveItem = async () => {
  const updates: Record<string, SkillDetailType> = {};

  if (!editedItem.value.ID) {
    snackbarMessage.value = 'ID is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  if (
    props.isNew &&
    props.existingItems.some((item) => item.ID === editedItem.value.ID)
  ) {
    snackbarMessage.value = 'ID already exists';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const { ID, ...data } = editedItem.value;

  updates[`${RTDB_PATH.SKILL_DETAIL}/${ID}`] = data;

  try {
    await update(dbRef(rtdbDev), updates);
    snackbarMessage.value = 'Saved to Dev';
    snackbarColor.value = 'success';
    snackbar.value = true;
    dialog.value = false;
    emit('saved');
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error saving data';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>
