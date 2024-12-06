import type { ModelRef } from 'vue'
import { hsbKey } from './enums'
import type { HSBToRect, DefineModelOption } from './types'

/**
 * rgb 提取数字
 */
export const rgbExtractNum = <T = string>(rgb: string, toNum = false): T[] => {
  const result = rgb.match(/\d+/g)
  if (!result) throw new Error(`${rgb} 数值错误`)
  return toNum ? (result.map(Number) as T[]) : (result as unknown as T[])
}

/**
 * hsb 和区域值互转
 */
export const hsbToRect = ({ type, value, reverse }: HSBToRect.Option): number => {
  switch (type) {
    case hsbKey.h:
      return Math.round(value * (reverse ? 100 / 360 : 360 / 100))
    case hsbKey.s:
      return Math.round(value)
    case hsbKey.b:
      return Math.round(100 - value)
  }
  throw new Error(`${type} 值不存在`)
}

/**
 * rgb 转 rgba
 */
export const rgbToRgba = (rgb: string, alpha: number) => rgb.replace(')', value => `,${alpha / 100}${value}`)

export const setModelValue = <T>(modelValue: ModelRef<T>, value: Partial<T>) => {
  modelValue.value = { ...modelValue.value, ...value }
}

/**
 * 像素转百分比
 */
export const pxToPercentage = (px: number, max: number) => px / (max / 100)

/**
 * 在此范围里面
 */
export const rangeInside = (value: number, min: number, max: number) => {
  value < min && (value = min)
  value > max && (value = max)
  return value
}
