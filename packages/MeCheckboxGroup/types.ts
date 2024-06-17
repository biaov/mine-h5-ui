import type { Ref, ModelRef } from 'vue'

// onChange 参数
export interface OnChangeParams {
  name: string | number
  isChecked: Ref<boolean>
}

/**
 * emits
 */
export interface Emits {
  (event: 'change', arr: (string | number)[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * 排列方向, vertical | horizontal
   */
  direction?: string
}

/**
 * useInitSlots
 */
export namespace USEInitSlots {
  export interface Option {
    emit: Emits
    currentValue: ModelRef<(string | number)[]>
  }
}
