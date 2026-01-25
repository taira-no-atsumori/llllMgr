<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="eventData.title"
              label="Event Title"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>

          <v-col cols="6">
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

          <v-col cols="4">
            <v-text-field
              v-model="eventData.firstDay"
              label="First Day"
              type="datetime-local"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="eventData.lastDay"
              label="End Day"
              type="datetime-local"
              variant="outlined"
              density="compact"
              hide-details="auto"
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

          <v-col cols="12">
            <v-text-field
              v-model="eventData.imageUrl"
              label="Image URL"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-btn
          :text="`Upload Events to ${store.isDev ? 'Dev' : 'Prod'}`"
          color="orange"
          @click="uploadEvents"
        />
        <v-btn text="Update Card List" color="yellow" @click="updateCardList" />

        <v-textarea
          label="JSON Output"
          :model-value="jsonOutput"
          readonly
          auto-grow
          variant="outlined"
          class="mt-4"
        />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ref as dbRef, update, get, set } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import { EVENT_LIST } from '@/constants/eventList.ts';

const store = useStateStore();

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

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
  title: '',
  text: '',
  type: 'liveGP',
  firstDay: '',
  lastDay: '',
  link: '',
  imageUrl: '',
});

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
