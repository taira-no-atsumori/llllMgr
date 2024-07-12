<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col cols="12" class="pa-0">
        センター
        <v-select
          v-model="center"
          clearable
          chips
          label="センター"
          :items="memberNameList"
          variant="outlined"
          color="pink"
        >
          <!--<template v-slot:chip="{ item, index }">
            <v-chip
              :color="store.memberColor[Object.keys(store.memberName)[index]]"
            >
              <v-avatar left>
                <v-img :src="require(`@/assets/member_icon/icon_SD_${Object.keys(store.memberName)[index]}.png`)"></v-img>
              </v-avatar>
              {{ item.title }}
            </v-chip>
          </template>-->
          <template v-slot:item="{ item, index }">
            <v-list-item :title="item.title" @click="selectCenter(item.title)">
              <template v-slot:prepend>
                <v-img
                  :src="require(`@/assets/member_icon/icon_SD_${Object.keys(store.memberName)[index]}.png`)"
                  class="icon member"
                ></v-img>
              </template>
            </v-list-item>
          </template>
        </v-select>
      </v-col>
      <!--<v-col
        cols="12"
        sm="4"
        md="3"
        lg="2"
        xl="2"
        v-for="(name_ja, name_en) in store.memberName"
        :key="name_ja"
        class="pa-0"
      >
        <v-radio-group inline>
          <v-radio
            :value="name_en"
            color="pink"
          >
            <template v-slot:label>
              <v-img
                :src="require(`@/assets/member_icon/icon_SD_${name_en}.png`)"
                class="icon member"
              ></v-img>{{ name_ja.first }} {{ name_ja.last }}
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script setup>
  import { useStoreCounter } from '../stores/counter';
  const store = useStoreCounter();
  const memberNameList = [];

  for (const memberName in store.memberName) {
    memberNameList.push(`${store.memberName[memberName].first} ${store.memberName[memberName].last}`);
  }
</script>

<script>
export default {
  name: 'MusicListFilter',
  data() {
    return {
      center: null
    }
  },
  created() {},
  computed: {},
  methods: {
    selectCenter(select) {
      this.center = select;
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  margin-right: 5px;

  &.member {
    width: 35px;
  }
}
</style>