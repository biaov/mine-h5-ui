import type { App } from 'vue'
import MeSwitch from './index.vue'

// 安装
MeSwitch.install = (app: App) => {
  app.component('MeSwitch', MeSwitch)
}

export { MeSwitch }
