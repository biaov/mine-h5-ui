import type { ModelRef } from 'vue'
/**
 * emits
 */
export interface Emits {
  (event: 'click', e: MouseEvent): void
}

/**
 * propsq
 */
export interface Props {
  /**
   * 自定义大小
   */
  size?: string
  /**
   * 自定义激活颜色
   */
  activeColor?: string
  /**
   * 自定义未激活颜色
   */
  inactiveColor?: string
  /**
   * 异步状态
   */
  async?: boolean
  /**
   * 禁用状态
   */
  disabled?: boolean
}

/**
 * useHandler
 */
export namespace USEHandler {
  export interface Option {
    props: Readonly<Required<Props>>
    emit: Emits
    isActived: ModelRef<boolean>
  }
}
