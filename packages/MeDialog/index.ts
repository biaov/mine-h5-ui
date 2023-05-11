import type { App } from 'vue'
import MeDialog from './index.vue'

// 安装
MeDialog.install = (app: App) => {
  app.component('MeDialog', MeDialog)
}

export { MeDialog }
