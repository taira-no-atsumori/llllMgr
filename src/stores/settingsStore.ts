import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

import { DEFAULT_SITE_SETTINGS } from '@/constants/defaultSettings';
import { LOCAL_DB_KEY_NAMES as LDB_KEY_NAMES } from '@/constants/localDBKeyNames';

import type { SiteSettings, LocalStorageData } from '@/types/stateStore';

export const useSettingsStore = defineStore('settings', () => {
  const siteSettings = ref<SiteSettings>(
    JSON.parse(JSON.stringify(DEFAULT_SITE_SETTINGS)),
  );

  /** ダークモード判定 */
  const isDarkMode = computed(() => siteSettings.value.all.darkMode === 'dark');

  /** 設定をlocalStorageに保存 */
  const saveSettings = () => {
    localStorage[LDB_KEY_NAMES.SITE_SETTINGS] = JSON.stringify(
      siteSettings.value,
    );
  };

  /**
   * サイト設定のロード
   *
   * @param importData インポートされたバックアップデータ
   */
  const loadSiteSettings = (importData?: { siteSettings: SiteSettings }) => {
    const isImportData = importData !== undefined;

    if (
      (!isImportData && localStorage?.[LDB_KEY_NAMES.SITE_SETTINGS]) ||
      (isImportData && importData?.siteSettings)
    ) {
      const targetData = isImportData
        ? importData.siteSettings
        : (JSON.parse(
            localStorage[LDB_KEY_NAMES.SITE_SETTINGS],
          ) as LocalStorageData);

      for (const categoryName of ['all', 'cardList', 'musicList'] as const) {
        if (targetData[categoryName]) {
          siteSettings.value[categoryName] = {
            ...siteSettings.value[categoryName],
            ...targetData[categoryName],
          };
        }
      }

      if (isImportData) {
        saveSettings();
      }
    }
  };

  /** 設定のリセット */
  const resetSettings = () => {
    siteSettings.value = JSON.parse(JSON.stringify(DEFAULT_SITE_SETTINGS));
    saveSettings();
  };

  /**
   * boolean判定
   *
   * @description
   * 与えられた文字がtrueであるか判定する処理。
   *
   * @param value 判定したい文字
   * @returns true | false
   */
  const toBool = (value: string): boolean => value === 'true';

  return {
    siteSettings,
    isDarkMode,
    loadSiteSettings,
    saveSettings,
    resetSettings,
    toBool,
  };
});
