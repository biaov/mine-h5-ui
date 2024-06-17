import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'change', name: string | number): void
}

/**
 * props
 */
export interface Props {
  /**
   * 排列方向,
   */
  direction?: 'vertical' | 'horizontal'
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
