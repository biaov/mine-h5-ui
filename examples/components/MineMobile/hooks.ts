import { ref } from 'vue'
import type { Emits } from './types'

/**
 * 抛出frame的DOM
 */
export const useFrames = (emit: Emits) => {
  /**
   * frame dome
   */
  const mobileIframe = ref<HTMLIFrameElement>()

  /**
   * frame 加载完成
   */
  const onFrameLoad = () => {
    emit('getframe', mobileIframe.value!)
  }

  return { mobileIframe, onFrameLoad }
}
