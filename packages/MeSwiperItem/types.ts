/**
 * 父组件参数
 */
export interface SwiperContext {
  name: string
  getName: (name: string | number) => void
}

/**
 * props
 */
export interface Props {
  /**
   * 属性名称
   */
  name: string | number
  /**
   * 图片地址
   */
  url?: string
  /**
   * 文本
   */
  text?: string
  /**
   * 背景色
   */
  background?: string
}
