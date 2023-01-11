import type { App } from 'vue'
import swiperCell from './index.vue'
import { SFCWithInstall } from '../types'

const MeSwiperCell = swiperCell as SFCWithInstall<typeof swiperCell> // 增加类型
// 安装
MeSwiperCell.install = (app: App) => {
  app.component('MeSwiperCell', MeSwiperCell)
}

export { MeSwiperCell }
