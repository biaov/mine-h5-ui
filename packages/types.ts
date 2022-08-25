import type { App } from 'vue'

export type SFCWithInstall<T> = T & { install(app: App): void } // vue 安装
