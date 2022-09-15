import type { App } from 'vue'
import radioGroup from './index.vue'
import { SFCWithInstall } from '../types'

const MeRadioGroup: SFCWithInstall<typeof radioGroup> = radioGroup as SFCWithInstall<typeof radioGroup> // 增加类型
// 安装
MeRadioGroup.install = (app: App) => {
  app.component('MeRadioGroup', MeRadioGroup)
}

export { MeRadioGroup }
