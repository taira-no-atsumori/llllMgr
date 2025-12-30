// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'tests/e2e', // ← E2Eテストだけのディレクトリにする
  testMatch: '*.spec.ts', // ディレクトリ内のみに限定
});
