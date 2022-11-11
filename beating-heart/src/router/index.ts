import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BeatingHeart from '../views/BeatingHeart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'BeatingHeart',
    component: BeatingHeart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
