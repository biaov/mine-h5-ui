import type { App } from 'vue'
import MeSwiperCell from './index.vue'

// 安装
MeSwiperCell.install = (app: App) => {
  app.component('MeSwiperCell', MeSwiperCell)
}

export { MeSwiperCell }
