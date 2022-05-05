import { ref, onMounted } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 显示
export const useShow = (props: Props, emit: Emits) => {
  const isDestroy = ref(false) // 是否销毁
  const isShow = ref(false) // 是否显示
  const inputValue = ref('') // 输入框的值

  // 关闭显示
  const closeShow = (cusEventName: string, value?: string) => {
    isShow.value = false
    emit('action', cusEventName, value)
    setTimeout(() => {
      isDestroy.value = true
    }, 400)
  }

  // 点击取消按钮
  const onCancel = () => {
    closeShow('onOff')
  }

  // 点击确认按钮
  const onConfirm = () => {
    closeShow('onOk', props.type === 'prompt' ? inputValue.value : undefined)
  }

  onMounted(() => {
    setTimeout(() => {
      isShow.value = true
    }, 100)
  })

  return { isShow, isDestroy, inputValue, onCancel, onConfirm }
}
