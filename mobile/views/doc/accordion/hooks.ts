import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 操作
export const useWebData = () => {
  const accordionActive = ref('') // 当前活动值
  const listData = Object.freeze<ListDataItem>(initData) // 列表数据

  return { accordionActive, listData }
}
