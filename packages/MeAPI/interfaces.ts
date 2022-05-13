// 日期格式
export interface FormatData {
  DD?: string
  hh?: string
  mm?: string
  ss?: string
  ms?: number
}

// 加锁
export interface IsLocked {
  value?: boolean
  [key: string]: boolean | undefined
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
