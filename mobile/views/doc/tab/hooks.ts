import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 当标签栏改变时
  const onChange = (index: number) => {
    console.log(`活动项${index}`)
  }
  return { listData, onChange }
}
