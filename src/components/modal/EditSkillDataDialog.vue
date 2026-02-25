<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1280px"
    @update:model-value="closeDialog"
  >
    <v-card>
      <v-card-title>
        <span class="text-h5">{{ `${isNew ? 'New' : 'Edit'} Skill` }}</span>
      </v-card-title>

      <v-card-text>
        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="editedItem.name"
              label="SkillName"
              variant="outlined"
              density="compact"
              :base-color="isDuplicate('name') ? 'warning' : undefined"
              :color="isDuplicate('name') ? 'warning' : undefined"
              :messages="
                isDuplicate('name')
                  ? 'Warning: Skill Name already exists'
                  : undefined
              "
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="editedItem.kana"
              label="Kana"
              variant="outlined"
              density="compact"
              :rules="kanaRules"
              validate-on="blur"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="editedItem.ID"
              label="ID"
              variant="outlined"
              density="compact"
              :rules="idRules"
            />
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title>Text</v-card-title>
              <v-card-text>
                <template v-for="(_, index) in editedItem.text" :key="index">
                  <div class="d-flex align-center mb-4">
                    <v-text-field
                      v-model="editedItem.text[index]"
                      :label="`Text${index + 1}`"
                      variant="outlined"
                      density="compact"
                      hide-details
                    />
                    <v-btn
                      icon="mdi-delete"
                      variant="text"
                      density="compact"
                      color="error"
                      class="ml-3"
                      :disabled="editedItem.text.length === 1"
                      @click="editedItem.text.splice(index, 1)"
                    />
                  </div>
                </template>
                <v-btn
                  prepend-icon="mdi-plus"
                  text="Add Text"
                  variant="outlined"
                  block
                  @click="editedItem.text.push('')"
                />
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card>
              <v-card-title>Detail</v-card-title>
              <v-card-text>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedItem.detail.attr"
                      label="Attr"
                      variant="outlined"
                      density="compact"
                      hide-details
                    />
                  </v-col>

                  <v-col
                    v-for="(typeId, index) in editedItem.detail.type"
                    :key="index"
                    cols="6"
                    md="4"
                  >
                    <v-card
                      :color="skillStore.skillDetails[typeId]?.colorCode"
                      class="d-flex flex-column fill-height"
                    >
                      <v-card-title class="d-flex text-no-wrap text-body-2">
                        {{ `Type ${index + 1}` }}
                        <v-spacer />
                        <v-btn
                          icon="mdi-close"
                          density="compact"
                          color="error"
                          size="small"
                          @click="removeType(index)"
                        />
                      </v-card-title>

                      <v-card-text
                        v-if="skillStore.skillDetails[typeId]"
                        class="pb-0"
                      >
                        <p class="text-subtitle-2">
                          {{ skillStore.skillDetails[typeId].skillDetailName }}
                        </p>
                        <p class="text-caption">
                          {{ skillStore.skillDetails[typeId].description }}
                        </p>
                      </v-card-text>

                      <v-spacer />
                      <v-card-actions>
                        <v-btn
                          text="Change Type"
                          variant="outlined"
                          block
                          @click="changeType(index)"
                        />
                      </v-card-actions>
                    </v-card>
                  </v-col>

                  <v-col cols="6" md="4">
                    <v-btn
                      prepend-icon="mdi-plus"
                      text="Add Type"
                      variant="outlined"
                      class="py-2 fill-height"
                      block
                      @click="addType"
                    />
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn
          color="error"
          variant="text"
          text="Cancel"
          @click="closeDialog(false)"
        />
        <v-btn
          color="primary"
          variant="text"
          text="Save"
          :disabled="!editedItem.name || !editedItem.ID || isDuplicate('ID')"
          :loading="isSaving"
          @click="saveItem"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="isAddTypeDialog" max-width="1080px">
    <v-sheet class="pa-3">
      <h3>Add Type</h3>

      <div>
        <v-tabs v-model="selectSkillTab" color="pink">
          <v-tab v-for="(key, id) in SKILL_TYPE_KEY" :key="id" :value="id">
            {{ key }}
          </v-tab>
        </v-tabs>

        <v-divider />

        <v-tabs-window v-model="selectSkillTab">
          <v-tabs-window-item
            v-for="(_, id) in SKILL_TYPE_KEY"
            :key="id"
            :value="id"
          >
            <v-sheet style="height: 500px; overflow-y: auto">
              <v-list density="compact">
                <v-list-item
                  v-for="(detail, key) in getSkillDetailsByType(id)"
                  :key="key"
                  :title="detail.skillDetailName"
                  :subtitle="detail.description"
                  :disabled="editedItem.detail?.type?.includes(key)"
                  style="border-bottom: 1px solid #888"
                  @click="onSelectSkillDetail(key, id)"
                >
                  <template #prepend>
                    <v-avatar
                      :color="detail.colorCode"
                      size="small"
                      class="mr-2"
                    />
                  </template>
                </v-list-item>
              </v-list>
            </v-sheet>
          </v-tabs-window-item>
        </v-tabs-window>
      </div>

      <div class="d-flex justify-end mt-3">
        <v-btn
          color="error"
          variant="text"
          text="Cancel"
          @click="isAddTypeDialog = false"
        />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { ref as dbRef, update } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_TYPE_KEY } from '@/constants/skillDetail';
import type { SkillType } from '@/types/skill';

/**
 * スキルの編集の型
 *
 * @property name スキル名
 */
export interface SkillEditType extends SkillType {
  name: string;
}

interface Props {
  modelValue: boolean;
  isNew: boolean;
  item?: SkillEditType;
  existingItems: SkillType[];
}

const props = withDefaults(defineProps<Props>(), {
  item: () =>
    ({
      name: '',
      ID: '',
      kana: '',
      text: [''],
      detail: {
        attr: '',
        type: [],
      },
    }) as SkillEditType,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  save: [item: SkillEditType & { error?: string }];
}>();

const store = useStateStore();
const skillStore = useSkillStore();

const editedItem = ref<SkillEditType>({ ...props.item });

const isAddTypeDialog = ref(false);
const selectSkillTab = ref(0);
const editingTypeIndex = ref<number | null>(null);
const isSaving = ref(false);

const isDuplicate = (a: 'ID' | 'name') => {
  const value = editedItem.value[a];

  if (!value) {
    return false;
  }

  // 編集モードで、かつ名前が変更されていない場合はOK
  if (!props.isNew && props.item && value === props.item[a]) {
    return false;
  }

  // 既存のリスト内に同じ名前があるか検索
  return props.existingItems.some((item) => item[a] === value);
};

const kanaRules = [
  (value: string) => {
    if (!value) return true;
    return (
      /^[\u3040-\u309F0-9ー]+$/.test(value) ||
      'Only Hiragana and Numbers are allowed'
    );
  },
];

const idRules = [
  (value: string) => {
    if (!value) {
      return 'ID is required';
    }

    if (!/^[a-zA-Z0-9_-]+$/.test(value)) {
      return 'Only half-width alphanumeric characters, "_", and "-" are allowed';
    }

    // 編集モードで、かつIDが変更されていない場合はOK
    if (!props.isNew && value === props.item?.ID) {
      return true;
    }

    // 既存のリスト内に同じIDがあるか検索
    const exists = props.existingItems.some((item) => item.ID === value);
    return !exists || 'ID already exists';
  },
];

watch(
  () => props.modelValue,
  (newVal) => {
    if (newVal) {
      editedItem.value = JSON.parse(JSON.stringify(props.item));
    }
  },
);

const closeDialog = (value: boolean) => {
  emit('update:modelValue', value);
};

const addType = () => {
  editingTypeIndex.value = null;
  isAddTypeDialog.value = true;
};

const changeType = (index: number) => {
  editingTypeIndex.value = index;
  isAddTypeDialog.value = true;
};

const removeType = (index: number) => {
  editedItem.value.detail.type.splice(index, 1);
};

const getSkillDetailsByType = (typeKey: string) => {
  const list: Record<
    string,
    {
      id: string;
      skillDetailName: string;
      skillTypeKey: string;
      colorCode: string;
      description: string;
    }
  > = {};

  if (!skillStore.skillDetails) {
    return list;
  }

  for (const [key, value] of Object.entries(skillStore.skillDetails)) {
    if (value.skillTypeKey === typeKey) {
      list[key] = value;
    }
  }

  return list;
};

const onSelectSkillDetail = (detailId: string, _typeKey: string) => {
  if (!editedItem.value.detail) {
    editedItem.value.detail = { attr: '', type: [] };
  }
  if (!editedItem.value.detail.type) {
    editedItem.value.detail.type = [];
  }

  if (editingTypeIndex.value !== null) {
    if (editedItem.value.detail.type.includes(detailId)) {
      return;
    }
    editedItem.value.detail.type[editingTypeIndex.value] = detailId;
  } else {
    if (editedItem.value.detail.type.includes(detailId)) {
      return;
    }
    editedItem.value.detail.type.push(detailId);
  }

  isAddTypeDialog.value = false;
  editingTypeIndex.value = null;
};

const saveItem = async () => {
  const db = store.isDev ? rtdbDev : rtdb;

  if (!editedItem.value.name || !editedItem.value.ID) {
    emit('save', {
      ...editedItem.value,
      error: 'SkillName and ID are required',
    });
    return;
  }

  if (props.isNew) {
    const exists = props.existingItems.some(
      (item) => item.ID === editedItem.value.ID,
    );
    if (exists) {
      emit('save', { ...editedItem.value, error: 'This ID already exists' });
      return;
    }
  }

  isSaving.value = true;

  const { ID, ...skillData } = editedItem.value;
  const updates: Record<string, SkillType> = {};
  updates[`skills/skill/${ID}`] = skillData;

  try {
    await update(dbRef(db), updates);
    emit('save', editedItem.value);
    closeDialog(false);
  } catch (error) {
    console.error(error);
    emit('save', { ...editedItem.value, error: 'Error saving data' });
  } finally {
    isSaving.value = false;
  }
};
</script>
