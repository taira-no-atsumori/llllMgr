// eslint.config.js
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import * as parserVue from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser';
import pluginTs from '@typescript-eslint/eslint-plugin';
import globals from 'globals';
import localRules from 'eslint-plugin-local-rules';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  // 1. グローバルに無視するファイル/ディレクトリを指定
  {
    ignores: ['dist/**', 'node_modules/**', '*.config.js', '*.config.mjs', '*.config.cjs', 'docs/js/index.js'],
  },

  // 2. ESLintの推奨ルールを適用 (旧 extends: 'eslint:recommended')
  js.configs.recommended,

  // 3. Vueの推奨ルールを適用 (旧 extends: 'plugin:vue/vue3-recommended')
  ...pluginVue.configs['flat/recommended'],

  // 4. TypeScriptとVueファイルに対する設定
  {
    files: ['**/*.{ts,vue}'], // .ts と .vue ファイルが対象
    // プラグインの登録 (旧 plugins: ['@typescript-eslint'])
    plugins: {
      '@typescript-eslint': pluginTs,
      'local-rules': localRules,
    },
    // 言語オプション (旧 parserOptions, globals, env)
    languageOptions: {
      // パーサーの設定
      parser: parserVue, // .vueファイルをパースするために必須
      parserOptions: {
        parser: tsParser, // <script lang="ts"> をパースするために必須
        sourceType: 'module',
        ecmaVersion: 2022,
      },
      // グローバル変数の設定 (旧 env, globals)
      globals: {
        ...globals.browser, // `window` や `document` など
        ...globals.node, // `process` や `require` など
        // `vue/setup-compiler-macros` に相当
        defineProps: 'readonly',
        defineEmits: 'readonly',
        defineExpose: 'readonly',
        withDefaults: 'readonly',
      },
    },
    // ルールの設定 (旧 extends: '@vue/typescript/recommended' の一部と rules)
    rules: {
      // TypeScript ESLintの推奨ルールを有効化
      ...pluginTs.configs['eslint-recommended'].overrides[0].rules,
      ...pluginTs.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'warn',

      // 作成したカスタムルールを有効化
      'local-rules/no-duplicate-card-ids': 'error',

      // 単一単語のコンポーネント名を許可する
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: ['Home', 'Backup', 'Chart', 'Share', 'Settings', 'Loading', 'License', 'Simulation'],
        },
      ],
    },
    eslintConfigPrettier,
  },
];
