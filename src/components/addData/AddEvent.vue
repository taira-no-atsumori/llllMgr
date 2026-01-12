<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row no-gutters>
          <v-col cols="12" class="mb-3">
            <v-text-field
              v-model="eventData.title"
              label="Event Title"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row no-gutters class="mb-3">
          <v-col cols="6" class="pr-2">
            <v-select
              v-model="eventData.type"
              label="Event Type"
              :items="eventTypes"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6" class="pl-2">
            <v-text-field
              v-model="eventData.id"
              label="Event ID"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row no-gutters class="mb-3">
          <v-col cols="6" class="pr-2">
            <v-text-field
              v-model="eventData.startDate"
              label="Start Date"
              type="datetime-local"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6" class="pl-2">
            <v-text-field
              v-model="eventData.endDate"
              label="End Date"
              type="datetime-local"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-divider class="mb-4" />

        <v-row no-gutters>
          <v-col cols="12">
            <v-textarea
              v-model="eventData.description"
              label="Description"
              variant="outlined"
              rows="5"
            />
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-btn
          text="Copy JSON"
          color="primary"
          prepend-icon="mdi-content-copy"
          @click="copyToClipboard"
        />
        <v-btn text="change" color="yellow" disabled @click="renameAllImages" />
        <v-btn text="Update URLs" color="green" @click="updateImageUrls" />

        <v-textarea
          label="JSON Output"
          :model-value="jsonOutput"
          readonly
          auto-grow
          rows="15"
          variant="outlined"
          class="mt-4"
        />
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" color="success" :timeout="2000">
      Copied to clipboard
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  listAll,
  getDownloadURL,
} from 'firebase/storage';
import { ref as dbRef, get, update } from 'firebase/database';
import { rtdb } from '@/firebase';
import type { MusicItem } from '@/types/musicList';

const renameAllImages = async () => {
  const snapshot = await get(dbRef(rtdb, 'music'));
  const musicList = snapshot.val();
  const titleMap: Record<string, string> = {};

  if (musicList) {
    Object.entries(musicList).forEach(([key, val]: [string, MusicItem]) => {
      titleMap[val.title] = key;
    });
  }

  const storage = getStorage(rtdb.app);
  // ローカルの画像を取得 (Viteのimport.meta.globを使用)
  const images = import.meta.glob(
    '@/assets/images/cdJacket/*.{webp,png,jpg,jpeg}',
    {
      eager: true,
      import: 'default',
    }
  );

  try {
    for (const path in images) {
      const imageUrl = images[path] as string;
      const fileName = path.split('/').pop() || '';
      const lastDotIndex = fileName.lastIndexOf('.');
      const title =
        lastDotIndex !== -1 ? fileName.substring(0, lastDotIndex) : fileName;

      if (!titleMap[title]) {
        console.log(`Skipping: ${fileName} (No matching ID found)`);
        continue;
      }

      const newName = `${titleMap[title]}.webp`;

      console.log(`Processing: ${fileName} -> ${newName}`);

      // ローカルの画像をfetchしてBlobとして取得
      const response = await fetch(imageUrl);
      const blob = await response.blob();

      // 新しい名前でアップロード
      const newRef = storageRef(storage, `cdJacket/${newName}`);
      await uploadBytes(newRef, blob);
    }

    console.log('All files uploaded successfully.');
    snackbar.value = true;
  } catch (error) {
    console.error('Error uploading files:', error);
  }
};

const updateImageUrls = async () => {
  const snapshot = await get(dbRef(rtdb, 'music'));
  const musicList = snapshot.val();
  const titleMap: Record<string, string> = {};

  if (musicList) {
    Object.entries(musicList).forEach(([key, val]: [string, MusicItem]) => {
      titleMap[val.title] = key;
    });
  }

  const storage = getStorage(rtdb.app);
  const listRef = storageRef(storage, 'cdJacket');
  const updates: Record<string, string> = {};

  try {
    const res = await listAll(listRef);

    await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const lastDotIndex = itemRef.name.lastIndexOf('.');
        const title =
          lastDotIndex !== -1
            ? itemRef.name.substring(0, lastDotIndex)
            : itemRef.name;
        if (titleMap[title]) {
          updates[`music/${titleMap[title]}/imageURL`] = url;
        }
      })
    );

    await update(dbRef(rtdb), updates);
    console.log('All image URLs updated successfully.');
    snackbar.value = true;
  } catch (error) {
    console.error('Error updating image URLs:', error);
  }
};

const snackbar = ref(false);

const eventTypes = [
  'Story Event',
  'Raid Event',
  'Item Collection',
  'Score Match',
  'Challenge',
];

const eventData = ref({
  id: '',
  title: '',
  type: 'Story Event',
  startDate: '',
  endDate: '',
  description: '',
});

const jsonOutput = computed(() => {
  return JSON.stringify(eventData.value, null, 2);
});

const copyToClipboard = () => {
  navigator.clipboard.writeText(jsonOutput.value);
  snackbar.value = true;
};
</script>
