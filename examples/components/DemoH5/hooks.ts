import { ref } from 'vue'
import { Emits } from './interfaces'

// 抛出frame的DOM
export const useFrames = (emit: Emits) => {
  const mobileIframe = ref<HTMLIFrameElement>() // frame dome
  // frame 加载完成
  const onFrameLoad = () => {
    emit('getframe', mobileIframe.value)
  }
  return { mobileIframe, onFrameLoad }
}
