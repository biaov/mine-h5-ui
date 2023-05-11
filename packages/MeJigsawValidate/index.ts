import type { App } from 'vue'
import MeJigsawValidate from './index.vue'

// 安装
MeJigsawValidate.install = (app: App) => {
  app.component('MeJigsawValidate', MeJigsawValidate)
}

export { MeJigsawValidate }
