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
  const onChange = ({ value }: ListDataItem) => {
    console.log(value)
  }

  return { listData, onChange }
}
