/// <reference types="vitest" />

import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path';
import fs from 'fs';

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
        if ((value.startsWith("'") && value.endsWith("'")) || (value.startsWith('"') && value.endsWith('"'))) {
          value = value.substring(1, value.length - 1);
        }

        // `import.meta.env.KEY` の形式でキーを作成し、値をJSON文字列として設定
        envConfig[`import.meta.env.${key}`] = JSON.stringify(value);
      }
    }
  }
  return envConfig;
}

export default defineConfig(({ mode }) => {
  // .env* ファイルからVITE_PATHNAMEなどを読み込むためにloadEnvは残しておく
  const env = loadEnv(mode, process.cwd(), '');

  return {
    // defineオプションで環境変数を直接埋め込む
    define: {
      ...parseEnvPublic(),
    },
    base: `/${env.VITE_PATHNAME}/`,
    assetsDir: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [vue(), vuetify()],
    server: {
      host: '0.0.0.0',
      port: 8080,
    },
    build: {
      outDir: 'docs',
      rollupOptions: {
        output: {
          entryFileNames: 'js/[name].js',
          chunkFileNames: 'js/[name].js',
          assetFileNames: (assetInfo) => {
            if (/\.(woff|woff2|eot|ttf|otf)$/.test(assetInfo.name)) {
              return 'fonts/[name][extname]';
            } else if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name)) {
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
