export type DTCallback = (e: Event) => void // 防抖节流回调函数
export type LockedCallback = (e?: Event, fn?: (value: boolean) => void) => void // 加锁回调函数
export type ThrottleBack = (e: Event) => void // 节流返回值
export type DebounceBack = (e: Event) => void // 防抖返回值
export type LockedBack = (e?: Event) => void // 加锁返回值

// 日期格式
export interface FormatData {
  DD: string
  hh: string
  mm: string
  ss: string
  ms: number
}

// 加锁
export interface IsLocked extends Record<string, boolean | undefined> {
  value?: boolean
}

// FormatTime return
export interface FormatTimeBack {
  Y: string
  M: string
  D: string
  w: string
  h: string
  m: string
  s: string
  date: string
  time: string
  datetime: string
}

// Calculation
export interface CalculationBack {
  add: () => number
  subtract: () => number
  multiply: () => number
  divide: () => number
}

// 添加 install 属性
export type AddInstall<T> = T & { install: undefined }
