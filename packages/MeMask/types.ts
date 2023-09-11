import type { DefaultSlotProp } from '../types'

/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
}

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
