import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Simulation from '../components/Simulation.vue';
import CardList from '../components/CardList.vue';
import MusicList from '../components/MusicList.vue';
import ItemList from '../components/ItemList.vue';
// import WithStarMgr from '../components/WithStarMgr.vue'
import License from '../components/License.vue';

const pathname = import.meta.env.VITE_PATHNAME;

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: `/${pathname}/`,
      name: 'Home',
      component: Home,
      meta: {
        title: 'HOME | ',
      },
    },
    {
      path: `/${pathname}/simulation`,
      name: 'Simulation',
      component: Simulation,
      meta: {
        title: 'SIMULATION | ',
      },
    },
    {
      path: `/${pathname}/cardlist`,
      name: 'CardList',
      component: CardList,
      meta: {
        title: 'CARD LIST | ',
      },
    },
    {
      path: `/${pathname}/musicList`,
      name: 'MusicList',
      component: MusicList,
      meta: {
        title: 'MUSIC LIST | ',
      },
    },
    {
      path: `/${pathname}/itemList`,
      name: 'ItemList',
      component: ItemList,
      meta: {
        title: 'ITEM LIST | ',
      },
    },
    // {
    //   path: `/${pathname}/withStarMgr`,
    //   name: 'WithStarMgr',
    //   component: WithStarMgr,
    //   meta: {
    //     title: 'WITHSTAR MGR | '
    //   }
    // },
    {
      path: `/${pathname}/license`,
      name: 'License',
      component: License,
      meta: {
        title: 'LICENSE | ',
      },
    },
  ],
});

export default router;
