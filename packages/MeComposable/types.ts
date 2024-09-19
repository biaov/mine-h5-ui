/**
 * 缓存类型
 */
export type StorageType = 'local' | 'session'

/**
 * 滚动动画选项
 */
export interface ScrollAnimationOption {
  duration?: number
}

/**
 * useLocked
 */
export namespace USELocked {
  export type Option = (...args: unknown[]) => Promise<unknown | void>
  export type ReturnResult = (...args: unknown[]) => Promise<unknown | void>
}
