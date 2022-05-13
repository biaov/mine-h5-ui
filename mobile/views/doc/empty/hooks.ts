import initData from './data'
import { ListDataItem } from './interfaces'

// 页面数据
export const useWebData = () => {
  const listData = Object.freeze<ListDataItem>(initData) // 列表数据

  return { listData }
}
