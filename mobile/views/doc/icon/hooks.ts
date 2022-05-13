import { onMounted, ref, getCurrentInstance } from 'vue'
import ClipboardJS from 'clipboard'
import IconData from './icon'
import initData from './data'
import { ListItem } from './interfaces'

// 列表数据
export const useWebData = () => {
  const icons = ref<HTMLUListElement>() // 列表所有
  const { $MeToast } = getCurrentInstance()!.appContext.config.globalProperties
  let copyText: string
  const listData: ListItem[] = initData // 列表数据

  listData[3].list = IconData.map((name, id) => ({ id, name }))

  // 点击列表
  const onClick = (name: string) => {
    copyText = name
  }

  onMounted(() => {
    const clipboard = new ClipboardJS(icons.value!, {
      text: () => copyText
    })
    clipboard.on('success', () => {
      $MeToast('复制成功')
    })
    clipboard.on('error', () => {
      $MeToast('复制失败')
    })
  })

  return { icons, listData, onClick }
}
