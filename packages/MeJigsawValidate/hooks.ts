import { ref, nextTick, onMounted, useTemplateRef } from 'vue'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'
import type { Props, Emits, XPoint, ShareData, ImgRect } from './types'

/**
 * 图片区域
 */
export const useImgRect = (props: Readonly<Required<Props>>) => {
  /**
   * 图片节点
   */
  const jigsawImgRef = ref<HTMLDivElement>()
  /**
   * 拖拽点
   */
  const dragPoint = ref<XPoint>({ x: 10 })
  /**
   * 缺失点
   */
  const missingPoint = ref<XPoint>({ x: 200 })
  /**
   * 拖拽点和缺失点相同信息
   */
  const crossPoint = ref({ y: 20, width: 50, height: 50 })
  /**
   * 图片容器
   */
  const imgRect = ref<ImgRect>({ width: 0, height: 0 })

  nextTick(() => {
    const { width, height } = jigsawImgRef.value!.getBoundingClientRect()
    imgRect.value = { width, height }
    /**
     * 分割值
     */
    const split = width / 2
    const cw = crossPoint.value.width
    const ch = crossPoint.value.height

    if (props.random) {
      crossPoint.value.y = ~~(Math.random() * (height - ch))
      dragPoint.value.x = ~~(Math.random() * (split - cw))
      missingPoint.value.x = ~~(Math.random() * (width - cw - split)) + split
    } else {
      crossPoint.value.y = (height - ch) / 2
      missingPoint.value.x = width - cw - 10
    }
  })

  return { jigsawImgRef, dragPoint, missingPoint, crossPoint, imgRect }
}

/**
 * 滑块
 */
export const useSlider = (props: Readonly<Required<Props>>, emit: Emits, { dragPoint, missingPoint }: ShareData) => {
  /**
   * 横向开始点
   */
  let startX = 0
  /**
   * 动画开关
   */
  const openAnimation = ref(false)
  /**
   * 移动距离
   */
  const moveX = ref(0)
  const slideDotRef = useTemplateRef<HTMLElement>('slideDotRef')

  /**
   * 动画结束
   */
  const onAnimationend = () => {
    openAnimation.value = false
  }

  const moveOption = {
    start({ x }: USEMoveHandle.OptionEvent) {
      openAnimation.value = false
      startX = x
    },
    move({ x }: USEMoveHandle.OptionEvent) {
      moveX.value = x - startX
    },
    end({ x }: USEMoveHandle.OptionEvent) {
      /**
       * 拖拽点 x
       */
      const dx = dragPoint.value.x
      /**
       * 缺失点 x
       */
      const mx = missingPoint.value.x
      /**
       * 当前位移
       */
      const curX = x - startX
      /**
       * 验证结果
       */
      const resultBool = Math.abs(dx + curX - mx) < props.range

      if (resultBool) {
        moveX.value = mx - dx
      } else {
        moveX.value = 0
        openAnimation.value = true
      }

      emit('change', resultBool)
    }
  }

  onMounted(() => {
    useMoveHandle(slideDotRef.value!, moveOption)
  })

  return { openAnimation, moveX, onAnimationend }
}
