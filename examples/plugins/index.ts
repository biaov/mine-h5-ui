import type { App } from 'vue'
import mineh5ui from '~/index'
import '~/styles/index.less'

export * from '~/index'

/**
 * 统一安装 mine-h5-ui（包含全局样式）
 */
export const setupMineH5UI = (app: App) => {
  app.use(mineh5ui)
}

// export * from '#/es'
// export mineh5ui from '#/es'
// import '#/styles/index.css'
// import '#/vw/index.css'
