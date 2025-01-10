import { createRouter, createWebHistory, RouteRecordRaw, Router } from 'vue-router'
import docs from './docs'

/**
 * 路由配置
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import(`@/views/404/index.vue`)
  },
  {
    path: '/',
    name: 'Layout',
    component: () => import(`@/views/layout/index.vue`)
  },
  {
    path: '/doc',
    redirect: {
      name: 'overview'
    },
    component: () => import(`@/views/doc/index.vue`),
    children: [
      ...docs,
      {
        path: 'overview',
        name: 'overview',
        component: () => import(`@/views/doc/overview.vue`)
      }
    ]
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
