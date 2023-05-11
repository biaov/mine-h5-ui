import type { App } from 'vue'
import MeInput from './index.vue'

// 安装
MeInput.install = (app: App) => {
  app.component('MeInput', MeInput)
}

export { MeInput }
