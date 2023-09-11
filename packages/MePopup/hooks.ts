import { ref, watch, computed, nextTick } from 'vue'
import type { Props, Emits } from './types'

/**
 * mask
 */
export const useMask = (props: Readonly<Required<Props>>, emit: Emits) => {
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
      emit('cancel')
    }, animationDuration)
  }

  watch(
    () => props.visible,
    value => {
      value ? showMask() : hideMask()
    },
    {
      immediate: true
    }
  )

  return { isShowMask, isShow, showMask, hideMask, animationDuration }
}

/**
 * radius
 */
export const useRadius = ({ position, radius }: Props) => {
  /**
   * 设置 radius
   */
  const setRadius = computed(() => {
    let radiusStyle = ''
    switch (position) {
      case 'top':
        radiusStyle = `0px 0px ${radius} ${radius}`
        break
      case 'right':
        radiusStyle = `${radius} 0px 0px ${radius}`
        break
      case 'bottom':
        radiusStyle = `${radius} ${radius} 0px 0px`
        break
      case 'left':
        radiusStyle = `0px ${radius} ${radius} 0px`
        break
      default:
        break
    }

    return `border-radius:${radiusStyle};`
  })

  return { setRadius }
}
