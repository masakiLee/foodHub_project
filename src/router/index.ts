import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView')
  },
  {
    path: '/foodMenu:id',
    name: 'foodMenu',
    component: () => import('@/views/FoodMenuView')
  },
  {
    path: '/ResturantTwoColumn',
    name: 'ResturantTwoColumn',
    component: () => import('@/views/ResturantTwoColumnView')
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})
export default router
