import type { App } from 'vue'
import space from './index.vue'
import { SFCWithInstall } from '../types'

const MeSpace = space as SFCWithInstall<typeof space> // 增加类型
// 安装
MeSpace.install = (app: App) => {
  app.component('MeSpace', MeSpace)
}

export { MeSpace }
