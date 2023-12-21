<template>
  <v-tabs v-model="tab" grow class="mb-3" slider-color="pink">
    <v-tab value="filter_status">ステータス絞り込み</v-tab>
    <v-tab value="filter_skill">スキル名絞り込み</v-tab>
    <v-tab value="filter_cardSeries">シリーズ絞り込み</v-tab>
  </v-tabs>
  <v-window v-model="tab">
    <v-window-item value="filter_status">
      <v-container fluid class="pa-0">
        <v-row no-gutters>
          <v-col cols="12" class="pa-0">
            レアリティ
          </v-col>
          <v-col
            cols="3"
            sm="1"
            v-for="rare in store.rarity"
            :key="rare"
            class="pa-0"
          >
            <v-checkbox
              v-model="store.search.cardList.rare"
              :label="rare"
              :value="rare"
              color="pink"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
        <hr class="mb-3">
        <v-row no-gutters>
          <v-col cols="12" class="pa-0">
            ムード
          </v-col>
          <v-col
            cols="6"
            sm="2"
            v-for="(moodName_ja, moodName_en) in store.mood"
            :key="moodName_ja"
            class="pa-0"
          >
            <v-checkbox
              v-model="store.search.cardList.mood"
              :value="moodName_en"
              color="pink"
              hide-details
            >
              <template v-slot:label>
                <v-img
                  :src="require(`@/assets/mood_icon/icon_${moodName_en}.png`)"
                  class="icon mood"
                ></v-img>{{ moodName_ja }}
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
        <hr class="mb-3">
        <v-row no-gutters>
          <v-col cols="12" class="pa-0">
            タイプ
          </v-col>
          <v-col
            cols="12"
            sm="3"
            md="3"
            lg="2"
            xl="2"
            v-for="(styleTypeName_ja, styleTypeName_en) in store.styleType"
            :key="styleTypeName_ja"
            class="pa-0"
          >
            <v-checkbox
              v-model="store.search.cardList.styleType"
              :value="styleTypeName_en"
              color="pink"
              hide-details
            >
              <template v-slot:label>
                <v-img
                  :src="require(`@/assets/styleType_icon/icon_${styleTypeName_en}.png`)"
                  class="icon type"
                ></v-img>{{ styleTypeName_ja }}
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
        <hr class="mb-3">
        <v-row no-gutters>
          <v-col cols="12" class="pa-0">
            メンバー
          </v-col>
          <v-col
            cols="12"
            sm="4"
            md="3"
            lg="2"
            v-for="(name_ja, name_en) in store.charactorName"
            :key="name_ja"
            class="pa-0"
          >
            <v-checkbox
              v-model="store.search.cardList.memberName"
              :value="name_en"
              color="pink"
              hide-details
            >
              <template v-slot:label>
                <v-img
                  :src="require(`@/assets/member_icon/icon_SD_${name_en}.png`)"
                  class="icon member"
                ></v-img>{{ name_ja.first }} {{ name_ja.last }}
              </template>
            </v-checkbox>
          </v-col>
        </v-row>
        <hr class="mt-1 mb-3">
        <v-row no-gutters>
          <v-col cols="12" sm="6" class="pr-sm-5 pr-md-5 pr-lg-5 pr-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                カードレベル
              </v-col>
              <v-col cols="12" class="px-1">
                <v-range-slider
                  hide-details
                  v-model="store.search.cardList.cardLevel"
                  max="120"
                  min="0"
                  thumb-label="always"
                  step="1"
                  color="pink"
                  thumb-color="pink"
                  class="px-2"
                ></v-range-slider>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="hidden-sm-and-up">
            <hr class="my-3">
          </v-col>
          <v-col cols="12" sm="6" class="prl-sm-5 pl-md-5 pl-lg-5 pl-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                解放レベル
              </v-col>
              <v-col cols="12" class="px-1">
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
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <hr class="my-3">
        <v-row no-gutters>
          <v-col cols="12" sm="6" class="pr-sm-5 pr-md-5 pr-lg-5 pr-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                スペシャルアピールレベル
              </v-col>
              <v-col cols="12" class="px-1">
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
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="hidden-sm-and-up">
            <hr class="my-3">
          </v-col>
          <v-col cols="12" sm="6" class="prl-sm-5 pl-md-5 pl-lg-5 pl-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                スキルレベル
              </v-col>
              <v-col cols="12" class="px-1">
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
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <hr class="my-3">
        <v-row no-gutters>
          <v-col cols="12" sm="6" class="pr-sm-5 pr-md-5 pr-lg-5 pr-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                消費AP(スペシャルアピール)
              </v-col>
              <v-col cols="12" class="px-1">
                <v-range-slider
                  hide-details
                  v-model="store.search.cardList.SAAP"
                  max="10"
                  min="0"
                  thumb-label="always"
                  step="1"
                  color="pink"
                  thumb-color="pink"
                  class="px-2"
                ></v-range-slider>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" class="hidden-sm-and-up">
            <hr class="my-3">
          </v-col>
          <v-col cols="12" sm="6" class="prl-sm-5 pl-md-5 pl-lg-5 pl-xl-5">
            <v-row no-gutters>
              <v-col cols="12" class="pa-0 mb-8">
                消費AP(スキル)
              </v-col>
              <v-col cols="12" class="px-1">
                <v-range-slider
                  hide-details
                  v-model="store.search.cardList.SAP"
                  max="10"
                  min="0"
                  thumb-label="always"
                  step="1"
                  color="pink"
                  thumb-color="pink"
                  class="px-2 pb-1"
                ></v-range-slider>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <hr class="mb-3" v-if="false">
        <v-row no-gutters v-if="false">
          <v-col cols="12" class="pa-0">
            お気に入り
          </v-col>
          <v-col
            cols="3"
            sm="1"
            v-for="favorite in store.favorite"
            :key="favorite"
            class="pa-0"
          >
            <v-checkbox
              v-model="store.search.cardList.favorite"
              :label="favorite"
              :value="favorite"
              color="pink"
              hide-details
            ></v-checkbox>
          </v-col>
        </v-row>
      </v-container>
    </v-window-item>
    <v-window-item value="filter_skill">
      <v-row no-gutters>
        <v-col cols="12" class="mb-5">
          <v-select
            v-model="store.search.skillList.specialAppeal"
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
          ></v-select>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="store.search.skillList.skill"
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
          ></v-select>
        </v-col>
        <!--<v-col cols="12" v-if="false">
          <v-autocomplete
            v-model="store.search.skillList.skill"
            :items="skillNameList"
            label="スキル"
            chips
            clearable
            color="pink"
            base-color="pink"
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
          </v-autocomplete>
        </v-col>-->
      </v-row>
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

<script>
export default {
  name: 'CardListFilter',
  data() {
    return {
      tab: null
    }
  },
  created() {},
  methods: {}
}
</script>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
</script>

<style lang="scss" scoped>
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
</style>