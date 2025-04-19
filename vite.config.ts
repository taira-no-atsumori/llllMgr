import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import path from 'path';
import { webcrypto } from 'crypto';

global.crypto = webcrypto;

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      'import.meta.env': env,
    },
    base: `/${env.VITE_PATHNAME}/`,
    assetsDir: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    plugins: [
      vue(),
      vuetify(),
    ],
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
            }
            if (/\.(png|jpe?g|svg|gif|webp|avif)$/.test(assetInfo.name)) {
              return 'img/[name][extname]';
            }
            if (/\.css$/.test(assetInfo.name)) {
              return 'css/[name][extname]';
            }
            return 'assets/[name][extname]';
          },
        },
      },
    },
  };
});
