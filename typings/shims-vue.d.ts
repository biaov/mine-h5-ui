/// <reference types="vue/macros-global" />

/**
 * vue 文件类型声明
 */
declare module '*.vue' {
  import type { DefineComponent, App } from 'vue'

  const component: DefineComponent<{}, {}, unknown> & { install: (app: App) => void }

  export default component
}

/**
 * pwa
 */
declare module 'virtual:pwa-register/vue' {
  import type { Ref } from 'vue'

  export interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
    onRegistered?: (registration: ServiceWorkerRegistration | undefined) => void
    onRegisterError?: (error: any) => void
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>
    offlineReady: Ref<boolean>
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>
  }
}
