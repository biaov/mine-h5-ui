import type { App } from 'vue'
import MeStepItem from './index.vue'

// 安装
MeStepItem.install = (app: App) => {
  app.component('MeStepItem', MeStepItem)
}

export { MeStepItem }
