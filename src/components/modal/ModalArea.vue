<template>
  <v-dialog
    v-model="store.dialog"
    scrollable
    :max-width="maxWidth[store.showModalName]"
  >
    <v-sheet class="pa-3">
      <div v-if="store.showModalName === 'selectCard'">
        <SelectCard />
      </div>
      <div v-else-if="store.showModalName === 'setCardData'">
        <SetCardData />
      </div>
      <!-- <div v-else-if="store.showModalName === 'possessionCardSetting'">
        <CardList />
      </div> -->
      <div v-else-if="store.showModalName === 'CardListFilter'">
        <CardListFilter />
      </div>
      <!--<div v-else-if="store.showModalName === 'MusicListFilter'">
        <MusicListFilter />
      </div>-->
      <div v-else-if="store.showModalName === 'masteryLevel'">
        <MasteryLevel />
      </div>
      <div v-else-if="store.showModalName === 'setLeaningLevel'">
        <SetLeaningLevel />
      </div>
      <div v-else-if="store.showModalName === 'share'">
        <ShareDialog />
      </div>
      <div v-else-if="store.showModalName === 'backup'">
        <BackupDialog />
      </div>
      <div v-else-if="store.showModalName === 'settings'">
        <SettingsDialog />
      </div>
      <div v-else-if="store.showModalName === 'login'">
        <Login />
      </div>
      <div class="mt-2 text-center">
        <v-btn
          prepend-icon="mdi-close"
          :theme="settingsStore.siteSettings.all.darkMode"
          data-button="modalClose"
          text="CLOSE"
          @click="store.switchDialog(false)"
        />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { useStateStore } from '@/stores/stateStore';
import { useSettingsStore } from '@/stores/settingsStore';

// import { CardSetting } from './PossessionCardList.vue'
import SetCardData from './SetCardData.vue';
import CardListFilter from './CardListFilter.vue';
import SelectCard from './SelectCard.vue';
import SetLeaningLevel from './SetLeaningLevel.vue';
import MasteryLevel from './MasteryLevel.vue';
import ShareDialog from './ShareDialog.vue';
import BackupDialog from './BackupDialog.vue';
import SettingsDialog from './SettingsDialog.vue';
import Login from './Login.vue';

const store = useStateStore();
const settingsStore = useSettingsStore();

const maxWidth = {
  selectCard: 1600,
  setCardData: 900,
  possessionCardSetting: 'auto',
  CardListFilter: 1600,
  MusicListFilter: 1600,
  masteryLevel: 600,
  setLeaningLevel: 600,
  share: 400,
  backup: 600,
  settings: 600,
  login: 600,
};
</script>
