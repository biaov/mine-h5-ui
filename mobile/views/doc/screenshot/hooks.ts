import { ref, getCurrentInstance } from 'vue'
import initData from './data'
import type { ListDataItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  const { $MeMessageBox } = getCurrentInstance()!.appContext.config.globalProperties
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData)

  /**
   * 生成图时
   */
  const onEnd = (data: string) => {
    console.log(data)
    $MeMessageBox.alert({
      message: '截图成功，F12 可调出控制台查看截图数据'
    })
  }

  /**
   * 点击 cell
   */
  const onClick = (item: ListDataItem) => {
    item.start = true
  }

  return { listData, onClick, onEnd }
}
