<template>
  <v-container fluid class="pa-2">
    <h1 class="mb-1">ITEM LIST ～ スキルアップ素材獲得ステージリスト ～</h1>

    <v-expansion-panels class="mb-5">
      <v-expansion-panel>
        <v-expansion-panel-title>ページ詳細</v-expansion-panel-title>
        <v-expansion-panel-text>
          Quest Liveで入手できるスキルアップ素材一覧です。<br />
          プルダウンから獲得可能アイテムを選択すると、その素材が入手できるステージを絞り込めます。
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>

    <!--<v-row
      no-gutters
      v-for="arr in [{id:1,label:'技能書'}, {id:2,label:'ピース'}, {id:3,label:'チャーム'}]"
      :key="arr"
    >
      <v-col cols="12" class="mb-5">
        <v-select
          v-model="select['item' + arr.id].value"
          :items="select['item' + arr.id].item"
          chips
          :label="`獲得可能アイテム(${arr.label}系)`"
          multiple
          clearable
          color="pink"
          base-color="pink"
          :hint="`絞り込みたい${arr.label}系アイテムを選んでください`"
          persistent-hint
        />
      </v-col>
    </v-row>-->

    <v-row no-gutters>
      <!--<v-col cols="6">
        <v-select
          v-model="select.season.value"
          :items="select.season.item"
          attach
          chips
          label="Select Season"
          multiple
          clearable
        />
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="select.area.value"
          :items="select.area.item"
          attach
          chips
          label="Select Area"
          multiple
          clearable
        />
      </v-col>-->
      <v-col
        v-for="(v, i) in ['技能書', 'ピース', 'チャーム']"
        :key="i"
        cols="12"
        class="mb-5"
      >
        <v-select
          v-model="store.selectItemList[`item${i + 1}`]"
          :items="filterItemList[`item${i + 1}`]"
          attach
          chips
          :label="`獲得可能アイテム(${v}系)`"
          multiple
          clearable
          color="pink"
          base-color="pink"
          variant="outlined"
          :hint="`絞り込みたい${v}系アイテムを選んでください`"
          persistent-hint
        >
          <template #chip="{ item }">
            <v-chip
              v-if="item.title !== ITEMS.NONE"
              pill
              class="pl-0"
              :color="searchColor(item.title)"
            >
              <v-avatar left class="mr-1">
                <v-img
                  :src="
                    imageStore.getImagePath('icons/trainingItem', item.title)
                  "
                />
              </v-avatar>
              {{ item.title }}
            </v-chip>
            <v-chip v-else>{{ item.title }}</v-chip>
          </template>
          <template #item="{ item }">
            <v-list-item
              :title="item.title"
              @click="selectItem(item.title, i + 1)"
            >
              <template #prepend>
                <v-checkbox-btn
                  color="pink"
                  :model-value="
                    store.selectItemList[`item${i + 1}`].some(
                      (elm) => elm === item.title,
                    )
                  "
                />
                <v-img
                  v-if="item.title !== ITEMS.NONE"
                  :src="
                    imageStore.getImagePath('icons/trainingItem', item.title)
                  "
                  :alt="item.title"
                  style="width: 40px"
                />
              </template>
            </v-list-item>
          </template>
        </v-select>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="filterItems()"
          item-key="name"
          density="comfortable"
          items-per-page="75"
          items-per-page-text="1ページあたりの最大表示数"
          :items-per-page-options="[
            { value: 15, title: '15' },
            { value: 30, title: '30' },
            { value: 45, title: '45' },
            { value: 60, title: '60' },
            { value: 75, title: '75' },
            { value: -1, title: '$vuetify.dataFooter.itemsPerPageAll' },
          ]"
          multi-sort
          no-data-text="見つからなかったよ😢"
        >
          <template #item="{ item }">
            <tr>
              <td>{{ item.name }}</td>
              <td>{{ item.area }}</td>
              <td>{{ item.stage }}</td>
              <td v-for="i in 3" :key="i">
                <v-chip
                  v-if="item['獲得可能アイテム'][i - 1] !== ITEMS.NONE"
                  pill
                  class="pl-0"
                  :color="searchColor(item['獲得可能アイテム'][i - 1])"
                >
                  <v-avatar left class="mr-1">
                    <v-img
                      :src="
                        imageStore.getImagePath(
                          'icons/trainingItem',
                          item['獲得可能アイテム'][i - 1],
                        )
                      "
                      eager
                    />
                  </v-avatar>
                  {{ item['獲得可能アイテム'][i - 1] }}
                </v-chip>
                <v-chip v-else>{{ item['獲得可能アイテム'][i - 1] }}</v-chip>
              </td>
            </tr>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

import { useStateStore } from '@/stores/stateStore';
import { useImageStore } from '@/stores/imageStore';

import { ITEMS } from '@/constants/items';
import { ITEM_COLOR_LIST } from '@/constants/itemColorList';
import { ENHANCED_ITEM_LIST } from '@/constants/enhancedItemList';
import { LOCAL_DB_KEY_NAMES } from '@/constants/localDBKeyNames';

const store = useStateStore();
const imageStore = useImageStore();

const filterItemList = ref({
  season: [
    '103期Spring',
    '103期Summer',
    '103期Autumn',
    '103期Winter',
    '104期Spring',
    '104期Summer',
    '104期Autumn',
    '104期Winter',
    '105期Spring',
    '105期Summer',
    '105期Autumn',
    '105期Winter',
  ],
  area: ['Area1', 'Area2', 'Area3', 'Area4', 'Area5'],
  item1: [],
  item2: [],
  item3: [],
});

// const selectedItem = ref({
//   season: [
//     '103期Spring',
//     '103期Summer',
//     '103期Autumn',
//     '103期Winter',
//     '104期Spring',
//   ],
//   area: [
//     '103期Spring',
//     '103期Summer',
//     '103期Autumn',
//     '103期Winter',
//     '104期Spring',
//   ],
//   item1: [],
//   item2: [],
//   item3: [],
// });

const headers = ref([
  { title: '期/季節', sortable: false, value: 'name' },
  { title: 'エリア', value: 'area' },
  { title: 'ステージ', value: 'stage' },
  { title: '獲得可能アイテム(技能書系)', value: '獲得可能アイテム1' },
  { title: '獲得可能アイテム(ピース系)', value: '獲得可能アイテム2' },
  { title: '獲得可能アイテム(チャーム系)', value: '獲得可能アイテム3' },
]);

const allItemList = ref([]);

const filterItems = () => {
  let result = allItemList.value;

  for (let i = 1; i <= 3; i++) {
    if (
      store.selectItemList[`item${i}`].length > 0 &&
      store.selectItemList[`item${i}`].length <
        filterItemList.value[`item${i}`].length
    ) {
      const regex = new RegExp(
        store.selectItemList[`item${i}`]
          .join('|')
          .replace(/\(/g, '\\(')
          .replace(/\)/g, '\\)'),
      );
      result = result.filter((arr) =>
        regex.test(arr['獲得可能アイテム'][i - 1]),
      );
    }
  }

  store.setLocalStorage(LOCAL_DB_KEY_NAMES.SELECT_ITEM_LIST, {
    item1: store.selectItemList.item1,
    item2: store.selectItemList.item2,
    item3: store.selectItemList.item3,
  });

  return result;
};

/**
 * アイテム色検索
 *
 * @description
 * アイテムの色を検索する関数
 *
 * @param target 対象のアイテム名
 * @returns アイテムの色名
 */
const searchColor = (target: string): string => {
  target = /技能書/.test(target) ? target : target.split('(')[0];

  for (const itemName in ITEM_COLOR_LIST) {
    if (target === itemName) {
      return ITEM_COLOR_LIST[itemName];
    }
  }
};

const selectItem = (selector: string, i: number) => {
  if (store.selectItemList[`item${i}`].some((x) => x === selector)) {
    store.selectItemList[`item${i}`] = store.selectItemList[`item${i}`].filter(
      (item) => item !== selector,
    );
  } else {
    store.selectItemList[`item${i}`].push(selector);
  }
};

// 初期化処理
onMounted(() => {
  // フィルターリストの初期化
  initializeFilterLists();
  // アイテムリストの初期化
  initializeItemList();
});

/**
 * フィルターリストの初期化関数
 *
 * @returns void
 */
const initializeFilterLists = () => {
  filterItemList.value.item1 = [ITEMS.NONE, ...Object.values(ITEMS.SKILL_BOOK)];
  filterItemList.value.item2 = [
    ITEMS.NONE,
    ...Object.values(ITEMS.PIECE).flatMap((piece) => Object.values(piece)),
  ];
  filterItemList.value.item3 = [
    ITEMS.NONE,
    ...Object.values(ITEMS.CHARM).flatMap((charm) =>
      typeof charm === 'object' ? Object.values(charm) : charm,
    ),
  ];
};

/**
 * アイテムリストの初期化関数
 *
 * @returns void
 */
const initializeItemList = () => {
  allItemList.value = Object.entries(ENHANCED_ITEM_LIST()).flatMap(
    ([term, seasons]) => {
      return Object.entries(seasons).flatMap(([season, areas]) => {
        return Object.entries(areas).flatMap(([areaIndex, stageList]) => {
          return stageList.map((arr, stageIndex) => ({
            ...arr,
            name: `${term}期${season}`,
            area: Number(areaIndex) + 1,
            stage: stageIndex + 1,
          }));
        });
      });
    },
  );
};
</script>
