<template>
  <v-container fluid class="pa-0">
    <div v-if="uploadStore.diffList.length === 0" class="mb-4 text-grey">
      Dev環境と本番環境のデータに差分はありません。
    </div>

    <div v-else>
      <v-btn
        text="Deploy to Prod"
        color="primary"
        prepend-icon="mdi-cloud-upload"
        :loading="loading"
        :disabled="checkedItems.length === 0"
        @click="deployData"
      />

      <v-row class="mt-0">
        <v-col cols="4">
          <v-list-subheader>
            Diff: {{ uploadStore.diffList.length }}
          </v-list-subheader>

          <v-list variant="flat" class="mb-4">
            <v-list-item
              v-for="item in uploadStore.diffList"
              :key="item.key"
              :class="
                item.status === 'new'
                  ? 'bg-blue-lighten-4'
                  : 'bg-yellow-lighten-4'
              "
              @click="showDiff(item)"
            >
              <template #prepend>
                <v-checkbox-btn
                  v-model="checkedItems"
                  :value="item.key"
                  color="pink"
                  @click.stop
                />
              </template>

              <v-list-item-title>
                <span class="text-caption mr-2">[{{ item.type }}]</span>
                {{ item.data.title || item.data.cardName || item.key }}
                <span class="text-caption">({{ item.status }})</span>
              </v-list-item-title>

              <template #append>
                <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  density="compact"
                  @click.stop="handleEdit(item)"
                />
              </template>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="4">
          <v-textarea
            v-model="beforeData"
            label="Prod (Before)"
            auto-grow
            readonly
            variant="solo"
          />
        </v-col>
        <v-col cols="4">
          <v-textarea
            v-model="afterData"
            label="Dev (After)"
            auto-grow
            readonly
            variant="solo"
          />
        </v-col>
      </v-row>
    </div>

    <v-dialog v-model="dialog" max-width="600">
      <v-card>
        <v-card-title class="text-h5 bg-error">Upload Failed</v-card-title>
        <v-card-text class="pt-4">
          <p>
            アップロードに失敗しました。コンソールで詳細を確認してください。
          </p>
          <p class="mt-4 font-weight-bold">エラーメッセージ:</p>
          <v-textarea
            :model-value="dialogText"
            readonly
            variant="outlined"
            rows="5"
            auto-grow
            class="mt-2"
          />
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text="Close" @click="dialog = false" />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      Upload Completed!
      <template #actions>
        <v-btn variant="text" text="Close" @click="snackbar = false" />
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ref as dbRef, update } from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { rtdb } from '@/firebase';
import { useUploadDataStore } from '@/stores/uploadDataStore';
import type { CardDataByMember } from '@/types/cardList';
import type { MusicItem } from '@/types/musicList';

const uploadStore = useUploadDataStore();
const loading = ref(false);
const beforeData = ref('');
const afterData = ref('');
const checkedItems = ref<string[]>([]);
const snackbar = ref(false);
const dialog = ref(false);
const dialogText = ref('');

const emit = defineEmits(['edit']);
const handleEdit = (item: {
  type: 'card' | 'music';
  key: string;
  data: CardDataByMember | MusicItem;
  status: 'new' | 'update';
  path: string;
}) => {
  uploadStore.setEditTarget(item.type, item.key);
  emit('edit', item.type);
};

const showDiff = (item: CardDataByMember | MusicItem) => {
  afterData.value = JSON.stringify(item.data, null, 2);

  if (item.status === 'update') {
    let prodItemData = null;
    if (item.type === 'music') {
      prodItemData = uploadStore.prodData.music[item.key];
    } else if (item.type === 'card') {
      const prodCards = uploadStore.flattenCards(uploadStore.prodData.card);
      prodItemData = prodCards[item.key]?.data;
    }
    beforeData.value = JSON.stringify(prodItemData, null, 2);
  } else {
    beforeData.value = 'New Data';
  }
};

const deployData = async () => {
  if (checkedItems.value.length === 0) {
    return;
  }

  loading.value = true;
  const storage = getStorage(rtdb.app);

  try {
    const updates: Record<string, CardDataByMember | MusicItem> = {};

    for (const key of checkedItems.value) {
      const item = uploadStore.diffList.find((i) => i.key === key);

      if (!item) {
        continue;
      }

      const data = JSON.parse(JSON.stringify(item.data));

      let prodItemData = null;

      if (item.type === 'music') {
        prodItemData = uploadStore.prodData.music[item.key];
      } else if (item.type === 'card') {
        const prodCards = uploadStore.flattenCards(uploadStore.prodData.card);
        prodItemData = prodCards[item.key]?.data;
      }

      // 画像URLが含まれている場合、本番環境へコピーする
      if (
        data.imageURL &&
        data.imageURL.startsWith('http') &&
        (!prodItemData || !prodItemData.imageURL)
      ) {
        try {
          // 1. Dev環境の画像を本番環境にアップするために取得
          const response = await fetch(data.imageURL);
          const blob = await response.blob();

          // 拡張子をURLから取得（デフォルトはwebp）
          let ext = 'webp';
          try {
            const urlObj = new URL(data.imageURL);
            const path = decodeURIComponent(urlObj.pathname);
            const match = path.match(/\.([a-zA-Z0-9]+)$/);

            if (match) {
              ext = match[1];
            }
          } catch (_) {
            // URL解析失敗時はデフォルトを使用
          }

          const fileName = `${key}.${ext}`;
          const folder =
            item.type === 'card'
              ? 'cardIllust'
              : item.type === 'music'
              ? 'cdJacket'
              : 'eventInformation';
          const fileRef = storageRef(storage, `${folder}/${fileName}`);

          const snapshot = await uploadBytes(fileRef, blob);
          // 2. 1でアップした画像のURLを取得
          const url = await getDownloadURL(snapshot.ref);
          // 3. 本番環境にアップする用のデータのimageURLを2に書き換え
          data.imageURL = url;
        } catch (e) {
          console.error(`Failed to copy image for ${key}:`, e);
          // 画像コピーに失敗してもデータ更新は続行するか、ここで中断するか
          // ここではログを出して続行
        }
      }

      updates[item.path] = data;
    }

    await update(dbRef(rtdb), updates);

    snackbar.value = true;
    checkedItems.value = [];
    beforeData.value = '';
    afterData.value = '';
  } catch (error) {
    console.error('Upload failed:', error);
    dialogText.value = String(error);
    dialog.value = true;
  } finally {
    loading.value = false;
  }
};
</script>
