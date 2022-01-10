import type { App } from 'vue'
import MeCountTo from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCountTo.install = (app: App) => {
  app.component(MeCountTo.name, MeCountTo)
}
const InMeCountTo: SFCWithInstall<typeof MeCountTo> = MeCountTo // 增加类型
export default InMeCountTo
