import type { Ref } from 'vue'

/**
 * 父组件参数
 */
export interface AccordionContext {
  name: string
  currentValue: Ref<string | number>
  onChange: (name: string | number) => void
}

/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 标题
   */
  label: string
  /**
   *  index 值
   */
  name: string | number
  /**
   * 下边框颜色
   */
  borderColor?: string
}
