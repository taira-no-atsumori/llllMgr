import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import { ref as dbRef, onValue, type Unsubscribe } from 'firebase/database';
import { rtdb, rtdbDev } from '@/firebase';
import { useStateStore } from '@/stores/stateStore';
import type { SkillDetailType, SkillType } from '@/types/skill';

export const useSkillStore = defineStore('skill', () => {
  const stateStore = useStateStore();
  const skillDetails = ref<Record<string, SkillDetailType>>({});
  const skills = ref<Record<string, SkillType>>({});
  let unsubscribe: Unsubscribe | null = null;
  let unsubscribeSkills: Unsubscribe | null = null;

  const subscribe = () => {
    if (unsubscribe) {
      unsubscribe();
      unsubscribe = null;
    }

    if (unsubscribeSkills) {
      unsubscribeSkills();
      unsubscribeSkills = null;
    }

    const db = stateStore.isDev ? rtdbDev : rtdb;
    const skillDetailRef = dbRef(db, 'skills/skillDetail');

    unsubscribe = onValue(skillDetailRef, (snapshot) => {
      const data = snapshot.val() || {};
      const formattedData: Record<string, SkillDetailType> = {};

      Object.keys(data).forEach((key) => {
        formattedData[key] = { ...data[key], id: key };
      });

      skillDetails.value = formattedData;
    });

    const skillRef = dbRef(db, 'skills/skill');
    unsubscribeSkills = onValue(skillRef, (snapshot) => {
      skills.value = snapshot.val() || {};
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
    skills,
    getSkillDetailData,
  };
});
