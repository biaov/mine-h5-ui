import type { App } from 'vue'
import button from './index.vue'
import { SFCWithInstall } from '../types'

const MeButton: SFCWithInstall<typeof button> = button as SFCWithInstall<typeof button> // 增加类型
// 安装
MeButton.install = (app: App): void => {
  app.component('MeButton', MeButton)
}

export { MeButton }
