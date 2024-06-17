import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'refresh'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 自定义状态文本
   */
  loadText?: string[]
  /**
   * 是否要显示加载图标
   */
  loadIcon?: boolean
}

/**
 * useHandMove
 */
export namespace USEHandMove {
  export interface Option {
    emit: Emits
    modelValue: ModelRef<boolean>
  }
}
