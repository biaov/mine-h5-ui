import type { App } from 'vue'
import step from './index.vue'
import { SFCWithInstall } from '../types'

const MeStep: SFCWithInstall<typeof step> = step as SFCWithInstall<typeof step> // 增加类型
// 安装
MeStep.install = (app: App) => {
  app.component('MeStep', MeStep)
}

export { MeStep }
