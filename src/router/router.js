import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter } from 'vue-router'
import Home from '../components/Home.vue'
// import Formation from '../components/FormationArea.vue'
// import CardList from '../components/CardList.vue'
import MusicList from '../components/MusicList.vue'
import ItemList from '../components/ItemList.vue'
import License from '../components/License.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/llllMgr/',
      name: 'Home',
      component: Home
    },
    /* {
      path: '/formation',
      name: 'Formation',
      component: Formation
    },
    {
      path: '/cardlist',
      name: 'CardList',
      component: CardList
    }, */
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
      path: '/llllMgr/license',
      name: 'License',
      component: License
    }
  ]
});

export default router



/* import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Routing from '../components/Rounting.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',                  
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/routing',
      name: 'routing',
      component: Routing 
    }
  ]
}) */
