import type { App } from 'vue'
import MeScreenshot from './index.vue'

// 安装
MeScreenshot.install = (app: App) => {
  app.component('MeScreenshot', MeScreenshot)
}

export { MeScreenshot }
