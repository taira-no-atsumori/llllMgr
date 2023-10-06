<template>
  <v-dialog
    v-model="store.dialog"
    scrollable
    :max-width="maxWidth[store.showModalName]"
  >
    <v-sheet>
      <div id="modalArea">
        <div v-if="store.showModalName === 'selectCard'">
          <SelectCard />
        </div>
        <div v-else-if="store.showModalName === 'setCardData'">
          <SetCardData />
        </div>
        <div v-else-if="store.showModalName === 'possessionCardSetting'">
          <CardList />
        </div>
        <div v-else-if="store.showModalName === 'setLeaningLevel'">
          <SetLeaningLevel />
        </div>
        <div v-else-if="store.showModalName === 'settings'">
          <Settings />
        </div>
        <div class="modalCloseButtonArea">
          <v-btn @click="store.switchDialog(false)">閉じる</v-btn>
        </div>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script>
// import CardSetting from './PossettionCardList.vue'
import SetCardData from './SetCardData.vue'
import CardList from './CardList.vue'
import SelectCard from './SelectCard.vue'
import SetLeaningLevel from './SetLeaningLevel.vue'
import Settings from './Settings.vue'

export default {
  name: 'ModalArea',
  components: {
    SetCardData,
    CardList,
    SetLeaningLevel,
    Settings
  },
  props: {},
  data() {
    return {
      maxWidth: {
        selectCard: 1600,
        setCardData: 1600,
        possessionCardSetting: 'auto',
        setLeaningLevel: 600,
        settings: 600
      }
    }
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
  #modalArea {
    background: #fff;
    padding: 10px;
    margin: auto;
  }

  .modalCloseButtonArea {
    margin-top: 10px;
  }
</style>