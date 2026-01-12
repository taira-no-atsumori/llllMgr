<template>
  <h1>DATA BACKUP / RESET</h1>

  <v-tabs
    v-model="tabName"
    :items="tabs"
    slider-color="pink"
    density="compact"
    grow
  >
    <template #tab="{ item }">
      <v-tab :value="item.value" :text="item.text" />
    </template>
  </v-tabs>

  <v-tabs-window v-model="tabName">
    <v-tabs-window-item value="export" class="my-2">
      <v-alert :type="alertContent.export.type" variant="tonal" class="mb-2">
        {{ alertContent.export.text }}
      </v-alert>
      <v-alert type="warning" variant="tonal" class="mb-2">
        Discordでバックアップファイルを共有する際は、Google
        DriveなどクラウドサーバにアップしたものDiscordにアップするか、PC版のDiscordからアップしてください。
      </v-alert>

      <v-btn
        block
        color="pink"
        prepend-icon="mdi-file-export"
        text="バックアップファイル生成"
        @click="makeBackup()"
      />
    </v-tabs-window-item>

    <v-tabs-window-item value="import" class="my-2">
      <v-alert :type="alertContent.import.type" variant="tonal" class="mb-2">
        {{ alertContent.import.text }}
      </v-alert>
      <v-file-input
        v-model="files"
        clearable
        label="File Import"
        density="comfortable"
        class="mb-3"
        color="pink"
        accept="application/json"
        hide-details
        @update:model-value="readFile()"
      />

      <h3>反映データ</h3>

      <v-row no-gutters class="mb-2">
        <v-col v-for="(name, value) in dataName" :key="value" cols="6">
          <v-checkbox
            v-model="importData"
            density="comfortable"
            color="pink"
            :value="value"
            :label="name"
            :disabled="disabled"
            hide-details
            @change="changeImportData()"
          />
        </v-col>
      </v-row>

      <p>選択した反映データをサイト内に反映させます。よろしいですか？</p>

      <v-radio-group v-model="radios" inline hide-details class="mb-2">
        <v-radio
          label="はい"
          :value="true"
          color="pink"
          :disabled="isFileImportError"
          class="w-50"
        />
        <v-radio
          label="いいえ"
          :value="false"
          color="pink"
          :disabled="isFileImportError"
          class="w-50"
        />
      </v-radio-group>

      <v-btn
        block
        color="pink"
        prepend-icon="mdi-file-import"
        text="反映"
        :disabled="isFileImportError || !radios"
        @click="setBackupData()"
      />
    </v-tabs-window-item>

    <v-tabs-window-item value="reset" class="my-2">
      <v-alert type="info" variant="tonal" class="mb-2">
        リセットしたいデータを選択後、チェックを入れて「リセット」ボタンを押してください。
      </v-alert>

      <v-row no-gutters class="mb-4">
        <v-col v-for="(name, value) in dataName" :key="value" cols="6">
          <v-checkbox
            v-model="resetList"
            density="comfortable"
            color="pink"
            :value="value"
            :label="name"
            hide-details
          />
        </v-col>
      </v-row>

      <v-alert class="mb-2" type="warning" variant="tonal">
        選択したデータを初期化します。実行後データは復元できません。<br />
        よろしければ、チェックを入れてください。
      </v-alert>

      <v-checkbox
        v-model="isReset"
        class="mb-4"
        color="pink"
        density="compact"
        label="選択したデータを初期化する。"
        hide-details
        :disabled="resetList.length === 0"
      />

      <v-btn
        block
        color="pink"
        prepend-icon="mdi-cached"
        text="リセット"
        :disabled="!isReset"
        :loading="isLoading"
        @click="resetAction()"
      />
    </v-tabs-window-item>

    <v-tabs-window-item value="select" class="my-2" />
  </v-tabs-window>

  <v-snackbar v-model="snackBar.reset" color="success" :timeout="4000">
    選択したデータをリセットしました。
  </v-snackbar>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue';
import { useStateStore } from '@/stores/stateStore';

const store = useStateStore();

const files = ref([]);
let fileReader = null;
const backupData = ref(null);
const disabled = ref(true);
const tabName = ref(null);
const tabs = [
  { text: 'export', value: 'export' },
  { text: 'import', value: 'import' },
  { text: 'reset', value: 'reset' },
];
const dataName = {
  card: 'カードデータ',
  cardListFilter: 'カード絞り込み条件',
  musicData: 'ラーニングレベル',
  selectItemList: 'アイテム絞り込み条件',
  sortSettings_card: 'ソート設定(CARD LIST)',
  sortSettings_music: 'ソート設定(MUSIC LIST)',
  siteSettings: 'サイト設定',
};
const radios = ref(false);
const isReset = ref(false);
const isLoading = ref(false);
const snackBar = reactive({
  export: false,
  import: false,
  reset: false,
  select: false,
});
const alertContent = reactive({
  export: { type: null, text: null },
  import: { type: null, text: null },
  reset: { type: null, text: null },
});

const alertContentList = {
  export: [
    {
      type: 'info',
      text: '「バックアップファイル生成」ボタンを押すと、バックアップファイルがお使いの端末にダウンロードされます。',
    },
    { type: 'success', text: 'バックアップに成功しました。' },
  ],
  import: [
    {
      type: 'info',
      text: '「File Input」エリアを押して、お使いの端末からバックアップファイルをアップロードしてください（PCの場合は、ファイルをドラッグ&ドロップでもアップロードできます）。',
    },
    {
      type: 'info',
      text: '反映させたいデータを選択後、「反映」ボタンを押してください。',
    },
    {
      type: 'success',
      text: 'バックアップファイルの内容をサイト内に反映しました。',
    },
  ],
  reset: [
    {
      type: 'info',
      text: 'リセットしたいデータを選択後、チェックを入れて「リセット」ボタンを押してください。',
    },
    { type: 'success', text: '選択したデータをリセットしました。' },
  ],
};

const errorText = {
  nonImportDataSelect: {
    type: 'warning',
    text: '反映させたいデータを選んでください。',
  },
  invalidFile: {
    type: 'error',
    text: '正しいバックアップファイルをアップロードしてください。',
  },
};

const defaultImportData = [
  'card',
  'cardListFilter',
  'musicData',
  'selectItemList',
  'sortSettings_card',
  'sortSettings_music',
  'siteSettings',
];

const importData = ref([...defaultImportData]);
const resetList = ref([]);

alertContent.export = alertContentList.export[0];
alertContent.import = alertContentList.import[0];
alertContent.reset = alertContentList.reset[0];

const isFileImportError = computed(
  () =>
    !files.value ||
    files.value.length === 0 ||
    importData.value.length === 0 ||
    alertContent.import.type === 'error'
);

onMounted(() => {
  if (!fileReader) {
    fileReader = new FileReader();
    fileReader.onload = (event) => {
      try {
        const result = event.target?.result;
        if (typeof result !== 'string' || result === '') {
          throw new Error('Invalid file content');
        }
        backupData.value = JSON.parse(result);
        disabled.value = false;
      } catch (_) {
        alertContent.import = errorText.invalidFile;
        backupData.value = null;
        disabled.value = true;
      }
    };
  }
});

const makeBackup = () => {
  const cardList = JSON.parse(JSON.stringify(store.card));

  for (const memberName in cardList) {
    for (const rare in cardList[memberName]) {
      for (const cardId in cardList[memberName][rare]) {
        cardList[memberName][rare][cardId] = {
          fluctuationStatus:
            cardList[memberName][rare][cardId].fluctuationStatus,
          favorite: cardList[memberName][rare][cardId].favorite,
        };
      }
    }
  }

  const date = new Date();
  const blob = new Blob(
    [
      JSON.stringify({
        musicData: {
          musicLevel: store.musicLevel,
        },
        cardList: {
          card: cardList,
          cardListFilter: store.search,
        },
        selectItemList: store.selectItemList,
        siteSettings: store.siteSettings,
        sortSettings: store.sortSettings,
      }),
    ],
    {
      type: 'text/json',
    }
  );
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `llllMgr_backup_${date.getFullYear().toString()}${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date
    .getHours()
    .toString()}${date.getMinutes().toString()}${date
    .getSeconds()
    .toString()}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  alertContent.export = alertContentList.export[1];
};

const readFile = () => {
  const file = files.value;

  if (!file) {
    alertContent.import = alertContentList.import[0];
    disabled.value = true;
    backupData.value = null;
    return;
  }

  if (!file.name.endsWith('.json')) {
    alertContent.import = errorText.invalidFile;
    disabled.value = true;
    backupData.value = null;
    return;
  }

  // FileReaderが初期化されていることを確認
  if (!fileReader) {
    fileReader = new FileReader();
    fileReader.onload = (event) => {
      try {
        const result = event.target?.result;
        if (typeof result !== 'string' || result === '') {
          throw new Error('Invalid file content');
        }
        backupData.value = JSON.parse(result);
        disabled.value = false;
        changeImportData();
      } catch (_) {
        alertContent.import = errorText.invalidFile;
        backupData.value = null;
        disabled.value = true;
      }
    };
  }

  fileReader.readAsText(file);
  changeImportData();
};

const setBackupData = () => {
  const sendData = {};

  for (const key of importData.value) {
    if (/^card|cardListFilter$/.test(key)) {
      if (sendData.cardList === undefined) {
        sendData.cardList = {};
      }

      if (backupData.value?.cardList?.[key]) {
        sendData.cardList[key] = backupData.value.cardList[key];
      }
    } else if (/^sortSettings_/.test(key)) {
      const newKey = key.split('_')[1];
      if (sendData.sortSettings === undefined) {
        sendData.sortSettings = {};
      }

      if (backupData.value?.sortSettings?.[`${newKey}List`]) {
        sendData.sortSettings[`${newKey}List`] =
          backupData.value.sortSettings[`${newKey}List`];
      }
    } else if (/^musicData|selectItemList|siteSettings$/.test(key)) {
      sendData[key] = backupData.value?.[key] ?? {};
    }
  }

  if (Object.keys(sendData).length === 0) {
    alertContent.import = errorText.invalidFile;
    return;
  }

  store.getLocalStorage(sendData);
  importData.value = [...defaultImportData];
  files.value = [];
  disabled.value = true;
  radios.value = false;
  alertContent.import = alertContentList.import[2];
};

const changeImportData = () => {
  alertContent.import =
    importData.value.length === 0
      ? errorText.nonImportDataSelect
      : alertContentList.import[1];
};

const resetAction = () => {
  isLoading.value = true;
  store.dataReset(resetList.value);
  resetList.value = [];
  alertContent.reset = alertContentList.reset[1];
  snackBar.reset = true;
  isReset.value = false;
  isLoading.value = false;
};
</script>
