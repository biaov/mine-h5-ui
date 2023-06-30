import { App } from 'vue'
import type { InstallRecord, NameRecord, ComponentNameRecord } from '../types'

/**
 * 添加安装方法
 * @example
 * ```JS
 * import { MeDemo } from './index.vue'
 *
 * addInstall(MeDemo)
 * ```
 */
export const addInstall = <T>(com: T): T & InstallRecord & NameRecord => {
  const component = com as T & InstallRecord & NameRecord
  component.install = (app: App) => {
    app.component(component.name, component)
  }
  return component
}

/**
 * 添加 API 安装方法
 * @example
 * ```JS
 * import { MeDemo } from './index.vue'
 *
 * addInstallAPI(MeDemo)
 * ```
 */
export const addInstallAPI = <T>(com: T): T & InstallRecord & ComponentNameRecord => {
  const component = com as T & InstallRecord & ComponentNameRecord
  component.install = (app: App) => {
    app.config.globalProperties[`$${component.componentName}`] = component
  }
  return component
}
