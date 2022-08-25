import { getCurrentInstance } from 'vue'
import initData from './data'
import { ListDataItem } from './types'

// 操作
export const useHandle = () => {
  const { $MeMessageBox, $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = Object.freeze<ListDataItem[]>(initData) // 列表数据

  // 删除按钮
  const onDelete = () => {
    $MeMessageBox.confirm({
      tips: '警告',
      message: '你确定要删除此项吗？',
      onOk() {
        $MeToast('删除成功')
      }
    })
  }

  // 点击收藏按钮
  const onCollect = () => {
    $MeToast('收藏成功')
  }

  return { listData, onDelete, onCollect }
}
