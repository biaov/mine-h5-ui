import type { App } from 'vue'
import MeSlider from './index.vue'

// 安装
MeSlider.install = (app: App) => {
  app.component('MeSlider', MeSlider)
}

export { MeSlider }
