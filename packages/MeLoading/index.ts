import type { App } from 'vue'
import loading from './index.vue'
import { SFCWithInstall } from '../types'

const MeLoading: SFCWithInstall<typeof loading> = loading as SFCWithInstall<typeof loading> // 增加类型
// 安装
MeLoading.install = (app: App) => {
  app.component('MeLoading', MeLoading)
}

export { MeLoading }
