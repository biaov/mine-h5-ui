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
