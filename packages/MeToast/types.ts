/**
 * 对象参数
 */
export interface Option {
  message?: string | number
  bgColor?: string
  icon?: string
  durction?: number
}

/**
 * 参数
 */
export type Options = string | number | Option

/**
 * props
 */
export interface Props {
  /**
   * 提示语
   */
  message?: string | number
  /**
   * 背景颜色
   */
  bgColor?: string
  /**
   * 图标
   */
  icon?: string
  /**
   * 延迟时间
   */
  durction?: number
}
