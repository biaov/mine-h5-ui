import type { App } from 'vue'
import messageBox, { alert, confirm, prompt, custom } from './messageBox'
import { SFCWithInstall } from '../types'

const MeMessageBox: SFCWithInstall<typeof messageBox> = messageBox as SFCWithInstall<typeof messageBox> // 增加类型
// 安装
MeMessageBox.install = (app: App) => {
  app.config.globalProperties.$MeMessageBox = messageBox
  app.config.globalProperties.$MeAlert = alert
  app.config.globalProperties.$MeConfirm = confirm
  app.config.globalProperties.$MePrompt = prompt
  app.config.globalProperties.$MeCustom = custom
}

export { MeMessageBox }
