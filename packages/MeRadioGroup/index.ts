import type { App } from 'vue'
import MeRadioGroup from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeRadioGroup.install = (app: App) => {
  app.component('MeRadioGroup', MeRadioGroup)
}
const InMeRadioGroup: SFCWithInstall<typeof MeRadioGroup> = MeRadioGroup // 增加类型

export default InMeRadioGroup
