import type { App } from 'vue'
import MeScreenshot from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeScreenshot.install = (app: App) => {
  app.component('MeScreenshot', MeScreenshot)
}
const InMeRate: SFCWithInstall<typeof MeScreenshot> = MeScreenshot // 增加类型

export default InMeRate
