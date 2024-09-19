import { onMounted, useTemplateRef } from 'vue'
import ClipboardJS from 'clipboard'
import { MeToast } from '@/plugins'

/**
 * 操作 dom
 */
export const useRefs = () => {
  const copyDomRef = useTemplateRef<HTMLDivElement>('copyDom')
  const codeContRef = useTemplateRef<HTMLDivElement>('codeCont')

  onMounted(() => {
    const clipboard = new ClipboardJS(copyDomRef.value!, {
      text: () => codeContRef.value!.textContent!.slice(0, -1)
    })
    clipboard.on('success', () => {
      MeToast('复制成功')
    })
    clipboard.on('error', () => {
      MeToast('复制失败')
    })
  })
}
