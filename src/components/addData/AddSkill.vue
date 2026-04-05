<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-text-field
        v-model="search"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        clearable
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
        :items-per-page="50"
        hover
      >
        <template #[`item.edit`]="{ item }">
          <v-icon
            icon="mdi-content-copy"
            size="small"
            class="mr-2"
            @click="openCopyDialog(item)"
          />
          <v-icon
            icon="mdi-pencil"
            size="small"
            @click="openEditDialog(item)"
          />
        </template>
      </v-data-table>
    </v-card>

    <EditSkillDataDialog
      v-model="dialog"
      :is-new="isNew"
      :item="editedItem"
      :existing-items="items"
      @save="handleSave"
    />

    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';

import { ref as dbRef, onValue } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';

import { useStateStore } from '@/stores/stateStore';

import { RTDB_PATH } from '@/constants/envConst';

import type { SkillType } from '@/types/skill';

import EditSkillDataDialog from '@/components/modal/EditSkillDataDialog.vue';
import type { SkillEditType } from '@/components/modal/EditSkillDataDialog.vue';

const store = useStateStore();
const skillList = ref<Record<string, SkillType>>({});
const search = ref('');

const fetchSkillList = () => {
  const skillRef = dbRef(store.isDev ? rtdbDev : rtdb, RTDB_PATH.SKILL);

  onValue(skillRef, (snapshot) => {
    const data: Record<string, SkillType> = snapshot.val();
    skillList.value = data ?? {};
  });
};

onMounted(fetchSkillList);
watch(() => store.isDev, fetchSkillList);

const items = computed(() => {
  const list: SkillType[] = [];

  if (!skillList.value) {
    return list;
  }

  for (const [skillID, skills] of Object.entries(skillList.value)) {
    list.push({
      ID: skillID,
      ...skills,
    });
  }

  return list;
});

const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Skill Name', key: 'name' },
  { title: 'Kana', key: 'kana' },
  { title: 'Attr', key: 'detail.attr' },
  { title: 'Edit', key: 'edit', sortable: false },
];

const dialog = ref(false);
const isNew = ref(false);
const editedItem = ref<SkillEditType>({} as SkillEditType);

const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');

const openCreateDialog = () => {
  editedItem.value = {
    name: '',
    ID: '',
    kana: '',
    text: [''],
    detail: {
      attr: '',
      type: [],
    },
  };
  isNew.value = true;
  dialog.value = true;
};

/**
 * 指定したアイテムのデータをコピーして新規作成ダイアログを開く
 */
const openCopyDialog = (item: SkillEditType) => {
  editedItem.value = JSON.parse(JSON.stringify(item));
  editedItem.value.ID = ''; // 重複を防ぐためIDを空にして、ユーザーに新しいIDの入力を促します
  isNew.value = true;
  dialog.value = true;
};

const openEditDialog = (item: SkillEditType) => {
  editedItem.value = JSON.parse(JSON.stringify(item));
  isNew.value = false;
  dialog.value = true;
};

const handleSave = (item: SkillEditType & { error?: string }) => {
  if (item.error) {
    snackbarMessage.value = item.error;
    snackbarColor.value = 'error';
  } else {
    snackbarMessage.value = `Saved to Dev`;
    snackbarColor.value = 'success';
  }

  snackbar.value = true;
};
</script>
