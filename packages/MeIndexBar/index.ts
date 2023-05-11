import type { App } from 'vue'
import MeIndexBar from './index.vue'

// 安装
MeIndexBar.install = (app: App) => {
  app.component('MeIndexBar', MeIndexBar)
}

export { MeIndexBar }
