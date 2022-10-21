import { ref, nextTick } from 'vue'
import { Props, Emits } from './types'

// 显示
export const useShow = (props: Readonly<Props>, emit: Emits) => {
  const isDestroy = ref(false) // 是否销毁
  const isShow = ref(false) // 是否显示
  const inputValue = ref('') // 输入框的值
  const animationDuration = 400 // 动画时间

  // 关闭显示
  const closeShow = (cusEventName: string, value?: string) => {
    isShow.value = false
    emit('action', cusEventName, value)
    setTimeout(() => {
      isDestroy.value = true
    }, animationDuration)
  }

  // 点击取消按钮
  const onCancel = () => {
    closeShow('onOff')
  }

  // 点击确认按钮
  const onConfirm = () => {
    closeShow('onOk', props.type === 'prompt' ? inputValue.value : undefined)
  }

  nextTick(() => {
    setTimeout(() => {
      isShow.value = true
    }, 0)
  })

  return { isShow, isDestroy, inputValue, onCancel, onConfirm, animationDuration }
}
