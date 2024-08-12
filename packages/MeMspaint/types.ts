import type { ModelRef } from 'vue'

/**
 * props
 */
export interface Props {
  /**
   * 宽度
   */
  width?: string
  /**
   * 高度
   */
  height?: string
  /**
   * 背景色
   */
  background?: string
  /**
   * 边框样式
   */
  borderStyle?: boolean | string
  /**
   * 线条颜色
   */
  strokeStyle?: string
  /**
   * 线条粗细
   */
  lineWidth?: number
  /**
   * 显示操作
   */
  visible?: boolean
}

/**
 * useDraw
 */
export namespace USEDraw {
  export interface Option {
    props: Readonly<Required<Props>>
    modelValue: ModelRef<HTMLCanvasElement | undefined>
  }
}
