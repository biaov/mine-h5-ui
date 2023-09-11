/**
 * emits
 */
export interface Emits {
  (event: 'click', index: number): void
  (event: 'click:preappend', e: MouseEvent): void
  (event: 'click:append', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 列表内容
   */
  list: string | string[]
  /**
   * 滚动方向
   */
  scroll?: 'horizontal' | 'vertical'
  /**
   * 开启动画
   */
  loop?: boolean
  /**
   * 间隔时间，滚动方向为 vertical 才有效
   */
  delay?: number
  /**
   * 前面图标
   */
  preappendIcon?: string
  /**
   * 前面图标颜色
   */
  preappendColor?: string
  /**
   * 后面图标
   */
  appendIcon?: string
  /**
   * 后面图标颜色
   */
  appendColor?: string
  /**
   * 高度
   */
  height?: number
  /**
   * 倒角
   */
  radius?: string | number
  /**
   * 背景颜色
   */
  background?: string
  /**
   * 文本颜色
   */
  color?: string
}
