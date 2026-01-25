<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="3">
            <v-select
              v-model="card.member"
              label="Member Name"
              :items="Object.values(MEMBER_KEYS)"
              item-text="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.rare"
              label="Rarity"
              :items="RARE"
              item-text="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.styleType"
              label="Style Type"
              :items="Object.values(STYLE_TYPE).map((style) => style.en)"
              item-text="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-select
              v-model="card.mood"
              label="Mood"
              :items="Object.values(MOOD).map((mood) => mood.en)"
              item-text="text"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-text-field
              v-model="card.cardName"
              label="Card Name"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="card.kana"
              label="Kana"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="4">
            <v-text-field
              v-model="card.series"
              label="Series"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="2">
            <v-text-field
              v-model="card.uniqueStatus.smile"
              label="Smile"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="card.uniqueStatus.pure"
              label="Pure"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="card.uniqueStatus.cool"
              label="Cool"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="card.uniqueStatus.mental"
              label="Mental"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="card.uniqueStatus.BP"
              label="BP"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="3">
            <v-select
              v-model="card.period"
              label="Period"
              :items="Object.values(LIMITED).map((style) => style.en)"
              item-text="label"
              item-value="value"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model="card.year"
              label="Year"
              type="number"
              variant="outlined"
              density="compact"
              hide-details="auto"
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
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6">
            <v-text-field
              v-model="card.season"
              label="Add Season"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="card.SAID"
              label="Special Appeal ID"
              class="mb-2"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
            <v-text-field
              v-model="card.SAName"
              label="Special Appeal Name"
              class="mb-2"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
            <v-text-field
              v-model.number="card.SAAP"
              label="Special Appeal AP"
              type="number"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="card.SADetail"
              label="Special Appeal Detail"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="card.skillID"
              label="Skill ID"
              class="mb-2"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
            <v-text-field
              v-model="card.skillName"
              label="Skill Name"
              class="mb-2"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
            <v-text-field
              v-model.number="card.skillAP"
              label="Skill AP"
              type="number"
              required
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="card.skillDetail"
              label="Skill Detail"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="6">
            <v-text-field
              v-model="card.characteristicName"
              label="Characteristic Name"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
          <v-col cols="6">
            <v-textarea
              v-model="card.characteristicDetail"
              label="Characteristic Detail"
              variant="outlined"
              density="compact"
              hide-details="auto"
            />
          </v-col>
        </v-row>
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
          item-text="label"
          item-value="value"
          required
          variant="outlined"
          density="compact"
          hide-details="auto"
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

const store = useStateStore();

const uploadStore = useUploadDataStore();
const dbCardList = ref<Record<string, CardDataByMember>>({});
const editingId = ref('');
const snackbar = ref(false);
const snackbarMessage = ref('');
const snackbarColor = ref('success');
const inputData = ref('');

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
  SAID: '',
  SAName: '',
  SAAP: 0,
  SADetail: '',

  skillID: '',
  skillName: '',
  skillAP: 0,
  skillDetail: '',

  characteristicName: '',
  characteristicDetail: '',
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
          card.value.SAID = foundData.specialAppeal.ID;
          card.value.SAName = foundData.specialAppeal.name;
          card.value.SAAP = foundData.specialAppeal.AP;
          card.value.SADetail = JSON.stringify(
            foundData.specialAppeal.detail,
            null,
            2,
          );
        }

        if (foundData.skill) {
          card.value.skillID = foundData.skill.ID;
          card.value.skillName = foundData.skill.name;
          card.value.skillAP = foundData.skill.AP;
          card.value.skillDetail = JSON.stringify(
            foundData.skill.detail,
            null,
            2,
          );
        }

        if (foundData.characteristic) {
          card.value.characteristicName = foundData.characteristic.name;
          card.value.characteristicDetail = foundData.characteristic.detail;
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
    specialAppeal: {
      ID: card.value.SAID,
      name: card.value.SAName,
      AP: card.value.SAAP,
      detail: card.value.SADetail ? JSON.parse(card.value.SADetail) : [],
    },
    skill: {
      ID: card.value.skillID,
      name: card.value.skillName,
      AP: card.value.skillAP,
      detail: card.value.skillDetail ? JSON.parse(card.value.skillDetail) : [],
    },
    characteristic: {
      name: card.value.characteristicName,
      detail: card.value.characteristicDetail,
      type: [],
    },
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
</script>
