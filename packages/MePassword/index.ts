import type { App } from 'vue'
import password from './index.vue'
import { SFCWithInstall } from '../types'

const MePassword = password as SFCWithInstall<typeof password> // 增加类型
// 安装
MePassword.install = (app: App) => {
  app.component('MePassword', MePassword)
}

export { MePassword }
