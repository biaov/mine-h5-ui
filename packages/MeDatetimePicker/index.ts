import type { App } from 'vue'
import MeDatetimePicker from './index.vue'

// 安装
MeDatetimePicker.install = (app: App) => {
  app.component('MeDatetimePicker', MeDatetimePicker)
}

export { MeDatetimePicker }
