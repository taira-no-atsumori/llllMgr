<template>
  <v-dialog
    :model-value="modelValue"
    max-width="1600px"
    scrollable
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <v-card>
      <v-card-title class="d-flex align-center py-3">
        <span class="mr-3">Select Skill</span>
        <v-select
          v-model="selectedKanaRow"
          :items="kanaRows"
          label="Filter by Kana"
          variant="outlined"
          density="compact"
          hide-details
        />
      </v-card-title>

      <v-divider />

      <v-card-text class="pa-0" style="height: 500px">
        <v-row class="h-100 ma-0">
          <v-col cols="4" class="border-e h-100 overflow-y-auto">
            <v-virtual-scroll :items="skillNames">
              <template #default="{ item: skill }">
                <v-list-item
                  :key="skill.value"
                  :title="skill.title"
                  :subtitle="skill.kana"
                  :value="skill.value"
                  :active="tempSelectedName === skill.title"
                  class="border-b"
                  @click="selectSkillName(skill.title)"
                >
                  <template v-if="skill.title === initialSkillName" #append>
                    <v-icon icon="mdi-check" color="success" size="small" />
                  </template>
                </v-list-item>
              </template>
            </v-virtual-scroll>
          </v-col>

          <v-col cols="4" class="border-e h-100 overflow-y-auto">
            <v-list density="compact">
              <v-list-item
                v-for="id in filteredIds"
                :key="id"
                :title="id"
                :value="id"
                :active="tempSelectedId === id"
                class="border-b"
                @click="tempSelectedId = id"
              >
                <template v-if="id === currentSkillId" #append>
                  <v-icon icon="mdi-check" color="success" size="small" />
                </template>
              </v-list-item>
            </v-list>
          </v-col>

          <v-col cols="4" class="h-100 overflow-y-auto">
            <div v-if="selectedSkillData" class="pa-3">
              <v-card variant="flat">
                <v-card-title class="px-0 pt-0">Text</v-card-title>

                <v-card-text class="px-0 pt-0 text-caption">
                  <p
                    v-for="(t, i) in selectedSkillData.text"
                    :key="i"
                    :class="selectedSkillData.text.length === i ? '' : 'mb-1'"
                  >
                    {{ t }}
                  </p>
                </v-card-text>
              </v-card>

              <v-card v-if="selectedSkillData?.exText" variant="flat">
                <v-card-title class="px-0 pt-0">EX Text</v-card-title>

                <v-card-text class="px-0 pt-0 text-caption">
                  <template
                    v-for="(t, i) in selectedSkillData.exText"
                    :key="`ex-${i}`"
                  >
                    <p
                      v-for="value in t.text"
                      :key="value"
                      :class="t.text.length === i ? '' : 'mb-1'"
                    >
                      {{ value }}
                    </p>
                  </template>
                </v-card-text>
              </v-card>

              <v-card v-if="selectedSkillData.detail?.type" variant="flat">
                <v-card-title class="px-0 pt-0">Type</v-card-title>

                <v-card-text class="px-0 pt-0">
                  <v-chip
                    v-for="typeId in selectedSkillData.detail.type"
                    :key="typeId"
                    :color="skillStore.getSkillDetailData(typeId, 'colorCode')"
                    class="mr-1 mb-1"
                    size="small"
                  >
                    {{
                      skillStore.getSkillDetailData(typeId, 'skillDetailName')
                    }}
                  </v-chip>
                </v-card-text>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <div
          v-if="tempSelectedId && tempSelectedId === currentSkillId"
          class="d-flex align-center text-error px-4"
        >
          <v-icon icon="mdi-alert-circle" size="small" class="mr-1" />
          <span class="text-caption">すでに同じスキルが選択されています。</span>
        </div>
        <v-spacer />
        <v-btn
          text="Cancel"
          color="error"
          @click="$emit('update:modelValue', false)"
        />
        <v-btn
          text="Save"
          color="primary"
          :disabled="!tempSelectedId || tempSelectedId === currentSkillId"
          @click="saveSelection"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import { useSkillStore } from '@/stores/skillStore';
import { KANA_OPTIONS } from '@/constants/kana';
import { getRow } from '@/utils/stringUtil';
import type { SkillType } from '@/types/skill';

const props = defineProps<{
  modelValue: boolean;
  skillList: Record<string, SkillType>;
  currentSkillId?: string;
  initialSkillName?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'select', skillId: string): void;
}>();

const skillStore = useSkillStore();

const selectedKanaRow = ref('all');
const tempSelectedName = ref('');
const tempSelectedId = ref('');

const kanaRows = [{ title: 'All', value: 'all' }, ...KANA_OPTIONS];

watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      tempSelectedName.value = props.initialSkillName || '';
      tempSelectedId.value = props.currentSkillId || '';
    }
  },
);

const skillNames = computed(() => {
  const list: { title: string; value: string; kana: string }[] = [];
  const seen = new Set<string>();

  for (const skillID in props.skillList) {
    const skillGroup = props.skillList[skillID];
    const skillName = skillGroup.name;
    const skillKana = skillGroup.kana;

    if (selectedKanaRow.value !== 'all') {
      const row = getRow(skillKana.charAt(0));

      if (row !== selectedKanaRow.value) {
        continue;
      }
    }

    if (!seen.has(skillName)) {
      seen.add(skillName);
      list.push({ title: skillName, value: skillID, kana: skillKana });
    }
  }

  return list.sort((a, b) => a.kana.localeCompare(b.kana, 'ja'));
});

const filteredIds = computed(() => {
  return !tempSelectedName.value
    ? []
    : Object.values(props.skillList)
        .filter((s) => s.name === tempSelectedName.value)
        .map((s) => s.ID)
        .sort();
});

const selectedSkillData = computed(() => {
  if (!tempSelectedId.value) return null;
  return props.skillList[tempSelectedId.value];
});

const selectSkillName = (name: string) => {
  tempSelectedName.value = name;
  const ids = Object.values(props.skillList)
    .filter((s) => s.name === name)
    .map((s) => s.ID)
    .sort();
  tempSelectedId.value = ids.length > 0 ? ids[0] : '';
};

const saveSelection = () => {
  emit('select', tempSelectedId.value);
  emit('update:modelValue', false);
};

watch(selectedKanaRow, () => {
  if (skillNames.value.length > 0) {
    selectSkillName(skillNames.value[0].title);
  } else {
    tempSelectedName.value = '';
    tempSelectedId.value = '';
  }
});
</script>
