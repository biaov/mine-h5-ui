import type { App } from 'vue'
import toast from './toast'
import { SFCWithInstall } from '../types'

const MeToast: SFCWithInstall<typeof toast> = toast as SFCWithInstall<typeof toast> // 增加类型

// 安装
MeToast.install = (app: App) => {
  app.config.globalProperties.$MeToast = toast
}

export { MeToast }
