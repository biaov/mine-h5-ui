import { watch, computed, ref } from 'vue'
import { FormatThousand } from '../MeAPI/function'
import type { Props, Emits, USEHandler } from './types'

/**
 * 操作
 */
export const useHandler = ({ props, emit, modelValue }: USEHandler.Option) => {
  /**
   * 当前值
   */
  const curValue = ref(props.startValue)
  const comValue = computed(() => (props.thousand ? FormatThousand(curValue.value) : curValue.value))

  /**
   * 开始动画
   */
  const startAnimate = () => {
    let startTime: number | undefined
    /**
     * 开始当前动画
     */
    const startCurAnimate = (timestamp: number) => {
      /**
       * 设置开始时间
       */
      startTime === undefined && (startTime = timestamp)
      /**
       * 当前距离开始时间
       */
      const elapsed = timestamp - startTime
      /**
       * 虚拟计算值
       */
      const virtual = ~~(((props.endValue - props.startValue) * elapsed) / props.duration + props.startValue)
      /**
       * 当前值
       */
      curValue.value = Math.min(virtual, props.endValue)

      if (elapsed < props.duration) {
        window.requestAnimationFrame(startCurAnimate)
      } else {
        modelValue.value = false
        emit('end')
      }
    }

    window.requestAnimationFrame(startCurAnimate)
  }

  /**
   * 监听开始状态
   */
  watch(
    modelValue,
    value => {
      value && startAnimate()
    },
    {
      immediate: true
    }
  )

  return { comValue }
}
