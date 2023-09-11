/**
 * names
 */
export interface Names extends Record<string, string> {
  default: string
  network: string
  search: string
}

/**
 * props
 */
export interface Props {
  /**
   * 文本内容
   */
  text?: string
  /**
   * 类型
   */
  type?: 'default' | 'network' | 'search'
  /**
   * 高度
   */
  height?: number
  /**
   * 自定义图标
   */
  iconName?: string
  /**
   * 自定义图片
   */
  url?: string
}
