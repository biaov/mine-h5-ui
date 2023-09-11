// props list
export interface ListItem extends Record<string, number | string | undefined> {
  id?: number | string
  label: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:visible', bool: boolean): void
  (event: 'change', item: ListItem): void
  (event: 'cancel', item: MouseEvent): void
}

// props
export interface Props {
  /**
   * v-model:visible 绑定值
   */
  visible?: boolean
  /**
   * 数据列表
   */
  list: ListItem[]
  /**
   * 索引名
   */
  index?: string
  /**
   * 数据展示属性名
   */
  label?: string
}
