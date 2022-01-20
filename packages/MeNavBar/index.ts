import type { App } from 'vue'
import MeNavBar from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeNavBar.install = (app: App) => {
  app.component(MeNavBar.name, MeNavBar)
}
const InMeNavBar: SFCWithInstall<typeof MeNavBar> = MeNavBar // 增加类型

export default InMeNavBar
