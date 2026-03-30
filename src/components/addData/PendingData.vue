<template>
  <v-container fluid class="pa-0">
    <p v-if="uploadStore.diffList.length === 0" class="text-grey">
      Dev環境と本番環境のデータに差分はありません。
    </p>

    <v-row v-else>
      <v-col cols="12">
        <v-btn
          text="Deploy to Prod"
          color="primary"
          prepend-icon="mdi-cloud-upload"
          :loading="loading"
          :disabled="checkedItems.length === 0"
          class="mr-3"
          @click="deployData"
        />
        Diff: {{ uploadStore.diffList.length }}
      </v-col>

      <v-col cols="3">
        <v-list variant="flat" class="mb-4" density="compact">
          <template
            v-for="(item, index) in uploadStore.diffList"
            :key="`${item.type}-${item.key}`"
          >
            <v-list-subheader
              v-if="
                index === 0 ||
                item.type !== uploadStore.diffList[index - 1].type
              "
              :title="item.type"
            />

            <v-list-item
              :class="`bg-${item.status === 'new' ? 'blue' : 'yellow'}-lighten-4`"
              :active="selectedItemKey === item.key"
              active-color="primary"
              @click="showDiff(item)"
            >
              <template #prepend>
                <v-checkbox-btn
                  v-model="checkedItems"
                  :value="item.key"
                  color="primary"
                  density="compact"
                  @click.stop
                />
              </template>

              <v-list-item-title>
                {{ item.data.title || item.data.cardName || item.key }}
              </v-list-item-title>

              <template #append>
                <v-btn
                  icon="mdi-undo-variant"
                  variant="text"
                  density="compact"
                  @click.stop="revertData(item)"
                />
                <v-btn
                  icon="mdi-pencil"
                  variant="text"
                  density="compact"
                  @click.stop="handleEdit(item)"
                />
              </template>
            </v-list-item>
          </template>
        </v-list>
      </v-col>

      <v-col cols="9">
        <v-row>
          <v-col cols="6" class="text-subtitle-2 font-weight-bold mb-1">
            Prod (Before)
          </v-col>
          <v-col cols="6" class="text-subtitle-2 font-weight-bold mb-1">
            Dev (After)
          </v-col>
        </v-row>
        <div class="diff-container border rounded">
          <div v-for="(line, i) in diffLines" :key="i" class="d-flex diff-row">
            <div class="diff-pane left-pane">
              <div v-if="line.left" class="code-line" :class="line.left.type">
                <span class="line-number text-grey">{{
                  line.left.lineNumber
                }}</span>
                <span class="line-content">{{ line.left.text }}</span>
              </div>
              <div v-else class="code-line empty"></div>
            </div>
            <div class="diff-pane right-pane border-s">
              <div v-if="line.right" class="code-line" :class="line.right.type">
                <span class="line-number text-grey">{{
                  line.right.lineNumber
                }}</span>
                <span class="line-content">{{ line.right.text }}</span>
              </div>
              <div v-else class="code-line empty"></div>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>

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
          <v-btn text="Close" color="primary" @click="dialog = false" />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" color="success">
      {{ snackbarMessage }}
      <template #actions>
        <v-btn text="Close" variant="text" @click="snackbar = false" />
      </template>
    </v-snackbar>

    <EditSkillDetailDialog
      v-model="showSkillDetailDialog"
      :is-new="false"
      :item="editingSkillDetail"
      :existing-items="[]"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { ref as dbRef, update, remove } from 'firebase/database';
// import {
//   getStorage,
//   ref as storageRef,
//   uploadBytes,
//   getDownloadURL,
// } from 'firebase/storage';
import { rtdb, rtdbDev } from '@/firebase';

import { useUploadDataStore } from '@/stores/uploadDataStore';

import { RTDB_PATH } from '@/constants/envConst';
import { MESSAGES } from '@/constants/messageConst';

import type { CardDataType } from '@/types/cardList';
import type { MusicItemData } from '@/types/musicList';
import type { StreamInfoDBData } from '@/types/stream';
import type { EventItem } from '@/types/event';
import type { SkillDetailType } from '@/types/skill';

import EditSkillDetailDialog from '@/components/modal/EditSkillDetailDialog.vue';

const uploadStore = useUploadDataStore();

const loading = ref(false);
const checkedItems = ref<string[]>([]);
const snackbar = ref(false);
const snackbarMessage = ref('');
const dialog = ref(false);
const dialogText = ref('');
const selectedItemKey = ref('');
const showSkillDetailDialog = ref(false);
const editingSkillDetail = ref<SkillDetailType>({
  ID: '',
  skillDetailName: '',
  colorCode: '',
  description: '',
  skillTypeKey: '',
});

interface DiffLine {
  left?: { text: string; type: string; lineNumber: number };
  right?: { text: string; type: string; lineNumber: number };
}

const diffLines = ref<DiffLine[]>([]);

const emit = defineEmits(['edit']);

type ItemDataType =
  | CardDataType
  | MusicItemData
  | StreamInfoDBData
  | EventItem
  | SkillDetailType;

type ItemType = {
  type: 'card' | 'music' | 'stream' | 'skillDetails' | 'event';
  key: string;
  data: ItemDataType;
  status: 'new' | 'update';
  path: string;
};

const handleEdit = (item: ItemType) => {
  if (item.type === 'skillDetails') {
    editingSkillDetail.value = { ID: item.key, ...item.data };
    showSkillDetailDialog.value = true;
    return;
  }

  uploadStore.setEditTarget(item.type, item.key);
  emit('edit', item.type);
};

/** 簡易LCSアルゴリズムによるDiff生成 */
const computeDiff = (oldText: string, newText: string) => {
  const oldLines = oldText ? oldText.split('\n') : [];
  const newLines = newText ? newText.split('\n') : [];
  const n = oldLines.length;
  const m = newLines.length;

  // DPテーブル
  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(0),
  );

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (oldLines[i - 1] === newLines[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  const result: DiffLine[] = [];
  let i = n,
    j = m;

  // バックトラック
  const path: { type: 'common' | 'removed' | 'added'; text: string }[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldLines[i - 1] === newLines[j - 1]) {
      path.unshift({ type: 'common', text: oldLines[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      path.unshift({ type: 'added', text: newLines[j - 1] });
      j--;
    } else if (i > 0 && (j === 0 || dp[i][j - 1] < dp[i - 1][j])) {
      path.unshift({ type: 'removed', text: oldLines[i - 1] });
      i--;
    }
  }

  let oldLineNum = 1;
  let newLineNum = 1;

  for (const p of path) {
    if (p.type === 'common') {
      result.push({
        left: { text: p.text, type: 'common', lineNumber: oldLineNum++ },
        right: { text: p.text, type: 'common', lineNumber: newLineNum++ },
      });
    } else if (p.type === 'removed') {
      result.push({
        left: { text: p.text, type: 'removed', lineNumber: oldLineNum++ },
      });
    } else if (p.type === 'added') {
      result.push({
        right: { text: p.text, type: 'added', lineNumber: newLineNum++ },
      });
    }
  }

  return result;
};

const showDiff = (item: Omit<ItemType, 'path'>) => {
  if (selectedItemKey.value === item.key) {
    selectedItemKey.value = '';
    diffLines.value = [];
    return;
  }

  selectedItemKey.value = item.key;
  const afterStr = JSON.stringify(item.data, null, 2);
  let beforeStr = '';

  if (item.status === 'update') {
    const prodItemData: ItemDataType | null = (() => {
      switch (item.type) {
        case 'card': {
          const prodCards = uploadStore.flattenCards(uploadStore.prodData.card);
          return prodCards[item.key]?.data ?? null;
        }
        case 'skillDetails': {
          return uploadStore.prodData[RTDB_PATH.SKILL_DETAIL][item.key];
        }
        case 'music':
        case 'stream':
        case 'event': {
          return uploadStore.prodData[RTDB_PATH[item.type.toUpperCase()]][
            item.key
          ];
        }
        default: {
          return null;
        }
      }
    })();

    beforeStr = prodItemData ? JSON.stringify(prodItemData, null, 2) : '';
  }

  diffLines.value = computeDiff(beforeStr, afterStr);
};

/**
 * Dev環境のデータを元に戻す（取り消す）処理
 *
 * @param item 対象のデータ項目
 * - statusが 'new' の場合: Dev環境から該当データを削除。
 * - statusが 'update' の場合: Prod環境のデータを取得し、Dev環境に上書き。
 */
const revertData = async (item: ItemType) => {
  if (!confirm('Dev環境の変更を取り消しますか？')) {
    return;
  }

  loading.value = true;
  try {
    if (item.status === 'new') {
      await remove(dbRef(rtdbDev, item.path));
    } else {
      const prodItemData: ItemDataType | null = (() => {
        switch (item.type) {
          case 'card': {
            const prodCards = uploadStore.flattenCards(
              uploadStore.prodData.card,
            );
            return prodCards[item.key]?.data ?? null;
          }
          case 'skillDetails': {
            return uploadStore.prodData[RTDB_PATH.SKILL_DETAIL][item.key];
          }
          case 'music':
          case 'stream':
          case 'event': {
            return uploadStore.prodData[RTDB_PATH[item.type.toUpperCase()]][
              item.key
            ];
          }
          default: {
            return null;
          }
        }
      })();

      if (prodItemData) {
        const updates: Record<string, ItemDataType> = {};
        updates[item.path] = prodItemData;
        await update(dbRef(rtdbDev), updates);
      }
    }

    snackbarMessage.value = MESSAGES.M005;
    snackbar.value = true;
  } catch (error) {
    console.error('Revert failed:', error);
    dialogText.value = String(error);
    dialog.value = true;
  } finally {
    loading.value = false;
  }
};

const deployData = async () => {
  if (checkedItems.value.length === 0) {
    return;
  }

  loading.value = true;
  // const storage = getStorage(rtdb.app);

  try {
    const updates: Record<string, ItemDataType> = {};

    for (const key of checkedItems.value) {
      const item = uploadStore.diffList.find((i) => i.key === key);

      if (!item) {
        continue;
      }

      const data = JSON.parse(JSON.stringify(item.data));

      // let prodItemData = null;

      // if (item.type === 'music') {
      //   prodItemData = uploadStore.prodData.music[item.key];
      // } else if (item.type === 'card') {
      //   const prodCards = uploadStore.flattenCards(uploadStore.prodData.card);
      //   prodItemData = prodCards[item.key]?.data;
      // } else if (item.type === 'stream') {
      //   prodItemData = uploadStore.prodData.stream[item.key];
      // }

      // // 画像URLが含まれている場合、本番環境へコピーする
      // if (
      //   data.imageURL &&
      //   data.imageURL.startsWith('http') &&
      //   (!prodItemData || !prodItemData.imageURL)
      // ) {
      //   try {
      //     // 1. Dev環境の画像を本番環境にアップするために取得
      //     const response = await fetch(data.imageURL);
      //     const blob = await response.blob();

      //     // 拡張子をURLから取得（デフォルトはwebp）
      //     let ext = 'webp';
      //     try {
      //       const urlObj = new URL(data.imageURL);
      //       const path = decodeURIComponent(urlObj.pathname);
      //       const match = path.match(/\.([a-zA-Z0-9]+)$/);

      //       if (match) {
      //         ext = match[1];
      //       }
      //     } catch (_) {
      //       // URL解析失敗時はデフォルトを使用
      //     }

      //     const fileName = `${key}.${ext}`;
      //     const folder =
      //       item.type === 'card'
      //         ? 'cardIllust'
      //         : item.type === 'music'
      //           ? 'cdJacket'
      //           : 'eventInformation';
      //     const fileRef = storageRef(storage, `${folder}/${fileName}`);

      //     const snapshot = await uploadBytes(fileRef, blob);
      //     // 2. 1でアップした画像のURLを取得
      //     const url = await getDownloadURL(snapshot.ref);
      //     // 3. 本番環境にアップする用のデータのimageURLを2に書き換え
      //     data.imageURL = url;
      //   } catch (e) {
      //     console.error(`Failed to copy image for ${key}:`, e);
      //     // 画像コピーに失敗してもデータ更新は続行するか、ここで中断するか
      //     // ここではログを出して続行
      //   }
      // }

      updates[item.path] = data;
    }

    await update(dbRef(rtdb), updates);

    snackbarMessage.value = MESSAGES.M004;
    snackbar.value = true;
    checkedItems.value = [];
    diffLines.value = [];
    selectedItemKey.value = '';
  } catch (error) {
    console.error('Upload failed:', error);
    dialogText.value = String(error);
    dialog.value = true;
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.diff-container {
  max-height: 80vh;
  overflow-y: auto;
  font-family: monospace;
  font-size: 12px;
  line-height: 1.5;
  background-color: rgb(var(--v-theme-surface));
  color: rgb(var(--v-theme-on-surface));
}

.diff-pane {
  width: 50%;
  min-height: 1.5em;
}

.code-line {
  white-space: pre-wrap;
  word-break: break-all;
  padding: 0 4px;
  display: flex;
}

.code-line.removed {
  background-color: rgba(var(--v-theme-error), 0.2);
}

.code-line.added {
  background-color: rgba(var(--v-theme-success), 0.2);
}

.code-line.empty {
  background-color: rgba(var(--v-theme-on-surface), 0.1);
}

.line-number {
  display: inline-block;
  width: 30px;
  text-align: right;
  margin-right: 8px;
  user-select: none;
  flex-shrink: 0;
}

.line-content {
  flex-grow: 1;
}
</style>
