/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  props: {
    width?: number
    height?: number
    size?: number
    family?: string
    color?: string
    background?: string
    text: string
  }
}
