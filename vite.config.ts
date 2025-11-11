/// <reference types="vitest" />

// Plugins
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import checker from 'vite-plugin-checker';
import Fonts from 'unplugin-fonts/vite';
import Layouts from 'vite-plugin-vue-layouts-next';
import Vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';
import { VueRouterAutoImports } from 'unplugin-vue-router';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

// Utilities
import { defineConfig, loadEnv } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import { NodePackageImporter } from 'sass-embedded';

/**
 * .env.public ファイルをパースして、Viteのdefineオプションで使える形式のオブジェクトを返す関数
 * @returns {Record<string, string>}
 */
function parseEnvPublic() {
  const envPublicPath = path.resolve(process.cwd(), '.env.public');
  const envConfig: Record<string, string> = {};

  if (fs.existsSync(envPublicPath)) {
    const fileContent = fs.readFileSync(envPublicPath, { encoding: 'utf-8' });
    const lines = fileContent.split('\n');

    for (const line of lines) {
      // コメント行や空行はスキップ
      if (line.trim() === '' || line.trim().startsWith('#')) {
        continue;
      }

      // KEY='VALUE' の形式を正規表現でマッチ
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (match) {
        const key = match[1];
        let value = match[2] || '';

        // 値を囲むクォートがあれば削除
        if (
          (value.startsWith("'") && value.endsWith("'")) ||
          (value.startsWith('"') && value.endsWith('"'))
        ) {
          value = value.substring(1, value.length - 1);
        }

        // `import.meta.env.KEY` の形式でキーを作成し、値をJSON文字列として設定
        envConfig[`import.meta.env.${key}`] = JSON.stringify(value);
      }
    }
  }
  return envConfig;
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // .env* ファイルからVITE_PATHNAMEなどを読み込むためにloadEnvは残しておく
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: `/${env.VITE_PATHNAME}/`,
    assetsDir: './',
    plugins: [
      VueRouter({
        dts: 'src/typed-router.d.ts',
      }),
      Layouts(),
      AutoImport({
        imports: [
          'vue',
          VueRouterAutoImports,
          {
            pinia: ['defineStore', 'storeToRefs'],
          },
        ],
        dts: 'src/auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
        vueTemplate: true,
      }),
      Components({
        dts: 'src/components.d.ts',
      }),
      Vue({
        template: { transformAssetUrls },
      }),
      checker({
        typescript: true,
        eslint: { lintCommand: 'eslint .', useFlatConfig: true },
      }),
      // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
      Vuetify({
        autoImport: true,
        styles: {
          configFile: 'src/styles/settings.scss',
        },
      }),
      Fonts({
        fontsource: {
          families: [
            {
              name: 'Roboto',
              weights: [100, 300, 400, 500, 700, 900],
              styles: ['normal', 'italic'],
            },
          ],
        },
      }),
    ],
    optimizeDeps: {
      exclude: [
        'vuetify',
        'vue-router',
        'unplugin-vue-router/runtime',
        'unplugin-vue-router/data-loaders',
        'unplugin-vue-router/data-loaders/basic',
      ],
    },
    define: {
      'process.env': {},
      ...parseEnvPublic(),
    },
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
      extensions: [
        '.mjs',
        '.js',
        '.mts',
        '.ts',
        '.jsx',
        '.tsx',
        '.json',
        '.vue',
      ],
    },
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    build: {
      css: {
        preprocessorOptions: {
          scss: { importers: [new NodePackageImporter()] },
        },
      },
      outDir: 'docs',
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: (assetInfo) => {
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return 'fonts/[name][extname]';
            } else if (
              /\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name)
            ) {
              return 'img/[name][extname]';
            } else if (/\.css$/.test(assetInfo.name)) {
              return 'css/[name][extname]';
            } else {
              return 'assets/[name][extname]';
            }
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'happy-dom',
      // テスト実行前にPiniaをセットアップするためのファイル
      setupFiles: ['tests/setup.ts'],
    },
  };
});
