/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值, 0-100 的整数
   */
  modelValue: number
  /**
   * 进度条类型,
   */
  type?: 'line' | 'circle'
  /**
   * 自定义文本
   */
  text?: string
  /**
   * 文本显示状态
   */
  textShow?: boolean
  /**
   * 进度条宽度
   */
  width?: string
  /**
   * 线性进度条倒角, type 为 line 时生效
   */
  borderRadius?: string
  /**
   * 进度条粗细
   */
  size?: number
  /**
   * 文本颜色
   */
  textColor?: string
  /**
   * 进度条活动色
   */
  activeColor?: string
  /**
   * 进度条背景色
   */
  backgorund?: string
  /**
   * 整体边距, type 为 line 时生效
   */
  padding?: string
}
