import type { App } from 'vue'
import checkboxGroup from './index.vue'
import { SFCWithInstall } from '../types'

const MeCheckboxGroup: SFCWithInstall<typeof checkboxGroup> = checkboxGroup as SFCWithInstall<typeof checkboxGroup> // 增加类型
// 安装
MeCheckboxGroup.install = (app: App) => {
  app.component('MeCheckboxGroup', MeCheckboxGroup)
}

export { MeCheckboxGroup }
