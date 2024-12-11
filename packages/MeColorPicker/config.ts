import { colorType } from './enums'
import type { DefineModelOption } from './types'

/**
 * 组件名称
 */
export const name = 'me-color-picker'

/**
 * 默认颜色
 */
export const getDefaultValue = (): DefineModelOption.ModelValue => ({
  type: colorType.hex,
  value: '#409eff',
  alpha: 100
})

/**
 * 预设大小
 */
export const presetSize = {
  small: {
    size: 16,
    fontSize: 12
  },
  default: {
    size: 24,
    fontSize: 14
  },
  large: {
    size: 32,
    fontSize: 16
  }
} as const
