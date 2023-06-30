import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 页面数据
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  return { listData }
}
