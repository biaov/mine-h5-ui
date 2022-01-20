import type { App } from 'vue'
import MeMessageBox, { alert, confirm, prompt, custom } from './messageBox'
import { SFCWithInstall } from '../types'

const InMeMessageBox: SFCWithInstall<typeof MeMessageBox> = MeMessageBox as SFCWithInstall<typeof MeMessageBox> // 增加类型
// 安装
InMeMessageBox.install = (app: App) => {
  app.config.globalProperties.$MeMessageBox = MeMessageBox
  app.config.globalProperties.$MeAlert = alert
  app.config.globalProperties.$MeConfirm = confirm
  app.config.globalProperties.$MePrompt = prompt
  app.config.globalProperties.$MeCustom = custom
}
export default InMeMessageBox
