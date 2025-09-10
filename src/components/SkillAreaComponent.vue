<template>
  <div
    class="mt-4"
    v-if="store.settingCardData?.[skillType]"
  >
    <div class="mb-1">
      <span :class="`specialAppeal${skillType === 'characteristic' ? ' characteristic' : ''}`">
        {{ skillType === 'specialAppeal' ? 'スペシャルアピール' : skillType === 'skill' ? 'スキル' : '特性' }}
      </span>
      {{ store.settingCardData[skillType].name }}
      <span
        class="AP"
        v-if="skillType !== 'characteristic'"
      >
        AP{{ AP(skillType) }}
      </span>
    </div>
    <div>
      <template v-if="skillType !== 'characteristic'">
        <span class="skillLevel">
          Lv{{ store.settingCardData.fluctuationStatus[`S${skillType === 'specialAppeal' ? 'A' : ''}Level`] }}
        </span>
        {{ store.makeSkillText(skillType) }}
      </template>
      <template v-else>
        {{ store.settingCardData.characteristic.detail }}
      </template>
    </div>
    <div v-if="skillType !== 'characteristic'">
      <v-chip
        v-for="(skillID, i) in store.skillList[store.settingCardData[skillType].name][
          store.settingCardData[skillType].ID
        ].detail.type"
        :key="skillID"
        :color="skillID.COLOR_CODE"
        :class="`chipSize mb-1${
          i + 1 <
          store.skillList[store.settingCardData[skillType].name][store.settingCardData[skillType].ID].detail.type.length
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
        {{ skillID.name_ja }}
      </v-chip>
    </div>

    <v-expansion-panels
      class="mt-1"
      v-if="outputAddSkillList?.[skillType]"
    >
      <v-expansion-panel bg-color="yellow-darken-1">
        <v-expansion-panel-title> 追加カード・特性／モードチェンジ詳細 </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-tabs
            v-model="tab_addSkill"
            color="pink"
            density="compact"
            grow
            show-arrows
          >
            <template
              v-for="(list, i) of outputAddSkillList?.[skillType]"
              :key="i"
            >
              <v-tab>{{ list.name }}</v-tab>
            </template>
          </v-tabs>

          <v-divider class="border-opacity-50"></v-divider>

          <v-tabs-window v-model="tab_addSkill">
            <template
              v-for="(list, i) of outputAddSkillList?.[skillType]"
              :key="i"
            >
              <v-tabs-window-item
                :value="i"
                class="pt-2"
              >
                <div>
                  <p>
                    <span
                      class="specialAppeal"
                      v-if="list?.modeName"
                    >
                      {{ list.modeName }}
                    </span>
                    <span
                      class="specialAppeal"
                      v-else
                    >
                      スキル
                    </span>
                    <span class="mr-1">{{ list.name }}</span>
                    <span
                      class="AP"
                      v-if="list?.AP"
                    >
                      AP{{ list.AP }}
                    </span>
                  </p>

                  <p class="mt-1">
                    <template v-if="skillType !== 'characteristic'">
                      {{ store.makeSkillText(skillType, { addSkillNum: i }) }}
                    </template>
                    <template v-else>
                      {{ list?.ID ? store.skillList[list.name][list.ID].text[0] : list.detail }}
                    </template>
                  </p>

                  <div v-if="skillType !== 'characteristic'">
                    <v-chip
                      v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                      :key="skillID"
                      :color="skillID.COLOR_CODE"
                      :class="`chipSize mt-1 ${
                        ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''
                      }`"
                      @click="
                        openDialog('skillDescription', 600, {
                          skillID: skillID,
                          targetSkill: skillType,
                        })
                      "
                    >
                      {{ skillID.name_ja }}
                    </v-chip>
                  </div>
                </div>

                <div
                  class="mt-3"
                  v-if="list?.characteristic"
                >
                  <span class="specialAppeal characteristic">特性</span>
                  {{ list.characteristic.name }}
                  <p class="mt-1">{{ list.characteristic.detail }}</p>
                </div>

                <v-expansion-panels
                  class="my-2"
                  v-if="list?.addSkill"
                >
                  <v-expansion-panel bg-color="yellow-darken-1">
                    <v-expansion-panel-title> 追加カード・特性／モードチェンジ詳細 </v-expansion-panel-title>
                    <v-expansion-panel-text>
                      <div
                        v-for="(addSkillList, addSkillNum) of list?.addSkill"
                        :key="addSkillNum"
                        :class="`${addSkillNum === 0 ? '' : 'mt-2'}`"
                      >
                        <v-divider class="mb-3 border-opacity-50"></v-divider>

                        <div>
                          <p>
                            <span
                              class="specialAppeal"
                              v-if="addSkillList?.modeName"
                            >
                              {{ addSkillList.modeName }}
                            </span>
                            <span
                              class="specialAppeal"
                              v-else
                            >
                              スキル
                            </span>
                            <span class="mr-1">
                              {{ addSkillList.name }}
                            </span>
                            <span
                              class="AP"
                              v-if="list?.AP && skillType !== 'characteristic'"
                            >
                              AP{{ addSkillList.AP }}
                            </span>
                          </p>

                          <p class="mt-1">
                            <template v-if="skillType !== 'characteristic'">
                              {{
                                store.makeSkillText('addSkill', {
                                  addSkillNum: [i, addSkillNum],
                                })
                              }}
                            </template>
                            <template v-else>
                              {{ list?.ID ? store.skillList[list.name][list.ID].text[0] : list.detail }}
                            </template>
                          </p>

                          <div v-if="skillType !== 'characteristic'">
                            <v-chip
                              v-for="(skillID, ii) in store.skillList[addSkillList.name][addSkillList.ID].detail.type"
                              :key="skillID"
                              :color="skillID.COLOR_CODE"
                              :class="`chipSize mt-1 ${
                                ii + 1 < store.skillList[addSkillList.name][addSkillList.ID].detail.type.length
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
                              {{ skillID.name_ja }}
                            </v-chip>
                          </div>
                        </div>

                        <div
                          class="mt-3"
                          v-if="list?.characteristic"
                        >
                          <span class="specialAppeal characteristic">特性</span>
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
  </div>

  <v-dialog
    v-model="dialog"
    scrollable
    :max-width="dialogSize"
  >
    <v-sheet class="pa-3">
      <div v-if="openDialogName === 'skillDescription'">
        <h2 class="text-center mb-2">スキル詳細</h2>
        {{ skillID.DESCRIPTION }}
      </div>
      <div class="mt-1 text-center">
        <v-btn
          prepend-icon="mdi-close"
          @click="switchDialog(null)"
        >
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import { SKILL_DETAIL } from '@/constants/skillDetail';

const props = defineProps<{
  skillType: string;
}>();

const store = useStateStore();

const outputAddSkillList = computed(() => {
  const list: Record<string, any[]> = {};
  if (store.settingCardData?.characteristic?.changeCharacteristic) {
    list['characteristic'] = store.settingCardData.characteristic.changeCharacteristic;
  }
  if (store.settingCardData?.characteristic?.addSkill) {
    list['characteristic'] = store.settingCardData.characteristic.addSkill;
  }
  if (store.settingCardData?.specialAppeal?.addSkill) {
    list['specialAppeal'] = store.settingCardData.specialAppeal.addSkill;
  }
  if (store.settingCardData?.skill?.addSkill) {
    list['skill'] = store.settingCardData.skill.addSkill;
  }
  return list;
});

const tab_addSkill = ref('one');
const dialog = ref(false);
const openDialogName = ref<string | null>(null);
const dialogSize = ref(0);
const targetSkill = ref<string | null>(null);
const skillID = ref<(typeof SKILL_DETAIL)[keyof typeof SKILL_DETAIL] | null>(null);
const isAlternate = ref(false);
const selectAddSkillDetail = ref('mainSkill');

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
  }
): void => {
  targetSkill.value = option === null ? null : option.targetSkill;
  openDialogName.value = openDialogNameValue;
  dialogSize.value = dialogSizeValue;

  if (openDialogNameValue === 'skillDescription') {
    skillID.value = option.skillID;
  }

  switchDialog(null);
};
const AP = (skillType: string): number => {
  if (store.settingCardData?.[skillType]?.EXAP !== undefined) {
    return store.settingCardData[skillType].EXAP[store.settingCardData.fluctuationStatus.SALevel - 1];
  } else {
    return (
      store.settingCardData[skillType].AP -
      (store.settingCardData.fluctuationStatus.trainingLevel < store.maxCardLevel[store.settingCardData.rare].length - 2
        ? store.settingCardData.fluctuationStatus.trainingLevel
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
