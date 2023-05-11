import type { App } from 'vue'
import MeMspaint from './index.vue'

// 安装
MeMspaint.install = (app: App) => {
  app.component('MeMspaint', MeMspaint)
}

export { MeMspaint }
