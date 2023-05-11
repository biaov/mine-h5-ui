import type { App } from 'vue'
import MeSwiperItem from './index.vue'

// 安装
MeSwiperItem.install = (app: App) => {
  app.component('MeSwiperItem', MeSwiperItem)
}

export { MeSwiperItem }
