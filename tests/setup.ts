import { beforeEach } from 'vitest';
import { createPinia, setActivePinia } from 'pinia';

// Piniaのインスタンスを各テストの前に作成・アクティブ化する
beforeEach(() => {
  setActivePinia(createPinia());
});
