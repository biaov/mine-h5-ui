import type { App } from 'vue'
import countDown from './index.vue'
import { SFCWithInstall } from '../types'

const MeCountDown = countDown as SFCWithInstall<typeof countDown> // 增加类型
// 安装
MeCountDown.install = (app: App) => {
  app.component('MeCountDown', MeCountDown)
}

export { MeCountDown }
