<template>
  <header>
    <h1>
      リンクラ 説明文メーカー
    </h1>
    <label for="selectStage">選択ステージ</label>
    <select name="stage" id="selectStage">
      <option value="stageA">ステージA</option>
      <option value="stageB">ステージB</option>
      <option value="stageC">ステージC</option>
    </select>
    <input type="text" name="formationName" placeholder="編成名を入力してください">
    <input type="button" name="reset" value="編成リセット">
    <input type="button" name="thisStageDataClear" value="このステージのデータを削除" disabled>
    <input type="button" name="allStageDataClear" value="全ステージのデータを削除" disabled>
    <v-btn @click="pageMove('/')">Home</v-btn>
    <v-btn @click="pageMove('cardlist')">Card List</v-btn>
    <v-btn @click="pageMove('musiclist')">Music List</v-btn>
  </header>
</template>

<script>
export default {
  name: 'HeaderArea',
  props: {},
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    }
  }
}
</script>