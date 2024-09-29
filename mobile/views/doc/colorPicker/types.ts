/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  props: {
    value: string
    customShow?: boolean
    labelShow?: boolean
  }
}
