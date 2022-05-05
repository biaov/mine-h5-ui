import type { App } from 'vue'
import MeRadio from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeRadio.install = (app: App) => {
  app.component('MeRadio', MeRadio)
}
const InMeRadio: SFCWithInstall<typeof MeRadio> = MeRadio // 增加类型

export default InMeRadio
