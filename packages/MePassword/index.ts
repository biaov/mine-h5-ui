import type { App } from 'vue'
import MePassword from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MePassword.install = (app: App) => {
  app.component(MePassword.name, MePassword)
}
const InMePassword: SFCWithInstall<typeof MePassword> = MePassword // 增加类型

export default InMePassword
