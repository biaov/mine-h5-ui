/**
 * props SkinStyleValue
 */
export interface SkinStyleValue {
  /**
   * 背景色
   */
  bgc: string
  /**
   * 文本背景
   */
  textBgc: string
  /**
   * 字体颜色
   */
  color: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'click', num: number): void
  (event: 'delete', e: MouseEvent): void
  (event: 'complate', e: MouseEvent): void
}

// props
export interface Props {
  /**
   * 数字输入显示状态
   */
  visible?: boolean
  /**
   * 系统皮肤样式
   */
  skinType?: 'gray' | 'dark'
  /**
   * 自定义皮肤样式
   */
  skinStyle?: SkinStyleValue
  /**
   * 是否动态改变 padding
   */
  isPadding?: boolean
}
