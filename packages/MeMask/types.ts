import type { ModelRef } from 'vue'
import type { DefaultSlotProp } from '../types'

/**
 * props
 */
export interface Props {
  /**
   * 显示状态
   */
  visible?: boolean
  /**
   * 点击遮罩层是否关闭
   */
  maskClose?: boolean
}

interface SelectClassName {
  on: boolean
}

interface DefaultSlotsProps {
  class: SelectClassName
}

/**
 * Slots
 */
export interface Slots {
  default: (props: DefaultSlotsProps) => ReturnType<DefaultSlotProp>
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Props>
    visibleModel: ModelRef<boolean>
  }
}
