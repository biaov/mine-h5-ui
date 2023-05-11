import type { App } from 'vue'
import MeProgressBar from './index.vue'

// 安装
MeProgressBar.install = (app: App) => {
  app.component('MeProgressBar', MeProgressBar)
}

export { MeProgressBar }
