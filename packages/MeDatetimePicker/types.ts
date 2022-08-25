// type 值
export interface TypeIds extends Record<string, number[]>  {
  'year-month': number[]
  'month-day': number[]
  time: number[]
  datetime: number[]
}

// listData
export interface ListDataItem {
  id: number
  list: number | number[]
}

// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'cancel'): void
  (event: 'sure', arr: number[]): void
}

// props
export interface Props {
  modelValue: string
  type: string
  visible: boolean
  minDate: Date
  maxDate: Date
}
