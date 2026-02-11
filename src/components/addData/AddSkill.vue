<template>
  <v-container fluid class="pa-0">
    <v-btn
      color="green"
      prepend-icon="mdi-cloud-upload"
      text="Upload SKILL_LIST"
      class="mb-2"
      @click="uploadSkillList"
    />
    <v-card>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        class="ma-2"
      >
        <template #append>
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            text="New"
            @click="openCreateDialog"
          />
        </template>
      </v-text-field>
      <v-data-table
        :headers="headers"
        :items="items"
        :search="search"
        density="compact"
        class="elevation-1"
        :items-per-page="50"
        hover
      >
        <template #[`item.actions`]="{ item }">
          <v-icon class="me-2" size="small" @click="openEditDialog(item)">
            mdi-pencil
          </v-icon>
        </template>
      </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" max-width="1200px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ `${isNew ? 'New' : 'Edit'} Skill` }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="editedItem.skillName"
                  label="SkillName"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="editedItem.id"
                  label="ID"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <v-col cols="12">
                <h3>Text</h3>
              </v-col>

              <template v-for="(value, key) in editedItem.text" :key="key">
                <v-col cols="12">
                  <v-text-field
                    v-model="editedItem.text[key]"
                    :label="`Text${key + 1}`"
                    variant="outlined"
                    density="compact"
                    hide-details
                  />
                </v-col>
              </template>

              <v-col cols="12">
                <h3>Detail</h3>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="editedItem.detail.attr"
                  label="Attr"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>

              <template
                v-for="(value, key) in editedItem.detail.type"
                :key="key"
              >
                <v-col cols="4">
                  <v-select
                    v-model="editedItem.detail.type[key]"
                    :items="skillDetailOptions"
                    item-title="title"
                    item-value="value"
                    :label="`Type${key + 1}`"
                    variant="outlined"
                    density="compact"
                    hide-details
                  />
                </v-col>
              </template>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            color="blue-darken-1"
            variant="text"
            text="Cancel"
            @click="closeDialog"
          />
          <v-btn
            color="blue-darken-1"
            variant="text"
            text="Save"
            @click="saveItem"
          />
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
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_LIST } from '@/constants/skillList';
import type { SkillType } from '@/types/skill';

/**
 * スキルの編集の型
 *
 * @property skillName スキル名
 */
export interface SkillEditType extends SkillType {
  skillName: string;
}

const store = useStateStore();
const skillStore = useSkillStore();
const search = ref('');

const items = computed(() => {
  const list: SkillType[] = [];

  if (!SKILL_LIST) {
    return list;
  }

  for (const [skillName, skills] of Object.entries(SKILL_LIST)) {
    if (typeof skills !== 'object' || skills === null) {
      continue;
    }

    for (const [id, detail] of Object.entries(
      skills as Record<
        string,
        {
          text: string[];
          exText?: [
            {
              level: number;
              text: string[];
            },
          ];
          detail: {
            attr: string;
            type: string[];
          };
        }
      >,
    )) {
      list.push({
        skillName,
        id,
        ...(typeof detail === 'object' ? detail : { value: detail }),
      });
    }
  }

  return list;
});

const headers = computed(() => {
  if (items.value.length === 0) {
    return [
      { title: 'SkillName', key: 'skillName' },
      { title: 'ID', key: 'id' },
      { title: 'Actions', key: 'actions', sortable: false },
    ];
  }

  const keys = new Set<string>();
  items.value.forEach((item) => {
    Object.keys(item).forEach((k) => {
      if (k !== 'skillName' && k !== 'id') keys.add(k);
    });
  });

  const dynamicHeaders = Array.from(keys).map((key) => ({
    title: key,
    key: key,
  }));

  return [
    { title: 'SkillName', key: 'skillName' },
    { title: 'ID', key: 'id' },
    ...dynamicHeaders,
    { title: 'Actions', key: 'actions', sortable: false },
  ];
});

const skillDetailOptions = computed(() => {
  return Object.entries(skillStore.skillDetails).map(([key, value]) => ({
    title: value.skillDetailName,
    value: key,
  }));
});

const dialog = ref(false);
const isNew = ref(false);
const editedItem = ref<Record<string, SkillEditType>>({});

// const editableFields = computed(() => {
//   const { ...text } = editedItem.value;
//   return { text };
// });

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const openCreateDialog = () => {
  editedItem.value = {
    skillName: '',
    id: '',
    text: [''],
    detail: {
      attr: '',
      type: [],
    },
  };
  isNew.value = true;
  dialog.value = true;
};

const openEditDialog = (item: SkillEditType) => {
  editedItem.value = JSON.parse(JSON.stringify(item));
  isNew.value = false;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const saveItem = async () => {
  const db = store.isDev ? rtdbDev : rtdb;
  const updates: Record<string, SkillEditType> = {};

  if (!editedItem.value.skillName || !editedItem.value.id) {
    snackbarMessage.value = 'SkillName and ID are required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  if (
    editedItem.value.detail?.type &&
    Object.values(editedItem.value.detail.type).some((v) => !v)
  ) {
    snackbarMessage.value = 'Detail Type is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  if (isNew.value) {
    const exists = items.value.some(
      (item) =>
        item.skillName === editedItem.value.skillName &&
        item.id === editedItem.value.id,
    );
    if (exists) {
      snackbarMessage.value = 'This SkillName/ID combination already exists';
      snackbarColor.value = 'error';
      snackbar.value = true;
      return;
    }
  }

  const { skillName, id, ...data } = editedItem.value;

  updates[`skillList/${skillName}/${id}`] = data;

  try {
    await update(dbRef(db), updates);
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

const uploadSkillList = async () => {
  const db = store.isDev ? rtdbDev : rtdb;

  try {
    const json = JSON.parse(JSON.stringify(SKILL_LIST));
    await update(dbRef(db, 'skills/skill'), json);
    snackbarMessage.value = `Uploaded SKILL_LIST to ${store.isDev ? 'Dev' : 'Prod'}`;
    snackbarColor.value = 'success';
    snackbar.value = true;
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error uploading SKILL_LIST';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>
