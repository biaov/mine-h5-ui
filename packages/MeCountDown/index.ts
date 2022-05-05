import type { App } from 'vue'
import MeCountDown from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCountDown.install = (app: App) => {
  app.component(MeCountDown.name, MeCountDown)
}
const InMeCountDown: SFCWithInstall<typeof MeCountDown> = MeCountDown // 增加类型

export default InMeCountDown
