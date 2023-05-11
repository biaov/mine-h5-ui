import type { App } from 'vue'
import MeCountTo from './index.vue'

// 安装
MeCountTo.install = (app: App) => {
  app.component('MeCountTo', MeCountTo)
}

export { MeCountTo }
