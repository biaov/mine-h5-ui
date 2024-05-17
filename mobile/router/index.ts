import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import { baseRouter } from '@/config/variables'
import docs from './docs'

/**
 * 路由配置
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Layout' }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import(`^/views/layout/index.vue`)
  },
  {
    path: '/doc',
    component: () => import(`^/views/doc/index.vue`),
    children: docs as any[]
  }
]

/**
 * 路由实例
 */
const router: Router = createRouter({
  history: createWebHistory(baseRouter),
  routes
})

export default router
