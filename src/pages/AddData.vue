<template>
  <v-container fluid class="py-2 px-0">
    <h1>DATA MANAGEMENT</h1>

    <div class="d-flex align-center">
      <v-switch
        v-model="store.isDev"
        label="isDev"
        color="pink"
        density="compact"
        hide-details
        hide-input
        class="px-2"
      />

      <v-btn
        text="Logout"
        color="yellow"
        size="small"
        class="mr-2"
        @click="logout"
      />
      <v-btn
        text="Sync"
        prepend-icon="mdi-refresh"
        size="small"
        color="primary"
        @click="refreshData"
      />
    </div>

    <v-tabs v-model="tab" color="pink">
      <v-tab value="pendingDataList" text="Pending Data" />
      <v-tab value="cardList" text="Card" />
      <v-tab value="skillList" text="Skill" />
      <v-tab value="skillDetail" text="Skill Detail" />
      <v-tab value="music" text="Music" />
      <v-tab value="item" text="Item" />
      <v-tab value="event" text="Event" />
      <v-tab value="info" text="Info" />
    </v-tabs>

    <v-divider class="mb-2" />

    <v-tabs-window v-model="tab" class="pt-3">
      <v-tabs-window-item value="pendingDataList">
        <PendingData :key="refreshKey" @edit="handleEdit" />
      </v-tabs-window-item>
      <v-tabs-window-item value="cardList">
        <AddCard :key="refreshKey" />
      </v-tabs-window-item>
      <v-tabs-window-item value="skillList">
        <AddSkill :key="refreshKey" />
      </v-tabs-window-item>
      <v-tabs-window-item value="skillDetail">
        <AddSkillDetail :key="refreshKey" />
      </v-tabs-window-item>
      <v-tabs-window-item value="music">
        <AddMusic :key="refreshKey" />
      </v-tabs-window-item>
      <v-tabs-window-item value="item">
        <AddItem :key="refreshKey" />
      </v-tabs-window-item>
      <v-tabs-window-item value="event">
        <AddEvent :key="refreshKey" />
      </v-tabs-window-item>
    </v-tabs-window>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signOut } from 'firebase/auth';
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
const router = useRouter();
const refreshKey = ref(0);

/**
 * Firebaseからのログアウト処理
 *
 * @description
 * LOGOUTボタンを押すと、Firebaseからログアウトする。\
 * さらにログアウト完了後、Homeへ自動遷移する。
 */
const logout = async () => {
  const auth = getAuth();

  try {
    await signOut(auth);
    router.push({ name: 'Home' });
  } catch (error) {
    console.error('Logout failed', error);
  }
};

const refreshData = () => {
  refreshKey.value++;
};

watch(
  () => store.isDev,
  () => {
    refreshData();
  },
);

const handleEdit = (type: string) => {
  tab.value = `${type}${type === 'card' ? 'List' : ''}`;
};
</script>
