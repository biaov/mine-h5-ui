import type { App } from 'vue'
import MeUpload from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeUpload.install = (app: App) => {
  app.component(MeUpload.name, MeUpload)
}
const InMeUpload: SFCWithInstall<typeof MeUpload> = MeUpload // 增加类型
export default InMeUpload
