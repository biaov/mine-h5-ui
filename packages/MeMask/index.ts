import type { App } from 'vue'
import mask from './index.vue'
import { SFCWithInstall } from '../types'

const MeMask = mask as SFCWithInstall<typeof mask> // 增加类型
// 安装
MeMask.install = (app: App) => {
  app.component('MeMask', MeMask)
}

export { MeMask }
