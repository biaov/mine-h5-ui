/* eslint-disable no-unused-vars */

// type 值
export interface TypeIds {
  'year-month': number[]
  'month-day': number[]
  time: number[]
  datetime: number[]
  [key: string]: number[]
}

// listData
export interface ListDataItem {
  id: number
  list: number | number[]
}

// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'on-cancel'): void
  (event: 'on-sure', arr: number[]): void
}
