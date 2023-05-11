import type { App } from 'vue'
import MeCell from './index.vue'

// 安装
MeCell.install = (app: App) => {
  app.component('MeCell', MeCell)
}

export { MeCell }
