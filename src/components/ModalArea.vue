<template>
  <v-dialog
    v-model="store.dialog"
    scrollable
    :max-width="maxWidth[store.showModalName]"
  >
    <v-sheet class="pa-3 bg-white">
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
      <!--<div v-else-if="store.showModalName === 'MusicListFilter'">
        <MusicListFilter />
      </div>-->
      <div v-else-if="store.showModalName === 'setLeaningLevel'">
        <SetLeaningLevel />
      </div>
      <div v-else-if="store.showModalName === 'settings'">
        <Settings />
      </div>
      <div class="mt-2 text-center">
        <v-btn @click="store.switchDialog(false)">閉じる</v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<script>
// import CardSetting from './PossettionCardList.vue'
import SetCardData from './SetCardData.vue'
import CardList from './CardList.vue'
import CardListFilter from './CardListFilter.vue'
import SelectCard from './SelectCard.vue'
import SetLeaningLevel from './SetLeaningLevel.vue'
import Settings from './Settings.vue'

export default {
  name: 'ModalArea',
  components: {
    SetCardData,
    SelectCard,
    CardList,
    CardListFilter,
    SetLeaningLevel,
    Settings
  },
  data() {
    return {
      maxWidth: {
        selectCard: 1600,
        setCardData: 900,
        possessionCardSetting: 'auto',
        CardListFilter: 1600,
        MusicListFilter: 600,
        setLeaningLevel: 600,
        settings: 600
      }
    }
  },
  created() {},
  computed: {},
  methods: {}
}
</script>