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
      <div v-else-if="store.showModalName === 'possessionCardSetting'">
        <CardList />
      </div>
      <div v-else-if="store.showModalName === 'CardListFilter'">
        <CardListFilter />
      </div>
      <div v-else-if="store.showModalName === 'CardListSort'">
        <CardListSort />
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
        <Share />
      </div>
      <div v-else-if="store.showModalName === 'backup'">
        <Backup />
      </div>
      <div v-else-if="store.showModalName === 'settings'">
        <Settings />
      </div>
      <div class="mt-2 text-center">
        <v-btn :theme="store.siteSettings.isDarkMode" @click="store.switchDialog(false)">閉じる</v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
// import CardSetting from './PossessionCardList.vue'
import SetCardData from './SetCardData.vue'
import CardList from './CardList.vue'
import CardListFilter from './CardListFilter.vue'
import CardListSort from './CardListSort.vue'
import SelectCard from './SelectCard.vue'
import SetLeaningLevel from './SetLeaningLevel.vue'
import MasteryLevel from './MasteryLevel.vue'
import Share from './Share.vue'
import Backup from './Backup.vue'
import Settings from './Settings.vue'

export default {
  name: 'ModalArea',
  components: {
    SetCardData,
    SelectCard,
    CardList,
    CardListFilter,
    CardListSort,
    SetLeaningLevel,
    MasteryLevel,
    Share,
    Backup,
    Settings
  },
  data() {
    return {
      maxWidth: {
        selectCard: 1600,
        setCardData: 900,
        possessionCardSetting: 'auto',
        CardListFilter: 1600,
        CardListSort: 400,
        MusicListFilter: 1600,
        masteryLevel: 600,
        setLeaningLevel: 600,
        share: 400,
        backup: 600,
        settings: 600
      }
    }
  },
  created() {},
  computed: {},
  methods: {}
}
</script>