import type { ModelRef } from 'vue'

/**
 * type 值
 */
export interface TypeIds extends Record<string, number[]> {
  'year-month': number[]
  'month-day': number[]
  time: number[]
  datetime: number[]
}

/**
 * listData
 */
export interface ListDataItem {
  id: number
  list: number | number[]
}

/**
 * emits
 */
export interface Emits {
  (event: 'cancel'): void
  (event: 'sure', arr: number[]): void
}

/**
 * props
 */
export interface Props {
  /**
   * 时间类型
   */
  type?: 'date' | 'year-month' | 'month-day' | 'time' | 'datetime'
  /**
   * 是否显示时间选择器
   */
  visible?: boolean
  /**
   * 最小值
   */
  minDate?: Date
  /**
   * 最大值
   */
  maxDate?: Date
}

/**
 * useBtns
 */
export namespace USEBtns {
  export interface Option {
    props: Readonly<Props>
    emit: Emits
    currentValue: number[]
    modelValue: ModelRef<string>
  }
}
