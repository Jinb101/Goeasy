import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/From',
    name: 'From',
    component: ()=> import("../views/From.vue")
  },
  {
    path: '/broadcast',
    name: 'broadcast',
    component: ()=> import("../components/broadcast.vue")
  },
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
