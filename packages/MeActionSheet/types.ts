import type { ModelRef } from 'vue'

// props list
export interface ListItem extends Record<string, number | string | undefined> {
  id?: number | string
  label: string
}

/**
 * emits
 */
export interface Emits {
  (event: 'change', item: ListItem): void
  (event: 'cancel', item: MouseEvent): void
}

// props
export interface Props {
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

/**
 * useShowSheet
 */
export namespace USEShowSheet {
  export interface Option {
    visibleModel: ModelRef<boolean>
  }
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
