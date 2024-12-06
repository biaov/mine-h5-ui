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

/**
 * useColorTransform
 */
export namespace USEColorTransform {
  export interface Option {
    type: ('rgb' | 'hex' | 'hsb')[]
  }
}

/**
 * useMoveHandle
 */
export namespace USEMoveHandle {
  export type OptionEvent = Pick<MouseEvent, 'x' | 'y' | 'type'>
  export interface Option {
    start(e: OptionEvent): void | unknown
    move(e: OptionEvent): void | unknown
    end(e: OptionEvent): void | unknown
  }
}
