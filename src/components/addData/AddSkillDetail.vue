<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-select
        v-model="search"
        :items="skillTypeOptions"
        label="Filter by Skill Type"
        prepend-inner-icon="mdi-filter"
        variant="outlined"
        hide-details
        class="ma-2"
        clearable
      >
        <template #append>
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            text="New"
            @click="openCreateDialog"
          />
        </template>
      </v-select>

      <v-data-table
        :headers="headers"
        :items="items"
        density="compact"
        :items-per-page="-1"
        hover
      >
        <template #[`item.colorCode`]="{ value }">
          <v-chip v-if="value" :color="value" size="small" variant="flat">
            {{ value }}
          </v-chip>
        </template>
        <template #[`item.skillTypeKey`]="{ value }">
          {{ SKILL_TYPE_KEY[value] || value }}
        </template>
        <template #[`item.edit`]="{ item }">
          <v-btn icon="mdi-pencil" size="small" @click="openEditDialog(item)" />
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>Edit Skill Detail</v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="editedItem.id"
                label="ID"
                :readonly="!isNew"
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
              <v-text-field
                v-model="editedItem.colorCode"
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
          <v-btn text="Cancel" color="error" @click="closeDialog" />
          <v-btn text="Save" color="primary" @click="saveItem" />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ref as dbRef, update } from 'firebase/database';
import { rtdb } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_TYPE_KEY } from '@/constants/skillDetail';
import type { SkillDetailType } from '@/types/skill';

/**
 * フィルター用スキル詳細の型
 *
 * @property id スキルID
 */
interface SkillDetailFilterType extends SkillDetailType {
  id: string;
}

const store = useStateStore();
const skillStore = useSkillStore();
const search = ref('');
const skillTypeOptions = computed(() => {
  return Object.entries(SKILL_TYPE_KEY).map(([key, skillDetailName]) => ({
    title: skillDetailName,
    value: key,
  }));
});

const headers = [
  { title: 'ID', key: 'id' },
  { title: 'Skill Detail Name', key: 'skillDetailName' },
  { title: 'Color Code', key: 'colorCode' },
  { title: 'Skill Type', key: 'skillTypeKey' },
  { title: 'Description', key: 'description' },
  { title: 'Edit', key: 'edit', sortable: false },
];

const items = computed(() => {
  const list = Object.entries(skillStore.skillDetails).map(([key, value]) => ({
    id: key,
    ...(typeof value === 'object' ? value : { value }),
  }));

  if (search.value) {
    return list.filter((item: SkillDetailFilterType) => {
      return item.skillTypeKey === search.value;
    });
  }

  return list;
});

const dialog = ref(false);
const editedItem = ref({
  id: '',
  skillDetailName: '',
  colorCode: '',
  description: '',
  skillTypeKey: 'heartCaptcha',
});

const isNew = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const openCreateDialog = () => {
  editedItem.value = {
    id: '',
    skillDetailName: '',
    colorCode: '',
    description: '',
    skillTypeKey: 'heartCaptcha',
  };
  isNew.value = true;
  dialog.value = true;
};

const openEditDialog = (item: SkillDetailFilterType) => {
  editedItem.value = { ...item };
  isNew.value = false;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const saveItem = async () => {
  const updates: Record<string, SkillDetailType> = {};

  if (!editedItem.value.id) {
    snackbarMessage.value = 'ID is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  if (
    isNew.value &&
    items.value.some((item) => item.id === editedItem.value.id)
  ) {
    snackbarMessage.value = 'ID already exists';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const { id, ...data } = editedItem.value;

  updates[`skills/skillDetail/${id}`] = data;

  try {
    await update(dbRef(rtdb), updates);
    snackbarMessage.value = `Saved to ${store.isDev ? 'Dev' : 'Prod'}`;
    snackbarColor.value = 'success';
    snackbar.value = true;
    dialog.value = false;
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error saving data';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>
