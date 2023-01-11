import type { App } from 'vue'
import stepItem from './index.vue'
import { SFCWithInstall } from '../types'

const MeStepItem = stepItem as SFCWithInstall<typeof stepItem> // 增加类型
// 安装
MeStepItem.install = (app: App) => {
  app.component('MeStepItem', MeStepItem)
}

export { MeStepItem }
