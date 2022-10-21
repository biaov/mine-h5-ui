import { ref, nextTick } from 'vue'
import { Props } from './types'

// 显示
export const useShow = (props: Readonly<Props>) => {
  const isDestroy = ref(false) // 是否销毁
  const isShow = ref(false) // 是否显示
  const animationDuration = 400 // 动画时间

  // 关闭显示
  const closeShow = () => {
    isShow.value = false
    setTimeout(() => {
      isDestroy.value = true
    }, animationDuration)
  }

  // 开始显示
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
