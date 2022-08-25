import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useWebData = () => {
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据

  return { listData }
}
