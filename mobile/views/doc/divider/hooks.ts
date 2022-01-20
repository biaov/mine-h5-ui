import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useWebData = () => {
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据
  return { listData }
}
