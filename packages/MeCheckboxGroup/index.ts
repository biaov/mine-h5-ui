import type { App } from 'vue'
import MeCheckboxGroup from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeCheckboxGroup.install = (app: App) => {
  app.component(MeCheckboxGroup.name, MeCheckboxGroup)
}
const InMeCheckboxGroup: SFCWithInstall<typeof MeCheckboxGroup> = MeCheckboxGroup // 增加类型

export default InMeCheckboxGroup
