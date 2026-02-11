<template>
  <v-row>
    <v-col cols="5">
      <v-select
        v-model="model.name"
        :items="skillNames"
        :label="`${labelPrefix} Name`"
        required
        variant="outlined"
        density="compact"
        hide-details
        @update:model-value="onNameChange"
      />
    </v-col>
    <v-col cols="5">
      <v-select
        v-model="model.ID"
        :items="idOptions"
        :label="`${labelPrefix} ID`"
        required
        variant="outlined"
        density="compact"
        hide-details
        @update:model-value="onIdChange"
      />
    </v-col>
    <v-col cols="2">
      <v-text-field
        v-model.number="model.AP"
        label="AP"
        type="number"
        max="999"
        min="0"
        required
        variant="outlined"
        density="compact"
        hide-details
      />
    </v-col>

    <v-col v-if="type === 'SA' && model.ID" cols="12">
      <v-btn
        v-if="!isEXAP"
        text="Add EXAP"
        prepend-icon="mdi-plus"
        block
        @click="isEXAP = true"
      />
      <v-text-field
        v-else
        v-model.number="model.EXAP"
        label="SA EXAP"
        type="number"
        max="999"
        min="0"
        required
        variant="outlined"
        density="compact"
        hide-details
      >
        <template #append>
          <v-icon color="error" icon="mdi-delete" @click="isEXAP = false" />
        </template>
      </v-text-field>
    </v-col>

    <v-col
      v-if="model.detail && model.detail.length > 0"
      cols="12"
      class="d-flex align-center"
    >
      <span class="text-subtitle-1">{{ labelPrefix }} Detail</span>
    </v-col>

    <template v-for="(_, detailIndex) in model.detail" :key="detailIndex">
      <v-col cols="12">
        <v-text-field
          v-model="model.detail[detailIndex]"
          :label="`Detail ${detailIndex + 1}`"
          variant="underlined"
          density="compact"
          hide-details
          readonly
          append-icon="mdi-pencil"
          @click:append="$emit('open-detail', model.detail, detailIndex)"
        />
      </v-col>
    </template>

    <!-- Add SA List (Only for SA) -->
    <template v-if="model.addSA">
      <v-col v-for="(item, i) in model.addSA" :key="i" cols="12">
        <v-expansion-panels color="yellow">
          <v-expansion-panel>
            <v-expansion-panel-title>
              {{ `Add Special Appeal ${i + 1}` }}
              <v-spacer />
              <v-btn
                icon="mdi-delete"
                variant="text"
                density="compact"
                color="error"
                @click.stop="removeAddSA(i)"
              />
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <SkillForm
                v-model="model.addSA[i]"
                type="addSA"
                :index="i"
                :auto-complete-ap="autoCompleteAp"
                @open-detail="(l, idx) => $emit('open-detail', l, idx)"
              />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </template>

    <!-- Add SA Button -->
    <v-col v-if="model.addSA && currentTypes.includes('addSA')" cols="12">
      <v-btn
        color="yellow"
        prepend-icon="mdi-plus"
        text="Add SA"
        block
        @click="addSA"
      />
    </v-col>

    <!-- Add Skill List -->
    <template v-if="model.addSkill">
      <v-col v-for="(item, i) in model.addSkill" :key="i" cols="12">
        <v-expansion-panels color="yellow">
          <v-expansion-panel>
            <v-expansion-panel-title>
              {{ `Add Skill ${i + 1}` }}
              <v-spacer />
              <v-btn
                icon="mdi-delete"
                variant="text"
                density="compact"
                color="error"
                @click.stop="removeAddSkill(i)"
              />
            </v-expansion-panel-title>
            <v-expansion-panel-text>
              <SkillForm
                v-model="model.addSkill[i]"
                type="addSkill"
                :index="i"
                :auto-complete-ap="autoCompleteAp"
                @open-detail="(l, idx) => $emit('open-detail', l, idx)"
              />
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </template>

    <!-- Add Skill Button -->
    <v-col v-if="model.addSkill && currentTypes.includes('addCard')" cols="12">
      <v-btn
        color="yellow"
        prepend-icon="mdi-plus"
        text="Add Skill"
        block
        @click="addSkill"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { SKILL_LIST } from '@/constants/skillList';

const isEXAP = ref(false);

const props = defineProps<{
  modelValue: any;
  type: 'SA' | 'skill' | 'addSA' | 'addSkill';
  index?: number;
  autoCompleteAp?: (id: string) => number | undefined;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'open-detail', list: any[], index: number): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const skillNames = Object.keys(SKILL_LIST);

const labelPrefix = computed(() => {
  if (props.type === 'SA') return 'Special Appeal';
  if (props.type === 'skill') return 'Skill';
  if (props.type === 'addSA') return 'Add Special Appeal';
  return 'Skill';
});

const idOptions = computed(() => {
  const name = model.value.name;
  if (!name || !(name in SKILL_LIST)) return [];
  return Object.keys(SKILL_LIST[name as keyof typeof SKILL_LIST]);
});

const currentTypes = computed(() => {
  const name = model.value.name;
  const id = model.value.ID;

  if (name && id && name in SKILL_LIST) {
    const skillGroup = SKILL_LIST[name as keyof typeof SKILL_LIST];
    return (skillGroup as any)[id]?.detail?.type || [];
  }

  return [];
});

const onNameChange = (newName: string) => {
  if (!newName || !(newName in SKILL_LIST)) return;
  const ids = Object.keys(SKILL_LIST[newName as keyof typeof SKILL_LIST]);
  if (ids.length > 0) {
    model.value.ID = ids[0];
    onIdChange(ids[0]);
  }
};

const onIdChange = (newId: string) => {
  if (!newId) return;

  const name = model.value.name;
  if (name && name in SKILL_LIST) {
    const skillData = SKILL_LIST[name as keyof typeof SKILL_LIST][newId];
    if (skillData && skillData.text) {
      const count = Math.max(0, skillData.text.length - 1);
      const defaultDetail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      model.value.detail = new Array(count)
        .fill(null)
        .map(() => [...defaultDetail]);
    }
  }

  if (props.autoCompleteAp) {
    const ap = props.autoCompleteAp(newId);
    if (ap !== undefined) {
      model.value.AP = ap;
    }
  }
};

const addSADetailData = {
  ID: '',
  name: '',
  AP: 0,
  detail: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
};

const addSkillDetailData = {
  ...addSADetailData,
  characteristic: {
    name: '',
    detail: '',
    type: [''],
  },
};

const addSA = () => {
  if (!model.value.addSA) model.value.addSA = [];
  model.value.addSA.push(JSON.parse(JSON.stringify(addSADetailData)));
};

const addSkill = () => {
  if (!model.value.addSkill) model.value.addSkill = [];
  model.value.addSkill.push(JSON.parse(JSON.stringify(addSkillDetailData)));
};

const removeAddSA = (index: number) => {
  model.value.addSA.splice(index, 1);
};

const removeAddSkill = (index: number) => {
  model.value.addSkill.splice(index, 1);
};
</script>
