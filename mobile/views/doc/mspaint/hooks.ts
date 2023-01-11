import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useData = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  return { listData }
}