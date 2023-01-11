import type { App } from 'vue'
import addressPicker from './index.vue'
import { SFCWithInstall } from '../types'

const MeAddressPicker = addressPicker as SFCWithInstall<typeof addressPicker> // 增加类型
// 安装
MeAddressPicker.install = (app: App) => {
  app.component('MeAddressPicker', MeAddressPicker)
}

export { MeAddressPicker }
