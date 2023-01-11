import type { App } from 'vue'
import indexBar from './index.vue'
import { SFCWithInstall } from '../types'

const MeIndexBar = indexBar as SFCWithInstall<typeof indexBar> // 增加类型
// 安装
MeIndexBar.install = (app: App) => {
  app.component('MeIndexBar', MeIndexBar)
}

export { MeIndexBar }
