import type { Ref } from 'vue'

// onChange 参数
export interface OnChangeParams {
  name: string | number
  isChecked: Ref<boolean>
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', arr: (string | number)[]): void
  (event: 'change', arr: (string | number)[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 值
   */
  modelValue?: (string | number)[]

  /**
   * 排列方向, vertical | horizontal
   */
  direction?: string
}
