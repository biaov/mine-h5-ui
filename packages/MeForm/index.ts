import type { App } from 'vue'
import form from './index.vue'
import { SFCWithInstall } from '../types'

const MeForm = form as SFCWithInstall<typeof form> // 增加类型
// 安装
MeForm.install = (app: App) => {
  app.component('MeForm', MeForm)
}

export { MeForm }
