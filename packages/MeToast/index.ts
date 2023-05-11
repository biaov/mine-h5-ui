import type { App } from 'vue'
import MeToast from './toast'

// 安装
MeToast.install = (app: App) => {
  app.config.globalProperties.$MeToast = MeToast
}

export { MeToast }
