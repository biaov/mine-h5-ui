import type { App } from 'vue'
import screenshot from './index.vue'
import { SFCWithInstall } from '../types'

const MeScreenshot = screenshot as SFCWithInstall<typeof screenshot> // 增加类型
// 安装
MeScreenshot.install = (app: App) => {
  app.component('MeScreenshot', MeScreenshot)
}

export { MeScreenshot }
