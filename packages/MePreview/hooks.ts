import { ref, nextTick } from 'vue'

/**
 * 操作
 */
export const useShow = () => {
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
   * 点击遮罩层
   */
  const onClose = () => {
    isShow.value = false
    setTimeout(() => {
      isDestroy.value = true
    }, animationDuration)
  }

  nextTick(() => {
    setTimeout(() => {
      isShow.value = true
    }, 0)
  })

  return { isShow, isDestroy, onClose, animationDuration }
}
