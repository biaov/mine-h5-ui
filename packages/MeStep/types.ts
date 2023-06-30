/**
 * props
 */
export interface Props {
  /**
   * 激活状态
   */
  active: (string | number)[]
  /**
   * 显示方向
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * 主题类型
   */
  type?: 'primary' | 'success' | 'warning' | 'danger'
  /**
   * 置灰颜色
   */
  color?: string
  /**
   * 激活颜色
   */
  activeColor?: string
  /**
   * 置灰图标
   */
  icon?: string
  /**
   * 激活图标
   */
  activeIcon?: string
}
