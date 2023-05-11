import type { App } from 'vue'
import MeStep from './index.vue'

// 安装
MeStep.install = (app: App) => {
  app.component('MeStep', MeStep)
}

export { MeStep }
