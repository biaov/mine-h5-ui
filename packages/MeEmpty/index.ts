import type { App } from 'vue'
import MeEmpty from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeEmpty.install = (app: App) => {
  app.component(MeEmpty.name, MeEmpty)
}
const InMeEmpty: SFCWithInstall<typeof MeEmpty> = MeEmpty // 增加类型

export default InMeEmpty
