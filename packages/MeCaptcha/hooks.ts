import { ref, useTemplateRef, computed, watch } from 'vue'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'
import type { Props, Emits, ShareData } from './types'

/**
 * 滑块
 */
export const useSlide = (props: Readonly<Props>, emit: Emits, { visible, statusCode }: ShareData) => {
  const width = 310
  const mixW = width - 60
  /**
   * 横向开始点
   */
  let startX = 0
  const rectAni = ref(false)
  let ratio: number
  const imgRect = computed(() => {
    if (!props.item) return null
    const { bgElem, elem } = props.item
    const [ox] = bgElem.size
    const [w, h] = elem.size
    const [ix, iy] = elem.initPos
    ratio = width / ox
    const x = ix * ratio
    moveX.value = x
    return {
      w: w * ratio,
      h: h * ratio,
      x,
      y: iy * ratio
    }
  })

  /**
   * 移动距离
   */
  const moveX = ref(0)
  const captchaSlideMoveRef = useTemplateRef<HTMLElement>('captchaSlideMoveNode')

  const moveOption = {
    start({ x }: USEMoveHandle.OptionEvent) {
      startX = x
    },
    move({ x }: USEMoveHandle.OptionEvent) {
      if (!imgRect.value) return
      let tx = imgRect.value.x + x - startX
      tx < 0 && (tx = 0)
      tx > mixW && (tx = mixW)
      moveX.value = tx
    },
    end(e: USEMoveHandle.OptionEvent) {
      const y = props.item?.elem?.initPos?.[1]
      if (!(ratio && y)) return
      this.move(e)
      const x = Math.round(moveX.value / ratio)
      emit('check', [x, y])
    }
  }

  watch(
    captchaSlideMoveRef,
    value => {
      value && useMoveHandle(value, moveOption)
    },
    { immediate: true }
  )

  watch(statusCode, async value => {
    switch (value) {
      case 1:
        setTimeout(() => {
          onClose()
          statusCode.value = 0
        }, 800)
        break
      case 2:
        rectAni.value = true
        setTimeout(() => {
          rectAni.value = false
          moveX.value = imgRect.value!.x
          statusCode.value = 0
        }, 800)
        break
      case 3:
        onRefresh()
        statusCode.value = 0
        break
      default:
        break
    }
  })

  const onClose = () => {
    visible.value = false
  }

  const onRefresh = () => {
    emit('refresh')
    statusCode.value = 0
  }

  return { moveX, imgRect, rectAni, onClose, onRefresh }
}
