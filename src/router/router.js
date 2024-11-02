import { createRouter, createWebHistory } from 'vue-router';
// import { createRouter } from 'vue-router'
import Home from '../components/Home.vue';
import Simulation from '../components/Simulation.vue';
import CardList from '../components/CardList.vue';
import MusicList from '../components/MusicList.vue';
import ItemList from '../components/ItemList.vue';
// import WithStarMgr from '../components/WithStarMgr.vue'
import License from '../components/License.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/llllMgr/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'HOME | ',
      },
    },
    {
      path: '/llllMgr/simulation',
      name: 'Simulation',
      component: Simulation,
      meta: {
        title: 'SIMULATION | ',
      },
    },
    {
      path: '/llllMgr/cardlist',
      name: 'CardList',
      component: CardList,
      meta: {
        title: 'CARD LIST | ',
      },
    },
    {
      path: '/llllMgr/musicList',
      name: 'MusicList',
      component: MusicList,
      meta: {
        title: 'MUSIC LIST | ',
      },
    },
    {
      path: '/llllMgr/itemList',
      name: 'ItemList',
      component: ItemList,
      meta: {
        title: 'ITEM LIST | ',
      },
    },
    // {
    //   path: '/llllMgr/withStarMgr',
    //   name: 'WithStarMgr',
    //   component: WithStarMgr,
    //   meta: {
    //     title: 'WITHSTAR MGR | '
    //   }
    // },
    {
      path: '/llllMgr/license',
      name: 'License',
      component: License,
      meta: {
        title: 'LICENSE | ',
      },
    },
  ],
});

export default router;
