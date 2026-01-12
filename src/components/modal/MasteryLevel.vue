<template>
  <v-container class="pa-0">
    <h2>獲得ボーナススキル詳細</h2>

    <div>
      <template v-for="memberName in store.memberNameList" :key="memberName">
        <img
          v-if="!store.isOtherMember(memberName)"
          :src="store.getImagePath('icons/member', `icon_SD_${memberName}`)"
          class="cursor-pointer"
          :style="`width: 10%; max-width: 45px; margin: 0 0.5%; filter: grayscale(${
            memberName === checkMasteryMember ? 0 : 1
          });`"
          @click="checkMasteryMember = memberName"
        />
      </template>
    </div>

    <div class="font-weight-bold mb-1">
      <span class="subtitle px-2 py-1">合計楽曲マスタリーレベル</span>
      {{ store.makeTotalMasteryLv(checkMasteryMember) }}
    </div>
    <div class="mb-3">
      {{
        makeMemberFullName(checkMasteryMember)
      }}のセンター楽曲をプレイする時、ハート回収時のLOVE獲得量+<span
        class="text-pink"
        >{{
          (
            Math.floor(
              store.makeTotalMasteryLv(checkMasteryMember) * 0.05 * 100
            ) / 100
          ).toFixed(2)
        }}</span
      >%
    </div>

    <div class="font-weight-bold mb-2">
      <span class="subtitle px-2 py-1">獲得済みボーナススキル</span>
    </div>

    <ul>
      <template
        v-for="(ary, bonusSkillName, i) in BONUS_SKILL_LIST"
        :key="bonusSkillName"
      >
        <li class="mb-1">
          <div class="d-flex flex-row align-center mb-1">
            <div class="mr-1 mt-1">
              <v-img
                :src="store.getImagePath('icons/bonusSkill', bonusSkillName)"
                style="width: 32px; height: 32px; border-radius: 3px"
                eager
              />
              <p class="text-center" style="font-size: 14px">
                Lv.{{ skillLevels[bonusSkillName] }}
              </p>
            </div>
            <dl class="d-flex flex-column ml-1">
              <dt class="font-weight-bold">{{ bonusSkillName }}</dt>
              <dd class="text-body-2">
                {{ ary.text[0]
                }}<span class="text-pink">{{
                  makeBonusSkillDescriptionText(bonusSkillName)
                }}</span
                >{{ ary.text[1] }}
              </dd>
            </dl>
          </div>

          <v-divider v-if="i + 1 < Object.keys(skillLevels).length" />
        </li>
      </template>
      <li v-if="Object.keys(skillLevels).length === 0">
        習得済みのボーナススキルはありません。
      </li>
    </ul>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { MEMBER_KEYS, makeMemberFullName } from '@/constants/memberNames';
import {
  BONUS_SKILL_NAMES,
  BONUS_SKILL_LIST,
  type BonusSkillNames,
} from '@/constants/bonusSkills';

const store = useStateStore();
const checkMasteryMember = ref(MEMBER_KEYS.KAHO);

/**
 * 各メンバーの各ボーナススキルLv.を取得処理
 *
 * @description
 * 各メンバーの各ボーナススキルLv.を取得して返す。
 *
 * @returns 各メンバーの各ボーナススキルLv.リスト
 */
const skillLevels = computed(() => {
  const result: Record<string, number> = {};

  for (const bonusSkillName of Object.values(BONUS_SKILL_NAMES)) {
    const totalLevel =
      store.memberData.centerList[checkMasteryMember.value].bonusSkill[
        bonusSkillName
      ] + store.supportSkill[checkMasteryMember.value][bonusSkillName];

    if (totalLevel > 0) {
      result[bonusSkillName] = totalLevel;
    }
  }

  return result;
});

/**
 * ボーナススキルの説明文の作成処理
 *
 * @param bonusSkill ボーナススキル名
 */
const makeBonusSkillDescriptionText = (bonusSkill: BonusSkillNames): number => {
  switch (bonusSkill) {
    case BONUS_SKILL_NAMES.BEAT_HEART_UP:
      return skillLevels.value[bonusSkill] * 0.5;
    case BONUS_SKILL_NAMES.LOVE_BONUS: {
      const skillLevel = skillLevels.value[bonusSkill];

      for (const tier of BONUS_SKILL_LIST[bonusSkill].ary) {
        if (skillLevel <= tier.limit) {
          return (
            tier.baseValue + (skillLevel - tier.subtractLevel) * tier.multiplier
          );
        }
      }

      return 0; // この行に到達することはないはずだが、万が一のためのフォールバック
    }
    default: {
      let num = BONUS_SKILL_LIST[bonusSkill].init;

      for (const i of BONUS_SKILL_LIST[bonusSkill].ary) {
        if (skillLevels.value[bonusSkill] <= i) {
          break;
        } else {
          num -= 1;
        }
      }

      return num;
    }
  }
};
</script>
