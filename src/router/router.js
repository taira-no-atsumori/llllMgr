import { createRouter, createWebHistory } from 'vue-router'
// import { createRouter } from 'vue-router'
import Home from '../components/Home.vue'
// import Formation from '../components/FormationArea.vue'
// import CardList from '../components/CardList.vue'
import MusicList from '../components/MusicList.vue'

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
