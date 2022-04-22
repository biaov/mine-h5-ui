import { ref } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 当标签栏改变时
  const onChange = ({ value }: ListDataItem) => {
    console.log(value)
  }
  return { listData, onChange }
}
