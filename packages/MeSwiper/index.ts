import type { App } from 'vue'
import MeSwiper from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeSwiper.install = (app: App) => {
  app.component('MeSwiper', MeSwiper)
}
const InMeSwiper: SFCWithInstall<typeof MeSwiper> = MeSwiper // 增加类型

export default InMeSwiper
