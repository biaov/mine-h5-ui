import type { App } from 'vue'
import MeDrag from './index.vue'

// 安装
MeDrag.install = (app: App) => {
  app.component('MeDrag', MeDrag)
}

export { MeDrag }
