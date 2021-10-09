/* eslint-disable no-unused-vars */
import type { App } from "vue";

export type SFCWithInstall<T> = T & { install(app: App): void }; // vue 安装
export type PublicProps<T, U = {}> = Readonly<T> & U; // vue 的公共 props
