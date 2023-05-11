import type { App } from 'vue'
import MeRadio from './index.vue'

// 安装
MeRadio.install = (app: App) => {
  app.component('MeRadio', MeRadio)
}

export { MeRadio }
