<template>
  <div v-if="store.settingCardData?.[skillType]" class="mt-4">
    <div class="mb-1">
      <span
        :class="`specialAppeal${
          skillType === 'characteristic' ? ' characteristic' : ''
        }`"
      >
        {{
          skillType === 'specialAppeal'
            ? 'スペシャルアピール'
            : skillType === 'skill'
              ? 'スキル'
              : '特性'
        }}
      </span>
      {{ store.settingCardData[skillType].name }}
      <span v-if="skillType !== 'characteristic'" class="AP">
        AP{{ AP(skillType, store.settingCardData[skillType]) }}
      </span>
    </div>
    <div>
      <template v-if="skillType !== 'characteristic'">
        <span class="skillLevel">
          Lv{{
            store.settingCardData.fluctuationStatus[
              `S${skillType === 'specialAppeal' ? 'A' : ''}Level`
            ]
          }}
        </span>
        {{ store.skillText(skillType, store.settingCardData[skillType]) }}
      </template>
      <template v-else>
        {{ store.settingCardData.characteristic.detail }}
      </template>
    </div>
    <div v-if="skillType !== 'characteristic'">
      <v-chip
        v-for="(skillID, i) in SKILL_LIST[
          store.settingCardData[skillType].name
        ][store.settingCardData[skillType].ID].detail.type"
        :key="skillID"
        :color="skillStore.getSkillDetailData(skillID, 'colorCode')"
        :class="`chipSize mb-1${
          i + 1 <
          SKILL_LIST[store.settingCardData[skillType].name][
            store.settingCardData[skillType].ID
          ].detail.type.length
            ? ' mr-1'
            : ''
        }`"
        @click="
          openDialog('skillDescription', 600, {
            skillID: skillID,
            targetSkill: skillType,
          })
        "
      >
        {{ skillStore.getSkillDetailData(skillID, 'skillDetailName') }}
      </v-chip>
    </div>

    <template v-if="outputAddSkillList.length > 0">
      <v-expansion-panels class="mt-1">
        <v-expansion-panel bg-color="yellow-darken-1">
          <v-expansion-panel-title>
            追加カード・特性／モードチェンジ詳細
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <v-tabs
              v-model="tab_addSkill"
              color="pink"
              density="compact"
              grow
              show-arrows
            >
              <template v-for="(list, i) of outputAddSkillList" :key="i">
                <v-tab :text="list.name" />
              </template>
            </v-tabs>

            <v-divider class="border-opacity-50" />

            <v-tabs-window v-model="tab_addSkill">
              <template v-for="(list, i) of outputAddSkillList" :key="i">
                <v-tabs-window-item :value="i" class="pt-2">
                  <div>
                    <p>
                      <span v-if="list?.modeName" class="specialAppeal">
                        {{ list.modeName }}
                      </span>
                      <span v-else class="specialAppeal">
                        {{
                          skillType === 'specialAppeal'
                            ? 'スペシャルアピール'
                            : 'スキル'
                        }}
                      </span>
                      <span class="mr-1">{{ list.name }}</span>
                      <span v-if="list?.AP" class="AP">
                        AP{{ AP(skillType, list) }}
                      </span>
                    </p>

                    <p class="mt-1">
                      <template v-if="skillType !== 'characteristic'">
                        {{
                          store.skillText(skillType, list, { addSkillNum: i })
                        }}
                      </template>
                      <template v-else>
                        {{
                          list?.ID
                            ? SKILL_LIST[list.name][list.ID].text[0]
                            : list.detail
                        }}
                      </template>
                    </p>

                    <div v-if="skillType !== 'characteristic'">
                      <v-chip
                        v-for="(skillID, ii) in SKILL_LIST[list.name][list.ID]
                          .detail.type"
                        :key="skillID"
                        :color="
                          skillStore.getSkillDetailData(skillID, 'colorCode')
                        "
                        :class="`chipSize mt-1 ${
                          ii + 1 <
                          SKILL_LIST[list.name][list.ID].detail.type.length
                            ? 'mr-1'
                            : ''
                        }`"
                        @click="
                          openDialog('skillDescription', 600, {
                            skillID: skillID,
                            targetSkill: skillType,
                          })
                        "
                      >
                        {{
                          skillStore.getSkillDetailData(
                            skillID,
                            'skillDetailName',
                          )
                        }}
                      </v-chip>
                    </div>
                  </div>

                  <div v-if="list?.characteristic" class="mt-3">
                    <span class="specialAppeal characteristic">特性</span>
                    {{ list.characteristic.name }}
                    <p class="mt-1">{{ list.characteristic.detail }}</p>
                  </div>

                  <v-expansion-panels v-if="list?.addSkill" class="my-2">
                    <v-expansion-panel bg-color="yellow-darken-1">
                      <v-expansion-panel-title>
                        追加カード・特性／モードチェンジ詳細
                      </v-expansion-panel-title>
                      <v-expansion-panel-text>
                        <div
                          v-for="(addSkillList, addSkillNum) of list?.addSkill"
                          :key="addSkillNum"
                          :class="`${addSkillNum === 0 ? '' : 'mt-2'}`"
                        >
                          <v-divider class="mb-3 border-opacity-50" />

                          <div>
                            <p>
                              <span
                                v-if="addSkillList?.modeName"
                                class="specialAppeal"
                              >
                                {{ addSkillList.modeName }}
                              </span>
                              <span v-else class="specialAppeal">
                                {{
                                  skillType === 'specialAppeal'
                                    ? 'スペシャルアピール'
                                    : 'スキル'
                                }}
                              </span>
                              <span class="mr-1">
                                {{ addSkillList.name }}
                              </span>
                              <span
                                v-if="
                                  list?.AP && skillType !== 'characteristic'
                                "
                                class="AP"
                              >
                                AP{{ addSkillList.AP }}
                              </span>
                            </p>

                            <p class="mt-1">
                              <template v-if="skillType !== 'characteristic'">
                                {{
                                  store.skillText('addSkill', addSkillList, {
                                    addSkillNum: [i, addSkillNum],
                                  })
                                }}
                              </template>
                              <template v-else>
                                {{
                                  list?.ID
                                    ? SKILL_LIST[list.name][list.ID].text[0]
                                    : list.detail
                                }}
                              </template>
                            </p>

                            <div v-if="skillType !== 'characteristic'">
                              <v-chip
                                v-for="(skill, ii) in SKILL_LIST[
                                  addSkillList.name
                                ][addSkillList.ID].detail.type"
                                :key="skill"
                                :color="
                                  skillStore.getSkillDetailData(
                                    skill,
                                    'colorCode',
                                  )
                                "
                                :class="`chipSize mt-1 ${
                                  ii + 1 <
                                  SKILL_LIST[addSkillList.name][addSkillList.ID]
                                    .detail.type.length
                                    ? 'mr-1'
                                    : ''
                                }`"
                                @click="
                                  openDialog('skillDescription', 600, {
                                    skillID: skill,
                                    targetSkill: skillType,
                                  })
                                "
                              >
                                {{
                                  skillStore.getSkillDetailData(
                                    skill,
                                    'skillDetailName',
                                  )
                                }}
                              </v-chip>
                            </div>
                          </div>

                          <div v-if="list?.characteristic" class="mt-3">
                            <span class="specialAppeal characteristic">
                              特性
                            </span>
                            {{ addSkillList.characteristic.name }}
                            <p class="mt-1">
                              {{ addSkillList.characteristic.detail }}
                            </p>
                          </div>
                        </div>
                      </v-expansion-panel-text>
                    </v-expansion-panel>
                  </v-expansion-panels>
                </v-tabs-window-item>
              </template>
            </v-tabs-window>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </div>

  <v-dialog v-model="dialog" scrollable :max-width="dialogSize">
    <v-sheet class="pa-3">
      <div v-if="openDialogName === 'skillDescription' && skillDetail">
        <h2 class="text-center mb-2">スキル詳細</h2>
        {{ skillStore.getSkillDetailData(skillDetail, 'description') }}
      </div>
      <div class="mt-1 text-center">
        <v-btn
          prepend-icon="mdi-close"
          text="CLOSE"
          @click="switchDialog(null)"
        />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { useSkillStore } from '@/stores/skillStore';
import { SKILL_LIST } from '@/constants/skillList';
import type { SKILL_DETAIL } from '@/constants/skillDetail';
import { MAX_CARD_LEVEL } from '@/constants/cards';
import type { SkillDetail } from '@/types/cardList';

const props = defineProps<{
  skillType: 'specialAppeal' | 'skill' | 'characteristic';
}>();

const store = useStateStore();
const skillStore = useSkillStore();

/** 追加スキル・SAリスト算出 */
const outputAddSkillList = computed(() => {
  const cardData = store.settingCardData;

  switch (props.skillType) {
    case 'changeCharacteristic': {
      return [
        ...(cardData.characteristic?.changeCharacteristic ?? []),
        ...(cardData.characteristic?.addSkill ?? []),
      ].flat();
    }
    default: {
      const addSAWithFlag = (cardData[props.skillType]?.addSA ?? [])
        .flat()
        .map((skill) => ({
          ...skill,
          isMinus: false,
        }));
      const addSkill = (cardData[props.skillType]?.addSkill ?? []).flat();
      return [...addSAWithFlag, ...addSkill];
    }
  }
});

const tab_addSkill = ref('one');
const dialog = ref(false);
const openDialogName = ref<string | null>(null);
const dialogSize = ref(0);
const targetSkill = ref<string | null>(null);
const skillDetail = ref<
  (typeof SKILL_DETAIL)[keyof typeof SKILL_DETAIL] | null
>(null);

/**
 * ダイアログスイッチ
 *
 * ダイアログの表示・非表示を切り替える
 *
 * @param flg フラグ
 */
const switchDialog = (flg: boolean | null): void => {
  dialog.value = flg === null ? !dialog.value : flg;
};

/**
 * ダイアログ開閉処理
 *
 * @param openDialogNameValue 開きたいダイアログ名
 * @param dialogSizeValue ダイアログの横幅
 * @param option オプション
 */
const openDialog = (
  openDialogNameValue: string,
  dialogSizeValue: number,
  option: {
    skillID: (typeof SKILL_DETAIL)[keyof typeof SKILL_DETAIL];
    targetSkill: string | null;
  },
): void => {
  targetSkill.value = option === null ? null : option.targetSkill;
  openDialogName.value = openDialogNameValue;
  dialogSize.value = dialogSizeValue;

  if (openDialogNameValue === 'skillDescription') {
    skillDetail.value = option.skillID;
  }

  switchDialog(null);
};

/**
 * AP計算処理
 *
 * 消費するAPを計算して返す処理
 *
 * @param skillType スキルタイプ
 * @param skillData スキルデータ
 * @returns 消費AP
 */
const AP = (skillType: string, skillData: SkillDetail): number => {
  const cardData = store.settingCardData;

  if (skillData?.EXAP) {
    return (
      skillData.EXAP[
        cardData.fluctuationStatus[
          `S${skillType === 'specialAppeal' ? 'A' : ''}Level`
        ] - 1
      ] -
      (skillData?.isMinus &&
      skillType === 'specialAppeal' &&
      cardData.fluctuationStatus.trainingLevel > 0
        ? 1
        : 0)
    );
  } else if (skillType !== 'specialAppeal') {
    return skillData.AP;
  } else if (/(D|L|B)R/.test(cardData.rare) || store.isIrregularLvCard) {
    return (
      skillData.AP - (cardData.fluctuationStatus.trainingLevel > 0 ? 1 : 0)
    );
  } else {
    return (
      cardData[skillType].AP -
      (cardData.fluctuationStatus.trainingLevel <
      MAX_CARD_LEVEL[cardData.rare].length - 2
        ? cardData.fluctuationStatus.trainingLevel
        : 2)
    );
  }
};
</script>

<style lang="scss" scoped>
.AP {
  font-weight: bold;
  color: #e91e63;
}

.skillLevel {
  font-weight: bold;
}

#styleAndMoodArea {
  span {
    padding: 3px 10px;
    border: 2px solid #e5762c;
  }

  .left {
    color: #fff;
    font-weight: bold;
    background-color: #e5762c;
    border-radius: 15px 0 0 15px;
  }

  .right {
    border-radius: 0 15px 15px 0;
  }
}

.specialAppeal {
  color: #fff;
  font-weight: bold;
  background-color: #e5762c;
  padding: 3px 5px 3px 3px;
  border: 2px solid #e5762c;
  border-radius: 0 15px 15px 0;
  margin-right: 5px;

  &.characteristic {
    background-color: #b92aa7;
    border: 2px solid #b92aa7;
  }

  &.supportSkill {
    background-color: #34b72c;
    border: 2px solid #34b72c;
  }
}

.icon {
  display: inline-block;
  margin-right: 5px;

  &.mood,
  &.type {
    width: 20px;
  }

  &.member {
    width: 35px;
  }
}

.chipSize {
  font-size: 12px;
}
</style>
