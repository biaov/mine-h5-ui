import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 刷新
 */
export const useRefresh = () => {
  /**
   * 活动索引
   */
  const active = ref(1)
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 刷新
   */
  const onRefresh = (item: ListDataItem) => {
    setTimeout(() => {
      item.count++
      item.loading = false
    }, 3000)
  }

  return { active, listData, onRefresh }
}
