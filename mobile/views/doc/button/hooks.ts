import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useWebData = () => {
  // 列表数据
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据
  return { listData }
}
