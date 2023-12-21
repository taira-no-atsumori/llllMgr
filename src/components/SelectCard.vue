
<template>
  <div>
    <v-container fluid>
      <v-row
        dense
        v-for="rare in store.rarity"
        :key="rare"
      >
        <v-col
          v-for="(ary, cardName) in store.card[store.abc.name][rare]"
          :key="ary"
          cols="2"
        >
          <v-card
            :loading="loading"
          >
            <v-img
              :src="require(`@/assets/card_illust/${store.setCardIllust}.png`)"
            >
            <!--<v-img
              :src="require(`@/assets/card_illust/${store.setCardIllust(cardName)}.png`)"
            >-->
            </v-img>
            <v-card-title>{{ cardName }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <label for="cardList">カード名</label>
    <select v-model="store.selectCard[store.abc.name][store.abc.style]" name="cardList" id="cardList">
      <option label="" value="default"></option>
      <optgroup v-for="rare in store.rarity" :key="rare" :label="rare">
        <option v-for="(ary, cardName) in store.card[store.abc.name][rare]" :key="ary" :label="cardName" :value="cardName"></option>
      </optgroup>
    </select>
  </div>
</template>

<script>
export default {
  name: 'selectCard',
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>