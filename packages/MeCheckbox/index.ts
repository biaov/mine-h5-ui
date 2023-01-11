import type { App } from 'vue'
import checkbox from './index.vue'
import { SFCWithInstall } from '../types'

const MeCheckbox = checkbox as SFCWithInstall<typeof checkbox> // 增加类型
// 安装
MeCheckbox.install = (app: App) => {
  app.component('MeCheckbox', MeCheckbox)
}

export { MeCheckbox }
