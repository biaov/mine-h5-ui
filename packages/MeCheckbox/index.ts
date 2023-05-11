import type { App } from 'vue'
import MeCheckbox from './index.vue'

// 安装
MeCheckbox.install = (app: App) => {
  app.component('MeCheckbox', MeCheckbox)
}

export { MeCheckbox }
