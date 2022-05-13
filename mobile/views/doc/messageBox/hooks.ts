import { getCurrentInstance, ref } from 'vue'
import initData from './data'
import { ListDataItem, ChildListItem } from './interfaces'

// 操作
export const useHandle = () => {
  const { $MeMessageBox, $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  const listData = ref<ListDataItem[]>(initData) // 列表数据

  // 点击列表
  const onClick = ({ type, tips, message, html, cancelButtonText, confirmButtonText }: ChildListItem) => {
    $MeMessageBox({
      type,
      tips,
      message,
      html,
      cancelButtonText,
      confirmButtonText,
      onOk(value: string) {
        $MeToast(type === 'prompt' ? value : '你点击了确认按钮')
      },
      onOff() {
        $MeToast('你点击了取消按钮')
      }
    })
  }

  return { listData, onClick }
}
