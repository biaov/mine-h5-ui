/**
 * props
 */
export interface Props {
  /**
   * 显示状态
   */
  visible?: boolean
  /**
   * 是否展示动画效果
   */
  active?: boolean
  /**
   * 是否显示标题占位图
   */
  title?: boolean
  /**
   * 标题占位图宽度
   */
  titleWidth?: string
  /**
   * 段落占位图行数
   */
  row?: number
  /**
   * 段落占位图宽度
   */
  rowWidth?: string | string[]
  /**
   * 是否显示头像占位图
   */
  avatar?: boolean
  /**
   * 头像占位图大小
   */
  avatarSize?: string
}
