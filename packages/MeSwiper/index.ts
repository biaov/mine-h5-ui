import type { App } from 'vue'
import swiper from './index.vue'
import { SFCWithInstall } from '../types'

const MeSwiper = swiper as SFCWithInstall<typeof swiper> // 增加类型
// 安装
MeSwiper.install = (app: App) => {
  app.component('MeSwiper', MeSwiper)
}

export { MeSwiper }
