<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <h2>Info Management (MD Files)</h2>
      </v-col>

      <v-col cols="12">
        <v-file-input
          v-model="fileInput"
          label="Select MD File"
          accept=".md"
          show-size
          prepend-icon="mdi-file-document-outline"
          variant="outlined"
          density="compact"
        >
          <template #append-inner>
            <v-btn
              color="primary"
              size="small"
              class="ml-2"
              :disabled="!fileInput || fileInput.length === 0"
              @click="uploadFile"
            >
              Upload
            </v-btn>
          </template>
        </v-file-input>
      </v-col>

      <v-col cols="12">
        <v-card>
          <v-card-title>File List (storage/info)</v-card-title>
          <v-table density="compact">
            <thead>
              <tr>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="file in fileList" :key="file.name">
                <td>{{ file.name }}</td>
                <td>
                  <v-btn
                    icon="mdi-eye"
                    size="small"
                    variant="text"
                    color="info"
                    @click="viewFile(file)"
                  />
                  <v-btn
                    icon="mdi-delete"
                    size="small"
                    variant="text"
                    color="error"
                    @click="confirmDelete(file)"
                  />
                </td>
              </tr>
              <tr v-if="fileList.length === 0">
                <td colspan="2" class="text-center">No files found.</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
    </v-row>

    <!-- Preview Dialog -->
    <v-dialog v-model="previewDialog" max-width="800px" scrollable>
      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <span>{{ previewTitle }}</span>
          <v-btn
            icon="mdi-close"
            variant="text"
            @click="previewDialog = false"
          />
        </v-card-title>
        <v-card-text style="max-height: 600px; overflow-y: auto">
          <pre style="white-space: pre-wrap">{{ previewContent }}</pre>
        </v-card-text>
      </v-card>
    </v-dialog>

    <!-- Snackbar -->
    <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="3000">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  listAll,
  getDownloadURL,
  deleteObject,
  type StorageReference,
} from 'firebase/storage';
import { rtdb } from '@/firebase';

const fileInput = ref<File[]>([]);
const fileList = ref<{ name: string; ref: StorageReference }[]>([]);
const previewDialog = ref(false);
const previewTitle = ref('');
const previewContent = ref('');
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const storage = getStorage(rtdb.app);
const listRef = storageRef(storage, 'info');

const fetchFileList = async () => {
  try {
    const res = await listAll(listRef);
    fileList.value = res.items.map((itemRef) => ({
      name: itemRef.name,
      ref: itemRef,
    }));
  } catch (error) {
    console.error(error);
    showSnackbar('Failed to fetch file list', 'error');
  }
};

const uploadFile = async () => {
  if (!fileInput.value || fileInput.value.length === 0) return;

  const file = fileInput.value[0];
  const fileRef = storageRef(storage, `info/${file.name}`);

  try {
    await uploadBytes(fileRef, file);
    showSnackbar('Upload successful', 'success');
    fileInput.value = [];
    await fetchFileList();
  } catch (error) {
    console.error(error);
    showSnackbar('Upload failed', 'error');
  }
};

const viewFile = async (file: { name: string; ref: StorageReference }) => {
  try {
    const url = await getDownloadURL(file.ref);
    const response = await fetch(url);
    const text = await response.text();
    previewTitle.value = file.name;
    previewContent.value = text;
    previewDialog.value = true;
  } catch (error) {
    console.error(error);
    showSnackbar('Failed to load file content', 'error');
  }
};

const confirmDelete = async (file: { name: string; ref: StorageReference }) => {
  if (!confirm(`Are you sure you want to delete "${file.name}"?`)) return;

  try {
    await deleteObject(file.ref);
    showSnackbar('Deleted successfully', 'success');
    await fetchFileList();
  } catch (error) {
    console.error(error);
    showSnackbar('Delete failed', 'error');
  }
};

const showSnackbar = (message: string, color: string) => {
  snackbarMessage.value = message;
  snackbarColor.value = color;
  snackbar.value = true;
};

onMounted(() => {
  fetchFileList();
});
</script>
