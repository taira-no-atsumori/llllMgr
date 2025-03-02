<template>
  <div
    class="mt-4"
    v-if="store.settingCardData?.[skillType]"
  >
    <div class="mb-1">
      <span :class="`specialAppeal${skillType === 'characteristic' ? ' characteristic' : ''}`">
        {{ skillType === 'specialAppeal' ? 'スペシャルアピール' : skillType === 'skill' ? 'スキル' : '特性' }}
      </span>{{ store.settingCardData[skillType].name }}
      <span class="AP" v-if="skillType !== 'characteristic'">
        AP{{ store.settingCardData[skillType].AP - (store.settingCardData.fluctuationStatus.trainingLevel < store.maxCardLevel[store.settingCardData.rare].length - 2 ? store.settingCardData.fluctuationStatus.trainingLevel : 2) }}
      </span>
    </div>
    <div>
      <template v-if="skillType !== 'characteristic'">
        <span class="skillLevel">Lv {{ store.settingCardData.fluctuationStatus[`S${skillType === 'specialAppeal' ? 'A' : ''}Level`] }}</span>
        {{ store.makeSkillText(skillType) }}
      </template>
      <template v-else>
        {{ store.settingCardData.characteristic.detail }}
      </template>
    </div>
    <div v-if="skillType !== 'characteristic'">
      <v-chip
        v-for="(skillID, i) in store.skillList[store.settingCardData[skillType].name][store.settingCardData[skillType].ID].detail.type"
        :key="skillID"
        :color="store.skillColor[skillID].colorCode"
        :class="`chipSize mb-1${i + 1 < store.skillList[store.settingCardData[skillType].name][store.settingCardData[skillType].ID].detail.type.length ? ' mr-1' : ''}`"
        @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: skillType })"
      >
        {{ store.skillColor[skillID].name }}
      </v-chip>
    </div>

    <v-expansion-panels
      class="mt-1"
      v-if="outputAddSkillList?.[skillType]"
    >
      <v-expansion-panel bg-color="yellow-darken-1">
        <v-expansion-panel-title>
          追加カード・特性/モードチェンジ詳細
        </v-expansion-panel-title>
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
              <v-tabs-window-item :value="i" class="pt-2">
                <div>
                  <p>
                    <span
                      class="specialAppeal"
                      v-if="list?.modeName"
                    >{{ list.modeName }}</span>
                    <span
                      class="specialAppeal"
                      v-else
                    >スキル</span>
                    <span class="mr-1">{{ list.name }}</span>
                    <span
                      class="AP"
                      v-if="list?.AP"
                    >AP{{ list.AP }}</span>
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
                      :color="store.skillColor[skillID].colorCode"
                      :class="`chipSize mt-1 ${ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
                      @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: skillType })"
                    >
                      {{ store.skillColor[skillID].name }}
                    </v-chip>
                  </div>
                </div>

                <div
                  class="mt-3"
                  v-if="list?.characteristic"
                >
                  <span class="specialAppeal characteristic">特性</span>{{ list.characteristic.name }}<p class="mt-1">{{ list.characteristic.detail }}</p>
                </div>

                <v-expansion-panels
                  class="my-2"
                  v-if="list?.addSkill"
                >
                  <v-expansion-panel bg-color="yellow-darken-1">
                    <v-expansion-panel-title> 追加カード・特性/モードチェンジ詳細 </v-expansion-panel-title>
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
                            >{{ addSkillList.modeName }}</span>
                            <span
                              class="specialAppeal"
                              v-else
                            >スキル</span>
                            <span class="mr-1">
                              {{ addSkillList.name }}
                            </span>
                            <span
                              class="AP"
                              v-if="list?.AP && skillType !== 'characteristic'"
                            >AP{{ addSkillList.AP }}</span>
                          </p>

                          <p class="mt-1">
                            <template v-if="skillType !== 'characteristic'">
                              {{
                                store.makeSkillText('addSkill', {
                                  addSkillNum: [i, addSkillNum]
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
                              :color="store.skillColor[skillID].colorCode"
                              :class="`chipSize mt-1 ${ii + 1 < store.skillList[addSkillList.name][addSkillList.ID].detail.type.length ? 'mr-1' : ''}`"
                              @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: skillType })"
                            >
                              {{ store.skillColor[skillID].name }}
                            </v-chip>
                          </div>
                        </div>

                        <div
                          class="mt-3"
                          v-if="list?.characteristic"
                        >
                          <span class="specialAppeal characteristic">特性</span>
                          {{ addSkillList.characteristic.name }}
                          <p class="mt-1">{{ addSkillList.characteristic.detail }}</p>
                        </div>
                      </div>
                    </v-expansion-panel-text>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-tabs-window-item>
            </template>
          </v-tabs-window>
          <!-- <div
            v-for="(list, i) of outputAddSkillList?.skill"
            :key="i"
            :class="`${i === 0 ? '' : 'mt-2'}`"
          >
            <v-divider class="mb-3 border-opacity-50"></v-divider>

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
                  スキル {{ i + 1 }}
                </span>
                <span class="mr-1">
                  {{ list.name }}
                </span>
                <span
                  class="AP"
                  v-if="list?.AP"
                >
                  AP{{ list.AP }}
                </span>
              </p>

              <p class="mt-1">
                {{ store.makeSkillText('skill', { addSkillNum: i }) }}
              </p>

              <div>
                <v-chip
                  v-for="(skillID, ii) in store.skillList[list.name][list.ID].detail.type"
                  :key="skillID"
                  :color="store.skillColor[skillID].colorCode"
                  :class="`chipSize mt-1 ${ii + 1 < store.skillList[list.name][list.ID].detail.type.length ? 'mr-1' : ''}`"
                  @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'skill' })"
                >
                  {{ store.skillColor[skillID].name }}
                </v-chip>
              </div>
            </div>

            <div
              class="mt-3"
              v-if="list?.characteristic"
            >
              <span class="specialAppeal characteristic"> 特性 {{ i + 1 }} </span>
              {{ list.characteristic.name }}
              <p class="mt-1">{{ list.characteristic.detail }}</p>
            </div>

            <v-expansion-panels
              class="my-2"
              v-if="list?.addSkill"
            >
              <v-expansion-panel bg-color="yellow-darken-1">
                <v-expansion-panel-title> 追加カード・特性/モードチェンジ詳細 </v-expansion-panel-title>
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
                          スキル {{ addSkillNum + 1 }}
                        </span>
                      <span class="mr-1">
                        {{ addSkillList.name }}
                      </span>
                      <span
                        class="AP"
                        v-if="list?.AP"
                      >
                        AP{{ addSkillList.AP }}
                      </span>
                    </p>

                    <p class="mt-1">
                      {{ store.makeSkillText('addSkill', {
                        addSkillNum: [i, addSkillNum]
                      })
                      }}
                    </p>

                    <div>
                      <v-chip
                        v-for="(skillID, ii) in store.skillList[addSkillList.name][addSkillList.ID].detail.type"
                        :key="skillID"
                        :color="store.skillColor[skillID].colorCode"
                        :class="`chipSize mt-1 ${ii + 1 < store.skillList[addSkillList.name][addSkillList.ID].detail.type.length ? 'mr-1' : ''}`"
                        @click="openDialog('skillDescription', 600, { skillID: skillID, targetSkill: 'skill' })"
                      >
                        {{ store.skillColor[skillID].name }}
                      </v-chip>
                    </div>
                  </div>

                    <div
                      class="mt-3"
                      v-if="list?.characteristic"
                    >
                      <span class="specialAppeal characteristic"> 特性 {{ addSkillNum + 1 }} </span>
                      {{ addSkillList.characteristic.name }}
                      <p class="mt-1">{{ addSkillList.characteristic.detail }}</p>
                    </div>
                  </div>
                </v-expansion-panel-text>
              </v-expansion-panel>
            </v-expansion-panels>
          </div> -->
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
        {{ store.skillColor[skillID].description }}
      </div>
      <div class="mt-1 text-center">
        <v-btn
          prepend-icon="mdi-close"
          @click="switchDialog(null);"
        >
          CLOSE
        </v-btn>
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
import { useStoreCounter } from '@/stores/counter';
const store = useStoreCounter();

const outputAddSkillList = {};

if (store.settingCardData?.characteristic?.changeCharacteristic) {
  outputAddSkillList['characteristic'] = store.settingCardData.characteristic.changeCharacteristic;
}

if (store.settingCardData?.characteristic?.addSkill) {
  outputAddSkillList['characteristic'] = store.settingCardData.characteristic.addSkill;
}

if (store.settingCardData?.specialAppeal?.addSkill) {
  outputAddSkillList['specialAppeal'] = store.settingCardData.specialAppeal.addSkill;
}

if (store.settingCardData?.skill?.addSkill) {
  outputAddSkillList['skill'] = store.settingCardData.skill.addSkill;
}
</script>

<script>
export default {
  name: 'AddCard',
  props: ['skillType'],
  setup(props) {
    console.log(props.skillType);
  },
  data() {
    return {
      tab_addSkill: 'one',
      dialog: false,
      openDialogName: null,
      dialogSize: 0,
      targetSkill: null,
      skillID: '',
      isAlternate: false,
      selectAddSkillDetail: 'mainSkill',
    }
  },
  methods: {
    /**
     * ダイアログスイッチ
     *
     * ダイアログの表示・非表示を切り替える
     *
     * @param flg フラグ
     */
    switchDialog(flg) {
      this.dialog = flg === null ? !this.dialog : flg;
    },
    /**
     * ダイアログ開閉処理
     *
     * @param openDialogName 開きたいダイアログ名
     * @param dialogSize ダイアログの横幅
     * @param option オプション
     */
    openDialog(openDialogName, dialogSize, option) {
      this.targetSkill = option === null ? null : option.targetSkill;
      this.openDialogName = openDialogName;
      this.dialogSize = dialogSize;

      if (openDialogName === 'skillDescription') {
        this.skillID = option.skillID;
      }

      this.switchDialog(null);
    },
  },
  watch: {
    addSkillList(newVal, oldVal) {
      console.log(`message changed from ${oldVal} to ${newVal}`);
    }
  }
}
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