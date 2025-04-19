<template>
<v-tabs v-model="tab1" grow class="mb-3" slider-color="pink" density="compact">
  <v-tab value="filter_status">ステータス絞り込み</v-tab>
  <v-tab value="filter_skill">スキル / 特性絞り込み</v-tab>
  <v-tab value="filter_cardSeries">シリーズ絞り込み</v-tab>
</v-tabs>

<v-window v-model="tab1" :touch="false">
  <v-window-item value="filter_status">
    <v-container fluid class="pa-0">
      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <div class="d-flex pr-sm-3 mb-sm-1">
            レアリティ
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('rare');"
              class="px-2"
            >
              一括チェック
            </v-btn>
          </div>
          <v-row no-gutters>
            <v-col
              v-for="rare in store.rare"
              :key="rare"
            >
              <v-checkbox
                v-model="store.search.cardList.rare"
                :label="rare"
                :value="rare"
                color="pink"
                hide-details
                density="compact"
              ></v-checkbox>
            </v-col>
          </v-row>
        </v-col>

        <v-divider class="mb-2 hidden-sm-and-up"></v-divider>

        <v-col cols="12" sm="6">
          <div class="d-flex mb-1">
            ムード
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('mood');"
              class="px-2"
            >
              一括チェック
            </v-btn>
          </div>
          <v-row no-gutters>
            <v-col
              cols="6"
              sm="4"
              v-for="(moodName_ja, moodName_en) in store.mood"
              :key="moodName_ja"
            >
              <v-checkbox
                v-model="store.search.cardList.mood"
                :value="moodName_en"
                color="pink"
                hide-details
                density="compact"
              >
                <template v-slot:label>
                  <v-img
                    :src="store.getImagePath('mood_icon', `icon_${moodName_en}`)"
                    class="icon mood"
                  ></v-img>{{ moodName_ja }}
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" class="d-flex mb-1 mb-sm-0">
          タイプ
          <v-spacer></v-spacer>
          <v-btn
            density="compact"
            elevation="1"
            @click="store.resetMusicFilter('styleType');"
            class="px-2"
          >
            一括チェック
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          sm="2"
          v-for="(styleTypeName_ja, styleTypeName_en) in store.styleType"
          :key="styleTypeName_ja"
          class="mb-1"
        >
          <v-checkbox
            v-model="store.search.cardList.styleType"
            :value="styleTypeName_en"
            color="pink"
            hide-details
            density="compact"
          >
            <template v-slot:label>
              <v-img
                :src="store.getImagePath('styleType_icon', `icon_${styleTypeName_en}`)"
                class="icon type"
              ></v-img>{{ styleTypeName_ja }}
            </template>
          </v-checkbox>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" class="d-flex mb-1">
          メンバー
          <v-spacer></v-spacer>
          <v-btn
            density="compact"
            elevation="1"
            @click="store.resetMusicFilter('memberName');"
            class="px-2"
          >
            一括チェック
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          sm="4"
          md="3"
          lg="2"
          v-for="memberName in store.memberNameList"
          :key="memberName"
          class="mb-1 align-self-center"
        >
          <v-checkbox
            v-model="store.search.cardList.memberName"
            :value="memberName"
            color="pink"
            hide-details
            density="compact"
          >
            <template v-slot:label>
              <template
                v-if="!store.isOtherMember(memberName)"
              >
                <v-img
                  :src="store.getImagePath(
                    'member_icon',
                    `icon_illust_${memberName}_${/kozue|tsuzuri|megumi/.test(memberName) ? 104 : 105}`
                  )"
                  class="icon member"
                ></v-img>
                <span
                  :style="`font-size: ${memberName === 'seras' ? 0.8 : 1}em;`"
                >
                  {{ store.makeFullName(memberName) }}
                </span>
              </template>
              <template v-else>
                特殊
              </template>
            </template>
          </v-checkbox>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" class="d-flex">
          LIMITED
          <v-spacer></v-spacer>
          <v-btn
            density="compact"
            elevation="1"
            @click="store.resetMusicFilter('limited');"
            class="px-2"
          >
            一括チェック
          </v-btn>
        </v-col>
        <v-col
          cols="6"
          sm="3"
          lg="2"
          v-for="(label, value) in store.limited"
          :key="label"
          class="mb-1"
        >
          <v-checkbox
            v-model="store.search.cardList.limited"
            :value="value"
            :label="label.filterLabel"
            color="pink"
            hide-details
            density="compact"
          ></v-checkbox>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" class="d-flex mb-1">
          ステータス上限
          <v-spacer></v-spacer>
          <v-btn
            density="compact"
            elevation="1"
            class="px-2"
            @click="store.resetMusicFilter('releaseStatus');"
          >
            一括チェック
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          class="mb-2"
        >
          <v-radio-group
            v-model="store.search.cardList.releaseStatus"
            inline
            density="compact"
            hide-details
          >
            <v-radio
              class="radio-space"
              :value="value"
              :label="store.statusName[value]"
              color="pink"
              hide-details
              v-for="value in store.releaseStatus"
              :key="value"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" sm="6">
          <div class="d-flex mb-sm-4 pr-sm-3">
            お気に入り
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('favorite');"
              class="px-2"
            >
              一括チェック
            </v-btn>
          </div>
          <v-row no-gutters>
            <v-col
              cols="4"
              sm="2"
              v-for="favorite in store.favorite"
              :key="favorite"
            >
              <v-checkbox
                v-model="store.search.cardList.favorite"
                :value="favorite"
                color="pink"
                hide-details
                density="compact"
              >
                <template v-slot:label>
                  <v-icon :icon="`mdi-${favorite}`"></v-icon>
                </template>
              </v-checkbox>
            </v-col>
          </v-row>
        </v-col>

        <v-divider class="mt-1 mb-2 hidden-sm-and-up"></v-divider>

        <v-col cols="12" sm="6" class="prl-sm-3 pl-md-3 pl-lg-3 pl-xl-3">
          <div class="d-flex mb-9">
            特訓度
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('trainingLevel');"
              class="px-2"
            >リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.trainingLevel"
              max="4"
              min="0"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>
      </v-row>

      <v-divider class="mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" sm="6" class="pr-sm-3">
          <div class="mb-9 d-flex">
            カードレベル
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('cardLevel');"
              class="px-2"
            >リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.cardLevel"
              max="140"
              min="0"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>

        <v-divider class="mt-1 mb-2 hidden-sm-and-up"></v-divider>

        <v-col cols="12" sm="6" class="prl-sm-3 pl-md-3 pl-lg-3 pl-xl-3">
          <div class="d-flex mb-9">
            解放レベル
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('releaseLevel');"
              class="px-2"
            >リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.releaseLevel"
              max="5"
              min="1"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>
      </v-row>

      <v-divider class="mt-1 mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" sm="6" class="pr-sm-3">
          <div class="d-flex mb-9">
            スペシャルアピールレベル
            <v-spacer></v-spacer>
            <v-btn
              density="compact"
              elevation="1"
              @click="store.resetMusicFilter('SALevel');"
              class="px-2"
            >リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.SALevel"
              max="14"
              min="1"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>

        <v-divider class="mt-1 mb-2 hidden-sm-and-up"></v-divider>

        <v-col cols="12" sm="6" class="prl-sm-3 pl-md-3 pl-lg-3 pl-xl-3">
          <div class="d-flex mb-9">
            スキルレベル
            <v-spacer></v-spacer>
            <v-btn density="compact" elevation="1" @click="store.resetMusicFilter('SLevel');" class="px-2">リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.SLevel"
              max="14"
              min="1"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>
      </v-row>

      <v-divider class="mt-1 mb-2"></v-divider>

      <v-row no-gutters>
        <v-col cols="12" sm="6" class="pr-sm-3">
          <div class="d-flex mb-9">
            消費AP(スペシャルアピール)
            <v-spacer></v-spacer>
            <v-btn density="compact" elevation="1" @click="store.resetMusicFilter('SAAP');" class="px-2">リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.SAAP"
              :max="store.defaultSearch.cardList.SAAP[1]"
              :min="store.defaultSearch.cardList.SAAP[0]"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2"
            ></v-range-slider>
          </div>
        </v-col>

        <v-divider class="mt-1 mb-2 hidden-sm-and-up"></v-divider>

        <v-col cols="12" sm="6" class="prl-sm-3 pl-md-3 pl-lg-3 pl-xl-3">
          <div class="d-flex mb-9">
            消費AP(スキル)
            <v-spacer></v-spacer>
            <v-btn density="compact" elevation="1" @click="store.resetMusicFilter('SAP');" class="px-2">リセット</v-btn>
          </div>
          <div class="px-1">
            <v-range-slider
              hide-details
              v-model="store.search.cardList.SAP"
              :max="store.defaultSearch.cardList.SAP[1]"
              :min="store.defaultSearch.cardList.SAP[0]"
              thumb-label="always"
              step="1"
              color="pink"
              thumb-color="pink"
              class="px-2 pb-1"
            ></v-range-slider>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-window-item>

  <v-window-item value="filter_skill">
    <v-radio-group v-model="store.search.skillList.skillFilterType" hide-details inline>
      <v-radio label="スキルタイプ絞り込み" value="skillType" color="pink"></v-radio>
      <v-radio label="スキル名絞り込み" value="skillName" color="pink"></v-radio>
    </v-radio-group>
    <v-window v-model="store.search.skillList.skillFilterType" :touch="false">
      <v-window-item value="skillType">
        <v-row no-gutters>
          <v-col cols="12">
            <v-select
              v-model="store.search.skillList.skillType.specialAppeal"
              :items="makeSkillTypeList"
              label="スペシャルアピール"
              clearable
              color="pink"
              base-color="pink"
              multiple
              chips
              dense
              hint="絞り込みたいスペシャルアピールの効果を選んでください"
              persistent-hint
              class="mb-3"
            ></v-select>
          </v-col>
          <v-col cols="12">
            <v-select
              v-model="store.search.skillList.skillType.skill"
              :items="makeSkillTypeList"
              label="スキル"
              clearable
              color="pink"
              base-color="pink"
              multiple
              chips
              dense
              hint="絞り込みたいスキルの効果を選んでください"
              persistent-hint
              class="mb-3"
            ></v-select>
          </v-col>
          <v-col cols="6" v-if="false">
            <v-select
              v-model="store.search.skillList.skillType.characteristic"
              label="特性(メイン)"
              clearable
              color="pink"
              base-color="pink"
              multiple
              chips
              dense
              hint="絞り込みたい特性のメイン効果を選んでください"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="6" v-if="false">
            <v-select
              v-model="store.search.skillList.skillType.characteristic"
              label="特性(サブ)"
              clearable
              color="pink"
              base-color="pink"
              multiple
              chips
              dense
              hint="絞り込みたい特性のサブ効果を選んでください"
              persistent-hint
            ></v-select>
          </v-col>
        </v-row>
      </v-window-item>
      <v-window-item value="skillName">
        <v-select
          v-model="store.search.skillList.skillName.specialAppeal"
          :items="store.specialAppealNameList"
          label="スペシャルアピール"
          clearable
          color="pink"
          base-color="pink"
          multiple
          chips
          deletable-chips
          dense
          hint="絞り込みたいスペシャルアピール名を選んでください"
          persistent-hint
          class="mb-3"
        ></v-select>
        <v-select
          v-model="store.search.skillList.skillName.skill"
          :items="store.skillNameList"
          label="スキル"
          clearable
          color="pink"
          base-color="pink"
          multiple
          chips
          deletable-chips
          dense
          hint="絞り込みたいスキル名を選んでください"
          persistent-hint
          class="mb-3"
        ></v-select>
        <v-select
          v-model="store.search.skillList.skillName.characteristic"
          :items="store.characteristicList"
          label="特性"
          clearable
          color="pink"
          base-color="pink"
          multiple
          chips
          deletable-chips
          dense
          hint="絞り込みたい特性を選んでください"
          persistent-hint
        ></v-select>
        <!--<v-autocomplete
          v-model="store.search.skillList.skill"
          :items="skillNameList"
          label="スキル"
          chips
          clearable
          color="pink"
          base-color="pink"
          v-if="false"
        >
          <template v-slot:selection="data">
            <v-chip
              v-bind="data.attrs"
              :input-value="data.selected"
              close
              @click="data.select"
              @click:close="remove(data.item)"
            >
              {{ data.item.name }}
            </v-chip>
          </template>
          <template v-slot:item="data">
            <template
              v-if="typeof data.item !== 'object'"
            >
            </template>
            <template v-else>
              <v-list-item-content>
                <v-list-item-title></v-list-item-title>
                <v-list-item-subtitle></v-list-item-subtitle>
              </v-list-item-content>
            </template>
          </template>
        </v-autocomplete>-->
      </v-window-item>
    </v-window>
  </v-window-item>

  <v-window-item value="filter_cardSeries">
    <v-row no-gutters>
      <v-col cols="12">
        <v-select
          v-model="store.search.cardSeries"
          :items="store.cardSeriesList"
          label="カードシリーズ"
          clearable
          color="pink"
          base-color="pink"
          multiple
          chips
          deletable-chips
          dense
          hint="絞り込みたいカードシリーズを選んでください"
          persistent-hint
        ></v-select>
      </v-col>
    </v-row>
  </v-window-item>
</v-window>
</template>

<script setup lang="ts">
import { useStoreCounter } from '../stores/counter';
const store = useStoreCounter();

const makeSkillTypeList: string[] = [];

for (const key in store.skillColor) {
  makeSkillTypeList.push(store.skillColor[key].name);
}
</script>

<script lang="ts">
export default {
  name: 'CardListFilter',
  data() {
    return {
      windowSize: {
        w: 0,
        h: 0,
      },
      tab1: null
    }
  },
  created() {},
  mounted() {
    this.onResize();
  },
  computed: {
    windowWidth(): number {
      return window.innerWidth
    },
    windowHeight(): number {
      return window.innerHeight
    }
  },
  methods: {
    onResize(): void {
      this.windowSize = {
        w: window.innerWidth,
        h: window.innerHeight
      }
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.radio-space {
  width: calc(100% / 6);
}

.icon {
  margin-right: 5px;

  &.mood {
    width: 30px;
  }

  &.type {
    width: 30px;
  }

  &.member {
    width: 35px;
  }
}

@media screen and (max-width: 600px) {
  .radio-space {
    width: calc(100% / 3);
  }
}
</style>