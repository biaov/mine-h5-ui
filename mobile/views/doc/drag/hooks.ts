import { ref } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useWebData = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)
  /**
   * 当前选中项
   */
  const current = ref<number>(0)

  /**
   * 状态改变
   */
  const onChange = (data: ListDataItem[], name: string): void => {
    console.log(name)
  }

  return { listData, current, onChange }
}
