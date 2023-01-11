import type { App } from 'vue'
import datetimePicker from './index.vue'
import { SFCWithInstall } from '../types'

const MeDatetimePicker = datetimePicker as SFCWithInstall<typeof datetimePicker> // 增加类型
// 安装
MeDatetimePicker.install = (app: App) => {
  app.component('MeDatetimePicker', MeDatetimePicker)
}

export { MeDatetimePicker }
