import type { App } from 'vue'
import MeDivider from './index.vue'

// 安装
MeDivider.install = (app: App) => {
  app.component('MeDivider', MeDivider)
}

export { MeDivider }
