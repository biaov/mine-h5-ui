import type { App } from 'vue'
import MeSwiper from './index.vue'

// 安装
MeSwiper.install = (app: App) => {
  app.component('MeSwiper', MeSwiper)
}

export { MeSwiper }
