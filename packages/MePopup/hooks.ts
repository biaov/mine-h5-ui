import { ref, watch, computed } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// mask
export const useMask = (props: Props, emit: Emits) => {
  const isShowMask = ref(false) // 是否显示模态框
  const isShow = ref(false) // 是否显示模态框的过渡动画

  // 显示模态框
  const showMask = () => {
    isShowMask.value = true
    setTimeout(() => {
      isShow.value = true
    }, 100)
  }

  // 隐藏模态框
  const hideMask = () => {
    isShow.value = false
    setTimeout(() => {
      isShowMask.value = false
      emit('update:visible', false)
      emit('on-cancel')
    }, 400)
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

  return { isShowMask, isShow, showMask, hideMask }
}

// radius
export const useRadius = ({ position, radius }: Props) => {
  // 设置 radius
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
