import type { App } from 'vue'
import upload from './index.vue'
import { SFCWithInstall } from '../types'

const MeUpload = upload as SFCWithInstall<typeof upload> // 增加类型
// 安装
MeUpload.install = (app: App) => {
  app.component('MeUpload', MeUpload)
}

export { MeUpload }
