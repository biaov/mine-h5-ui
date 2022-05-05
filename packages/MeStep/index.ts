import type { App } from 'vue'
import MeStep from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeStep.install = (app: App) => {
  app.component('MeStep', MeStep)
}
const InMeStep: SFCWithInstall<typeof MeStep> = MeStep // 增加类型

export default InMeStep
