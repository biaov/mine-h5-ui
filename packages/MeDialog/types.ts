import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {}

/**
 * props
 */
export interface Props {
  /**
   * 提示文本
   */
  tips?: string
}

/**
 * useShow
 */
export namespace USEShow {
  export interface Option {
    visible: ModelRef<boolean>
  }
}
