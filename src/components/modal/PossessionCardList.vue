<template>
  <dl class="mb-2">
    <dt data-rare></dt>
    <dd data-card-name></dd>
  </dl>
  <ul id="cardSettingArea">
    <li>
      <label for="trainingLevel">特訓度</label>
      <select id="trainingLevel" v-model="store.card[store.submitData.memberName][store.submitData.rare][store.submitData.selectedCard].status.trainingLevel" name="trainingLevel">
        <option v-for="i in ['', '+', '++']" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="cardLevel">レベル</label>
      <input id="cardLevel" type="number" name="cardLevel" min="1" max="100" value="1" @update:model-value="set">
    </li>
    <li>
      <label for="SALevel">スペシャルアピール</label>
      <select id="SALevel" v-model="SLevel" name="SALevel">
        <option v-for="i in 14" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="SLevel">スキル</label>
      <select id="SLevel" v-model="SLevel" name="SLevel">
        <option v-for="i in 14" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="releaseLevel">解放Lv</label>
      <select id="releaseLevel" v-model="releaseLevel" name="releaseLevel">
        <option v-for="i in 5" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'PossessionCardSetting',
  data() {
    return {
      rarity: ['DR', 'UR', 'SR', 'R', 'BR'],
      selectCard: '',
      trainingLevel: '',
      cardLevel: 1,
      SALevel: 1,
      SLevel: 1,
      releaseLevel: 1
    }
  },
}
</script>