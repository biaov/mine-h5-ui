import { ref, onMounted } from 'vue'
import { Props } from './types'

// 显示
export const useShow = (props: Props) => {
  const isDestroy = ref(false) // 是否销毁
  const isShow = ref(false) // 是否显示
  // 关闭显示
  const closeShow = () => {
    isShow.value = false
    setTimeout(() => {
      isDestroy.value = true
    }, 400)
  }
  // 开始显示
  const startShow = () => {
    setTimeout(() => {
      isShow.value && closeShow()
    }, props.durction)
  }
  onMounted(() => {
    setTimeout(() => {
      isShow.value = true
      startShow()
    }, 100)
  })
  return { isShow, isDestroy }
}
