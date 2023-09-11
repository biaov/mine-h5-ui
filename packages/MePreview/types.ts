/**
 * option
 */
export interface Option {
  url: string
  zIndex?: number
  background?: string
}

/**
 * props
 */
export interface Props {
  /**
   * 图片地址
   */
  url: string
  /**
   * 层级位置
   */
  zIndex?: number
  /**
   * 遮罩层背景色
   */
  background?: string
}
