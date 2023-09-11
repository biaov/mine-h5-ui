/**
 * 列表项目
 */
export interface ListDataItem {
  id: number
  state: boolean
}

/**
 * emits
 */
export interface Emits {
  (event: 'update:modelValue', id: number): void
  (event: 'change'): void
}

/**
 * props
 */
export interface Props {
  /**
   * v-model 绑定值
   */
  modelValue?: number
  /**
   * 自定义未选中图标
   */
  icon?: string
  /**
   * 自定义选中图标
   */
  iconSelect?: string
  /**
   * 自定义图标颜色
   */
  color?: string
  /**
   * 自定义数量
   */
  count?: number
  /**
   * 只读状态
   */
  readonly?: boolean
  /**
   * 禁用状态
   */
  disabled?: boolean
  /**
   * 自定义提示语
   */
  tips?: string[]
  /**
   * 自定义提示语颜色
   */
  tipsColor?: string
  /**
   * 评分大小
   */
  size?: string
}
