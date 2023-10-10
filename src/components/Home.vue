<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <h1>Link！Like！ラブライブ！ 管理ツール</h1>
        Ver.β(アーリーアクセス)
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>メインメニュー</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn tile block @click="pageMove('formation')" disabled>Formation</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('cardlist')" disabled>Card List</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('musiclist')">Music List</v-btn>
      </v-col>
      <v-col>
        <v-btn tile block @click="pageMove('itemlist')">Item List</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>About</h2>
        このサイトは、アプリ「Link！Like！ラブライブ！」(通称リンクラ)をもっと楽しむために作成されたサイトです。<br>
        ただ眺めるだけでも良いですが、ぜひご自身のデータを入力して使い倒してください。<br>
        <br>
        現在はアーリーアクセス版として、MUSIC LIST(楽曲一覧&楽曲マスタリーレベル設定ページ)を公開中です。<br>
        詳細は該当ページをご覧ください。<br>
        <br>
        今後のアップデートで、FORMATION(編成ページ), CARD LIST(カード一覧), ITEM LIST(アイテム一覧)を実装予定です。<br>
        また、MUSIC LISTも絞り込み機能の拡充やソート機能の実装も予定しています(正式リリース後の実装予定です)。
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <h2>Attention</h2>
        このサイトはPCからの利用を想定しています。<br>
        レスポンシブ化(スマートフォン対応)の本格対応は、機能が一通り実装し終えた後の対応となります。<br>
        <br>
        バックアップや同期機能は現在ありませんので、別ブラウザからアクセスする場合は一からデータ入力をやり直す必要があります。<br>
        バックアップ機能の対応を正式リリース後に予定しています。<br>
        <br>
        完全個人制作のため、一部デザインが崩れていたり、動かない場合があります。<br>
        順次対応していきますので、大目に見てください…
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col>
        <h2>Bug</h2>
        現在確認しているバグは、以下のとおりです。<br>
        <br>
        
      </v-col>
    </v-row>-->
    <v-row>
      <v-col>
        <h2>Release Schedule</h2>
        以下の順でリリースを予定しています。<br>
        <br>
        1. CARD LIST(カード一覧)<br>
        リンクラ内に実装されているカードの一覧と、カードごとのカードレベル、スペシャルアピールレベル、スキルレベルが設定できる予定です。<br>
        <br>
        2. FORMATION(編成ページ)<br>
        簡単な編成シミュレーションと編成情報の保存ができる予定です。<br>
        <br>
        3. ITEM LIST(アイテム一覧)<br>
        Quest Liveの各ステージで獲得できるアイテムの一覧と検索ができるようになる予定です。<br>
        →<b>仮対応ですが公開しました!</b><br>
        <br>
        FORMATIONのリリースをもって正式版となる予定です。<br>
        その後は各機能の拡充・調整・バグ修正を行っていきます。<br>
        ※リリース時期は未定です。<br>
        ※リリース順は前後する可能性があります。<br>
        ※機能は変更になる可能性があります。
      </v-col>
    </v-row>
  </v-container>
  <!--<v-footer>
    <v-row>
      <v-col
        class="text-center"
      >
        © 2023 - {{ new Date().getFullYear() }} <strong>taira no atsumori</strong>
      </v-col>
    </v-row>
  </v-footer>-->
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {}
  },
  computed() {},
  methods: {
    pageMove(movePageName) {
      this.$router.replace(movePageName);
    }
  }
}
</script>