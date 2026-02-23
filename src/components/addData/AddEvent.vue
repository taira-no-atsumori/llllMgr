<template>
  <v-container fluid class="pa-0">
    <div class="text-right mb-3">
      <v-spacer />
      <v-btn
        color="primary"
        prepend-icon="mdi-plus"
        text="New"
        @click="openCreateDialog"
      />
    </div>

    <v-data-table
      :headers="headers"
      :items="items"
      class="elevation-1"
      :items-per-page="-1"
      :sort-by="[{ key: 'firstDay', order: 'asc' }]"
      hover
    >
      <template #[`item.firstDay`]="{ value }">
        {{ formatDateArray(value) }}
      </template>
      <template #[`item.lastDay`]="{ value }">
        {{ formatDateArray(value) }}
      </template>
      <template #[`item.edit`]="{ item }">
        <v-btn
          class="mr-2"
          size="small"
          variant="tonal"
          icon="mdi-pencil"
          @click="openEditDialog('edit', item)"
        />
        <v-btn
          class="mr-2"
          size="small"
          variant="tonal"
          icon="mdi-content-copy"
          @click="openEditDialog('copy', item)"
        />
        <v-btn
          size="small"
          variant="tonal"
          color="error"
          icon="mdi-delete"
          @click="deleteEvent(item)"
        />
      </template>
    </v-data-table>

    <EditEventDataDialog
      v-model="dialog"
      :event-data="editedItem"
      :is-new="isNew"
      @save="saveEvent"
    />

    <v-row class="mt-2">
      <v-col cols="12">
        <v-btn text="Update Card List" color="yellow" @click="updateCardList" />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { ref as dbRef, update, get, set, remove } from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import type { EventItem } from '@/types/event';
import EditEventDataDialog from '@/components/modal/EditEventDataDialog.vue';

const store = useStateStore();

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');
const dialog = ref(false);
const isNew = ref(false);

const headers = [
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Title', key: 'title', sortable: false },
  { title: 'SubTitle', key: 'text', sortable: false },
  { title: 'First Day', key: 'firstDay' },
  { title: 'Last Day', key: 'lastDay' },
  { title: 'Edit', key: 'edit', sortable: false },
];

const formatDateArray = (dateArr: number[] | undefined) => {
  if (!dateArr || !Array.isArray(dateArr)) return '';
  const [year, month, day, hour, minute] = dateArr;
  return `${year}/${String(month).padStart(2, '0')}/${String(day).padStart(
    2,
    '0',
  )} ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
};

const events = ref<Record<string, EventItem>>({});

const fetchEvents = async () => {
  const db = store.isDev ? rtdbDev : rtdb;
  const snapshot = await get(dbRef(db, 'eventInformation'));
  if (snapshot.exists()) {
    events.value = snapshot.val();
  } else {
    events.value = {};
  }
};

onMounted(fetchEvents);
watch(() => store.isDev, fetchEvents);

const items = computed(() => {
  return Object.entries(events.value).map(
    ([key, value]: [string, EventItem]) => ({
      id: key,
      ...value,
    }),
  );
});

/** 後で消す */
const updateCardList = async () => {
  const db = store.isDev ? rtdbDev : rtdb;
  const cardsRef = dbRef(db, 'cards');

  try {
    const snapshot = await get(cardsRef);

    if (snapshot.exists()) {
      const cardsData = snapshot.val();

      const deleteKey = (obj: any, keyToDelete: string) => {
        for (const key in obj) {
          if (key === keyToDelete) {
            delete obj[key];
          } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            deleteKey(obj[key], keyToDelete);
          }
        }
      };

      deleteKey(cardsData, 'fluctuationStatus');

      await set(cardsRef, cardsData);
      snackbarMessage.value = 'Updated Card List (removed fluctuationStatus)';
      snackbarColor.value = 'success';
      snackbar.value = true;
    }
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error updating card list';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

const editedItem = ref<EventItem | null>(null);

const openEditDialog = (mode: 'edit' | 'copy', item: EventItem) => {
  const newItem = JSON.parse(JSON.stringify(item));

  if (mode === 'copy') {
    newItem.id = '';
  }

  editedItem.value = newItem;
  isNew.value = mode !== 'edit';
  dialog.value = true;
};

const openCreateDialog = () => {
  editedItem.value = {
    id: '',
    title: '',
    text: '',
    type: 'liveGP',
    firstDay: [],
    lastDay: [],
    link: '',
    imageUrl: '',
  };
  isNew.value = true;
  dialog.value = true;
};

const deleteEvent = async (item: EventItem) => {
  if (!confirm(`Are you sure you want to delete "${item.title}"?`)) {
    return;
  }

  const db = store.isDev ? rtdbDev : rtdb;

  try {
    await remove(dbRef(db, `eventInformation/${item.id}`));
    snackbarMessage.value = 'Deleted successfully';
    snackbarColor.value = 'success';
    snackbar.value = true;
    await fetchEvents();
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error deleting event';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

const saveEvent = async ({
  event,
  file,
}: {
  event: EventItem;
  file: File | null;
}) => {
  if (!event.id) {
    snackbarMessage.value = 'ID is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const db = store.isDev ? rtdbDev : rtdb;
  const { id, ...rest } = event;

  try {
    snackbarMessage.value = 'Uploading Now...';
    snackbarColor.value = 'yellow';
    snackbar.value = true;

    if (file) {
      const storage = getStorage(rtdb.app);
      const fileRef = storageRef(storage, `event/${file.name}`);
      const snapshot = await uploadBytes(fileRef, file);
      const url = await getDownloadURL(snapshot.ref);
      rest.imageUrl = url;
    }

    await update(dbRef(db, `eventInformation/${id}`), rest);
    snackbarMessage.value = 'Saved successfully';
    snackbarColor.value = 'success';
    dialog.value = false;
    await fetchEvents();
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error saving event';
    snackbarColor.value = 'error';
  }
};
</script>
