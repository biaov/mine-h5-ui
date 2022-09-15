import type { App } from 'vue'
import empty from './index.vue'
import { SFCWithInstall } from '../types'

const MeEmpty: SFCWithInstall<typeof empty> = empty as SFCWithInstall<typeof empty> // 增加类型
// 安装
MeEmpty.install = (app: App) => {
  app.component('MeEmpty', MeEmpty)
}

export { MeEmpty }
