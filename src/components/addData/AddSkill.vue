<template>
  <v-container fluid class="pa-2">
    <h2 class="mb-2">Skill List</h2>
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

    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ isNew ? 'New Skill' : 'Edit Skill' }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.category"
                  label="Category"
                  :readonly="!isNew"
                  :variant="isNew ? 'outlined' : 'filled'"
                />
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="editedItem.id"
                  label="ID"
                  :readonly="!isNew"
                  :variant="isNew ? 'outlined' : 'filled'"
                />
              </v-col>

              <template v-for="(value, key) in editableFields" :key="key">
                <v-col cols="12">
                  <v-textarea
                    v-if="
                      typeof value === 'object' ||
                      key === 'detail' ||
                      key === 'description'
                    "
                    v-model="editedItem[key]"
                    :label="String(key)"
                    auto-grow
                    rows="3"
                  />
                  <v-text-field
                    v-else
                    v-model="editedItem[key]"
                    :label="String(key)"
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
import { SKILL_LIST } from '@/constants/skillList';

const store = useStateStore();
const search = ref('');

const items = computed(() => {
  const list: any[] = [];

  if (!SKILL_LIST) {
    return list;
  }

  for (const [category, skills] of Object.entries(SKILL_LIST)) {
    if (typeof skills !== 'object' || skills === null) {
      continue;
    }

    for (const [id, detail] of Object.entries(skills as Record<string, any>)) {
      list.push({
        category,
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
      { title: 'Category', key: 'category' },
      { title: 'ID', key: 'id' },
      { title: 'Actions', key: 'actions', sortable: false },
    ];
  }

  const keys = new Set<string>();
  items.value.forEach((item) => {
    Object.keys(item).forEach((k) => {
      if (k !== 'category' && k !== 'id') keys.add(k);
    });
  });

  const dynamicHeaders = Array.from(keys).map((key) => ({
    title: key,
    key: key,
  }));

  return [
    { title: 'Category', key: 'category' },
    { title: 'ID', key: 'id' },
    ...dynamicHeaders,
    { title: 'Actions', key: 'actions', sortable: false },
  ];
});

const dialog = ref(false);
const isNew = ref(false);
const editedItem = ref<Record<string, any>>({});

const editableFields = computed(() => {
  return editedItem.value;
});

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const openCreateDialog = () => {
  editedItem.value = {
    category: '',
    id: '',
    name: '',
    description: '',
  };
  isNew.value = true;
  dialog.value = true;
};

const openEditDialog = (item: any) => {
  editedItem.value = JSON.parse(JSON.stringify(item));
  isNew.value = false;
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const saveItem = async () => {
  const db = store.isDev ? rtdbDev : rtdb;
  const updates: Record<string, any> = {};

  if (!editedItem.value.category || !editedItem.value.id) {
    snackbarMessage.value = 'Category and ID are required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  if (isNew.value) {
    const exists = items.value.some(
      (item) =>
        item.category === editedItem.value.category &&
        item.id === editedItem.value.id,
    );
    if (exists) {
      snackbarMessage.value = 'This Category/ID combination already exists';
      snackbarColor.value = 'error';
      snackbar.value = true;
      return;
    }
  }

  const { category, id, ...data } = editedItem.value;

  updates[`skillList/${category}/${id}`] = data;

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
</script>
