<template>
  <v-container fluid class="px-2 pt-2 pb-0">
    <h1 class="mb-1">WITH STAR MGR ～ 獲得With Star管理ツール ～</h1>

    <v-expansion-panels class="mb-2">
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          With×MEETSを視聴したときに得られるWith
          Starを割り振りするときに使えるツールです。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <v-row no-gutters>
      <v-col cols="12">
        <v-btn
          density="compact"
          icon="mdi-minus"
          :disabled="sendGiftPtList.length === 1"
          @click="makeList(false)"
        />
        {{ sendGiftPtList.length }}
        <v-btn density="compact" icon="mdi-plus" @click="makeList(true)" />
      </v-col>
      <v-col cols="12">
        <v-stepper prev-text="prev">
          <template #default="{ prev, next }">
            <v-stepper-header>
              <template
                v-for="(title, i) of [
                  '配信日選択',
                  'メンバー選択',
                  'With Star割り振り',
                  '結果表示',
                ]"
                :key="title"
              >
                <v-stepper-item :title="title" :value="i + 1" />
                <v-divider v-if="i + 1 < 4" />
              </template>
              <!--<v-stepper-item title="配信日選択" value="1" />
                  <v-divider />
                  <v-stepper-item title="メンバー選択" value="2" />
                  <v-divider />
                  <v-stepper-item title="With Star割り振り" value="3" />
                  <v-divider />
                  <v-stepper-item title="結果表示" value="4" />-->
            </v-stepper-header>

            <v-stepper-window>
              <v-stepper-window-item value="1">
                <v-date-picker
                  color="pink"
                  min="2023-04-15"
                  position="relative"
                  show-adjacent-months
                  title="配信日を選択してください。"
                  @update:model-value="dialog.calendar = false"
                />
              </v-stepper-window-item>

              <v-stepper-window-item value="2">
                <v-row no-gutters>
                  <template
                    v-for="memberName in store.memberNameList"
                    :key="memberName"
                  >
                    <v-col
                      v-if="!store.isOtherMember(memberName)"
                      cols="6"
                      md="4"
                      lg="2"
                      class="mt-2 px-1"
                    >
                      <v-card class="pa-2">
                        <div
                          class="d-flex flex-row align-center justify-center"
                        >
                          <img
                            v-if="!store.isOtherMember(memberName)"
                            :src="
                              store.getImagePath(
                                'icons/member',
                                `icon_illust_${memberName}_${store.thisPeriod}`
                              )
                            "
                            style="width: 50px"
                            class="ml-1 mr-2"
                          /><span class="pt-1 font-weight-bold">{{
                            makeMemberFullName(memberName)
                          }}</span>
                        </div>

                        <v-divider class="my-2" />

                        <v-row no-gutters>
                          <v-col cols="6">
                            <v-text-field
                              label="S Fan Lv."
                              variant="outlined"
                              density="compact"
                              hint="現在のSeason Fan Lv.を入力"
                              persistent-hint
                            />
                          </v-col>
                          <v-col cols="6">
                            <v-text-field
                              label="端数"
                              variant="outlined"
                              density="compact"
                              hint="Fan Lv. Pt.の端数を入力"
                              persistent-hint
                            />
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </v-stepper-window-item>

              <v-stepper-window-item value="3">
                <div class="text-center">
                  <p>獲得予定のWith Star</p>
                  <v-rating
                    active-color="pink"
                    color="orange-lighten-1"
                    density="compact"
                    size="large"
                  />
                </div>
                <v-row no-gutters>
                  <template
                    v-for="memberName in getMemberKeys()"
                    :key="memberName"
                  >
                    <v-col
                      v-if="!store.isOtherMember(memberName)"
                      cols="6"
                      md="4"
                      lg="2"
                      class="mt-2 px-1"
                    >
                      <v-card class="pa-2">
                        <div
                          class="d-flex flex-row align-center justify-center"
                        >
                          <img
                            v-if="!store.isOtherMember(memberName)"
                            :src="
                              store.getImagePath(
                                'icons/member',
                                `icon_illust_${memberName}_${store.thisPeriod}`
                              )
                            "
                            style="width: 50px"
                            class="ml-1 mr-2"
                          /><span class="pt-1 font-weight-bold">{{
                            makeMemberFullName(memberName)
                          }}</span>
                        </div>

                        <v-divider class="my-2" />

                        <v-row no-gutters class="mb-3">
                          <v-col cols="4" align="center">
                            <v-btn density="compact" icon="mdi-minus" />
                          </v-col>
                          <v-col cols="4" align="center" class="pt-1">0</v-col>
                          <v-col cols="4" align="center">
                            <v-btn density="compact" icon="mdi-plus" />
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-col>
                  </template>
                </v-row>
              </v-stepper-window-item>

              <v-stepper-window-item value="4">test</v-stepper-window-item>
            </v-stepper-window>

            <v-stepper-actions
              prev-text="prev"
              @click:next="next"
              @click:prev="prev"
            />
          </template>
        </v-stepper>
      </v-col>

      <v-divider class="my-2" />

      <v-col v-for="i in sendGiftPtList.length" :key="i" cols="12" class="mb-1">
        <v-expansion-panels>
          <v-expansion-panel>
            <v-expansion-panel-title>
              配信日：{{ liveStreamingDate(i - 1) }}
            </v-expansion-panel-title>
            <v-expansion-panel-text id="withStarMgrArea">
              <v-row no-gutters class="px-1">
                <v-col cols="2" class="text-center">
                  <p>獲得予定のWith Star</p>
                  <v-rating
                    v-model="sendGiftPtList[i - 1].sendGiftPt"
                    active-color="pink"
                    color="orange-lighten-1"
                    density="compact"
                    size="large"
                  />
                </v-col>
                <v-col cols="4">
                  <v-btn
                    class="mr-2"
                    prepend-icon="mdi-star-remove"
                    text="Reset"
                    @click="resetGiftPt(i - 1)"
                  />
                  <v-btn
                    class="mr-2"
                    prepend-icon="mdi-calendar-month"
                    @click="dialog.calendar = true"
                  >
                    Calendar
                    <v-dialog v-model="dialog.calendar" max-width="328">
                      <v-date-picker
                        v-model="sendGiftPtList[i - 1].selectDate"
                        color="pink"
                        min="2023-04-15"
                        position="relative"
                        show-adjacent-months
                        title="配信日を選択してください。"
                        @update:model-value="dialog.calendar = false"
                      />
                    </v-dialog>
                  </v-btn>
                  <v-btn
                    class="mr-2"
                    prepend-icon="mdi-content-paste"
                    text="Paste"
                    @click="dialog.paste = true"
                  />
                  <v-btn prepend-icon="mdi-delete">Delete</v-btn>
                </v-col>
                <v-col cols="6">
                  <v-alert
                    v-if="sendGiftPtList[i - 1].sendGiftPt === 0"
                    type="info"
                    variant="tonal"
                  >
                    獲得予定のWith Starを選択してください。
                  </v-alert>
                  <v-alert
                    v-if="
                      sendGiftPtList[i - 1].sendGiftPt >
                      sendGiftPtList[i - 1].resultGiftPt
                    "
                    type="info"
                    variant="tonal"
                  >
                    With Starを割り振りたいメンバーに割り振ってください。
                  </v-alert>
                  <v-alert
                    v-if="
                      sendGiftPtList[i - 1].sendGiftPt <
                      sendGiftPtList[i - 1].resultGiftPt
                    "
                    type="error"
                    variant="tonal"
                  >
                    獲得予定のWith
                    Starを増やすか、各メンバーに割り振っているWith
                    Starを減らしてください。
                  </v-alert>
                </v-col>
              </v-row>

              <v-divider class="mt-2 mx-1" />

              <v-row no-gutters>
                <template
                  v-for="(arr, memberName) in sendGiftPtList[i - 1].member"
                  :key="memberName"
                >
                  <v-col
                    v-if="!store.isOtherMember(memberName)"
                    cols="6"
                    md="4"
                    lg="2"
                    class="mt-2 px-1"
                  >
                    <v-card class="pa-2">
                      <div class="d-flex flex-row align-center justify-center">
                        <img
                          v-if="!store.isOtherMember(memberName)"
                          :src="
                            store.getImagePath(
                              'icons/member',
                              `icon_illust_${memberName}_${store.thisPeriod}`
                            )
                          "
                          :style="`width: 50px; filter: grayscale(${
                            sendGiftPtList[i - 1].member[memberName].giftPt > 0
                              ? 0
                              : 1
                          });`"
                          class="ml-1 mr-2"
                        /><span class="pt-1 font-weight-bold">{{
                          makeMemberFullName(memberName)
                        }}</span>
                      </div>

                      <v-divider class="my-2" />

                      <v-row no-gutters class="mb-3">
                        <v-col cols="4" align="center">
                          <v-btn
                            density="compact"
                            icon="mdi-minus"
                            :disabled="
                              sendGiftPtList[i - 1].sendGiftPt === 0 ||
                              sendGiftPtList[i - 1].member[memberName]
                                .giftPt === 0
                            "
                            @click="
                              sendGiftPtList[i - 1].member[memberName].giftPt--;
                              sendGiftPtList[i - 1].resultGiftPt--;
                            "
                          />
                        </v-col>
                        <v-col cols="4" align="center" class="pt-1">
                          {{ sendGiftPtList[i - 1].member[memberName].giftPt }}
                        </v-col>
                        <v-col cols="4" align="center">
                          <v-btn
                            density="compact"
                            icon="mdi-plus"
                            :disabled="
                              sendGiftPtList[i - 1].sendGiftPt === 0 ||
                              sendGiftPtList[i - 1].sendGiftPt <=
                                sendGiftPtList[i - 1].resultGiftPt
                            "
                            @click="
                              sendGiftPtList[i - 1].member[memberName].giftPt++;
                              sendGiftPtList[i - 1].resultGiftPt++;
                            "
                          />
                        </v-col>
                      </v-row>

                      <v-row no-gutters class="text-center">
                        <v-col v-if="false" cols="12">Fan Lv.</v-col>
                        <v-col cols="12" class="mb-2">
                          <p>Season Fan Lv.</p>
                          <span class="text-h6 mr-2">10 / 10</span>
                          <!--<span class="text-caption">(1160 / {{ 120 * (9 - 1) + 200 }})</span>-->
                          <v-progress-linear
                            model-value="1040"
                            max="6120"
                            color="blue"
                            height="18"
                            rounded
                          >
                            <span class="text-caption">1040 / 6120</span>
                          </v-progress-linear>
                          <v-progress-circular
                            model-value="20"
                            :size="50"
                            :width="5"
                            color="blue"
                          >
                            10
                          </v-progress-circular>
                          <v-icon icon="mdi-menu-right" />
                          <v-progress-circular
                            model-value="60"
                            :size="50"
                            :width="5"
                            color="blue"
                          >
                            10
                          </v-progress-circular>
                        </v-col>
                        <v-col cols="12" class="mb-2">
                          <p>Member Fan Lv.</p>
                          <span class="text-h6 mr-1">100</span>
                          <span class="text-caption">(1080 / 1330)</span>
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-col>
                </template>
              </v-row>
            </v-expansion-panel-text>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="dialog.paste" max-width="1600" scrollable>
    <v-sheet class="pa-3">
      <h2>Fan Lv.の複製</h2>
      <v-card
        v-for="(outputList, i) in sendGiftPtList"
        :key="outputList"
        class="mt-2 pa-2"
        @click="dialog.paste = false"
      >
        <h4>{{ i + 1 }}</h4>

        <v-divider />

        <v-row no-gutters>
          <template
            v-for="(arr, memberName, ii) in outputList.member"
            :key="memberName"
          >
            <v-col
              v-if="!store.isOtherMember(memberName)"
              cols="12"
              md="4"
              lg="2"
              :class="`mt-2 ${
                ii + 1 <
                Object.keys(outputList.member).length - EXCLUSION_MEMBER.length
                  ? 'border-e-sm'
                  : ''
              }`"
            >
              <v-row no-gutters>
                <v-col cols="4" align="center" class="align-self-center">
                  <v-img
                    v-if="!store.isOtherMember(memberName)"
                    :src="
                      store.getImagePath(
                        'icons/member',
                        `icon_illust_${memberName}_${store.thisPeriod}`
                      )
                    "
                    style="width: 50px"
                  />
                  <p class="mt-1" style="font-size: 12px">
                    {{ makeMemberFullName(memberName) }}
                  </p>
                </v-col>
                <v-col cols="8">
                  <v-row no-gutters class="text-center">
                    <v-col cols="12">Fan Lv.</v-col>
                    <v-col cols="6">
                      <p>Season</p>
                      <span class="text-h6">10 / 10</span>
                    </v-col>
                    <v-col cols="6">
                      <p>Member</p>
                      <span class="text-h6">100</span>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </template>
        </v-row>
      </v-card>
      <div class="mt-3 text-center">
        <v-btn text="閉じる" @click="dialog.paste = false" />
      </div>
    </v-sheet>
  </v-dialog>
</template>

<script setup>
//import { useStateStore } from '@/stores/store';
//const store = useStateStore();
</script>

<script>
import { createPinia } from 'pinia';
import { useStateStore } from '@/stores/stateStore';
import {
  EXCLUSION_MEMBER,
  getMemberKeys,
  makeMemberFullName,
} from '@/constants/memberNames';

const pinia = createPinia();
const store = useStateStore(pinia);

export default {
  name: 'WithStarMgr',
  data() {
    return {
      dialog: {
        calendar: false,
        paste: false,
      },
      sendGiftPtList: [],
      copyList: {},
    };
  },
  computed: {},
  created() {
    this.makeList(true);
  },
  mounted() {},
  methods: {
    resetGiftPt(target) {
      this.sendGiftPtList[target].sendGiftPt = 0;
      this.sendGiftPtList[target].resultGiftPt = 0;

      for (const key in this.sendGiftPtList[target].member) {
        this.sendGiftPtList[target].member[key].giftPt = 0;
      }
    },
    makeList(isPlus) {
      if (isPlus) {
        const member = {};

        for (const key in getMemberKeys()) {
          member[key] = {
            giftPt: 0,
            fanLv: {
              season: 0,
              member: 0,
            },
          };
        }

        this.sendGiftPtList.push({
          sendGiftPt: 0,
          resultGiftPt: 0,
          selectDate: new Date(),
          member: member,
        });
      } else {
        this.sendGiftPtList.pop();
      }
    },
    liveStreamingDate(targetNumber) {
      const returnDate = {
        year: this.sendGiftPtList[targetNumber].selectDate.getFullYear(),
        month: (this.sendGiftPtList[targetNumber].selectDate.getMonth() + 1)
          .toString()
          .padStart(2, '0'),
        date: this.sendGiftPtList[targetNumber].selectDate
          .getDate()
          .toString()
          .padStart(2, '0'),
        day: ['日', '月', '火', '水', '木', '金', '土'][
          this.sendGiftPtList[targetNumber].selectDate.getDay()
        ],
      };

      return `${returnDate.year}/${returnDate.month}/${returnDate.date}(${returnDate.day})`.replace(
        /\n|\r/g,
        ''
      );
    },
  },
};
</script>

<style lang="scss">
#withStarMgrArea > .v-expansion-panel-text__wrapper {
  padding: 8px 4px;
}
</style>
