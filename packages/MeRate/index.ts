import type { App } from 'vue'
import MeRate from './index.vue'

// 安装
MeRate.install = (app: App) => {
  app.component('MeRate', MeRate)
}

export { MeRate }
