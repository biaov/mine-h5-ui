import type { App } from 'vue'
import MeDivider from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeDivider.install = (app: App) => {
  app.component(MeDivider.name, MeDivider)
}
const InMeDivider: SFCWithInstall<typeof MeDivider> = MeDivider // 增加类型
export default InMeDivider
