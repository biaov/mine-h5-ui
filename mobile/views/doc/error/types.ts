import type { Ref } from 'vue'

/**
 * 列表项
 */
export interface ListDataItem {
  label: string
  position: string
  visible: boolean
  title?: string
  subtit?: string
  theme?: string
}

export interface ShareData {
  listData: Ref<ListDataItem[]>
}
