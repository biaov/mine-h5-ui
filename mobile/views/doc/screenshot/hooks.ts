import { ref, getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './interfaces'

// 点击项
export const useHandlerClick = () => {
  const { $MeMessageBox } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据
  // 生成图时
  const onEnd = (data: string) => {
    console.log(data)
    $MeMessageBox.alert({
      message: '截图成功，F12可调出控制台查看截图数据'
    })
  }
  // 点击 cell
  const onClick = (item: ListDataItem) => {
    item.start = true
  }
  return { listData, onClick, onEnd }
}
