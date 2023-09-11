import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 初始化页面
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  /**
   * 手动控制值
   */
  const manual = ref({
    thousand: true,
    endValue: 6666.66,
    value: true
  })

  return { listData, manual }
}
