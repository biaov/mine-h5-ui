import type { App } from 'vue'
import MeMask from './index.vue'

// 安装
MeMask.install = (app: App) => {
  app.component('MeMask', MeMask)
}

export { MeMask }
