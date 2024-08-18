<template>
<h1>DATA BACKUP</h1>

<v-tabs
  v-model="tabName"
  :items="tabs"
  slider-color="pink"
  density="compact"
  grow
>
  <template v-slot:tab="{ item }">
    <v-tab
      :value="item.value"
      :text="item.text"
    ></v-tab>
  </template>
</v-tabs>

<v-tabs-window v-model="tabName">
  <v-tabs-window-item value="export" class="my-2">
    <v-alert :type="alertContent.export.type" variant="tonal" class="mb-2">
      {{ alertContent.export.text }}
    </v-alert>
    <v-alert type="warning" variant="tonal" class="mb-2">
      Discordでバックアップファイルを共有する際は、Google DriveなどクラウドサーバにアップしたものDiscordにアップするか、PC版のDiscordからアップしてください。
    </v-alert>

    <v-btn block color="pink" prepend-icon="mdi-file-export" @click="makeBackup(store);">バックアップファイル生成</v-btn>
  </v-tabs-window-item>

  <v-tabs-window-item value="import" class="my-2">
    <v-alert :type="alertContent.import.type" variant="tonal" class="mb-2">
      {{ alertContent.import.text }}
    </v-alert>
    <v-file-input
      clearable
      label="File Import"
      v-model="files"
      density="comfortable"
      class="mb-3"
      color="pink"
      accept="application/json"
      @update:modelValue="readFile();"
      hide-details
    ></v-file-input>

    <h3>反映データ</h3>

    <v-row no-gutters class="mb-2">
      <v-col
        cols="6"
        v-for="(name, value) in dataName"
        :key="value"
      >
        <v-checkbox
          v-model="importData"
          density="comfortable"
          color="pink"
          :value="value"
          :label="name"
          :disabled="disabled"
          @change="changeImportData();"
          hide-details
        ></v-checkbox>
      </v-col>
    </v-row>

    <p>選択した反映データをサイト内に反映させます。よろしいですか？</p>

    <v-radio-group inline hide-details v-model="radios" class="mb-2">
      <v-radio label="はい" :value="true" color="pink" :disabled="isFileImportError" class="w-50"></v-radio>
      <v-radio label="いいえ" :value="false" color="pink" :disabled="isFileImportError" class="w-50"></v-radio>
    </v-radio-group>

    <v-btn block color="pink" prepend-icon="mdi-file-import" @click="setBackupData(store);" :disabled="isFileImportError || !radios">反映</v-btn>
  </v-tabs-window-item>

  <v-tabs-window-item value="reset" class="my-2" v-if="false">
    <v-alert :type="alertContent.reset.type" variant="tonal">
      {{ alertContent.reset.text }}
    </v-alert>
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col
          cols="6"
          v-for="(name, value) in dataName"
          :key="value"
        >
          <v-checkbox
            v-model="resetList"
            density="comfortable"
            color="pink"
            :value="value"
            :label="name"
            hide-details
          ></v-checkbox>
        </v-col>
      </v-row>
    </v-container>
    <v-btn block color="pink" prepend-icon="mdi-cached" @click="resetAction(store);" :disabled="resetList.length === 0">リセット</v-btn>
  </v-tabs-window-item>
</v-tabs-window>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      files: [],
      fileReader: null,
      backupData: null,
      disabled: true,
      tabName: null,
      tabs: [
        {text: 'export', value: 'export'},
        {text: 'import', value: 'import'}
      ],
      dataName: {
        card: 'カードデータ',
        cardListFilter: 'カード絞り込み条件',
        musicData: 'ラーニングレベル',
        selectItemList: 'アイテム絞り込み条件',
        sortSettings_card: 'ソート設定(CARD LIST)',
        //sortSettings_music: 'ソート設定(MUSIC LIST)',
        siteSettings: 'サイト設定',
      },
      radios: false,
      alertContent: {
        export: {type: null, text: null},
        import: {type: null, text: null},
        reset: {type: null, text: null}
      },
      alertContentList: {
        export: [
          {
            type: 'info',
            text: '「バックアップファイル生成」ボタンを押すと、バックアップファイルがお使いの端末にダウンロードされます。'
          },
          {
            type: 'success',
            text: 'バックアップに成功しました。'
          }
        ],
        import: [
          {
            type: 'info',
            text: '「File Input」エリアを押して、お使いの端末からバックアップファイルをアップロードしてください（PCの場合は、ファイルをドラッグ&ドロップでもアップロードできます）。'
          },
          {
            type: 'info',
            text: '反映させたいデータを選択後、「反映」ボタンを押してください。'
          },
          {
            type: 'success',
            text: 'バックアップファイルの内容をサイト内に反映しました。'
          }
        ],
        reset: [
          {
            type: 'info',
            text: 'リセットしたいデータを選択後、「リセット」ボタンを押してください。'
          },
          {
            type: 'success',
            text: '選択したデータをリセットしました。'
          }
        ]
      },
      errorText: {
        nonImportDataSelect: {
          type: 'warning',
          text: '反映させたいデータを選んでください。'
        },
        invalidFile: {
          type: 'error',
          text: '正しいバックアップファイルをアップロードしてください。'
        }
      },
      defaultImportData: ['card', 'cardListFilter', 'musicData', 'selectItemList', 'sortSettings_card', /*'sortSettings_music', */'siteSettings'],
      importData: [],
      resetList: []
    }
  },
  created() {
    this.importData = this.defaultImportData;
    this.alertContent.export = this.alertContentList.export[0];
    this.alertContent.import = this.alertContentList.import[0];
    this.alertContent.reset = this.alertContentList.reset[0];
  },
  computed: {
    isFileImportError() {
      return this.files.length === 0 || this.importData.length === 0 || this.alertContent.import.type === 'error';
    }
  },
  mounted() {
    this.fileReader = new FileReader();
    this.fileReader.onload = (event) => {
      if (event.target.result  === "") {
        this.alertContent.import = this.errorText.invalidFile;
      } else {
        this.backupData = JSON.parse(event.target.result);
        this.disabled = false;
      }
    }
  },
  methods: {
    makeBackup(store) {
      const date = new Date();
      const blob = new Blob([JSON.stringify(store.localStorageData)], {type: "text/json"});
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `llllMgr_backup_${date.getFullYear().toString()}${(date.getMonth() + 1).toString().padStart(2, '0')}${(date.getDate()).toString().padStart(2, '0')}${date.getHours().toString()}${date.getMinutes().toString()}${date.getSeconds().toString()}.json`;
      link.click();
      this.alertContent.export = this.alertContentList.export[1];
    },
    readFile() {
      if (this.files.length === 0) {
        this.alertContent.import = this.alertContentList.import[0];
        this.disabled = true;
        return;
      } else if (!(/json$/.test(this.files[0].name))) {
        this.alertContent.import = this.errorText.invalidFile;
        return;
      }

      this.changeImportData();
      this.fileReader.readAsText(this.files[0]);
    },
    setBackupData(store) {
      const sendData = {};

      for (let key of this.importData) {
        if (/^card|cardListFilter$/.test(key)) {
          if (sendData.cardList === undefined) {
            sendData.cardList = {};
          }

          sendData.cardList[key] = this.backupData.cardList[key];
        } else if (/^sortSettings_/.test(key)) {
          key = key.split('_')[1];

          if (sendData.sortSettings === undefined) {
            sendData.sortSettings = {};
          }

          if (this.backupData.sortSettings !== undefined) {
            sendData.sortSettings[`${key}List`] = this.backupData.sortSettings[`${key}List`];
          }
        } else if (/^musicData|selectItemList|siteSettings$/.test(key)) {
          sendData[key] = this.backupData[key] === undefined ? {} : this.backupData[key];
        }
      }

      if (Object.keys(sendData).length === 0) {
        this.alertContent.import = this.errorText.invalidFile;
        return;
      }

      store.getLocalStorage(sendData);
      this.importData = this.defaultImportData;
      this.files = [];
      this.disabled = true;
      this.radios = false;
      this.alertContent.import = this.alertContentList.import[2];
    },
    changeImportData() {
      this.alertContent.import = this.importData.length === 0 ? this.errorText.nonImportDataSelect : this.alertContentList.import[1];
    },
    resetAction(store) {
      store.dataReset(this.resetList);
      this.resetList = [];
      this.alertContent.reset = this.alertContentList.reset[1];
    }
  }
}
</script>