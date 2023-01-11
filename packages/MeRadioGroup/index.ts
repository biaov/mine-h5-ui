import type { App } from 'vue'
import radioGroup from './index.vue'
import { SFCWithInstall } from '../types'

const MeRadioGroup = radioGroup as SFCWithInstall<typeof radioGroup> // 增加类型
// 安装
MeRadioGroup.install = (app: App) => {
  app.component('MeRadioGroup', MeRadioGroup)
}

export { MeRadioGroup }
