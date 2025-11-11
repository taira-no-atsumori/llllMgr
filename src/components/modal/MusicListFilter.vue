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
              :color="MEMBER_COLOR[getMemberKeys()[index]]"
            >
              <v-avatar left>
                <v-img :src="store.getImagePath('icons/member', `icon_SD_${getMemberKeys()[index]}`)"></v-img>
              </v-avatar>
              {{ item.title }}
            </v-chip>
          </template>-->
          <template #item="{ item, index }">
            <v-list-item :title="item.title" @click="selectCenter(item.title)">
              <template #prepend>
                <template v-if="!store.isOtherMember(item.title)">
                  <v-img
                    :src="
                      store.getImagePath(
                        'icons/member',
                        `icon_SD_${getMemberKeys()[index]}`
                      )
                    "
                    class="icon member"
                  ></v-img>
                </template>
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
        v-for="(name_ja, name_en) in MEMBER_NAMES"
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
                :src="store.getImagePath('icons/member', `icon_SD_${name_en}`)"
                class="icon member"
              ></v-img>{{ name_ja.first }} {{ name_ja.last }}
            </template>
          </v-radio>
        </v-radio-group>
      </v-col>-->
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import {
  // MEMBER_NAMES,
  getMemberKeys,
  makeMemberFullName,
} from '@/constants/memberNames';
// import { MEMBER_COLOR } from '@/constants/colorConst';

const store = useStateStore();
const memberNameList = getMemberKeys().map((member) =>
  makeMemberFullName(member)
);
const center = ref<string | null>(null);

function selectCenter(select: string | null) {
  center.value = select;
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
