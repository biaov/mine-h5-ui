import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useWebData = () => {
  /**
   * 当前活动值
   */
  const accordionActive = ref('')
  /**
   * 列表数据
   */
  const listData = Object.freeze<ListDataItem[]>(initData)

  return { accordionActive, listData }
}
