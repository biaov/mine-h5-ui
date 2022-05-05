import type { App } from 'vue'
import MeCheckbox from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCheckbox.install = (app: App) => {
  app.component(MeCheckbox.name, MeCheckbox)
}
const InMeCheckbox: SFCWithInstall<typeof MeCheckbox> = MeCheckbox // 增加类型

export default InMeCheckbox
