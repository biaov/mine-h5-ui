import type { App } from 'vue'
import MeNavBar from './index.vue'

// 安装
MeNavBar.install = (app: App) => {
  app.component('MeNavBar', MeNavBar)
}

export { MeNavBar }
