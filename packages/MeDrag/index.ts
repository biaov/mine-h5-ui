import type { App } from 'vue'
import MeDrag from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeDrag.install = (app: App) => {
  app.component(MeDrag.name, MeDrag)
}
const InMeDrag: SFCWithInstall<typeof MeDrag> = MeDrag // 增加类型

export default InMeDrag
