import { ref, nextTick } from 'vue'
import type { Props, Emits } from './types'
import { useNextFrame } from '../MeComposable'

/**
 * 显示
 */
export const useShow = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 是否销毁
   */
  const isDestroy = ref(false)
  /**
   * 是否显示
   */
  const isShow = ref(false)
  /**
   * 输入框的值
   */
  const inputValue = ref('')
  /**
   * 动画时间
   */
  const animationDuration = 400

  /**
   * 关闭显示
   */
  const closeShow = (cusEventName: string, value?: string) => {
    isShow.value = false
    emit('action', cusEventName, value)
    setTimeout(() => {
      isDestroy.value = true
    }, animationDuration)
  }

  /**
   * 点击取消按钮
   */
  const onCancel = () => {
    closeShow('onOff')
  }

  /**
   * 点击确认按钮
   */
  const onConfirm = () => {
    closeShow('onOk', props.type === 'prompt' ? inputValue.value : undefined)
  }
  useNextFrame(() => {
    isShow.value = true
  })

  return {
    isShow,
    isDestroy,
    inputValue,
    onCancel,
    onConfirm,
    animationDuration
  }
}
