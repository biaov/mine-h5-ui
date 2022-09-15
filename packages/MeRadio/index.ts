import type { App } from 'vue'
import radio from './index.vue'
import { SFCWithInstall } from '../types'

const MeRadio: SFCWithInstall<typeof radio> = radio as SFCWithInstall<typeof radio> // 增加类型
// 安装
MeRadio.install = (app: App) => {
  app.component('MeRadio', MeRadio)
}

export { MeRadio }
