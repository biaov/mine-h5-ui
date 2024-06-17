import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'focus', e: MouseEvent): void
  (event: 'blur', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 输入框模式
   */
  type?: 'number' | 'password'
  /**
   * 输入框数量
   */
  num?: number
  /**
   * 系统皮肤样式
   */
  skinType?: 'white' | 'dark'
  /**
   * 聚焦状态
   */
  isFocus?: boolean
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    modelValue: ModelRef<string>
  }
}
