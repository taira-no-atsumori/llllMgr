module.exports = {
  // この設定ファイルをプロジェクトのルートとして扱う
  root: true,
  // 実行環境を指定
  env: {
    browser: true, // ブラウザ環境のグローバル変数を有効に
    es2021: true, // ES2021の構文を有効に
    node: true, // Node.js環境のグローバル変数を有効に
  },
  // 拡張する設定のリスト
  extends: [
    // ESLintが推奨する基本的なルールセット
    'eslint:recommended',
    // TypeScriptの基本的な推奨ルールセット
    'plugin:@typescript-eslint/recommended',
    // 型情報が必要な、より厳格な推奨ルールセット（推奨）
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // Vue 3の推奨ルールセットを追加
    'plugin:vue/vue3-recommended',
    // Prettierと競合するルールを無効化（必ず最後に記述）
    'prettier',
  ],
  // コードを解析するためのパーサーを指定
  // .vueファイルを解析するためにvue-eslint-parserを使用
  parser: 'vue-eslint-parser',
  // パーサーのオプション
  parserOptions: {
    // <script>ブロックを解析するパーサーとして@typescript-eslint/parserを指定
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // 型情報を使ったLintに必要な設定。tsconfig.jsonのパスを指定します。
    project: './tsconfig.json',
    // .vueファイルをLintの対象に含める
    extraFileExtensions: ['.vue'],
  },
  // 使用するプラグイン
  plugins: ['@typescript-eslint'],
  // Lint対象から除外するファイル/ディレクトリ
  ignorePatterns: ['dist', 'node_modules', '*.d.ts', '.eslintrc.cjs'],
  // 個別に設定を上書き・追加するルール
  rules: {
    // any型の使用をエラー（error）ではなく警告（warn）にする
    // これにより、any型がコード内にあってもビルドは成功するようになります
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
