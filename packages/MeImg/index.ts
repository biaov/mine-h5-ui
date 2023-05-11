import type { App } from 'vue'
import MeImg from './index.vue'

// 安装
MeImg.install = (app: App) => {
  app.component('MeImg', MeImg)
}

export { MeImg }
