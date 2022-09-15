import type { App } from 'vue'
import drag from './index.vue'
import { SFCWithInstall } from '../types'

const MeDrag: SFCWithInstall<typeof drag> = drag as SFCWithInstall<typeof drag> // 增加类型
// 安装
MeDrag.install = (app: App) => {
  app.component('MeDrag', MeDrag)
}

export { MeDrag }
