import type { App } from 'vue'
import MeActionSheet from './index.vue'

// 安装
MeActionSheet.install = (app: App) => {
  app.component('MeActionSheet', MeActionSheet)
}

export { MeActionSheet }
