import { ref, onMounted, useTemplateRef } from 'vue'
import { useMoveHandle } from '../MeComposable'
import type { USEMoveHandle } from '../MeComposable'

/**
 * 移动列
 */
export const useHandMove = () => {
  const swiperEventRef = useTemplateRef<HTMLElement>('swiperEventNode')
  /**
   * hidden 节点
   */
  const hidden = ref<HTMLDivElement>()
  /**
   * 最大滑动距离
   */
  const maxDistance = ref(0)
  /**
   * 当前 value 值
   */
  const currentValue = ref(0)
  /**
   * 是否过渡
   */
  const isActive = ref(false)
  /**
   * 初始值
   */
  let initialValue = 0
  /**
   * 开始 X 坐标
   */
  let startX = 0
  /**
   * 滑动超过多少算滑动过
   */
  let minDistance = 0

  const moveOption = {
    start({ x }: USEMoveHandle.OptionEvent) {
      initialValue = currentValue.value
      isActive.value = false
      /**
       * 获取初始位置
       */
      startX = x
    },
    move({ x }: USEMoveHandle.OptionEvent) {
      isActive.value = false
      /**
       * 获取当前移动的 X 坐标
       */
      const currentX = x
      /**
       * 移动位置
       */
      const diffX = initialValue + currentX - startX
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      currentValue.value = diffX < -maxDistance.value ? -maxDistance.value : diffX > 0 ? 0 : diffX
    },
    end({ x }: USEMoveHandle.OptionEvent) {
      isActive.value = true
      /**
       * 获取当前移动的X坐标
       */
      const currentX = x
      /**
       * 移动位置
       */
      const diffX = currentX - startX

      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽, 等于 0 不滑动
       */
      if (diffX > 0) {
        currentValue.value = diffX > minDistance ? 0 : -maxDistance.value
      } else if (diffX < 0) {
        currentValue.value = diffX < -minDistance ? -maxDistance.value : 0
      }
    }
  }
  onMounted(() => {
    /**
     * 设置最大滑动距离
     */
    const { offsetWidth } = hidden.value!
    maxDistance.value = offsetWidth
    minDistance = offsetWidth / 4
    useMoveHandle(swiperEventRef.value!, moveOption)
  })

  return { hidden, maxDistance, currentValue, isActive }
}
