import type { App } from 'vue'
import mspaint from './index.vue'
import { SFCWithInstall } from '../types'

const MeMspaint = mspaint as SFCWithInstall<typeof mspaint> // 增加类型
// 安装
MeMspaint.install = (app: App) => {
  app.component('MeMspaint', MeMspaint)
}

export { MeMspaint }
