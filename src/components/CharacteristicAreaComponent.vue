<template>
  <v-card>
    <v-card-title class="d-flex text-no-wrap">
      Characteristic
      <v-spacer />
      <v-btn
        icon="mdi-close"
        variant="text"
        density="compact"
        color="error"
        @click="$emit('delete')"
      />
    </v-card-title>

    <v-card-text>
      <v-text-field
        v-model="model.name"
        label="Characteristic Name"
        variant="outlined"
        density="compact"
        hide-details
        class="mb-3"
      />
      <v-textarea
        v-model="model.detail"
        label="Characteristic Detail"
        variant="outlined"
        density="compact"
        hide-details
        class="mb-3"
      />

      <p class="text-subtitle-1 mb-3">Type</p>

      <v-row>
        <v-col
          v-for="(_, index) in model.type"
          :key="index"
          cols="4"
          class="d-flex align-center"
        >
          <v-text-field
            v-model="model.type[index]"
            item-title="title"
            item-value="value"
            :label="`Type ${index + 1}`"
            variant="outlined"
            density="compact"
            hide-details
          />
          <v-btn
            icon="mdi-pencil"
            variant="text"
            density="compact"
            class="ml-2"
            @click="openEditTypeDialog(index)"
          />
          <v-btn
            icon="mdi-delete"
            variant="text"
            density="compact"
            color="error"
            class="ml-2"
            @click="model.type.splice(index, 1)"
          />
        </v-col>
        <v-col cols="4">
          <v-btn
            text="Add Type"
            prepend-icon="mdi-plus"
            block
            @click="model.type.push('')"
          />
        </v-col>
      </v-row>

      <template v-for="(item, index) in model.addSkill" :key="index">
        <v-col cols="12" class="mt-3">
          <v-expansion-panels color="yellow">
            <v-expansion-panel>
              <v-expansion-panel-title>
                {{ `Add Skill ${index + 1}` }}
                <v-spacer />
                <v-btn
                  icon="mdi-delete"
                  variant="text"
                  density="compact"
                  color="error"
                  @click.stop="removeCharacteristicSkill(index)"
                />
              </v-expansion-panel-title>
              <v-expansion-panel-text>
                <SkillFormComponent
                  v-model="model.addSkill[index]"
                  type="addSkill"
                  :index="index"
                  @open-detail="(list, idx) => $emit('open-detail', list, idx)"
                />
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </template>

      <v-btn
        v-if="model.type.includes('addCard')"
        color="yellow"
        prepend-icon="mdi-plus"
        text="Add Skill"
        block
        class="mt-3"
        @click="addCharacteristicSkill"
      />
    </v-card-text>
  </v-card>

  <EditSkillTypeDialog
    v-model="isEditTypeDialog"
    :existing-types="model.type"
    @select="onSelectType"
  />
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import SkillFormComponent from '@/components/SkillFormComponent.vue';
import EditSkillTypeDialog from '@/components/modal/EditSkillTypeDialog.vue';
import type { Characteristic, SkillDetail } from '@/types/cardList';

const props = defineProps<{
  modelValue: Characteristic;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: Characteristic): void;
  (e: 'delete'): void;
  (e: 'open-detail', list: number[][], index: number): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const isEditTypeDialog = ref(false);
const editingTypeIndex = ref<number | null>(null);

const openEditTypeDialog = (index: number) => {
  editingTypeIndex.value = index;
  isEditTypeDialog.value = true;
};

const onSelectType = (detailId: string) => {
  if (editingTypeIndex.value !== null) {
    model.value.type[editingTypeIndex.value] = detailId;
  }
  isEditTypeDialog.value = false;
  editingTypeIndex.value = null;
};

const addSkillDetailData: SkillDetail = {
  ID: '',
  name: '',
  AP: 0,
  detail: [],
};

const addCharacteristicSkill = () => {
  if (!model.value.addSkill) {
    model.value.addSkill = [];
  }
  model.value.addSkill.push(JSON.parse(JSON.stringify(addSkillDetailData)));
};

const removeCharacteristicSkill = (index: number) => {
  if (model.value.addSkill) {
    model.value.addSkill.splice(index, 1);
  }
};
</script>
