/// <reference types="vue/macros-global" />

// vue
declare module '*.vue' {
  import { defineComponent, ComponentOptionsWithObjectProps } from 'vue'
  const component: ReturnType<typeof defineComponent> & ComponentOptionsWithObjectProps
  export default component
}

declare module 'virtual:pwa-register/vue' {
  // @ts-ignore ignore when vue is not installed
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
