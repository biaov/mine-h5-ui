import type { App } from 'vue'
import MeInput from './index.vue'
import { SFCWithInstall } from '../types'

// 安装
MeInput.install = (app: App) => {
  app.component(MeInput.name, MeInput)
}
const InMeInput: SFCWithInstall<typeof MeInput> = MeInput // 增加类型
export default InMeInput
