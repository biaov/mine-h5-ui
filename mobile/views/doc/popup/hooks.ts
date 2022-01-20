import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'
// 操作
export const useWebData = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  return { listData }
}
