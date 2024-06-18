import { ref, watch, nextTick } from 'vue'
import type { ListItem, USEBtns, USEShowSheet } from './types'

/**
 * 显示
 */
export const useShowSheet = ({ visibleModel }: USEShowSheet.Option) => {
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
      visibleModel.value = false
    }, animationDuration)
  }

  /**
   * 监听是否显示弹出层参数
   */
  watch(
    visibleModel,
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
 * 按钮
 */
export const useBtns = ({ emit, visibleModel }: USEBtns.Option) => {
  /**
   * 点击列表
   */
  const onLi = (item: ListItem) => {
    visibleModel.value = false
    emit('change', item)
  }

  /**
   * 点击取消按钮
   */
  const onCancel = (e: MouseEvent) => {
    visibleModel.value = false
    emit('cancel', e)
  }

  return { onLi, onCancel }
}
