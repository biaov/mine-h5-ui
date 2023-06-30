import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 当标签栏改变时
   */
  const onChange = (index: number) => {
    console.log(`活动项${index}`)
  }

  return { listData, onChange }
}
