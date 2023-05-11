import type { App } from 'vue'
import MeCountDown from './index.vue'

// 安装
MeCountDown.install = (app: App) => {
  app.component('MeCountDown', MeCountDown)
}

export { MeCountDown }
