import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter } from 'vue-router'
import Home from '../components/Home.vue'
import Simulation from '../components/Simulation.vue'
import CardList from '../components/CardList.vue'
import MusicList from '../components/MusicList.vue'
import ItemList from '../components/ItemList.vue'
import WithStarMgr from '../components/WithStarMgr.vue'
import License from '../components/License.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/llllMgr/',
      name: 'Home',
      component: Home
    },
    {
      path: '/llllMgr/simulation',
      name: 'Simulation',
      component: Simulation
    },
    {
      path: '/llllMgr/cardlist',
      name: 'CardList',
      component: CardList
    },
    {
      path: '/llllMgr/musicList',
      name: 'MusicList',
      component: MusicList
    },
    {
      path: '/llllMgr/itemList',
      name: 'ItemList',
      component: ItemList
    },
    {
      path: '/llllMgr/withStarMgr',
      name: 'WithStarMgr',
      component: WithStarMgr
    },
    {
      path: '/llllMgr/license',
      name: 'License',
      component: License
    }
  ]
});

export default router