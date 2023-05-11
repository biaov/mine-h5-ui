import type { App } from 'vue'
import MeTabItem from './index.vue'

// 安装
MeTabItem.install = (app: App) => {
  app.component('MeTabItem', MeTabItem)
}

export { MeTabItem }
