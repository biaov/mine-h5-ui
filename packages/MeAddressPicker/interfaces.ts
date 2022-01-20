/* eslint-disable no-unused-vars */
// area
export interface InArea {
  [key: string]: string
}
// areaData
export interface InAreaData {
  [key: string]: InArea
}

// emits
export interface Emits {
  (event: 'update:modelValue', str: string): void
  (event: 'on-cancel'): void
  (event: 'on-sure', currentValue: string[]): void
}
