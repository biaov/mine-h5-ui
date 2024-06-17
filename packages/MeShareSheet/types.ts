import type { ModelRef } from 'vue'

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
  (event: 'change', e: ListItem): void
  (event: 'cancel', e: MouseEvent): void
}

/**
 * props
 */
export interface Props {
  /**
   * 提示文本
   */
  tips?: string
  /**
   * 数据列表
   */
  list: ListItem[]
}

/**
 * useBtns
 */
export namespace USEBtns {
  export interface Option {
    emit: Emits
    visibleModel: ModelRef<boolean>
  }
}
