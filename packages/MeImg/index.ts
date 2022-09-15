import type { App } from 'vue'
import img from './index.vue'
import { SFCWithInstall } from '../types'

const MeImg: SFCWithInstall<typeof img> = img as SFCWithInstall<typeof img> // 增加类型
// 安装
MeImg.install = (app: App) => {
  app.component('MeImg', MeImg)
}

export { MeImg }
