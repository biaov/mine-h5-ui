import type { App } from 'vue'
import popup from './index.vue'
import { SFCWithInstall } from '../types'

const MePopup = popup as SFCWithInstall<typeof popup> // 增加类型
// 安装
MePopup.install = (app: App) => {
  app.component('MePopup', MePopup)
}

export { MePopup }
