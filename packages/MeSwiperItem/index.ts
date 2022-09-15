import type { App } from 'vue'
import swiperItem from './index.vue'
import { SFCWithInstall } from '../types'

const MeSwiperItem: SFCWithInstall<typeof swiperItem> = swiperItem as SFCWithInstall<typeof swiperItem> // 增加类型
// 安装
MeSwiperItem.install = (app: App) => {
  app.component('MeSwiperItem', MeSwiperItem)
}

export { MeSwiperItem }
