import type { App } from 'vue'
import MeGrid from './index.vue'

// 安装
MeGrid.install = (app: App) => {
  app.component('MeGrid', MeGrid)
}

export { MeGrid }
