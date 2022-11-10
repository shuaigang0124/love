import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import BeatingHeart from '../views/BeatingHeart.vue'
import RotateBeatingHeart from '../views/RotateBeatingHeart.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/beatingHeart'
  },
  {
    path: '/beatingHeart',
    name: 'BeatingHeart',
    component: BeatingHeart
  },
  {
    path: '/rotateBeatingHeart',
    name: 'RotateBeatingHeart',
    component: RotateBeatingHeart
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
