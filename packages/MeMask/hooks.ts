import { ref, watch, nextTick } from 'vue'
import type { USEHandler } from './types'

/**
 * 操作
 */
export const useHandler = ({ props, visibleModel }: USEHandler.Option) => {
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
   * 点击 mask
   */
  const clickMask = () => {
    props.maskClose && hideMask()
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

  return { isShowMask, isShow, clickMask, animationDuration }
}
