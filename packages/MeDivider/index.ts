import type { App } from 'vue'
import divider from './index.vue'
import { SFCWithInstall } from '../types'

const MeDivider = divider as SFCWithInstall<typeof divider> // 增加类型
// 安装
MeDivider.install = (app: App) => {
  app.component('MeDivider', MeDivider)
}

export { MeDivider }
