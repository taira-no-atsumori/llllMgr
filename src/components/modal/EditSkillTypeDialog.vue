<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1080px"
    @update:model-value="$emit('update:modelValue', $event)"
  >
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
                  v-for="(detail, key) in getSkillDetailsByType(String(id))"
                  :key="key"
                  :title="detail.skillDetailName"
                  :subtitle="detail.description"
                  :disabled="existingTypes.includes(String(key))"
                  style="border-bottom: 1px solid #888"
                  @click="onSelect(String(key))"
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
          @click="$emit('update:modelValue', false)"
        />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_TYPE_KEY } from '@/constants/skillDetail';
import type { SkillDetailType } from '@/types/skill';

defineProps<{
  modelValue: boolean;
  existingTypes: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'select', detailId: string): void;
}>();

const skillStore = useSkillStore();
const selectSkillTab = ref<string | null>(null);

const getSkillDetailsByType = (typeKey: string) => {
  const list: Record<string, SkillDetailType> = {};

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

const onSelect = (detailId: string) => {
  emit('select', detailId);
};
</script>
