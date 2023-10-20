import { ref, watch, nextTick } from 'vue'
import type { Props, ListItem, Emits } from './types'

/**
 * 显示
 */
export const useShow = (props: Readonly<Required<Props>>, emit: Emits) => {
  /**
   * 是否显示模态框
   */
  const isShowMask = ref(false)
  /**
   * 是否显示模态框的过渡动画
   */
  const isShow = ref(false)
  /**
   * 动画时间
   */
  const animationDuration = 400

  /**
   * 显示模态框
   */
  const showMask = () => {
    isShowMask.value = true
    nextTick(() => {
      setTimeout(() => {
        isShow.value = true
      }, 0)
    })
  }

  /**
   * 隐藏模态框
   */
  const hideMask = () => {
    isShow.value = false
    setTimeout(() => {
      isShowMask.value = false
      emit('update:visible', false)
    }, animationDuration)
  }

  /**
   * 监听是否显示弹出层参数
   */
  watch(
    () => props.visible,
    value => {
      value ? showMask() : hideMask()
    },
    {
      immediate: true
    }
  )

  return { isShowMask, isShow, hideMask, animationDuration }
}

/**
 * 隐藏
 */
export const useBtns = (emit: Emits) => {
  /**
   * 点击列表
   */
  const onLi = (item: ListItem) => {
    emit('update:visible', false)
    emit('change', item)
  }

  /**
   * 点击取消按钮
   */
  const onCancel = (e: MouseEvent) => {
    emit('update:visible', false)
    emit('cancel', e)
  }

  return { onLi, onCancel }
}
