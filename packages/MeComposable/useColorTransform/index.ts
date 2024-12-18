import type { USEColorTransform } from './types'
import { colorMode } from './enum'

/**
 * hsb 转 rgb
 */
const hsbToRgb = ([h, s, v]: number[]) => {
  h = (h / 360) * 6
  s = s / 100
  v = v / 100

  const i = Math.floor(h)
  const f = h - i
  const p = v * (1 - s)
  const q = v * (1 - f * s)
  const t = v * (1 - (1 - f) * s)
  const mod = i % 6
  const r = [v, q, p, p, t, v][mod]
  const g = [t, v, v, q, p, p][mod]
  const b = [p, p, t, v, v, q][mod]

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
}

/**
 * rgb 转 hsb
 */
const rgbToHsb = ([r, g, b]: (string | number)[]) => {
  r = +r / 255
  g = +g / 255
  b = +b / 255
  let h
  let s: number
  let v: number
  const min = Math.min(r, g, b)
  v = Math.max(r, g, b)
  const max = v
  const difference = max - min

  if (max == min) {
    h = 0
  } else {
    switch (max) {
      case r:
        h = (g - b) / difference + (g < b ? 6 : 0)
        break
      case g:
        h = 2 + (b - r) / difference
        break
      case b:
        h = 4 + (r - g) / difference
        break
    }
    h = Math.round((h as number) * 60)
  }
  if (max == 0) {
    s = 0
  } else {
    s = 1 - min / max
  }
  s = Math.round(s * 100)
  v = Math.round(v * 100)
  return [h, s, v]
}

/**
 * hex 转 rgb
 */
const hexToRgb = (hex: string) =>
  hex
    .slice(1)
    .match(/../g)!
    .map(hex => parseInt(hex, 16))

/**
 * rgb 转 hex
 */
const rgbToHex = (rgb: number[]) => `${rgb.reduce((prev, item) => prev + item.toString(16).padStart(2, '0'), '#')}`

/**
 * rgb 提取数字
 */
const rgbExtractNum = <T = string>(rgb: string, toNum = false): T[] => {
  const result = rgb.match(/\d+/g)
  if (!result) throw new Error(`${rgb} 数值错误`)
  return toNum ? (result.map(Number) as T[]) : (result as unknown as T[])
}

/**
 * 颜色值互转
 * @example
 * ```ts
 * import { useColorTransform } from 'mine-h5-ui'
 *
 * const rgb = useColorTransform('#ff6600', ['hex', 'rgb'])
 * console.log(rgb) // rgb(255, 102, 0)
 * ```
 */
export const useColorTransform = <T = string | (string | number)[]>(value: T, [sourceType, targetType]: USEColorTransform.Option['type']): T => {
  if (!(sourceType && targetType)) return value
  if (sourceType === targetType) return value
  let result: string | (string | number)[]
  let rgbBefore: number[]

  switch (sourceType) {
    case colorMode.hex:
      if (!/^#[0-9a-zA-Z]{6}$/.test(`${value}`)) throw new Error(`${value} 颜色值错误或不全`)
      rgbBefore = hexToRgb(value as string)
      break
    case colorMode.rgb:
      rgbBefore = rgbExtractNum(value as string, true)
      break
    case colorMode.hsb:
      {
        const hsb = rgbExtractNum<number>(value as string, true)
        if (!hsb) throw new Error(`${value} 不是一个 hsb 格式`)
        rgbBefore = hsbToRgb(hsb)
      }
      break
    default:
      throw new Error(`${sourceType} 色彩模式错误`)
  }

  switch (targetType) {
    case colorMode.hex:
      result = rgbToHex(rgbBefore)
      break
    case colorMode.rgb:
      result = `rgb(${rgbBefore.join()})`
      break
    case colorMode.hsb:
      {
        const [h, s, b] = rgbToHsb(rgbBefore)
        result = `hsb(${h},${s}%,${b}%)`
      }
      break
    default:
      throw new Error(`${targetType} 色彩模式错误`)
  }

  return result as T
}
