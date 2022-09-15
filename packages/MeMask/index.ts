import type { App } from 'vue'
import mask from './index.vue'
import { SFCWithInstall } from '../types'

const MeMask: SFCWithInstall<typeof mask> = mask as SFCWithInstall<typeof mask> // 增加类型
// 安装
MeMask.install = (app: App) => {
  app.component('MeMask', MeMask)
}

export { MeMask }
