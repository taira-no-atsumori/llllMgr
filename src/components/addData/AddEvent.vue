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

    <v-dialog v-model="dialog" max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ `${isNew ? 'New' : 'Edit'} Event` }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="8">
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="eventData.id"
                      label="ID"
                      :readonly="!isNew"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="12">
                    <v-text-field
                      v-model="eventData.title"
                      label="Event Title"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>

                  <v-col cols="8">
                    <v-text-field
                      v-model="eventData.text"
                      label="Text"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>

                  <v-col cols="4">
                    <v-select
                      v-model="eventData.type"
                      label="Event Type"
                      :items="eventTypes"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>

                  <v-col cols="6">
                    <v-text-field
                      v-model="eventData.firstDay"
                      label="First Day"
                      type="datetime-local"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-text-field
                      v-model="eventData.lastDay"
                      label="End Day"
                      type="datetime-local"
                      variant="outlined"
                      density="compact"
                      hide-details="auto"
                    />
                  </v-col>
                </v-row>
              </v-col>

              <v-col cols="4" align="center">
                <v-img
                  :src="previewImageUrl || eventData.imageUrl || noImage"
                  class="mb-2 cursor-pointer"
                  @click="triggerFileInput"
                />
                <v-btn
                  :disabled="!selectedFile"
                  color="error"
                  prepend-icon="mdi-close"
                  text="Deselect"
                  @click="cancelUpload"
                />
                <input
                  ref="fileInputRef"
                  type="file"
                  accept="image/webp"
                  style="display: none"
                  @change="onNativeFileChange"
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="eventData.link"
                  label="Link"
                  variant="outlined"
                  density="compact"
                  hide-details="auto"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn
            text="Cancel"
            color="red"
            variant="text"
            @click="closeDialog"
          />
          <v-btn
            text="Save"
            color="primary"
            variant="text"
            @click="saveEvent"
          />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row class="mt-2">
      <v-col cols="12">
        <v-btn
          :text="`Upload Events to ${store.isDev ? 'Dev' : 'Prod'}`"
          color="orange"
          class="mr-2"
          @click="uploadEvents"
        />
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
import { EVENT_LIST } from '@/constants/eventList';
import type { EventItem } from '@/types/event';
import noImage from '@/assets/images/cardIllust/NO IMAGE.webp';

const store = useStateStore();

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');
const dialog = ref(false);
const isNew = ref(false);
const previewImageUrl = ref<string | null>(null);
const fileInputRef = ref<HTMLInputElement | null>(null);
const selectedFile = ref<File | null>(null);

const headers = [
  { title: 'ID', key: 'id', sortable: false },
  { title: 'Title', key: 'title', sortable: false },
  { title: 'SubTitle', key: 'text', sortable: false },
  { title: 'First Day', key: 'firstDay' },
  { title: 'Last Day', key: 'lastDay' },
  { title: 'Edit', key: 'edit', sortable: false },
];

const handleFileSelect = (file: File | File[]) => {
  const targetFile = Array.isArray(file) ? file[0] : file;
  if (!targetFile) {
    cancelUpload();
    return;
  }

  selectedFile.value = targetFile;
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImageUrl.value = e.target?.result as string;
  };
  reader.readAsDataURL(targetFile);
};

const cancelUpload = () => {
  selectedFile.value = null;
  previewImageUrl.value = null;
  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
};

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const onNativeFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    handleFileSelect(target.files[0]);
  }
};

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

const uploadEvents = async () => {
  try {
    await update(
      dbRef(store.isDev ? rtdbDev : rtdb, 'eventInformation'),
      EVENT_LIST,
    );
    snackbarMessage.value = `Uploaded Events to ${store.isDev ? 'Dev' : 'Prod'}`;
    snackbarColor.value = 'success';
    snackbar.value = true;
  } catch (error) {
    alert('Error uploading events:', error);
    snackbarMessage.value = 'Error uploading events';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

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

const eventTypes = ['liveGP', 'live', 'movie', 'other'];

const eventData = ref({
  id: '',
  title: '',
  text: '',
  type: 'liveGP',
  firstDay: '',
  lastDay: '',
  link: '',
  imageUrl: '',
});

const openEditDialog = (mode: 'edit' | 'copy', item: EventItem) => {
  eventData.value.id = mode === 'edit' ? item.id : '';
  isNew.value = mode !== 'edit';
  eventData.value.title = item.title || '';
  eventData.value.text = item.text || '';
  eventData.value.type = item.type || 'liveGP';
  eventData.value.link = item.link || '';
  eventData.value.imageUrl = item.imageUrl || '';
  selectedFile.value = null;
  previewImageUrl.value = null;

  const toDatetimeLocal = (arr: number[]) => {
    if (!Array.isArray(arr) || arr.length < 5) return '';
    const [y, m, d, h, min] = arr;
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}T${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}`;
  };

  eventData.value.firstDay = toDatetimeLocal(item.firstDay);
  eventData.value.lastDay = toDatetimeLocal(item.lastDay);
  dialog.value = true;
};

const openCreateDialog = () => {
  eventData.value = {
    id: '',
    title: '',
    text: '',
    type: 'liveGP',
    firstDay: '',
    lastDay: '',
    link: '',
    imageUrl: '',
  };
  selectedFile.value = null;
  previewImageUrl.value = null;
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

const closeDialog = () => {
  dialog.value = false;
};

const saveEvent = async () => {
  if (!eventData.value.id) {
    snackbarMessage.value = 'ID is required';
    snackbarColor.value = 'error';
    snackbar.value = true;
    return;
  }

  const db = store.isDev ? rtdbDev : rtdb;
  const updateData = JSON.parse(jsonOutput.value);
  const { id, ...rest } = updateData;

  try {
    if (selectedFile.value) {
      const storage = getStorage(rtdb.app);
      const fileRef = storageRef(storage, `event/${selectedFile.value.name}`);
      const snapshot = await uploadBytes(fileRef, selectedFile.value);
      const url = await getDownloadURL(snapshot.ref);
      rest.imageUrl = url;
    }

    await update(dbRef(db, `eventInformation/${id}`), rest);
    snackbarMessage.value = 'Saved successfully';
    snackbarColor.value = 'success';
    snackbar.value = true;
    closeDialog();
    await fetchEvents();
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error saving event';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

const jsonOutput = computed(() => {
  const data = { ...eventData.value };
  const formatDate = (dateStr: string | number[]) => {
    if (Array.isArray(dateStr)) {
      return dateStr;
    }

    if (!dateStr) {
      return [];
    }

    const date = new Date(dateStr);

    return [
      date.getFullYear(),
      date.getMonth() + 1,
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
    ];
  };
  const output = {
    ...data,
    firstDay: formatDate(data.firstDay),
    lastDay: formatDate(data.lastDay),
  };

  return JSON.stringify(output, null, 2);
});
</script>
