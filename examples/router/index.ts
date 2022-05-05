import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import { useGlobalVars } from '@/utils/variables'
import docs from './docs'

const { BaseRouter } = useGlobalVars()

// 路由配置
const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Layout' }
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import(`@/views/layout/index.vue`)
  },
  {
    path: '/doc',
    redirect: {
      name: 'introduce'
    },
    component: () => import(`@/views/doc/index.vue`),
    children: docs as any[]
  }
]

// 路由实例
const router: Router = createRouter({
  history: createWebHistory(BaseRouter),
  routes
})

export default router
