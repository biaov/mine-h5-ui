import type { MeColorPickerType } from '@/plugins'

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  customShow?: boolean
  size?: string[]
  props: {
    value?: MeColorPickerType.ModelValue
    showText?: boolean
    filterText?: (value: MeColorPickerType.ModelValue) => string
  }
}
