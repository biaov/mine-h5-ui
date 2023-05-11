import type { App } from 'vue'
import MeTabBar from './index.vue'

// 安装
MeTabBar.install = (app: App) => {
  app.component('MeTabBar', MeTabBar)
}

export { MeTabBar }
