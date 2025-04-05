<template>
<v-container fluid class="pa-2">
<v-row>
  <v-col cols="12">
    <h1>LICENSE</h1>
    本サイトは、著作権法第32条に基づき画像を引用しております。<br>
    著作権・知的財産権は、すべて権利元に帰属いたします。<br>
    権利者様側からの画像等の削除依頼や警告については、速やかに対処いたします。
  </v-col>
</v-row>

<v-row>
  <v-col cols="12">
    <h1>免責事項</h1>
    本サイトのコンテンツ・情報につきまして、可能な限り正確な情報を掲載するよう努めております。<br>
    しかし、個人が作成・管理する性質上、誤情報が入り込んだり、情報が古くなっていたり、不足している場合もございます。<br>
    その際は、お手数ですが該当箇所を本サイト作者にお知らせくださいますと幸いです。<br>
  </v-col>
  <v-col cols="12">
    本サイトは、個人が作成・管理するファンサイトになります。<br>
    本サイトに関わる内容について、運営会社・権利元・キャスト・その他プロジェクトラブライブ！蓮ノ空女学院スクールアイドルクラブに関わる企業・人物へ問い合わせることは絶対にお止めください。<br>
  </v-col>
  <v-col cols="12">
    本サイトに掲載された内容によって生じた損害等について、一切の責任を負いかねます。<br>
    ご了承の上、ご利用くださいますようお願いいたします。
  </v-col>
</v-row>

<v-row>
  <v-col cols="12">
    <h1>LINK</h1>
    本サイトは、原則リンクフリーです。<br>
    SNSや動画などで紹介する場合の許可も不要ですので、ガンガン広めてください！
  </v-col>
</v-row>

<v-row>
  <v-col cols="12">
    <h1>技術情報</h1>
    <ul>
      <li>
        フレームワーク
        <ul class="dot_list">
          <li>Vue</li>
          <li>3.5.13</li>
        </ul>
      </li>
      <li>
        ライブラリ
        <ul class="dot_list">
          <li>Vuetify</li>
          <li>3.8.0</li>
        </ul>
        <ul class="dot_list">
          <li>pinia</li>
          <li>3.0.1</li>
        </ul>
      </li>
      <li>
        プラグイン
        <ul class="dot_list">
          <li>vue-router</li>
          <li>4.5.0</li>
        </ul>
      </li>
      <li>
        ビルドツール
        <ul class="dot_list">
          <li>Vite</li>
          <li>6.2.5</li>
        </ul>
      </li>
    </ul>
  </v-col>
</v-row>

<v-row>
  <v-col cols="12">
    <h1>閲覧推奨環境</h1>
    <ul>
      <li>PC
        <ul class="dot_list">
          <li>IE</li>
          <li>非対応</li>
        </ul>
        <ul class="dot_list">
          <li>Edge</li>
          <li>最新版</li>
        </ul>
        <ul class="dot_list">
          <li>Firefox</li>
          <li>最新版</li>
        </ul>
        <ul class="dot_list">
          <li>Chrome</li>
          <li>最新版</li>
        </ul>
        <ul class="dot_list">
          <li>Safari</li>
          <li>最新版</li>
        </ul>
      </li>
      <li>スマホ・タブレット
        <ul class="dot_list">
          <li>Firefox</li>
          <li>最新版</li>
        </ul>
        <ul class="dot_list">
          <li>Chrome</li>
          <li>最新版</li>
        </ul>
        <ul class="dot_list">
          <li>Safari</li>
          <li>最新版</li>
        </ul>
      </li>
    </ul>
  </v-col>
</v-row>
</v-container>
</template>

<script>
export default {
  name: 'License',
  components: {},
  data() {
    return {}
  },
  created() {},
  computed: {},
  methods: {}
}
</script>

<style lang="scss" scoped>
.dot_list {
  display: flex;
  margin-left: 1rem;

  li:first-child:before {
    content: '・';
  }

  li:first-child:after {
    content: '：';
  }
}

@media screen and (max-width: 600px) {}
</style>