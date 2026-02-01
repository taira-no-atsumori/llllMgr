import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { ref as dbRef, onValue, type Unsubscribe } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import type { SkillDetailType } from '@/types/skill';

export const useSkillStore = defineStore('skill', () => {
  const stateStore = useStateStore();
  const skillDetails = ref<Record<string, SkillDetailType>>({});
  let unsubscribe: Unsubscribe | null = null;

  const subscribe = () => {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }

    const skillDetailRef = dbRef(
      stateStore.isDev ? rtdbDev : rtdb,
      'skills/skillDetail',
    );

    unsubscribe = onValue(skillDetailRef, (snapshot) => {
      const data = snapshot.val() || {};
      const formattedData: Record<string, SkillDetailType> = {};

      Object.keys(data).forEach((key) => {
        formattedData[key] = { ...data[key], id: key };
      });

      skillDetails.value = formattedData;
    });
  };

  // 環境切り替えを監視して再購読
  watch(() => stateStore.isDev, subscribe, { immediate: true });

  const getSkillDetailData = (
    id: string,
    getDataKey:
      | 'id'
      | 'skillDetailName'
      | 'colorCode'
      | 'description'
      | 'skillTypeKey',
  ): string => {
    return skillDetails.value[id]?.[getDataKey] || '';
  };

  return {
    skillDetails,
    getSkillDetailData,
  };
});
