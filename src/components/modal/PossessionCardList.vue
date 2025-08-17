<template>
  <dl class="mb-2">
    <dt data-rare></dt>
    <dd data-card-name></dd>
  </dl>
  <ul id="cardSettingArea">
    <li>
      <label for="trainingLevel">特訓度</label>
      <select name="trainingLevel" id="trainingLevel" v-model="store.card[store.submitData.memberName][store.submitData.rare][store.submitData.selectedCard].status.trainingLevel">
        <option v-for="i in ['', '+', '++']" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="cardLevel">レベル</label>
      <input type="number" name="cardLevel" id="cardLevel" min="1" max="100" value="1" @update:model-value="set">
    </li>
    <li>
      <label for="SALevel">スペシャルアピール</label>
      <select name="SALevel" id="SALevel" v-model="SLevel">
        <option v-for="i in 14" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="SLevel">スキル</label>
      <select name="SLevel" id="SLevel" v-model="SLevel">
        <option v-for="i in 14" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
    <li>
      <label for="releaseLevel">解放Lv</label>
      <select name="releaseLevel" id="releaseLevel" v-model="releaseLevel">
        <option v-for="i in 5" :key="i" :value="i">{{ i }}</option>
      </select>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'possessionCardSetting',
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