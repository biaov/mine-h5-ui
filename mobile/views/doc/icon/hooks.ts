import { onMounted, ref } from 'vue'
import ClipboardJS from 'clipboard'
import { MeToast } from '@/plugins'
import IconData from './icon'
import initData from './data'
import type { ListItem } from './types'

/**
 * 列表数据
 */
export const useWebData = () => {
  /**
   * 列表所有
   */
  const icons = ref<HTMLUListElement>()
  let copyText: string
  /**
   * 列表数据
   */
  const listData: ListItem[] = initData

  listData[3].list = IconData.map((name, id) => ({ id, name }))

  /**
   * 点击列表
   */
  const onClick = (name: string) => {
    copyText = name
  }

  onMounted(() => {
    const clipboard = new ClipboardJS(icons.value!, {
      text: () => copyText
    })
    clipboard.on('success', () => {
      MeToast('复制成功')
    })
    clipboard.on('error', () => {
      MeToast('复制失败')
    })
  })

  return { icons, listData, onClick }
}
