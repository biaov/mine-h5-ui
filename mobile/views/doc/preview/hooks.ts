import { ref } from 'vue'
import { MePreview } from '@/plugins'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandler = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击图片预览
   */
  const onPreview = (item: ListDataItem) => {
    MePreview(item)
  }

  return { listData, onPreview }
}
