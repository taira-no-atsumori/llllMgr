<template>
  <div class="d-flex mb-3">
    <div class="pr-3" style="width: 90%">
      <v-row>
        <v-col cols="2" class="mb-1">
          <v-select
            v-model="selectedKanaRow"
            :items="kanaRows"
            label="Filter by Kana"
            variant="outlined"
            density="compact"
            hide-details
            class="mb-3"
          />
        </v-col>
        <v-col cols="10">
          <v-select
            v-model="model.name"
            :items="skillNames"
            :label="`${labelPrefix} Name`"
            required
            variant="outlined"
            density="compact"
            hide-details
            class="mb-3"
            @update:model-value="onNameChange"
          />
        </v-col>
      </v-row>
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
    </div>
    <div style="width: 10%">
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
        class="mb-4"
      />
      <v-btn text="Reset" color="primary" block @click="reset" />
    </div>
  </div>

  <div v-if="type === 'SA' && model.ID" class="mb-3">
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
      </v-col>
    </template>

    <!-- Add SA Button -->
    <v-col v-if="model.addSA && currentTypes.includes('addSA')" cols="12">
      <v-btn
        color="yellow"
        prepend-icon="mdi-plus"
        text="Add SA"
        block
        @click="addSAorSkill('SA')"
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
      </v-col>
    </template>

    <!-- Add Skill Button -->
    <v-col v-if="model.addSkill && currentTypes.includes('addCard')" cols="12">
      <v-btn
        color="yellow"
        prepend-icon="mdi-plus"
        text="Add Skill"
        block
        @click="addSAorSkill('Skill')"
      />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, watch } from 'vue';
import { ref as dbRef, onValue } from 'firebase/database';
import { rtdb } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import SkillFormComponent from '@/components/SkillFormComponent.vue';
import CharacteristicAreaComponent from '@/components/CharacteristicAreaComponent.vue';
import { KANA_OPTIONS } from '@/constants/kana';
import { getRow } from '@/utils/stringUtil';
import type { SkillDetail } from '@/types/cardList';
import type { SkillType } from '@/types/skill';

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

const fetchSkillList = () => {
  const skillRef = dbRef(rtdb, 'skills/skill');

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

const selectedKanaRow = ref('all');

const kanaRows = [{ title: 'All', value: 'all' }, ...KANA_OPTIONS];

const skillNames = computed(() => {
  const list: { title: string; value: string }[] = [];
  const seen = new Set<string>();

  for (const skillID in skillList.value) {
    const skillGroup = skillList.value[skillID];
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

const addCharacteristic = (item: any) => {
  item.characteristic = {
    name: '',
    detail: '',
    type: [],
    addSkill: [],
  };
};

const deleteCharacteristic = (item: any) => {
  delete item.characteristic;
};

const reset = () => {
  let initialID = '';
  let initialName = '';
  let initialDetail: (string | number | null)[] = [];

  if (skillNames.value.length > 0) {
    const firstSkill = skillNames.value[0];
    const skillData = skillList.value[firstSkill.value];

    if (skillData) {
      initialID = skillData.ID;
      initialName = skillData.name;

      if (skillData.text) {
        const count = Math.max(0, skillData.text.length - 1);
        initialDetail = new Array(count)
          .fill(null)
          .map(() => [...defaultDetail]);
      }
    }
  }

  model.value = {
    ...model.value,
    ID: initialID,
    name: initialName,
    AP: 0,
    detail: initialDetail,
    addSA: [],
    addSkill: [],
  };
  isEXAP.value = false;
};
</script>
