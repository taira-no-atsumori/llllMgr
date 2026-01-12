<template>
  <v-container fluid class="pa-0">
    <v-row>
      <v-col cols="8">
        <v-row>
          <v-col cols="4">
            <v-select
              v-model="selectPeriod"
              :items="[103, 104, 105]"
              label="Period"
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="selectSeason"
              :items="['Spring', 'Summer', 'Autumn', 'Winter']"
              label="Season"
            />
          </v-col>
          <v-col cols="4">
            <v-select
              v-model="selectArea"
              :items="[1, 2, 3, 4, 5]"
              label="Area"
            />
          </v-col>
        </v-row>

        <v-divider class="mb-5" />

        <v-table>
          <thead>
            <tr>
              <th style="width: 15%">期/季節</th>
              <th style="width: 5%">Area</th>
              <th style="width: 5%">Stage</th>
              <th style="width: 20%">Item (Skill Book)</th>
              <th style="width: 30%">Item (Piece)</th>
              <th style="width: 25%">Item (Charm)</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="i in 15" :key="i">
              <td style="width: 15%">
                {{ `${selectPeriod}期${selectSeason}` }}
              </td>
              <td style="width: 5%">{{ selectArea }}</td>
              <td style="width: 5%">{{ i }}</td>
              <td style="width: 20%">
                <v-select
                  v-model="stages[i - 1].skillBook"
                  :items="skillBookList"
                  item-title="title"
                  item-value="value"
                  variant="underlined"
                  :hide-details="true"
                >
                  <template #item="{ props, item }">
                    <v-list-item v-bind="props" :title="item.title">
                      <template #prepend>
                        <v-img
                          v-if="item.title !== ITEMS.NONE"
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                          style="width: 40px"
                          class="mr-2"
                        />
                      </template>
                    </v-list-item>
                  </template>
                  <template #selection="{ item }">
                    <v-chip
                      v-if="item.title !== ITEMS.NONE"
                      pill
                      class="pl-0"
                      :color="searchColor(item.title)"
                    >
                      <v-avatar left class="mr-1">
                        <v-img
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                        />
                      </v-avatar>
                      {{ item.title }}
                    </v-chip>
                    <span v-else>{{ item.title }}</span>
                  </template>
                </v-select>
              </td>
              <td style="width: 30%">
                <v-select
                  v-model="stages[i - 1].piece"
                  :items="pieceList"
                  item-title="title"
                  item-value="value"
                  variant="underlined"
                  :hide-details="true"
                >
                  <template #item="{ props, item }">
                    <v-list-item v-bind="props" :title="item.title">
                      <template #prepend>
                        <v-img
                          v-if="item.title !== ITEMS.NONE"
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                          style="width: 40px"
                          class="mr-2"
                        />
                      </template>
                    </v-list-item>
                  </template>
                  <template #selection="{ item }">
                    <v-chip
                      v-if="item.title !== ITEMS.NONE"
                      pill
                      class="pl-0"
                      :color="searchColor(item.title)"
                    >
                      <v-avatar left class="mr-1">
                        <v-img
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                        />
                      </v-avatar>
                      {{ item.title }}
                    </v-chip>
                    <span v-else>{{ item.title }}</span>
                  </template>
                </v-select>
              </td>
              <td style="width: 25%">
                <v-select
                  v-model="stages[i - 1].charm"
                  :items="charmList"
                  item-title="title"
                  item-value="value"
                  variant="underlined"
                  :hide-details="true"
                >
                  <template #item="{ props, item }">
                    <v-list-item v-bind="props" :title="item.title">
                      <template #prepend>
                        <v-img
                          v-if="item.title !== ITEMS.NONE"
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                          style="width: 40px"
                          class="mr-2"
                        />
                      </template>
                    </v-list-item>
                  </template>
                  <template #selection="{ item }">
                    <v-chip
                      v-if="item.title !== ITEMS.NONE"
                      pill
                      class="pl-0"
                      :color="searchColor(item.title)"
                    >
                      <v-avatar left class="mr-1">
                        <v-img
                          :src="
                            store.getImagePath('icons/trainingItem', item.title)
                          "
                        />
                      </v-avatar>
                      {{ item.title }}
                    </v-chip>
                    <span v-else>{{ item.title }}</span>
                  </template>
                </v-select>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>

      <v-col cols="4">
        <v-btn
          color="primary"
          prepend-icon="mdi-content-copy"
          text="COPY"
          class="mb-3"
          @click="navigator.clipboard.writeText(jsonOutput)"
        />

        <v-textarea
          label="Result"
          auto-grow
          readonly
          rows="42"
          :model-value="jsonOutput"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ITEMS } from '@/constants/items';
import { useStateStore } from '@/stores/stateStore';
import { ITEM_COLOR_LIST } from '@/constants/itemColorList';

const store = useStateStore();
const selectPeriod = ref(105);
const selectSeason = ref('Spring');
const selectArea = ref(1);

const stages = ref(
  Array.from({ length: 15 }, () => ({
    skillBook: 'ITEMS.NONE',
    piece: 'ITEMS.NONE',
    charm: 'ITEMS.NONE',
  }))
);

const skillBookList = computed(() => {
  const list = [{ title: ITEMS.NONE, value: 'ITEMS.NONE' }];
  Object.entries(ITEMS.SKILL_BOOK).forEach(([key, value]) => {
    list.push({ title: value as string, value: `ITEMS.SKILL_BOOK.${key}` });
  });
  return list;
});

const charmList = computed(() => {
  const list = [{ title: ITEMS.NONE, value: 'ITEMS.NONE' }];
  Object.entries(ITEMS.CHARM).forEach(([key, value]) => {
    if (typeof value === 'object') {
      Object.entries(value).forEach(([subKey, subValue]) => {
        list.push({
          title: subValue as string,
          value: `ITEMS.CHARM.${key}.${subKey}`,
        });
      });
    } else {
      list.push({ title: value as string, value: `ITEMS.CHARM.${key}` });
    }
  });
  return list;
});

const jsonOutput = computed(() => {
  const areaData = stages.value
    .map((stage) => {
      return `        {
          獲得可能アイテム: [${stage.skillBook}, ${stage.piece}, ${stage.charm}],
          //'低確率獲得可能アイテム': ITEMS.SKILL_BOOK.LOW,
        }`;
    })
    .join(',\n');

  return `    ${selectSeason.value}: [
      [
${areaData}
      ],
    ],`;
});

const pieceList = computed(() => {
  const list = [{ title: ITEMS.NONE, value: 'ITEMS.NONE' }];

  const addPieces = (pieceName: string) => {
    Object.entries(ITEMS.PIECE[pieceName]).forEach(([key, value]) => {
      list.push({
        title: value as string,
        value: `ITEMS.PIECE.${pieceName}.${key}`,
      });
    });
  };

  addPieces('GARNET');
  addPieces('CARNELIAN');

  switch (selectSeason.value) {
    case 'Spring':
      addPieces('EMERALD');
      addPieces('DIA');
      break;
    case 'Summer':
      addPieces('PERIDOT');
      addPieces('RUBY');
      break;
    case 'Autumn':
      addPieces('TOPAZ');
      addPieces('SAPPHIRE');
      break;
    case 'Winter':
      addPieces('TURQUOISE');
      addPieces('AMETHYST');
      break;
    default:
      break;
  }

  return list;
});

const searchColor = (target: string): string => {
  target = /技能書/.test(target) ? target : target.split('(')[0];
  for (const itemName in ITEM_COLOR_LIST) {
    if (target === itemName) {
      return ITEM_COLOR_LIST[itemName];
    }
  }
};
</script>
