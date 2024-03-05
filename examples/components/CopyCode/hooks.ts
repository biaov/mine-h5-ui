import { ref, onMounted } from 'vue'
import ClipboardJS from 'clipboard'
import { MeToast } from '@/plugins'

/**
 * 操作 dom
 */
export const useRefs = () => {
  const copyDom = ref<HTMLDivElement>()
  const codeCont = ref<HTMLDivElement>()

  onMounted(() => {
    const clipboard = new ClipboardJS(copyDom.value!, {
      text: () => codeCont.value!.textContent!.slice(0, -1)
    })
    clipboard.on('success', () => {
      MeToast('复制成功')
    })
    clipboard.on('error', () => {
      MeToast('复制失败')
    })
  })

  return { copyDom, codeCont }
}
