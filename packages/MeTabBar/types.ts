/**
 * props list
 */
export interface ListItem {
  text: string
  state: boolean
  icon?: string
  dot?: string
  badge?: string
  img?: string
  imgSelected?: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'change', item: ListItem): void
}

/**
 * props
 */
export interface Props {
  /**
   * 列表数据
   */
  list: ListItem[]
  /**
   * 上边框颜色
   */
  borderColor?: string
  /**
   * 背景颜色
   */
  background?: string
  /**
   * 未选中状态颜色
   */
  color?: string
  /**
   * 选中状态颜色
   */
  colorSelected?: string
}
