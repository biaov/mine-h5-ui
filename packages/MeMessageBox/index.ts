import type { App } from 'vue'
import MeMessageBox from './messageBox'

// 安装
MeMessageBox.install = (app: App) => {
  app.config.globalProperties.$MeMessageBox = MeMessageBox
}

export { MeMessageBox }
