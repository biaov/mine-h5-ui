import type { ModelRef } from 'vue'

/**
 * emits
 */
export interface Emits {
  (event: 'step', index: number): void
  (event: 'finish'): void
}

/**
 * props
 */
export interface Props {
  /**
   * 引导图片数据
   */
  list: string[]
  /**
   * 禁止完成关闭
   */
  disabledClose?: boolean
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    visibleModel: ModelRef<boolean>
  }
}
