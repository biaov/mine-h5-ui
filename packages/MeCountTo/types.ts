import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'end'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 开始数字
   */
  startValue?: number
  /**
   * 结束数字
   */
  endValue: number
  /**
   * 持续时间
   */
  duration?: number
  /**
   * 千分符
   */
  thousand?: boolean
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    modelValue: ModelRef<boolean>
  }
}
