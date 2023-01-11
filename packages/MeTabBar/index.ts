import type { App } from 'vue'
import tabBar from './index.vue'
import { SFCWithInstall } from '../types'

const MeTabBar = tabBar as SFCWithInstall<typeof tabBar> // 增加类型
// 安装
MeTabBar.install = (app: App) => {
  app.component('MeTabBar', MeTabBar)
}

export { MeTabBar }
