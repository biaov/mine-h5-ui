import type { App } from 'vue'
import icon from './index.vue'
import { SFCWithInstall } from '../types'

const MeIcon = icon as SFCWithInstall<typeof icon> // 增加类型
// 安装
MeIcon.install = (app: App) => {
  app.component('MeIcon', MeIcon)
}

export { MeIcon }
