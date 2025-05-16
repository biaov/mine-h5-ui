/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  visible: boolean
  statusCode?: number
  item: {
    id: number
    bgElem: {
      url: string
      size: number[]
    }
    elem: {
      initPos: number[]
      url: string
      size: number[]
    }
  }
}
