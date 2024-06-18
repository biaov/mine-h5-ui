import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'change', value: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * 未聚焦时的颜色
   */
  color?: string
  /**
   * 聚焦时显示的颜色
   */
  activeColor?: string
  /**
   * 位移边框颜色
   */
  lineColor?: string
}

/**
 * useInitSlots
 */
export namespace USEInitSlots {
  export interface Option {
    emit: Emits
    currentValue: ModelRef<string | number>
  }
}
