import type { App } from 'vue'
import MeTab from './index.vue'

// 安装
MeTab.install = (app: App) => {
  app.component('MeTab', MeTab)
}

export { MeTab }
