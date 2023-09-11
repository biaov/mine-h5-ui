import { ref, nextTick } from 'vue'
import type { Props } from './types'

/**
 * 显示
 */
export const useShow = (props: Readonly<Required<Props>>) => {
  /**
   * 是否销毁
   */
  const isDestroy = ref(false)
  /**
   * 是否显示
   */
  const isShow = ref(false)
  /**
   * 动画时间
   */
  const animationDuration = 400

  /**
   * 关闭显示
   */
  const closeShow = () => {
    isShow.value = false
    setTimeout(() => {
      isDestroy.value = true
    }, animationDuration)
  }

  /**
   * 开始显示
   */
  const startShow = () => {
    setTimeout(() => {
      isShow.value && closeShow()
    }, props.durction)
  }

  nextTick(() => {
    setTimeout(() => {
      isShow.value = true
      startShow()
    }, 0)
  })

  return { isShow, isDestroy, animationDuration }
}
