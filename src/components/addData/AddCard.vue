<template>
  <v-container fluid class="pa-0">
    <v-btn text="Transform SkillList" @click="transformSkillList" />
    <v-row>
      <v-col cols="8">
        <v-row class="mb-3">
          <v-col cols="3">
            <v-select
              v-model="card.member"
              label="Member Name"
              :items="Object.values(MEMBER_KEYS)"
              item-title="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.rare"
              label="Rarity"
              :items="RARE"
              item-title="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.styleType"
              label="Style Type"
              :items="Object.values(STYLE_TYPE).map((style) => style.en)"
              item-title="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.mood"
              label="Mood"
              :items="Object.values(MOOD).map((mood) => mood.en)"
              item-title="text"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>

          <v-col cols="4">
            <v-text-field
              v-model="card.cardName"
              label="Card Name"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="card.kana"
              label="Kana"
              required
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="card.series"
              label="Series"
              variant="outlined"
              density="compact"
              hide-details
            />
          </v-col>
        </v-row>

        <v-card class="mb-3">
          <v-card-title class="mb-2">Unique Status</v-card-title>

          <v-card-text>
            <v-table>
              <thead>
                <tr>
                  <th>Training Level</th>
                  <th>Smile</th>
                  <th>Pure</th>
                  <th>Cool</th>
                  <th>Mental</th>
                  <th>BP</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: calc(100% / 6)">
                    <v-select
                      v-model="selectTrainingLevel"
                      :items="trainingLevelList"
                      variant="underlined"
                      density="compact"
                      hide-details
                    />
                  </td>
                  <td
                    v-for="value in ['smile', 'pure', 'cool', 'mental', 'BP']"
                    :key="value"
                    style="width: calc(100% / 6)"
                  >
                    <v-text-field
                      v-model="editUniqueStatus[value]"
                      type="number"
                      max="99999"
                      min="0"
                      variant="underlined"
                      density="compact"
                      hide-details
                    />
                  </td>
                </tr>
                <tr>
                  <td style="width: calc(100% / 6)"></td>
                  <td
                    v-for="value in ['smile', 'pure', 'cool', 'mental', 'BP']"
                    :key="value"
                    style="width: calc(100% / 6)"
                  >
                    <v-text-field
                      v-model="card.uniqueStatus[value]"
                      type="number"
                      max="99999"
                      min="0"
                      variant="underlined"
                      density="compact"
                      hide-details
                      readonly
                    />
                  </td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>

        <v-card class="mb-3">
          <v-card-title class="mb-2">Gacha</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="3">
                <v-select
                  v-model="card.period"
                  label="Period"
                  :items="Object.values(LIMITED).map((style) => style.en)"
                  item-title="label"
                  item-value="value"
                  required
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col cols="2">
                <v-text-field
                  v-model="card.year"
                  label="Year"
                  type="number"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col cols="1">
                <v-text-field
                  v-model="card.sprit"
                  label="Sprit"
                  type="number"
                  min="0"
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="card.season"
                  label="Add Season"
                  required
                  variant="outlined"
                  density="compact"
                  hide-details
                />
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>

        <div class="mb-3">
          <v-btn
            v-if="!isSA"
            text="Add Special Appeal"
            prepend-icon="mdi-plus"
            block
            @click="isSA = true"
          />
          <v-card v-else>
            <v-card-title class="d-flex text-no-wrap mb-2">
              Special Appeal
              <v-spacer />
              <v-btn
                icon="mdi-close"
                variant="text"
                density="compact"
                color="error"
                @click="deleteSpecialAppeal"
              />
            </v-card-title>

            <v-card-text>
              <SkillFormComponent
                v-model="card.specialAppeal"
                type="SA"
                :auto-complete-ap="(id) => findAPFromDb(id, 'SA')"
                @open-detail="openDetailDialog"
              />
            </v-card-text>
          </v-card>
        </div>

        <v-card class="mb-3">
          <v-card-title class="text-no-wrap mb-2">Skill</v-card-title>
          <v-card-text>
            <SkillFormComponent
              v-model="card.skill"
              type="skill"
              :auto-complete-ap="(id) => findAPFromDb(id, 'skill')"
              @open-detail="openDetailDialog"
            />
          </v-card-text>
        </v-card>

        <div>
          <v-btn
            v-if="!isCharacteristic"
            text="Add Characteristic"
            prepend-icon="mdi-plus"
            block
            @click="isCharacteristic = true"
          />
          <v-card v-else>
            <v-card-title class="d-flex text-no-wrap">
              Characteristic
              <v-spacer />
              <v-btn
                icon="mdi-close"
                variant="text"
                density="compact"
                color="error"
                @click="deleteCharacteristic"
              />
            </v-card-title>

            <v-card-text>
              <v-text-field
                v-model="card.characteristic.name"
                label="Characteristic Name"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-3"
              />
              <v-textarea
                v-model="card.characteristic.detail"
                label="Characteristic Detail"
                variant="outlined"
                density="compact"
                hide-details
                class="mb-3"
              />

              <p class="text-subtitle-1 mb-3">Type</p>

              <v-row>
                <v-col
                  v-for="(_, index) in card.characteristic.type"
                  :key="index"
                  cols="4"
                  class="d-flex align-center"
                >
                  <v-select
                    v-model="card.characteristic.type[index]"
                    :items="skillDetailOptions"
                    item-title="title"
                    item-value="value"
                    :label="`Type ${index + 1}`"
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
                    @click="card.characteristic.type.splice(index, 1)"
                  />
                </v-col>
                <v-col cols="4">
                  <v-btn
                    text="Add Type"
                    prepend-icon="mdi-plus"
                    block
                    @click="card.characteristic.type.push('')"
                  />
                </v-col>
              </v-row>

              <template
                v-for="(item, index) in card.characteristic.addSkill"
                :key="index"
              >
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
                          v-model="card.characteristic.addSkill[index]"
                          type="addSkill"
                          :index="index"
                          :auto-complete-ap="(id) => findAPFromDb(id, 'skill')"
                          @open-detail="openDetailDialog"
                        />
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-col>
              </template>

              <v-btn
                v-if="card.characteristic.type.includes('addCard')"
                color="yellow"
                prepend-icon="mdi-plus"
                text="Add Skill"
                block
                class="mt-3"
                @click="addCharacteristicSkill"
              />
            </v-card-text>
          </v-card>
        </div>
      </v-col>

      <v-col cols="4">
        <v-textarea
          label="Result"
          auto-grow
          readonly
          :model-value="jsonOutput"
        />

        <v-btn
          color="primary"
          prepend-icon="mdi-content-copy"
          text="COPY"
          class="mr-2"
          @click="navigator.clipboard.writeText(jsonOutput)"
        />
        <v-btn
          color="green"
          prepend-icon="mdi-cloud-upload"
          text="Dev Upload"
          @click="addToStore"
        />
      </v-col>

      <v-col cols="12">
        <v-divider />
      </v-col>

      <v-col cols="2">
        <v-select
          v-model="card.rare"
          label="Rarity"
          :items="RARE"
          item-title="label"
          item-value="value"
          required
          variant="outlined"
          density="compact"
          hide-details
        />
      </v-col>
      <v-col cols="8">
        <v-textarea v-model="inputData" />
      </v-col>
      <v-col cols="2">
        <v-btn
          color="green"
          prepend-icon="mdi-cloud-upload"
          :text="`${store.isDev ? 'Dev' : 'Prod'} Upload`"
          @click="addCardData()"
      /></v-col>
    </v-row>

    <v-dialog v-model="detailDialog" max-width="1200px">
      <v-card>
        <v-card-title>Edit Detail Data</v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="2">
              <v-text-field
                v-model="initNumber"
                label="Init Number"
                type="number"
                min="0"
                step="0.1"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="2">
              <v-switch
                v-model="is14"
                label="14"
                color="pink"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="2">
              <v-text-field
                v-model="decimalPoint"
                label="Decimal Point"
                type="number"
                max="9"
                min="0"
                variant="outlined"
                density="compact"
                hide-details
              />
            </v-col>
            <v-col cols="3">
              <div class="d-flex align-center">
                <v-select
                  v-model="selectedDataFormat"
                  :items="
                    Object.entries(dataFormatType).map(([key, label]) => ({
                      title: label,
                      value: key,
                    }))
                  "
                  item-title="title"
                  item-value="value"
                  label="Data Format Type"
                  variant="outlined"
                  density="compact"
                  hide-details
                  class="mr-3"
                />
                <v-btn
                  text="Set"
                  color="primary"
                  prepend-icon="mdi-plus"
                  @click="copyToDetail(selectedDataFormat)"
                />
              </div>
            </v-col>

            <v-col cols="12">
              <v-table density="compact">
                <thead>
                  <tr>
                    <th class="text-center">Level</th>
                    <th class="text-center">倍率</th>
                    <th
                      v-for="(value, key) in dataFormatType"
                      :key="key"
                      class="text-center"
                    >
                      {{ value }}
                    </th>
                    <th class="text-center" style="width: 125px">Result</th>
                    <th class="text-center">
                      <v-checkbox
                        v-model="selectAll"
                        color="pink"
                        density="compact"
                        hide-details
                        @update:model-value="toggleAll"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody class="text-center">
                  <tr v-for="(value, i) in multipliers" :key="i">
                    <td>{{ i + 1 }}</td>
                    <td>{{ value }}</td>
                    <td>{{ Math.trunc(fixFloat(baseNumber * value)) }}</td>
                    <td>
                      {{
                        Math.floor(
                          fixFloat(
                            baseNumber * value * Math.pow(10, decimalPoint),
                          ),
                        ) / Math.pow(10, decimalPoint)
                      }}
                    </td>
                    <td>
                      {{
                        Math.round(
                          fixFloat(
                            baseNumber * value * Math.pow(10, decimalPoint),
                          ),
                        ) / Math.pow(10, decimalPoint)
                      }}
                    </td>
                    <td>
                      {{
                        Math.ceil(
                          fixFloat(
                            baseNumber * value * Math.pow(10, decimalPoint),
                          ),
                        ) / Math.pow(10, decimalPoint)
                      }}
                    </td>
                    <td>
                      <v-text-field
                        v-model="detailInput[i]"
                        variant="underlined"
                        density="compact"
                        hide-details
                        @keyup.enter="editDetailData"
                      >
                        <template #append-inner>
                          <v-btn
                            size="x-small"
                            variant="text"
                            color="grey"
                            class="pa-0"
                            style="min-width: 24px"
                            text="null"
                            @click="detailInput[i] = 'null'"
                          />
                        </template>
                      </v-text-field>
                    </td>
                    <td>
                      <v-checkbox
                        v-model="selectedRows[i]"
                        color="pink"
                        density="compact"
                        hide-details
                        @update:model-value="updateQuestionMark(i)"
                      />
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="error" text="Cancel" @click="detailDialog = false" />
          <v-btn color="primary" text="Edit" @click="editDetailData" />
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { ref as dbRef, onValue, update } from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
} from 'firebase/storage';
import { rtdb, rtdbDev } from '@/firebase';
import { useUploadDataStore } from '@/stores/uploadDataStore';
import { RARE, STYLE_TYPE, MOOD, LIMITED } from '@/constants/cards';
import {
  MEMBER_KEYS,
  MEMBER_IDS,
  conversionIdToKey,
} from '@/constants/memberNames';
import type { CardDataType, CardDataByMember } from '@/types/card';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_LIST } from '@/constants/skillList';
import SkillFormComponent from '@/components/SkillFormComponent.vue';

const store = useStateStore();
const skillStore = useSkillStore();

const multipliers = [
  1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.1, 2.2, 2.3, 2.5,
];
const dataFormatType = {
  trunc: '整数',
  floor: '切り捨て',
  round: '四捨五入',
  ceil: '切り上げ',
};

const skillDetailOptions = computed(() => {
  return Object.entries(skillStore.skillDetails).map(([key, value]) => ({
    title: value.skillDetailName,
    value: key,
  }));
});

const findAPFromDb = (id: string, type: 'SA' | 'skill'): number | undefined => {
  for (const member in dbCardList.value) {
    for (const rare in dbCardList.value[member]) {
      const cardData = dbCardList.value[member][rare];

      for (const cId in cardData) {
        const c = cardData[cId];

        if (type === 'SA' && c.specialAppeal?.ID === id) {
          return c.specialAppeal.AP;
        }

        if (type === 'skill' && c.skill?.ID === id) {
          return c.skill.AP;
        }
      }
    }
  }

  return undefined;
};

const deleteSpecialAppeal = () => {
  isSA.value = false;
};

const deleteCharacteristic = () => {
  isCharacteristic.value = false;
};

const uploadStore = useUploadDataStore();
const dbCardList = ref<Record<string, CardDataByMember>>({});
const editingId = ref('');
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');
const inputData = ref('');
const detailDialog = ref(false);
const detailInput = ref([]);
const editingList = ref<any[]>([]);
const editingDetailIndex = ref<number | null>(null);
const initNumber = ref(0);
const is14 = ref(false);
const isSA = ref(true);
const isCharacteristic = ref(true);

const selectedRows = ref<boolean[]>([]);
const selectAll = ref(false);
const selectedDataFormat = ref('ceil');

const decimalPoint = ref(2);

const trainingLevelList = ['standard', 'max'];
const selectTrainingLevel = ref(trainingLevelList[1]);
const editUniqueStatus = ref({
  smile: 0,
  pure: 0,
  cool: 0,
  mental: 0,
  BP: 100,
});

watch(
  [editUniqueStatus, selectTrainingLevel],
  () => {
    const divisor = selectTrainingLevel.value === 'max' ? 1.2 : 1;
    (['smile', 'pure', 'cool', 'mental', 'BP'] as const).forEach((key) => {
      const val = Number(editUniqueStatus.value[key]);
      const currentDivisor = /mental|BP/.test(key) ? 1 : divisor;
      card.value.uniqueStatus[key] = isNaN(val)
        ? 0
        : Math.ceil(val / currentDivisor);
    });
  },
  { deep: true },
);

const baseNumber = computed(() => {
  return is14.value ? initNumber.value / 2.5 : initNumber.value;
});

const updateQuestionMark = (index: number) => {
  const currentVal = String(detailInput.value[index] || '');
  if (selectedRows.value[index]) {
    if (!currentVal.endsWith('?')) {
      detailInput.value[index] = currentVal + '?';
    }
  } else {
    if (currentVal.endsWith('?')) {
      detailInput.value[index] = currentVal.slice(0, -1);
    }
  }
};

const toggleAll = () => {
  selectedRows.value = selectedRows.value.map(() => selectAll.value);
  selectedRows.value.forEach((_, i) => updateQuestionMark(i));
};

const fixFloat = (num: number) => parseFloat(num.toFixed(10));

const copyToDetail = (type: 'trunc' | 'floor' | 'round' | 'ceil') => {
  const p = Math.pow(10, decimalPoint.value);
  detailInput.value = multipliers.map((value, i) => {
    const num = baseNumber.value * value;
    let result: number | string = 0;

    switch (type) {
      case 'trunc':
        result = Math.trunc(fixFloat(num));
        break;
      case 'floor':
        result = Math.floor(fixFloat(num * p)) / p;
        break;
      case 'round':
        result = Math.round(fixFloat(num * p)) / p;
        break;
      case 'ceil':
        result = Math.ceil(fixFloat(num * p)) / p;
        break;
      default:
        result = 0;
    }

    if (selectedRows.value[i]) {
      return String(result) + '?';
    }
    return result;
  });
};

const openDetailDialog = (list: any[], index: number) => {
  editingList.value = list;
  editingDetailIndex.value = index;
  const rawValues = JSON.parse(JSON.stringify(list[index]));
  detailInput.value = rawValues.map((v: any) => (v === null ? 'null' : v));
  selectedRows.value = detailInput.value.map((val: string | number) =>
    String(val).endsWith('?'),
  );
  selectAll.value = selectedRows.value.every(Boolean);
  detailDialog.value = true;
};

const editDetailData = () => {
  const values = detailInput.value.map((v: any) => {
    const strVal = String(v);
    return strVal === 'null' ? null : strVal;
  });

  if (editingDetailIndex.value !== null) {
    editingList.value[editingDetailIndex.value] = values;
  } else {
    editingList.value.push(values);
  }

  detailDialog.value = false;
};

const addCharacteristicSkill = () => {
  card.value.characteristic.addSkill.push(
    JSON.parse(JSON.stringify(addSkillDetailData)),
  );
};

const removeCharacteristicSkill = (index: number) => {
  card.value.characteristic.addSkill.splice(index, 1);
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

const card = ref({
  cardName: '',
  member: MEMBER_KEYS.KAHO,
  rare: RARE[3],
  styleType: STYLE_TYPE.PERFORMER.en,
  mood: MOOD.HAPPY.en,
  period: LIMITED.normal.en,
  season: '',
  year: 2025,
  sprit: 1,
  series: '',
  kana: '',
  uniqueStatus: {
    smile: 0,
    pure: 0,
    cool: 0,
    mental: 0,
    BP: 100,
  },
  specialAppeal: {
    ID: '',
    name: '',
    AP: 0,
    EXAP: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    detail: [] as string[],
    addSA: [] as any[],
    addSkill: [] as any[],
  },
  skill: {
    ID: '',
    name: '',
    AP: 0,
    detail: [] as string[],
    addSkill: [] as any[],
  },
  characteristic: {
    name: '',
    detail: '',
    type: [] as string[],
    addSkill: [] as any[],
  },
});

const addCardData = async () => {
  if (!inputData.value) {
    return;
  }

  let parsedData;

  try {
    parsedData = JSON.parse(inputData.value);
  } catch (_) {
    try {
      parsedData = new Function('return ' + inputData.value)();
      inputData.value = JSON.stringify(parsedData, null, 2);
    } catch (__) {
      snackbarMessage.value = 'JSONのフォーマットが不正です';
      snackbarColor.value = 'error';
      snackbar.value = true;
      return;
    }
  }

  try {
    const db = store.isDev ? rtdbDev : rtdb;
    const storage = getStorage(rtdb.app);
    const updates: Record<string, any> = {};

    for (const [cardId, data] of Object.entries(parsedData)) {
      const rarity = card.value.rare;

      let beforeUrl = '';
      let afterUrl = '';

      try {
        beforeUrl = await getDownloadURL(
          storageRef(storage, `cardIllust/${cardId}_before.webp`),
        );
      } catch (_) {
        console.warn(`Before image not found for ${cardId}`);
      }

      try {
        afterUrl = await getDownloadURL(
          storageRef(storage, `cardIllust/${cardId}_after.webp`),
        );
      } catch (_) {
        console.warn(`After image not found for ${cardId}`);
      }

      const cardData = {
        ...(data as object),
        imageUrl: {
          before: beforeUrl,
          after: afterUrl,
        },
      };

      updates[
        `cards/${conversionIdToKey(cardId.split('_')[0])}/${rarity}/${cardId}`
      ] = cardData;
    }

    await update(dbRef(db), updates);
    snackbarMessage.value = `Uploaded to ${store.isDev ? 'Dev' : 'Prod'}`;
    snackbarColor.value = 'success';
    snackbar.value = true;
  } catch (error) {
    console.error(error);
    snackbarMessage.value = 'Error uploading card data';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

onMounted(() => {
  const cardRef = dbRef(rtdbDev, 'card');

  onValue(cardRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      dbCardList.value = data;
    }
  });
});

watch(
  [() => uploadStore.editTarget, dbCardList],
  ([target, list]) => {
    if (
      target &&
      target.type === 'card' &&
      target.id &&
      list &&
      Object.keys(list).length > 0
    ) {
      let foundData = null;
      let foundMember = '';
      let foundRare = '';

      for (const member in list) {
        for (const rare in list[member]) {
          if (list[member][rare][target.id]) {
            foundData = list[member][rare][target.id];
            foundMember = member;
            foundRare = rare;
            break;
          }
        }
        if (foundData) break;
      }

      if (foundData) {
        editingId.value = target.id;
        card.value.member = foundMember;
        card.value.rare = foundRare;
        card.value.cardName = foundData.cardName;
        card.value.kana = foundData.kana;
        card.value.series = foundData.series || '';
        card.value.styleType = foundData.styleType;
        card.value.mood = foundData.mood;

        const periodEntry = Object.entries(LIMITED).find(
          ([key, _]) => key === foundData.gacha.period,
        );
        card.value.period = periodEntry ? periodEntry[1].en : LIMITED.normal.en;
        card.value.season = foundData.gacha.addSeason;

        card.value.uniqueStatus = { ...foundData.uniqueStatus };

        if (foundData.specialAppeal) {
          card.value.specialAppeal.ID = foundData.specialAppeal.ID;
          card.value.specialAppeal.name = foundData.specialAppeal.name;
          card.value.specialAppeal.AP = foundData.specialAppeal.AP;
          card.value.specialAppeal.detail =
            foundData.specialAppeal.detail || [];
        }

        if (foundData.skill) {
          card.value.skill.ID = foundData.skill.ID;
          card.value.skill.name = foundData.skill.name;
          card.value.skill.AP = foundData.skill.AP;
          card.value.skill.detail = foundData.skill.detail || [];
        }

        if (foundData.characteristic) {
          card.value.characteristic.name = foundData.characteristic.name;
          card.value.characteristic.detail = foundData.characteristic.detail;
          card.value.characteristic.type = foundData.characteristic.type || [];
        }

        uploadStore.setEditTarget('', '');
      }
    }
  },
  { immediate: true },
);

function generateNewCardId(): string {
  if (editingId.value) return editingId.value;

  const memberKey = card.value.member;
  const prefix = MEMBER_IDS[memberKey];
  if (!prefix) return '???_000';

  let maxNum = 0;
  const memberData = dbCardList.value[memberKey];

  if (memberData) {
    for (const rare in memberData) {
      for (const cardId in memberData[rare]) {
        if (cardId.startsWith(prefix + '_')) {
          const num = parseInt(cardId.split('_')[1], 10);

          if (!isNaN(num) && num > maxNum) {
            maxNum = num;
          }
        }
      }
    }
  }

  return `${prefix}_${String(maxNum + 1).padStart(3, '0')}`;
}

// periodのEN値からLIMITEDのキーを取得
function getPeriodKey(periodEn: string): string {
  const entry = Object.entries(LIMITED).find(
    ([, value]) => value.en === periodEn,
  );
  return entry ? entry[0] : 'normal';
}

// リアクティブにJSONを生成
const jsonOutput = computed(() => {
  const cardId = generateNewCardId();
  const periodKey = getPeriodKey(card.value.period);

  const cardData = {
    cardName: card.value.cardName,
    styleType: card.value.styleType,
    mood: card.value.mood,
    ...(card.value.series && { series: card.value.series }),
    kana: card.value.kana,
    gacha: {
      addSeason: card.value.season,
      period: periodKey,
    },
    uniqueStatus: {
      smile: card.value.uniqueStatus.smile,
      pure: card.value.uniqueStatus.pure,
      cool: card.value.uniqueStatus.cool,
      mental: card.value.uniqueStatus.mental,
      BP: card.value.uniqueStatus.BP,
    },
    ...(isSA.value &&
      card.value.specialAppeal.name && {
        specialAppeal: {
          ID: card.value.specialAppeal.ID,
          name: card.value.specialAppeal.name,
          AP: card.value.specialAppeal.AP,
          detail: card.value.specialAppeal.detail,
        },
      }),
    skill: {
      ID: card.value.skill.ID,
      name: card.value.skill.name,
      AP: card.value.skill.AP,
      detail: card.value.skill.detail,
    },
    ...(isCharacteristic.value && {
      characteristic: {
        name: card.value.characteristic.name,
        detail: card.value.characteristic.detail,
        type: card.value.characteristic.type,
      },
    }),
  };

  const result = {
    [card.value.rare]: {
      [cardId]: cardData,
    },
  };

  return JSON.stringify(result, null, 2);
});

const addToStore = async () => {
  try {
    const data: CardDataType = JSON.parse(jsonOutput.value);
    const rare = Object.keys(data)[0];
    const id = Object.keys(data[rare])[0];
    const cardData = data[rare][id];
    const member = card.value.member;

    const updates: Record<string, CardDataType> = {};
    updates[`card/${member}/${rare}/${id}`] = cardData;

    await update(dbRef(rtdbDev), updates);

    snackbarMessage.value = 'Dev環境にデータをアップロードしました';
    snackbarColor.value = 'success';
    snackbar.value = true;
    editingId.value = '';
  } catch (e) {
    console.error(e);
    snackbarMessage.value = 'アップロードに失敗しました';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

// スキル関数名とカナのマッピング
const skillNameToKanaMap: Record<string, string> = {
  ハートキャプチャ: 'はーときゃぷちゃ',
  ラブアトラクト: 'らぶあとらくと',
  ボルテージゲイン: 'ぼるてーじげいん',
  ボルテージブースト: 'ぼるてーじぶーすと',
  メンタルリカバー: 'めんたるりかばー',
  メンタルプロテクト: 'めんたるぷろてくと',
  エクステンドハンド: 'えくすてんどはんど',
  ドロー: 'どろー',
  HP回復: 'えいちぴーかいふく',
  HPゲイン: 'えいちぴーげいん',
  ストレスダメージ: 'すとれすだめーじ',
  SPARK: 'すぱーく',
  カームハート: 'かーむはーと',
  カームアトラクト: 'かーむあとらくと',
  カームアトラクション: 'かーむあとらくしょん',
  カームブースト: 'かーむぶーすと',
  グルーヴィハート: 'ぐるーゔぃはーと',
  グルーヴィアトラクト: 'ぐるーゔぃあとらくと',
  グルーヴィアトラクション: 'ぐるーゔぃあとらくしょん',
  グルーヴィブースト: 'ぐるーゔぃぶーすと',
  チルハート: 'ちるはーと',
  チルアトラクト: 'ちるあとらくと',
  チルアトラクション: 'ちるあとらくしょん',
  チルブースト: 'ちるぶーすと',
};

const transformSkillList = () => {
  const transformed: Record<string, any> = {};

  // SKILL_LIST を反復処理
  for (const [skillFunctionName, patterns] of Object.entries(SKILL_LIST)) {
    let kana = skillNameToKanaMap[skillFunctionName] || '';

    if (!kana && /^[\u3040-\u30FF]+$/.test(skillFunctionName)) {
      kana = skillFunctionName.replace(/[\u30A1-\u30F6]/g, (match) =>
        String.fromCharCode(match.charCodeAt(0) - 0x60),
      );
    }

    // 各パターンを反復処理
    for (const [patternKey, patternData] of Object.entries(patterns)) {
      transformed[patternKey] = {
        name: skillFunctionName,
        kana: kana,
        ...patternData,
      };
    }
  }

  console.log(JSON.stringify(transformed, null, 2));

  snackbarMessage.value = 'スキルリストを変換してconsoleに出力しました';
  snackbarColor.value = 'success';
  snackbar.value = true;
};
</script>
