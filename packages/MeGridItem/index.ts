import type { App } from 'vue'
import MeGridItem from './index.vue'

// 安装
MeGridItem.install = (app: App) => {
  app.component('MeGridItem', MeGridItem)
}

export { MeGridItem }
