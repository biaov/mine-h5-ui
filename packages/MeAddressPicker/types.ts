import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'cancel'): void
  (event: 'sure', currentValue: string[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * 是否显示时间选择器
   */
  visible?: boolean
  /**
   * 分割符
   */
  separator?: string
}

/**
 * useBtns
 */
export namespace USEBtns {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    currentValue: string[]
    modelValue: ModelRef<string>
  }
}
