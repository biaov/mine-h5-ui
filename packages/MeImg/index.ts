import type { App } from 'vue'
import img from './index.vue'
import { SFCWithInstall } from '../types'

const MeImg = img as SFCWithInstall<typeof img> // 增加类型
// 安装
MeImg.install = (app: App) => {
  app.component('MeImg', MeImg)
}

export { MeImg }
