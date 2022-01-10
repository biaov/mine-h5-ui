import type { App } from 'vue'
import MeIcon from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeIcon.install = (app: App) => {
  app.component(MeIcon.name, MeIcon)
}
const InMeIcon: SFCWithInstall<typeof MeIcon> = MeIcon // 增加类型
export default InMeIcon
