<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row class="mb-3">
          <v-col cols="3">
            <v-select
              v-model="card.memberName"
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
            <v-table density="compact">
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
                    v-for="value in cardParamKey"
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
                    v-for="value in cardParamKey"
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
                  v-model="card.gacha.period"
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
                  v-model="card.split"
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
                  v-model="card.gacha.addSeason"
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
        <div class="d-flex justify-space-between mb-3">
          <div
            v-for="type in ['before', 'after']"
            :key="type"
            class="position-relative cursor-pointer"
            style="width: 49%"
            @click="triggerFile(type)"
          >
            <p class="text-subtitle-1 text-center mb-1">
              {{ type === 'before' ? 'Before' : 'After' }}
            </p>
            <v-img
              :src="
                (type === 'before' ? previewBefore : previewAfter) ||
                card.imageUrl[type] ||
                noImage
              "
              width="100%"
            />
            <v-btn
              v-if="
                (type === 'before' ? previewBefore : previewAfter) ||
                card.imageUrl[type]
              "
              icon="mdi-close"
              size="x-small"
              color="error"
              style="position: absolute; top: 5px; right: 5px; z-index: 1"
              @click.stop="clearImage(type)"
            />
            <input
              :ref="
                (el) =>
                  type === 'before'
                    ? (fileInputBeforeRef = el)
                    : (fileInputAfterRef = el)
              "
              type="file"
              accept="image/webp"
              class="d-none"
              @change="onFileChange($event, type)"
            />
          </div>
        </div>

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

    <EditDetailDataDialog
      v-model="detailDialog"
      :initial-values="currentDetailValues"
      @save="onSaveDetail"
    />

    <v-snackbar v-model="snackbar" :timeout="3000" :color="snackbarColor">
      {{ snackbarMessage }}
    </v-snackbar>

    <v-row>
      <v-col v-for="illust in filteredIllusts" :key="illust.name" cols="2">
        <v-card>
          <v-card-title class="pa-0">
            <v-img :src="illust.url" aspect-ratio="16/9" cover />
          </v-card-title>
          <v-card-text class="py-2">
            {{ illust.name }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { ref as dbRef, onValue, update } from 'firebase/database';
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
  listAll,
} from 'firebase/storage';
import { rtdb, rtdbDev } from '@/firebase';
import { useUploadDataStore } from '@/stores/uploadDataStore';
import { RARE, STYLE_TYPE, MOOD, LIMITED } from '@/constants/cards';
import {
  MEMBER_KEYS,
  MEMBER_IDS,
  conversionIdToKey,
  type MemberKeyValues,
  type MemberIds,
} from '@/constants/memberNames';
import type { Rare } from '@/constants/cards';
import type { CardDataType, CardDataByMember } from '@/types/cardList';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import SkillFormComponent from '@/components/SkillFormComponent.vue';
import EditDetailDataDialog from '@/components/modal/EditDetailDataDialog.vue';
import noImage from '@/assets/images/NO IMAGE_card.webp';

const store = useStateStore();
const skillStore = useSkillStore();

const cardParamKey = ['smile', 'pure', 'cool', 'mental', 'BP'];

const skillDetailOptions = computed(() => {
  return Object.entries(skillStore.skillDetails).map(([key, value]) => ({
    title: value.skillDetailName,
    value: key,
  }));
});

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
const editingList = ref<(number | null)[]>([]);
const editingDetailIndex = ref<number | null>(null);
const isSA = ref(true);
const isCharacteristic = ref(true);

const fileInputBeforeRef = ref<HTMLInputElement | null>(null);
const fileInputAfterRef = ref<HTMLInputElement | null>(null);
const fileBefore = ref<File | null>(null);
const fileAfter = ref<File | null>(null);
const previewBefore = ref<string | null>(null);
const previewAfter = ref<string | null>(null);

const illusts = ref<{ name: string; url: string }[]>([]);

const filteredIllusts = computed(() => {
  if (!card.value.memberName) {
    return [];
  }
  const memberKey = card.value.memberName as MemberKeyValues;
  const prefix = MEMBER_IDS[memberKey];
  if (!prefix) {
    return [];
  }

  return illusts.value.filter((illust) => illust.name.startsWith(`${prefix}_`));
});

const triggerFile = (a: 'before' | 'after') => {
  if (a === 'before') {
    fileInputBeforeRef.value?.click();
  } else {
    fileInputAfterRef.value?.click();
  }
};

const onFileChange = (event: Event, type: 'before' | 'after') => {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    const file = target.files[0];

    // 画像サイズチェック
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const targetWidth = 600;
      const expectedHeight = 389;
      const scale = targetWidth / img.width;
      const calculatedHeight = Math.round(img.height * scale);

      if (calculatedHeight !== expectedHeight) {
        snackbarMessage.value = `画像のアスペクト比が不正です。\n期待値: 600x389相当\n検出: ${img.width}x${img.height} (リサイズ後: 600x${calculatedHeight})`;
        snackbarColor.value = 'warning';
        snackbar.value = true;
      }
      URL.revokeObjectURL(url);
    };
    img.src = url;

    const reader = new FileReader();

    if (type === 'before') {
      fileBefore.value = file;
      reader.onload = (e) => (previewBefore.value = e.target?.result);
    } else {
      fileAfter.value = file;
      reader.onload = (e) => (previewAfter.value = e.target?.result);
    }

    reader.readAsDataURL(file);
  }
};

/**
 * 画像消去処理
 *
 * @property
 * アップロード待機中の画像の右上に表示する×ボタンを押したときの処理。
 *
 * @param type before | after
 */
const clearImage = (type: 'before' | 'after') => {
  if (type === 'before') {
    fileBefore.value = null;
    previewBefore.value = null;
    card.value.imageUrl.before = '';

    if (fileInputBeforeRef.value) {
      fileInputBeforeRef.value.value = '';
    }
  } else {
    fileAfter.value = null;
    previewAfter.value = null;
    card.value.imageUrl.after = '';

    if (fileInputAfterRef.value) {
      fileInputAfterRef.value.value = '';
    }
  }
};

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
    cardParamKey.forEach((key) => {
      const val = Number(editUniqueStatus.value[key]);
      const currentDivisor = /mental|BP/.test(key) ? 1 : divisor;
      card.value.uniqueStatus[key] = isNaN(val)
        ? 0
        : Math.ceil(val / currentDivisor);
    });
  },
  { deep: true },
);

const currentDetailValues = computed(() => {
  if (editingList.value && editingDetailIndex.value !== null) {
    return editingList.value[editingDetailIndex.value] || [];
  } else {
    return [];
  }
});

const openDetailDialog = (list: number[][], index: number) => {
  editingList.value = list;
  editingDetailIndex.value = index;
  detailDialog.value = true;
};

const onSaveDetail = (newValues: (string | null)[]) => {
  if (editingDetailIndex.value !== null) {
    editingList.value[editingDetailIndex.value] = newValues;
  }
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

interface EditCardDataType extends CardDataType {
  year: number;
  split: number;
}

const card = ref<EditCardDataType>({
  cardName: '',
  memberName: MEMBER_KEYS.KAHO,
  rare: RARE[3],
  styleType: STYLE_TYPE.PERFORMER.en,
  mood: MOOD.HAPPY.en,
  gacha: {
    addSeason: '',
    period: LIMITED.normal.en,
  },
  year: 2025,
  split: 1,
  series: '',
  kana: '',
  imageUrl: {
    before: '',
    after: '',
  },
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
    detail: [],
    addSA: [],
    addSkill: [],
  },
  skill: {
    ID: '',
    name: '',
    AP: 0,
    detail: [],
    addSkill: [],
  },
  characteristic: {
    name: '',
    detail: '',
    type: [],
    addSkill: [],
  },
});

/** そのうち消す処理 */
const addCardData = async () => {
  if (!inputData.value) {
    return;
  }

  let parsedData: CardDataType;

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

onMounted(async () => {
  const cardRef = dbRef(rtdbDev, 'card');

  onValue(cardRef, (snapshot) => {
    const data: CardDataByMember | null = snapshot.val();

    if (data) {
      dbCardList.value = data;
    }
  });

  try {
    const storage = getStorage(rtdb.app);
    const illustsRef = storageRef(storage, 'cardIllust');
    const res = await listAll(illustsRef);
    const fetchedIllusts = await Promise.all(
      res.items.map(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        return {
          name: itemRef.name,
          url,
        };
      }),
    );
    illusts.value = fetchedIllusts;
  } catch (error) {
    console.error('Error fetching card illustrations:', error);
    snackbarMessage.value = 'カード画像の読み込みに失敗しました';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
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
      let foundData: CardDataType | null = null;
      let foundMember: MemberKeyValues;
      let foundRare: Rare;

      for (const member in list) {
        for (const rare in list[member]) {
          if (list[member][rare][target.id]) {
            foundData = list[member][rare][target.id];
            foundMember = member;
            foundRare = rare;
            break;
          }
        }

        if (foundData) {
          break;
        }
      }

      if (!foundData) {
        return;
      }

      editingId.value = target.id;
      card.value.memberName = foundMember;
      card.value.rare = foundRare;
      card.value.cardName = foundData.cardName;
      card.value.kana = foundData.kana;
      card.value.series = foundData.series || '';
      card.value.styleType = foundData.styleType;
      card.value.mood = foundData.mood;

      const periodEntry = Object.entries(LIMITED).find(
        ([key, _]) => key === foundData.gacha.period,
      );
      card.value.gacha.period = periodEntry
        ? periodEntry[1].en
        : LIMITED.normal.en;
      card.value.gacha.addSeason = foundData.gacha.addSeason;

      card.value.uniqueStatus = { ...foundData.uniqueStatus };

      if (foundData.specialAppeal) {
        card.value.specialAppeal.ID = foundData.specialAppeal.ID;
        card.value.specialAppeal.name = foundData.specialAppeal.name;
        card.value.specialAppeal.AP = foundData.specialAppeal.AP;
        card.value.specialAppeal.detail = foundData.specialAppeal.detail || [];
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

      if (foundData.imageUrl) {
        card.value.imageUrl.before = foundData.imageUrl.before || '';
        card.value.imageUrl.after = foundData.imageUrl.after || '';
      } else {
        card.value.imageUrl.before = '';
        card.value.imageUrl.after = '';
      }

      uploadStore.setEditTarget('', '');
    }
  },
  { immediate: true },
);

function generateNewCardId(): string {
  if (editingId.value) {
    return editingId.value;
  }

  const memberKey: MemberKeyValues = card.value.memberName;
  const prefix: MemberIds = MEMBER_IDS[memberKey];

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
  const periodKey = getPeriodKey(card.value.gacha.period);

  const cardData = {
    cardName: card.value.cardName,
    styleType: card.value.styleType,
    mood: card.value.mood,
    series: card.value.series,
    kana: card.value.kana,
    gacha: {
      addSeason: card.value.gacha.addSeason,
      period: periodKey,
    },
    uniqueStatus: {
      smile: card.value.uniqueStatus.smile,
      pure: card.value.uniqueStatus.pure,
      cool: card.value.uniqueStatus.cool,
      mental: card.value.uniqueStatus.mental,
      BP: card.value.uniqueStatus.BP,
    },
    imageUrl: {
      ...(card.value.imageUrl.before && { before: '' }),
      after: '',
    },
    ...(isSA.value && {
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
    [cardId]: cardData,
  };

  return JSON.stringify(result, null, 2);
});

const resizeImage = (
  file: File,
  targetWidth: number,
  expectedHeight?: number,
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();

    reader.onload = (e) => {
      img.src = e.target?.result as string;
    };
    reader.onerror = (e) => reject(e);

    img.onload = () => {
      const scale = targetWidth / img.width;
      const canvas = document.createElement('canvas');
      canvas.width = targetWidth;
      canvas.height = Math.round(img.height * scale);

      if (expectedHeight && canvas.height !== expectedHeight) {
        reject(
          new Error(
            `画像サイズが不正です。\n期待値: ${targetWidth}x${expectedHeight}\n実際: ${canvas.width}x${canvas.height}`,
          ),
        );
        return;
      }

      const ctx = canvas.getContext('2d');

      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob((blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error('Canvas to Blob failed'));
          }
        }, 'image/webp');
      } else {
        reject(new Error('Canvas context not available'));
      }
    };
  });
};

const addToStore = async () => {
  try {
    const data: CardDataType = JSON.parse(jsonOutput.value);
    const rare = card.value.rare;
    const id = Object.keys(data[rare])[0];
    const cardData: CardDataType = data[rare][id];
    const member = card.value.memberName;

    const storage = getStorage(rtdb.app);
    const fileResizeAndUpload = async (type: 'before' | 'after') => {
      const file = type === 'before' ? fileBefore.value : fileAfter.value;

      if (!file) {
        return;
      }

      const resizedBlob = await resizeImage(file, 600, 389);
      const fileRef = storageRef(storage, `cardIllust/${id}_${type}.webp`);
      await uploadBytes(fileRef, resizedBlob);
      cardData.imageUrl[type] = await getDownloadURL(fileRef);
    };

    if (fileAfter.value) {
      await fileResizeAndUpload('after');
    } else {
      throw new Error('覚醒後画像(After)を設定してください');
    }

    if (fileBefore.value) {
      await fileResizeAndUpload('before');
    }

    const updates: Record<string, CardDataType> = {};
    updates[`card/${member}/${rare}/${id}`] = cardData;

    await update(dbRef(rtdbDev), updates);

    snackbarMessage.value = 'Dev環境にデータをアップロードしました';
    snackbarColor.value = 'success';
    snackbar.value = true;
    editingId.value = '';
    clearImage('before');
    clearImage('after');
  } catch (e) {
    console.error(e);
    snackbarMessage.value = e.message || 'アップロードに失敗しました';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};
</script>
