import type { DefaultSlotProp } from '../types'

/**
 * props
 */
export interface Props {
  /**
   * 总数
   */
  total?: number
  /**
   * 每页条数
   */
  pageSize?: number
  /**
   * 显示模式
   */
  mode?: 'simple' | 'default'
  /**
   * 是否显示省略号
   */
  ellipsis?: boolean
  /**
   * 前一页按钮文本
   */
  prevText?: string
  /**
   * 后一页按钮文本
   */
  nextText?: string

  /**
   * 是否禁用
   */
  disabled?: boolean
}

export interface Slots {
  /**
   * 自定义前一页按钮
   */
  prev?: DefaultSlotProp
  /**
   * 自定义后一页按钮
   */
  next?: DefaultSlotProp
}
