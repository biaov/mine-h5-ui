import type { App } from 'vue'
import jigsawValidate from './index.vue'
import { SFCWithInstall } from '../types'

const MeJigsawValidate = jigsawValidate as SFCWithInstall<typeof jigsawValidate> // 增加类型
// 安装
MeJigsawValidate.install = (app: App) => {
  app.component('MeJigsawValidate', MeJigsawValidate)
}

export { MeJigsawValidate }
