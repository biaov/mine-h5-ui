import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw, Router } from 'vue-router'
import docs from './docs'

/**
 * 路由配置
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Layout', params: {} }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import(`^/views/layout/index.vue`)
  },
  {
    path: '/doc',
    component: () => import(`^/views/doc/index.vue`),
    children: docs
  }
]

/**
 * 路由实例
 */
const router: Router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_ROUTER),
  routes
})

export default router
