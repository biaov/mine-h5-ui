import type { App } from 'vue'
import MeMask from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeMask.install = (app: App) => {
  app.component('MeMask', MeMask)
}
const InMeMask: SFCWithInstall<typeof MeMask> = MeMask // 增加类型

export default InMeMask
