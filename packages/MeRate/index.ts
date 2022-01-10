import type { App } from 'vue'
import MeRate from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeRate.install = (app: App) => {
  app.component(MeRate.name, MeRate)
}
const InMeRate: SFCWithInstall<typeof MeRate> = MeRate // 增加类型
export default InMeRate
