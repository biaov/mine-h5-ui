import type { App } from 'vue'
import MeStepItem from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeStepItem.install = (app: App) => {
  app.component('MeStepItem', MeStepItem)
}
const InMeStepItem: SFCWithInstall<typeof MeStepItem> = MeStepItem // 增加类型

export default InMeStepItem
