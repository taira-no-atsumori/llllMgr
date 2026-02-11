<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="2">
            <v-select
              v-model="selectedKanaRow"
              label="五十音"
              :items="kanaOptions"
              clearable
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="7">
            <v-select
              v-model="selectedPreset"
              label="Preset"
              :items="presetItems"
              item-title="title"
              item-value="value"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="3">
            <v-btn
              color="primary"
              text="Set"
              :disabled="!selectedPreset"
              @click="applyPreset"
            />
            <v-btn
              color="warning"
              text="Reset"
              class="mx-2"
              @click="resetForm"
            />
            <v-btn
              color="yellow"
              prepend-icon="mdi-image-sync"
              text="get"
              :disabled="!music.musicName"
              @click="fetchImageByTitle"
            />
          </v-col>

          <v-col cols="12">
            <v-divider />
          </v-col>

          <v-col cols="12">
            <v-switch
              v-model="isIdOverride"
              label="ID Override"
              color="pink"
              :disabled="music.ID_preset === music.ID_original"
              class="pl-2"
              density="compact"
              hide-details
            />
          </v-col>
          <!-- Music IDは自動生成されるため、表示のみ -->
          <v-col cols="2">
            <v-text-field
              :model-value="isIdOverride ? music.ID_preset : music.ID_original"
              label="Music ID"
              readonly
              prepend-inner-icon="mdi-information"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="5">
            <v-text-field
              v-model="music.musicName"
              label="Music Name"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="5">
            <v-text-field
              v-model="music.musicData.kana"
              label="Kana"
              required
              :rules="kanaRules"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-radio-group
              v-model="singerTab"
              label="Singer"
              inline
              density="compact"
              hide-details
            >
              <v-radio label="Group" value="group" color="pink" class="mr-3" />
              <v-radio label="Solo" value="solo" color="pink" />
            </v-radio-group>
          </v-col>

          <v-col cols="6">
            <v-select
              v-model="music.musicData.singer_group"
              :items="
                Object.entries(GROUP_MEMBER).map(([key, group]) => ({
                  title: group.NAME,
                  value: key,
                }))
              "
              item-title="title"
              item-value="value"
              label="Group"
              :disabled="singerTab !== 'group'"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="music.musicData.singer_solo"
              :items="getMemberKeys()"
              label="Solo"
              multiple
              :disabled="singerTab !== 'solo'"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="3">
            <v-text-field
              v-model="releaseDateInput"
              label="Release Date"
              type="date"
              :disabled="isReleaseDateUnknown"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="3">
            <v-switch
              v-model="isReleaseDateUnknown"
              label="Unknown Date"
              color="pink"
              density="compact"
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="music.musicData.numbering"
              label="Numbering"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="2">
            <v-text-field
              v-model.number="music.musicData.BPM.original"
              label="BPM (Original)"
              max="999"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.musicData.BPM.inGame"
              label="BPM (In Game)"
              max="999"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="2">
            <v-text-field
              v-model.number="music.musicData.time.minuts"
              label="Time (minuts)"
              type="number"
              max="9"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.musicData.time.seconds"
              label="Time (seconds)"
              type="number"
              max="59"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.musicData.time.miliSeconds"
              label="Time (miliSeconds)"
              type="number"
              step="0.1"
              max="99.9"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="2">
            <v-switch
              v-model="music.musicData.cover"
              label="Cover"
              color="pink"
              class="pl-1"
              density="compact"
              hide-details
            />
          </v-col>

          <v-col cols="2">
            <v-select
              v-model="music.attribute"
              label="Attribute"
              :items="Object.values(ATTRIBUTE).map((attr) => attr.en)"
              item-text="label"
              item-value="value"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.BHcount"
              label="BH Count"
              type="number"
              max="999"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.level"
              label="Level"
              type="number"
              max="1"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="2">
            <v-text-field
              v-model.number="music.term"
              label="Term"
              type="number"
              min="0"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-select
              v-model="music.center"
              label="Center"
              :items="soloSingerList"
              item-text="label"
              item-value="value"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>
          <v-col cols="6">
            <v-select
              v-model="music.bonusSkill"
              label="Bonus Skill"
              :items="
                Object.entries(BONUS_SKILL_NAMES).map(([_, value]) => value)
              "
              item-text="label"
              item-value="value"
              required
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-btn
              v-if="!hasScoreData"
              text="Include Score Data (Difficulty Level & Max Combo)"
              prepend-icon="mdi-plus"
              block
              @click="hasScoreData = true"
            />
            <v-card v-else>
              <v-card-title class="mb-2">
                <v-row>
                  <v-col cols="6">Difficulty Level</v-col>
                  <v-col cols="6" class="d-flex">
                    Max Combo
                    <v-spacer />
                    <v-btn
                      icon="mdi-close"
                      variant="text"
                      density="compact"
                      color="error"
                      @click="hasScoreData = false"
                    />
                  </v-col>
                </v-row>
              </v-card-title>

              <v-card-text>
                <v-row>
                  <v-col
                    v-for="value in ['difficultyLevel', 'maxCombo']"
                    :key="value"
                    cols="6"
                  >
                    <v-row>
                      <v-col
                        v-for="difficulty in [
                          'NORMAL',
                          'HARD',
                          'EXPERT',
                          'MASTER',
                        ]"
                        :key="difficulty"
                        cols="3"
                      >
                        <v-text-field
                          v-model.number="music.scoreData[value][difficulty]"
                          :label="difficulty"
                          type="number"
                          max="99"
                          min="1"
                          density="compact"
                          variant="outlined"
                          hide-details
                        />
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>

      <v-col cols="4">
        <v-row>
          <v-col cols="12">
            <v-btn
              color="primary"
              prepend-icon="mdi-content-copy"
              text="Copy"
              class="mr-5"
              @click="navigator.clipboard.writeText(jsonOutput.value)"
            />
            <v-btn
              color="green"
              prepend-icon="mdi-cloud-upload"
              text="Dev Upload"
              :disabled="!isValidInput"
              @click="addToStore"
            />
          </v-col>

          <v-col cols="12" align="center">
            <v-img
              :src="previewImageUrl || music.imageURL || noImage"
              :width="300"
              class="mb-3 cursor-pointer"
              @click="triggerFileInput"
            />
            <v-btn
              :disabled="!selectedFile"
              color="error"
              prepend-icon="mdi-close"
              text="Deselect"
              @click="cancelUpload"
            />
            <input
              ref="fileInputRef"
              type="file"
              accept="image/webp"
              class="d-none"
              @change="onNativeFileChange"
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="music.imageURL"
              label="Image URL"
              prepend-icon="mdi-link-variant"
              density="compact"
              variant="outlined"
              hide-details
            />
          </v-col>

          <v-col v-if="music.imageURL" cols="12" class="text-center">
            <!-- <v-btn
              color="error"
              text="Clear"
              prepend-icon="mdi-close"
              class="mt-3 mr-3"
              @click="cancelUpload"
            />
            <v-btn
              color="primary"
              text="Upload"
              prepend-icon="mdi-cloud-upload"
              class="mt-3"
              :loading="isUploading"
              @click="uploadImage"
            /> -->
          </v-col>

          <v-col cols="12">
            <v-textarea
              label="Result"
              auto-grow
              readonly
              rows="42"
              :model-value="jsonOutput"
            />
          </v-col>
        </v-row>
      </v-col>
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
  uploadBytes,
  getDownloadURL,
  listAll,
} from 'firebase/storage';
import { rtdb, rtdbDev } from '@/firebase';
import { ATTRIBUTE } from '@/constants/music';
import {
  MEMBER_KEYS,
  GROUP_NAME,
  GROUP_MEMBER,
  getMemberKeys,
  makeMemberFullName,
} from '@/constants/memberNames';
import { BONUS_SKILL_NAMES } from '@/constants/bonusSkills';
import { useUploadDataStore } from '@/stores/uploadDataStore';
import type { MusicItem } from '@/types/musicList';
import { useStateStore } from '@/stores/stateStore';
import noImage from '@/assets/images/cdJacket/NO IMAGE.webp';

const isIdOverride = ref(false);
const singerTab = ref('group');
const isUploading = ref(false);
const fileInputRef = ref<File[] | null>(null);
const fileInputModel = ref<File[]>([]);
const selectedFile = ref<File | null>(null);
const previewImageUrl = ref<string | null>(null);
const hasScoreData = ref(false);
const snackbar = ref(false);
const snackbarMessage = ref('データを一時保存しました');
const snackbarColor = ref('success');
const isReleaseDateUnknown = ref(false);
const selectedPreset = ref<string | null>(null);
const selectedKanaRow = ref<string | null>(null);
const kanaOptions = [
  'あ',
  'か',
  'さ',
  'た',
  'な',
  'は',
  'ま',
  'や',
  'ら',
  'わ',
  '英数',
];
const uploadStore = useUploadDataStore();
const store = useStateStore();

const dbMusicList = ref<MusicItem>({});

onMounted(() => {
  const musicRef = dbRef(rtdbDev, 'music');
  onValue(musicRef, (snapshot) => {
    const data = snapshot.val();

    if (data) {
      dbMusicList.value = data;

      // 初期表示時（データ未入力時）にIDを更新する
      if (music.value.musicName === '') {
        const dbCount = Object.keys(data).length;
        const newPendingMusicCount = uploadStore.pendingList.filter(
          (item) => item.type === 'music' && !data[Object.keys(item.data)[0]],
        ).length;
        const nextId = `m_${dbCount + newPendingMusicCount + 1}`;
        music.value.ID = nextId;
        music.value.ID_original = nextId;
        music.value.ID_preset = nextId;
      }
    }
  });
});

watch(
  [() => uploadStore.editTarget, dbMusicList],
  ([target, list]) => {
    if (
      target &&
      target.type === 'music' &&
      target.id &&
      list &&
      Object.keys(list).length > 0 &&
      list[target.id]
    ) {
      selectedPreset.value = target.id;
      applyPreset();
      uploadStore.setEditTarget('', '');
    }
  },
  { immediate: true },
);

const presetItems = computed(() => {
  let items = Object.entries(dbMusicList.value);

  if (selectedKanaRow.value) {
    items = items.filter(([_, item]) => {
      const k = item.musicData.kana;

      if (!k) {
        return false;
      }

      const char = k.charAt(0);

      switch (selectedKanaRow.value) {
        case '英数':
          return !/[ぁ-んゔ]/.test(char);
        case 'あ':
          return /[ぁ-おゔ]/.test(char);
        case 'か':
          return /[か-ご]/.test(char);
        case 'さ':
          return /[さ-ぞ]/.test(char);
        case 'た':
          return /[た-ど]/.test(char);
        case 'な':
          return /[な-の]/.test(char);
        case 'は':
          return /[は-ぽ]/.test(char);
        case 'ま':
          return /[ま-も]/.test(char);
        case 'や':
          return /[や-よ]/.test(char);
        case 'ら':
          return /[ら-ろ]/.test(char);
        case 'わ':
          return /[わ-ん]/.test(char);
        default:
          return true;
      }
    });
  }

  return items.map(([key, val]) => ({
    title: val.title,
    value: key,
  }));
});

const getInitialMusicData = () => {
  const dbCount = Object.keys(dbMusicList.value).length;
  const newPendingMusicCount = uploadStore.pendingList.filter(
    (item) =>
      item.type === 'music' && !dbMusicList.value[Object.keys(item.data)[0]],
  ).length;
  const nextId = `m_${dbCount + newPendingMusicCount + 1}`;

  return {
    ID: nextId,
    ID_original: nextId,
    ID_preset: nextId,
    musicName: '',
    musicData: {
      kana: '',
      singer: GROUP_NAME.HASUNOSORA,
      singer_group: 'HASUNOSORA_105',
      singer_solo: [MEMBER_KEYS.KAHO],
      releaseDate: {
        year: 2026,
        month: 1,
        date: 1,
      },
      numbering: '',
      BPM: {
        original: 150,
        inGame: 150,
      },
      time: {
        minuts: 1,
        seconds: 0,
        miliSeconds: 0,
      },
      cover: false,
    },
    imageURL: '',
    attribute: ATTRIBUTE.SMILE.en,
    BHcount: 0,
    level: 0,
    term: 105,
    center: MEMBER_KEYS.KAHO,
    bonusSkill: BONUS_SKILL_NAMES.BEAT_HEART_UP,
    singingMembers: [] as string[],
    scoreData: {
      difficultyLevel: { NORMAL: 1, HARD: 1, EXPERT: 1, MASTER: 1 },
      maxCombo: { NORMAL: 1, HARD: 1, EXPERT: 1, MASTER: 1 },
    },
  };
};

const music = ref(getInitialMusicData());

const KANA_REGEX = /^[\u3040-\u309F\u30FC0-9]*$/;

const kanaRules = [
  (v: string) => KANA_REGEX.test(v) || 'ひらがなと数字のみ入力可能です',
];

const releaseDateInput = computed({
  get: () => {
    const d = music.value.musicData.releaseDate;
    return `${d.year}-${String(d.month).padStart(2, '0')}-${String(
      d.date,
    ).padStart(2, '0')}`;
  },
  set: (val: string) => {
    if (!val) return;
    const [year, month, date] = val.split('-').map(Number);
    music.value.musicData.releaseDate.year = year;
    music.value.musicData.releaseDate.month = month;
    music.value.musicData.releaseDate.date = date;
  },
});

watch(isReleaseDateUnknown, (val) => {
  if (val) {
    music.value.musicData.releaseDate = {
      year: 2099,
      month: 12,
      date: 31,
    };
  }
});

const isValidInput = computed(() => {
  return (
    music.value.musicName !== '' &&
    music.value.musicData.kana !== '' &&
    KANA_REGEX.test(music.value.musicData.kana)
  );
});

const soloSingerList = computed(() => {
  if (singerTab.value === 'group') {
    const groupKey = music.value.musicData.singer_group;
    return GROUP_MEMBER[groupKey].MEMBERS;
  } else {
    return music.value.musicData.singer_solo;
  }
});

/** プリセット処理 */
const applyPreset = () => {
  if (!selectedPreset.value) {
    return;
  }

  const preset = dbMusicList.value[selectedPreset.value];

  if (!preset) {
    return;
  }

  isIdOverride.value = true;
  music.value.ID_preset = selectedPreset.value;
  music.value.ID = isIdOverride.value
    ? selectedPreset.value
    : music.value.ID_original;
  music.value.musicName = preset.title;
  music.value.musicData.kana = preset.musicData.kana;
  music.value.musicData.singer = preset.musicData.singer;

  if (Object.values(GROUP_NAME).includes(preset.musicData.singer)) {
    singerTab.value = 'group';

    const groupNameEntry = Object.entries(GROUP_NAME).find(
      ([_, name]) => name === preset.musicData.singer,
    );
    const groupNameKey = groupNameEntry ? groupNameEntry[0] : null;

    const matchingGroup = Object.entries(GROUP_MEMBER).find(
      ([_, group]) =>
        group.KEY === groupNameKey &&
        JSON.stringify(group.MEMBERS) === JSON.stringify(preset.singingMembers),
    );

    if (matchingGroup) {
      music.value.musicData.singer_group = matchingGroup[0];
    }
  } else {
    singerTab.value = 'solo';
    music.value.musicData.singer_group =
      getInitialMusicData().musicData.singer_group;
  }

  music.value.musicData.singer_solo = preset.singingMembers;

  music.value.musicData.releaseDate = { ...preset.musicData.releaseDate };
  isReleaseDateUnknown.value =
    music.value.musicData.releaseDate.year === 2099 &&
    music.value.musicData.releaseDate.month === 12 &&
    music.value.musicData.releaseDate.date === 31;
  music.value.musicData.numbering = preset.musicData.numbering;
  music.value.musicData.BPM = { ...preset.musicData.BPM };
  music.value.musicData.cover = preset.musicData.cover;

  const totalSeconds = preset.musicData.time;
  music.value.musicData.time.minuts = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  music.value.musicData.time.seconds = seconds;
  music.value.musicData.time.miliSeconds = parseFloat(
    (
      (totalSeconds - music.value.musicData.time.minuts * 60 - seconds) *
      10
    ).toFixed(1),
  );

  music.value.imageURL = preset.imageURL || '';
  music.value.attribute = preset.attribute;
  music.value.BHcount = preset.BHcount;
  music.value.level = preset.level;
  music.value.term = preset.term;
  music.value.center = preset.center;
  music.value.bonusSkill = preset.bonusSkill;
  music.value.singingMembers = [...preset.singingMembers];

  if (preset.scoreData) {
    hasScoreData.value = true;
    music.value.scoreData = JSON.parse(JSON.stringify(preset.scoreData));
  } else {
    hasScoreData.value = false;
    music.value.scoreData = {
      difficultyLevel: { NORMAL: 1, HARD: 1, EXPERT: 1, MASTER: 1 },
      maxCombo: { NORMAL: 1, HARD: 1, EXPERT: 1, MASTER: 1 },
    };
  }

  selectedPreset.value = null;
  fileInputRef.value = null;
};

/** 入力データリセット処理 */
const resetForm = () => {
  isIdOverride.value = false;
  selectedPreset.value = null;
  hasScoreData.value = false;
  fileInputRef.value = null;
  singerTab.value = 'group';
  music.value = getInitialMusicData();
  isReleaseDateUnknown.value = false;
};

/** データ保持 */
const addToStore = async () => {
  try {
    const data = JSON.parse(jsonOutput.value);
    const id = Object.keys(data)[0];

    isUploading.value = true;

    if (selectedFile.value) {
      const storage = getStorage(rtdb.app);
      const fileRef = storageRef(
        storage,
        `cdJacket/${selectedFile.value.name}`,
      );

      try {
        await getDownloadURL(fileRef);
        if (
          !confirm(
            `同名のファイル (${selectedFile.value.name}) が既に存在します。\n上書きしますか？`,
          )
        ) {
          isUploading.value = false;
          return;
        }
      } catch (_) {
        // ファイルが存在しない場合は何もしない
      }

      const snapshot = await uploadBytes(fileRef, selectedFile.value);
      const url = await getDownloadURL(snapshot.ref);
      data[id].imageURL = url;

      if (!store.imageCache['llllMgr_musicImageUrls']) {
        store.imageCache['llllMgr_musicImageUrls'] = {};
      }
      store.imageCache['llllMgr_musicImageUrls'][id] = url;
    }

    const updates: Record<string, MusicItem> = {};
    updates[`music/${id}`] = data[id];
    await update(dbRef(rtdbDev), updates);

    snackbarMessage.value = 'Dev環境にデータをアップロードしました';
    snackbarColor.value = 'success';
    snackbar.value = true;
    cancelUpload();
  } catch (e) {
    console.error('Failed to parse JSON', e);
    snackbarMessage.value = 'アップロードに失敗しました';
    snackbarColor.value = 'error';
    snackbar.value = true;
  } finally {
    isUploading.value = false;
  }
};

const fetchImageByTitle = async () => {
  if (!music.value.musicName) {
    return;
  }

  const storage = getStorage(rtdb.app);
  const listRef = storageRef(storage, 'cdJacket');

  try {
    const res = await listAll(listRef);
    const targetItem = res.items.find((itemRef) => {
      const name = itemRef.name;
      const lastDotIndex = name.lastIndexOf('.');
      const title =
        lastDotIndex !== -1 ? name.substring(0, lastDotIndex) : name;
      return title === music.value.musicName;
    });

    if (targetItem) {
      const url = await getDownloadURL(targetItem);
      music.value.imageURL = url;

      if (!store.imageCache['llllMgr_musicImageUrls']) {
        store.imageCache['llllMgr_musicImageUrls'] = {};
      }
      store.imageCache['llllMgr_musicImageUrls'][music.value.ID] = url;

      snackbarMessage.value = '画像URLを取得しました';
      snackbarColor.value = 'success';
      snackbar.value = true;
    } else {
      snackbarMessage.value = '画像が見つかりませんでした';
      snackbarColor.value = 'warning';
      snackbar.value = true;
    }
  } catch (e) {
    console.error('Failed to fetch image', e);
    snackbarMessage.value = '画像の取得に失敗しました';
    snackbarColor.value = 'error';
    snackbar.value = true;
  }
};

// const uploadImage = async () => {
//   const targetFile = selectedFile.value;
//   if (!targetFile) return;

//   isUploading.value = true;
//   const storage = getStorage(rtdbDev.app);
//   const fileRef = storageRef(storage, `cdJacket/${targetFile.name}`);

//   try {
//     const snapshot = await uploadBytes(fileRef, targetFile);
//     const url = await getDownloadURL(snapshot.ref);
//     music.value.imageURL = url;

//     if (!store.imageCache['llllMgr_musicImageUrls']) {
//       store.imageCache['llllMgr_musicImageUrls'] = {};
//     }
//     store.imageCache['llllMgr_musicImageUrls'][music.value.ID] = url;

//     cancelUpload();
//   } catch (e) {
//     console.error('Failed to upload image', e);
//   } finally {
//     isUploading.value = false;
//   }
// };

const handleFileSelect = (file: File | File[]) => {
  const targetFile = Array.isArray(file) ? file[0] : file;
  if (!targetFile) {
    cancelUpload();
    return;
  }

  selectedFile.value = targetFile;
  const reader = new FileReader();
  reader.onload = (e) => {
    previewImageUrl.value = e.target?.result as string;
  };
  reader.readAsDataURL(targetFile);
};

const cancelUpload = () => {
  selectedFile.value = null;
  previewImageUrl.value = null;
  fileInputModel.value = [];

  if (fileInputRef.value) {
    fileInputRef.value.value = '';
  }
};

const triggerFileInput = () => {
  fileInputRef.value?.click();
};

const onNativeFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;

  if (target.files && target.files.length > 0) {
    handleFileSelect(target.files[0]);
  }
};

/** リアルタイムにJSONを生成 */
const jsonOutput = computed(() => {
  // minutes, seconds, miliSecondsを秒単位に変換
  const timeInSeconds =
    (music.value.musicData.time.minuts || 0) * 60 +
    (music.value.musicData.time.seconds || 0) +
    (music.value.musicData.time.miliSeconds || 0) / 10;

  const musicData = {
    [isIdOverride.value ? music.value.ID_preset : music.value.ID_original]: {
      title: music.value.musicName,
      musicData: {
        kana: music.value.musicData.kana,
        singer:
          singerTab.value === 'group'
            ? GROUP_NAME[GROUP_MEMBER[music.value.musicData.singer_group].KEY]
            : music.value.musicData.singer_solo
                .map((a) => makeMemberFullName(a))
                .join('、'),
        releaseDate: {
          year: music.value.musicData.releaseDate.year,
          month: music.value.musicData.releaseDate.month,
          date: music.value.musicData.releaseDate.date,
        },
        numbering: music.value.musicData.numbering,
        BPM: {
          original: music.value.musicData.BPM.original,
          inGame: music.value.musicData.BPM.inGame,
        },
        time: timeInSeconds,
        cover: music.value.musicData.cover,
      },
      imageURL: music.value.imageURL,
      attribute: music.value.attribute,
      BHcount: music.value.BHcount,
      level: music.value.level,
      term: music.value.term,
      center: music.value.center,
      bonusSkill: music.value.bonusSkill,
      singingMembers:
        singerTab.value === 'group'
          ? GROUP_MEMBER[music.value.musicData.singer_group].MEMBERS
          : music.value.musicData.singer_solo,
    },
  };

  // scoreDataはチェックが入っている場合のみ追加
  if (hasScoreData.value) {
    musicData[
      isIdOverride.value ? music.value.ID_preset : music.value.ID_original
    ].scoreData = {
      difficultyLevel: {
        NORMAL: music.value.scoreData.difficultyLevel.NORMAL,
        HARD: music.value.scoreData.difficultyLevel.HARD,
        EXPERT: music.value.scoreData.difficultyLevel.EXPERT,
        MASTER: music.value.scoreData.difficultyLevel.MASTER,
      },
      maxCombo: {
        NORMAL: music.value.scoreData.maxCombo.NORMAL,
        HARD: music.value.scoreData.maxCombo.HARD,
        EXPERT: music.value.scoreData.maxCombo.EXPERT,
        MASTER: music.value.scoreData.maxCombo.MASTER,
      },
    };
  }

  return JSON.stringify(musicData, null, 2);
});
</script>
