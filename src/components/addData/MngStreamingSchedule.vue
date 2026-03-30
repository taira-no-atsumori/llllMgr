<template>
  <v-container fluid class="pa-0">
    <div class="d-flex align-center mb-3">
      <v-spacer />
      <v-select
        v-model="selectedFilter"
        :items="filterOptions"
        density="compact"
        hide-details
        class="mr-3"
      />
      <v-btn
        text="New Schedule"
        prepend-icon="mdi-plus"
        color="primary"
        @click="openDialog(null)"
      />
    </div>

    <v-data-table
      :headers="headers"
      :items="filteredSchedules"
      :loading="loading"
      class="elevation-1"
      item-value="id"
    >
      <template #[`item.startDate`]="{ item }">
        {{
          !item.startDate
            ? ''
            : store.formatDate(new Date(item.startDate), 'ja')
        }}
      </template>
      <template #[`item.endDate`]="{ item }">
        {{
          !item.endDate ? '' : store.formatDate(new Date(item.endDate), 'ja')
        }}
      </template>
      <template #[`item.type`]="{ item }">
        {{ STREAM_LABEL_CONST[item.type] }}
      </template>
      <template #[`item.member`]="{ item }">
        <v-avatar
          v-for="m in item.member"
          :key="m"
          :image="imageStore.getImagePath('icons/member', `icon_SD_${m}`)"
          size="30"
          class="mr-1"
        />
      </template>
      <template #[`item.actions`]="{ item }">
        <v-icon icon="mdi-pencil" class="mr-2" @click="openDialog(item)" />
        <v-icon icon="mdi-delete" @click="deleteItem(item)" />
      </template>
    </v-data-table>

    <v-dialog v-model="dialog" max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="editedItem.id"
                label="ID"
                :readonly="!isNew"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="inputDate"
                label="Start Date"
                type="date"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="4">
              <v-select
                v-model="inputTime"
                label="Time"
                :items="timeOptions"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="4">
              <v-text-field
                v-model="editedItem.endDate"
                label="End Date"
                type="datetime-local"
                variant="outlined"
                density="compact"
                hide-details
                disabled
              />
            </v-col>
            <v-col cols="12">
              <v-select
                v-model="editedItem.type"
                :items="[
                  { key: STREAM_LABEL_CONST.WM, value: 'WM' },
                  { key: STREAM_LABEL_CONST.FES, value: 'FES' },
                  { key: STREAM_LABEL_CONST.YT, value: 'YT' },
                ]"
                item-title="key"
                item-value="value"
                label="Type"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="12">
              <div class="text-subtitle-2 mb-2">Members</div>
              <v-row dense>
                <v-col
                  v-for="member in Object.keys(MEMBER_COLOR)"
                  :key="member"
                  cols="2"
                >
                  <v-checkbox
                    v-model="editedItem.member"
                    :value="member"
                    color="pink"
                    density="compact"
                    hide-details
                  >
                    <template #label>
                      <v-avatar
                        :image="
                          imageStore.getImagePath(
                            'icons/member',
                            `icon_SD_${member}`,
                          )
                        "
                        size="40"
                        class="mr-2"
                      />
                    </template>
                  </v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn text="Cancel" color="error" @click="closeDialog" />
          <v-btn
            text="Save"
            color="primary"
            :disabled="
              !editedItem.id ||
              !editedItem.startDate ||
              editedItem.member.length === 0
            "
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
import { ref, onMounted, computed, watch } from 'vue';

import { ref as dbRef, onValue, set, remove } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';

import { useStateStore } from '@/stores/stateStore';
import { useImageStore } from '@/stores/imageStore';

import { MEMBER_COLOR } from '@/constants/colorConst';
import { RTDB_PATH } from '@/constants/envConst';
import { STREAM_LABEL_CONST } from '@/constants/streamLabelConst';

interface ScheduleItem {
  id: string;
  startDate: string;
  endDate: string;
  type: string;
  member: string[];
}

const filterOptions = ['All', 'Upcoming', 'Ended'];
const headers = [
  { title: 'Start Date', key: 'startDate', sortable: true, width: '15%' },
  { title: 'End Date', key: 'endDate', sortable: false, width: '15%' },
  { title: 'Type', key: 'type', width: '10%' },
  { title: 'Members', key: 'member', sortable: false },
  {
    title: 'Actions',
    key: 'actions',
    sortable: false,
    align: 'end',
    width: '15%',
  },
];

const store = useStateStore();
const imageStore = useImageStore();

const schedules = ref<ScheduleItem[]>([]);
const loading = ref(true);
const dialog = ref(false);
const editedItem = ref<ScheduleItem>({
  id: '',
  startDate: '',
  endDate: '',
  type: 'WM',
  member: [],
});
const isNew = ref(true);
const inputDate = ref('');
const inputTime = ref('20:30');
const selectedFilter = ref(filterOptions[1]);

/**
 * 選択されたフィルター条件に基づいてスケジュール一覧をフィルタリングします。
 *
 * - `all`: 全てのスケジュールを表示
 * - `upcoming`: 開始日時が現在時刻より後のスケジュールを表示（配信前）
 * - `ended`: 終了日時が現在時刻より前のスケジュールを表示（配信終了）
 *
 * @returns {ScheduleItem[]} フィルタリングされたスケジュールの配列
 */
const filteredSchedules = computed(() => {
  const now = new Date();

  return schedules.value.filter((item) => {
    switch (selectedFilter.value) {
      case 'Upcoming':
        return new Date(item.startDate) > now;
      case 'Ended':
        return item.endDate && new Date(item.endDate) < now;
      default:
        return true;
    }
  });
});

const timeOptions = computed(() => {
  const times = [];

  for (let i = 12; i <= 21; i++) {
    const h = String(i).padStart(2, '0');
    times.push(`${h}:00`);
    times.push(`${h}:30`);
  }

  return times;
});
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const formTitle = computed(() =>
  isNew.value ? 'New Schedule' : 'Edit Schedule',
);

const db = computed(() => (store.isDev ? rtdbDev : rtdb));

onMounted(() => {
  const schedulesRef = dbRef(db.value, RTDB_PATH.STREAM);
  onValue(schedulesRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      schedules.value = Object.keys(data)
        .map((key) => ({
          id: key,
          ...data[key],
        }))
        .sort(
          (a, b) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        );
    } else {
      schedules.value = [];
    }

    loading.value = false;
  });
});

const openDialog = (item: ScheduleItem | null) => {
  if (item) {
    isNew.value = false;
    editedItem.value = JSON.parse(JSON.stringify(item));
    const [d, t] = editedItem.value.startDate.split('T');
    inputDate.value = d;
    inputTime.value = t;
  } else {
    isNew.value = true;
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateString = `${year}-${month}-${day}`;

    inputDate.value = dateString;
    inputTime.value = '20:30';
    editedItem.value = {
      id: `wm_${Date.now()}`,
      startDate: `${dateString}T20:30`,
      endDate: '',
      type: 'WM',
      member: [],
    };
  }
  dialog.value = true;
};

const closeDialog = () => {
  dialog.value = false;
};

const getErrorMessage = (err: unknown): string => {
  return err instanceof Error ? err.message : 'Unknown error occurred';
};

const showSnackbar = (
  message: string,
  color: 'success' | 'error' = 'success',
) => {
  snackbarMessage.value = message;
  snackbarColor.value = color;
  snackbar.value = true;
};

const saveItem = async () => {
  const itemToSave = {
    startDate: editedItem.value.startDate,
    endDate: editedItem.value.endDate || '',
    type: editedItem.value.type,
    member: editedItem.value.member || [],
  };

  try {
    await set(
      dbRef(db.value, `${RTDB_PATH.STREAM}/${editedItem.value.id}`),
      itemToSave,
    );
    showSnackbar('Uploaded Success!', 'success');
    closeDialog();
  } catch (err: unknown) {
    console.error('Error saving schedule:', err);
    const errorMessage = getErrorMessage(err);
    showSnackbar(`Upload Failed…: ${errorMessage}`, 'error');
  }
};

const deleteItem = async (item: ScheduleItem) => {
  if (
    confirm(
      `Are you sure you want to delete the schedule for ${item.startDate}?`,
    )
  ) {
    try {
      await remove(dbRef(db.value, `${RTDB_PATH.STREAM}/${item.id}`));
      showSnackbar('削除しました', 'success');
    } catch (error) {
      console.error('Error deleting schedule:', error);
      const errorMessage = getErrorMessage(error);
      showSnackbar(`削除に失敗しました: ${errorMessage}`, 'error');
    }
  }
};

watch(
  [() => editedItem.value.startDate, () => editedItem.value.type],
  ([newDate, newType]) => {
    if (!newDate) {
      editedItem.value.endDate = '';
      return;
    }
    const startDate = new Date(newDate);

    if (isNew.value) {
      const y = startDate.getFullYear();
      const m = String(startDate.getMonth() + 1).padStart(2, '0');
      const d = String(startDate.getDate()).padStart(2, '0');
      const h = String(startDate.getHours()).padStart(2, '0');
      const min = String(startDate.getMinutes()).padStart(2, '0');
      editedItem.value.id = `${newType}_${y}${m}${d}${h}${min}`;
    }

    const endDate = new Date(startDate.getTime());

    if (newType === 'WM') {
      endDate.setMinutes(endDate.getMinutes() + 30);
    } else {
      endDate.setHours(endDate.getHours() + 1);
    }

    const year = endDate.getFullYear();
    const month = String(endDate.getMonth() + 1).padStart(2, '0');
    const day = String(endDate.getDate()).padStart(2, '0');
    const hours = String(endDate.getHours()).padStart(2, '0');
    const minutes = String(endDate.getMinutes()).padStart(2, '0');

    editedItem.value.endDate = `${year}-${month}-${day}T${hours}:${minutes}`;
  },
);

watch([inputDate, inputTime], ([newDate, newTime]) => {
  editedItem.value.startDate =
    newDate && newTime ? `${newDate}T${newTime}` : '';
});
</script>
