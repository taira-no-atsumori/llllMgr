<template>
  <v-container fluid class="py-2 px-0">
    <h1>DATA MANAGEMENT</h1>
    <v-switch
      v-model="store.isDev"
      label="isDev"
      color="pink"
      density="compact"
      hide-details
      hide-input
      class="pl-2"
    />

    <v-tabs v-model="tab" color="pink">
      <v-tab value="pendingDataList" text="Pending Data" />
      <v-tab value="cardList" text="Card" />
      <v-tab value="skillList" text="Skill" />
      <v-tab value="skillDetail" text="Skill Detail" />
      <v-tab value="music" text="Music" />
      <v-tab value="item" text="Item" />
      <v-tab value="event" text="Event" />
    </v-tabs>

    <v-divider class="mb-2" />

    <v-tabs-window v-model="tab" class="pt-3">
      <v-tabs-window-item value="pendingDataList">
        <PendingData @edit="handleEdit" />
      </v-tabs-window-item>
      <v-tabs-window-item value="cardList">
        <AddCard />
      </v-tabs-window-item>
      <v-tabs-window-item value="skillList">
        <AddSkill />
      </v-tabs-window-item>
      <v-tabs-window-item value="skillDetail">
        <AddSkillDetail />
      </v-tabs-window-item>
      <v-tabs-window-item value="music">
        <AddMusic />
      </v-tabs-window-item>
      <v-tabs-window-item value="item">
        <AddItem />
      </v-tabs-window-item>
      <v-tabs-window-item value="event">
        <AddEvent />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStateStore } from '@/stores/stateStore';
import PendingData from '@/components/addData/PendingData.vue';
import AddCard from '@/components/addData/AddCard.vue';
import AddMusic from '@/components/addData/AddMusic.vue';
import AddItem from '@/components/addData/AddItem.vue';
import AddSkill from '@/components/addData/AddSkill.vue';
import AddSkillDetail from '@/components/addData/AddSkillDetail.vue';
import AddEvent from '@/components/addData/AddEvent.vue';

const tab = ref('pendingDataList');
const store = useStateStore();

const handleEdit = (type: string) => {
  if (type === 'music') {
    tab.value = 'music';
  } else if (type === 'card') {
    tab.value = 'cardList';
  } else if (type === 'event') {
    tab.value = 'event';
  }
};
</script>
