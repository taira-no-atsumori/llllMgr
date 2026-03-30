<template>
  <v-container fluid class="pa-0">
    <v-card>
      <v-select
        v-model="search"
        :items="skillTypeOptions"
        label="Filter by Skill Type"
        prepend-inner-icon="mdi-filter"
        variant="outlined"
        hide-details
        class="ma-2"
        clearable
      >
        <template #append>
          <v-btn
            color="primary"
            prepend-icon="mdi-plus"
            text="New"
            @click="openCreateDialog"
          />
        </template>
      </v-select>

      <v-data-table
        :headers="headers"
        :items="items"
        density="compact"
        :items-per-page="-1"
        hover
      >
        <template #[`item.colorCode`]="{ value }">
          <v-chip
            v-if="value"
            :text="value"
            :color="value"
            size="small"
            variant="flat"
          />
        </template>
        <template #[`item.skillTypeKey`]="{ value }">
          {{ SKILL_TYPE_KEY[value] || value }}
        </template>
        <template #[`item.edit`]="{ item }">
          <v-btn icon="mdi-pencil" size="small" @click="openEditDialog(item)" />
        </template>
      </v-data-table>
    </v-card>

    <EditSkillDetailDialog
      v-model="dialog"
      :is-new="isNew"
      :item="editedItem"
      :existing-items="items"
    />
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_TYPE_KEY } from '@/constants/skillDetailType';
import type { SkillDetailType } from '@/types/skill';
import EditSkillDetailDialog from '@/components/modal/EditSkillDetailDialog.vue';

const skillStore = useSkillStore();
const search = ref('');
const skillTypeOptions = computed(() => {
  return Object.entries(SKILL_TYPE_KEY).map(([key, skillDetailName]) => ({
    title: skillDetailName,
    value: key,
  }));
});

const headers = [
  { title: 'ID', key: 'ID' },
  { title: 'Skill Detail Name', key: 'skillDetailName' },
  { title: 'Color Code', key: 'colorCode' },
  { title: 'Skill Type', key: 'skillTypeKey' },
  { title: 'Description', key: 'description' },
  { title: 'Edit', key: 'edit', sortable: false },
];

const items = computed(() => {
  const list = Object.entries(skillStore.skillDetails).map(
    ([_, value]) => value,
  );

  if (search.value) {
    return list.filter((item) => {
      return item.skillTypeKey === search.value;
    });
  } else {
    return list;
  }
});

const dialog = ref(false);
const editedItem = ref({
  ID: '',
  skillDetailName: '',
  colorCode: '',
  description: '',
  skillTypeKey: 'heartCaptcha',
});

const isNew = ref(false);

const openCreateDialog = () => {
  editedItem.value = {
    ID: '',
    skillDetailName: '',
    colorCode: 'grey',
    description: '',
    skillTypeKey: 'heartCaptcha',
  };
  isNew.value = true;
  dialog.value = true;
};

const openEditDialog = (item: SkillDetailType) => {
  editedItem.value = { ...item };
  isNew.value = false;
  dialog.value = true;
};
</script>
