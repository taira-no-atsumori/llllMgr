<template>
  <div class="d-flex mb-3">
    <div class="pr-3" style="width: 90%">
      <v-text-field
        v-model="model.name"
        :label="`${labelPrefix} Name`"
        readonly
        variant="underlined"
        class="mb-3"
        hide-details
      />
      <v-text-field
        v-model="model.ID"
        :items="idOptions"
        :label="`${labelPrefix} ID`"
        required
        readonly
        variant="underlined"
        hide-details
      />
    </div>
    <div style="width: 10%" class="mt-2">
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
        :bg-color="model.AP === 0 ? 'error' : undefined"
        class="mb-6"
      />
      <v-btn
        text="Set"
        color="primary"
        prepend-icon="mdi-plus"
        block
        @click="skillDialog = true"
      />
    </div>
  </div>

  <div v-if="type === 'SA' && model.ID" class="mb-6">
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
  </div>

  <v-row>
    <v-col
      v-if="model.detail && model.detail.length > 0"
      cols="12"
      class="d-flex align-center"
    >
      <p class="text-subtitle-1">{{ labelPrefix }} Detail</p>
    </v-col>

    <template v-for="(_, detailIndex) in model.detail" :key="detailIndex">
      <v-col cols="12" class="py-0">Detail {{ detailIndex + 1 }}</v-col>
      <v-col cols="12" class="d-flex">
        <template
          v-for="(__, dataLevelIndex) in model.detail[detailIndex]"
          :key="dataLevelIndex"
        >
          <v-text-field
            v-model="model.detail[detailIndex][dataLevelIndex]"
            :label="`Level ${dataLevelIndex + 1}`"
            variant="underlined"
            density="compact"
            hide-details
            readonly
            class="pr-3"
            style="width: calc(100% / 15)"
          />
        </template>
        <v-btn
          icon="mdi-pencil"
          variant="text"
          density="compact"
          @click="$emit('open-detail', model.detail, detailIndex)"
        />
      </v-col>
    </template>
  </v-row>

  <!-- Add SA List (Only for SA) -->
  <template v-for="(item, i) in model.addSA" :key="i">
    <v-expansion-panels color="yellow" class="mt-3">
      <v-expansion-panel>
        <v-expansion-panel-title>
          {{ `Add Special Appeal ${i + 1}` }}
          <v-spacer />
          <v-btn
            icon="mdi-delete"
            variant="text"
            density="compact"
            color="error"
            @click.stop="removeSAorSkill('SA', i)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <SkillFormComponent
            v-model="model.addSA[i]"
            type="addSA"
            :index="i"
            @open-detail="(l, idx) => $emit('open-detail', l, idx)"
          />
          <div v-if="model.addSA[i].characteristic" class="mt-3">
            <CharacteristicAreaComponent
              v-model="model.addSA[i].characteristic"
              @delete="deleteCharacteristic(model.addSA[i])"
              @open-detail="(l, idx) => $emit('open-detail', l, idx)"
            />
          </div>
          <v-btn
            v-else
            text="Add Characteristic"
            prepend-icon="mdi-plus"
            block
            class="mt-3"
            @click="addCharacteristic(model.addSA[i])"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>

  <!-- Add SA Button -->
  <v-btn
    v-if="model.addSA && currentTypes.includes('addSA')"
    color="yellow"
    prepend-icon="mdi-plus"
    text="Add SA"
    block
    @click="addSAorSkill('SA')"
  />

  <!-- Add Skill List -->
  <template v-for="(item, i) in model.addSkill" :key="i">
    <v-expansion-panels color="yellow" class="mt-3">
      <v-expansion-panel>
        <v-expansion-panel-title>
          {{ `Add Skill ${i + 1}` }}
          <v-spacer />
          <v-btn
            icon="mdi-delete"
            variant="text"
            density="compact"
            color="error"
            @click.stop="removeSAorSkill('Skill', i)"
          />
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <SkillFormComponent
            v-model="model.addSkill[i]"
            type="addSkill"
            :index="i"
            @open-detail="(l, idx) => $emit('open-detail', l, idx)"
          />
          <div v-if="model.addSkill[i].characteristic" class="mt-3">
            <CharacteristicAreaComponent
              v-model="model.addSkill[i].characteristic"
              @delete="deleteCharacteristic(model.addSkill[i])"
              @open-detail="(l, idx) => $emit('open-detail', l, idx)"
            />
          </div>
          <v-btn
            v-else
            text="Add Characteristic"
            prepend-icon="mdi-plus"
            block
            class="mt-3"
            @click="addCharacteristic(model.addSkill[i])"
          />
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>

  <!-- Add Skill Button -->
  <v-btn
    v-if="model.addSkill && currentTypes.includes('addCard')"
    cols="12"
    color="yellow"
    prepend-icon="mdi-plus"
    text="Add Skill"
    block
    class="mt-3"
    @click="addSAorSkill('Skill')"
  />

  <SelectSkillDialog
    v-model="skillDialog"
    :skill-list="skillList"
    :current-skill-id="model.ID"
    :initial-skill-name="model.name"
    @select="onNameChange"
  />
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { ref as dbRef, onValue } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import SelectSkillDialog from '@/components/modal/SelectSkillDialog.vue';
import SkillFormComponent from '@/components/SkillFormComponent.vue';
import CharacteristicAreaComponent from '@/components/CharacteristicAreaComponent.vue';
import type { SkillDetail, AdditionalSkill } from '@/types/cardList';
import type { SkillType } from '@/types/skill';
import { RTDB_PATH } from '@/constants/envConst';

const isEXAP = ref(false);
const defaultDetail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const props = defineProps<{
  modelValue: SkillDetail;
  type: 'SA' | 'skill' | 'addSA' | 'addSkill';
  index?: number;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
  (e: 'open-detail', list: (string | number | null)[], index: number): void;
}>();

const model = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const store = useStateStore();
const skillList = ref<Record<string, SkillType>>({});
const skillDialog = ref(false);

const fetchSkillList = () => {
  const db = store.isDev ? rtdbDev : rtdb;
  const skillRef = dbRef(db, RTDB_PATH.SKILL);

  onValue(skillRef, (snapshot) => {
    const data: SkillType = snapshot.val();

    if (data) {
      for (const skillID in data) {
        data[skillID] = {
          ID: skillID,
          ...data[skillID],
        };
      }

      skillList.value = data;
    }
  });
};

onMounted(fetchSkillList);
watch(() => store.isDev, fetchSkillList);

watch(skillList, (newList) => {
  // 新規作成時（modelに値がない）かつリストがロードされた場合
  if (
    Object.keys(newList).length > 0 &&
    !props.modelValue.name &&
    !props.modelValue.ID
  ) {
    const firstSkillName = skillNames.value[0];

    if (firstSkillName) {
      onNameChange(firstSkillName.value);
    }
  }
});

const skillNames = computed(() => {
  const list: { title: string; value: string }[] = [];
  const seen = new Set<string>();

  for (const skillID in skillList.value) {
    const skillGroup = skillList.value[skillID];
    const skillName = skillGroup.name;

    if (!seen.has(skillName)) {
      seen.add(skillName);
      list.push({ title: skillName, value: skillID });
    }
  }

  return list.sort((a, b) => a.title.localeCompare(b.title, 'ja'));
});

const labelPrefix = computed(() => {
  switch (props.type) {
    case 'SA':
      return 'Special Appeal';
    case 'skill':
      return 'Skill';
    case 'addSA':
      return 'Add Special Appeal';
    default:
      return 'Skill';
  }
});

const idOptions = computed(() => {
  const skillName = model.value.name;
  const skillIDs: string[] = [];

  if (!skillName) {
    return skillIDs;
  }

  for (const skillID in skillList.value) {
    if (skillList.value[skillID].name === skillName) {
      skillIDs.push(skillList.value[skillID].ID);
    }
  }

  return skillIDs;
});

const currentTypes = computed(() => {
  const name = model.value.name;
  const id = model.value.ID;

  if (name && id && Object.keys(skillList.value).includes(id)) {
    const skillGroup: SkillType = skillList.value[id];
    return skillGroup.detail.type;
  } else {
    return [];
  }
});

const onNameChange = (newSkillID: string) => {
  if (!newSkillID) {
    return;
  }

  const ids = [];

  for (const key in skillList.value) {
    if (skillList.value[key].ID === newSkillID) {
      ids.push(skillList.value[key]);
    }
  }

  if (ids.length > 0) {
    model.value.ID = ids[0].ID;
    model.value.name = ids[0].name;
    onIdChange(ids[0].ID);
  }
};

const onIdChange = (newId: string) => {
  if (!newId) {
    return;
  }

  const name = model.value.name;

  if (name) {
    const skillData = skillList.value[newId];

    if (skillData && skillData.text) {
      const count = Math.max(0, skillData.text.length - 1);
      model.value.detail = new Array(count)
        .fill(null)
        .map(() => [...defaultDetail]);
    }
  }
};

const addSADetailData = {
  ID: '',
  name: '',
  AP: 0,
  detail: [...defaultDetail],
};

const addSkillDetailData = {
  ...addSADetailData,
  characteristic: {
    name: '',
    detail: '',
    type: [''],
  },
};

const addSAorSkill = (target: 'SA' | 'Skill') => {
  if (!model.value[`add${target}`]) {
    model.value[`add${target}`] = [];
  }

  model.value[`add${target}`].push(
    JSON.parse(
      JSON.stringify(target === 'SA' ? addSADetailData : addSkillDetailData),
    ),
  );
};

const removeSAorSkill = (target: 'SA' | 'Skill', index: number) => {
  model.value[`add${target}`].splice(index, 1);
};

const addCharacteristic = (item: AdditionalSkill) => {
  item.characteristic = {
    name: '',
    detail: '',
    type: [],
    addSkill: [],
  };
};

const deleteCharacteristic = (item: AdditionalSkill) => {
  delete item.characteristic;
};
</script>
