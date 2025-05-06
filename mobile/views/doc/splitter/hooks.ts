import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  let timer: NodeJS.Timeout
  const onClickItem = (item: ListDataItem) => {
    item.openAnimation = false
    clearTimeout(timer)
    timer = setTimeout(() => {
      item.openAnimation = true
    }, 100)
  }

  return { listData, onClickItem }
}
