import { ref, watch } from 'vue'
import HTML2Canvas from 'html2canvas'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 节点
   */
  const screenshotRef = ref<HTMLDivElement>()

  /**
   * 点击 dom
   */
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  /**
   * 下载图片
   */
  const downImg = (imgData: string) => {
    const aDom = document.createElement('a')
    aDom.href = imgData
    aDom.download = `${props.imageName}.png`
    aDom.click() // 下载图片
  }

  /**
   * 开始截图
   */
  const startScreenshot = () => {
    HTML2Canvas(screenshotRef.value!).then(canvas => {
      const img = canvas.toDataURL()
      props.allowDown && downImg(img)
      emit('end', img, canvas)
    })
  }

  // 监听 props start
  watch(
    () => props.start,
    value => {
      value && startScreenshot()
    },
    { immediate: true }
  )

  return {
    screenshotRef,
    onClick
  }
}
