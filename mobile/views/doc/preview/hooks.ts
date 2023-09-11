import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandler = () => {
  const { $MePreview } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 点击图片预览
   */
  const onPreview = (item: ListDataItem) => {
    $MePreview(item)
  }

  return { listData, onPreview }
}
