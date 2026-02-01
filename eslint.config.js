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
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.mjs',
      '*.config.cjs',
      'docs/js/index.js',
      'docs/js/**', // ビルドされたファイルを除外
    ],
  },

  // 2. ESLintの推奨ルールを適用 (旧 extends: 'eslint:recommended')
  js.configs.recommended,

  // CJSファイル用の設定
  {
    files: ['**/*.cjs'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // JSファイル用の設定 (ESM)
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // Service Workerファイル用の設定
  {
    files: ['public/sw.js', 'docs/sw.js'],
    languageOptions: {
      globals: {
        ...globals.serviceworker,
      },
    },
  },

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
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      // 作成したカスタムルールを有効化
      'local-rules/no-duplicate-card-ids': 'error',

      // 単一単語のコンポーネント名を許可する
      'vue/multi-word-component-names': [
        'error',
        {
          ignores: [
            'Home',
            'Backup',
            'Chart',
            'Share',
            'Settings',
            'Loading',
            'License',
            'Login',
            'Simulation',
            'Card',
            'Music',
          ],
        },
      ],
      'vue/no-unused-vars': [
        'error',
        {
          ignorePattern: '^_',
        },
      ],
      'vue/v-on-event-hyphenation': [
        'error',
        'always',
        {
          ignore: ['/^(update):[a-zA-Z]+[a-zA-Z0-9-]*$/u'],
        },
      ],
      'vue/attribute-hyphenation': [
        'error',
        'always',
        { ignore: ['modelValue'] },
      ],
      // 型のみのインポートを import type に強制する
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
        },
      ],
      // 併せて、import type { A, B } from ... のようにトップレベルで type を書くスタイルを強制する場合（任意）
      '@typescript-eslint/no-import-type-side-effects': 'error',
    },
  },

  // 5. Prettierとの競合ルールを無効化 (必ず最後に配置)
  eslintConfigPrettier,
];
