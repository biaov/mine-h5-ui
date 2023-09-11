/**
 * props list
 */
export interface ListItem {
  icon: string
  color: string
  value: string | number
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'change', e: ListItem): void
  (event: 'cancel', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model:visible 绑定值
   */
  visible?: boolean
  /**
   * 提示文本
   */
  tips?: string
  /**
   * 数据列表
   */
  list: ListItem[]
}
