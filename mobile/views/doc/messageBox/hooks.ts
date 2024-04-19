import { ref } from 'vue'
import { MeMessageBox, MeToast } from '@/plugins'
import initData from './data'
import type { ListDataItem, ChildListItem } from './types'

/**
 * 操作
 */
export const useHandle = () => {
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>(initData as ListDataItem[])

  /**
   * 点击列表
   */
  const onClick = ({ type, tips, message, html, cancelButtonText, confirmButtonText }: ChildListItem) => {
    MeMessageBox({
      type,
      tips,
      message,
      html,
      cancelButtonText,
      confirmButtonText,
      onOk(value?: string) {
        MeToast(type === 'prompt' ? (value as string) : '你点击了确认按钮')
      },
      onOff() {
        MeToast('你点击了取消按钮')
      }
    })
  }

  return { listData, onClick }
}
