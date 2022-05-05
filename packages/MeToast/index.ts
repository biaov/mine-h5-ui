import type { App } from 'vue'
import MeToast from './toast'
import { SFCWithInstall } from '../types'

const InMeToast: SFCWithInstall<typeof MeToast> = MeToast as SFCWithInstall<typeof MeToast> // 增加类型

// 安装
InMeToast.install = (app: App) => {
  app.config.globalProperties.$MeToast = MeToast
}

export default InMeToast
