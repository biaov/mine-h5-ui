import { watch, computed, ref } from 'vue'
import { FormatThousand } from '../MeAPI/function'
import { Props, Emits } from './types'

// 操作
export const useHandler = (props: Readonly<Props>, emit: Emits) => {
  const curValue = ref(props.startValue) // 当前值
  const comValue = computed(() => (props.thousand ? FormatThousand(curValue.value) : curValue.value))

  // 开始动画
  const startAnimate = () => {
    let startTime: number | undefined
    // 开始当前动画
    const startCurAnimate = (timestamp: number) => {
      startTime === undefined && (startTime = timestamp) // 设置开始时间
      const elapsed = timestamp - startTime // 当前距离开始时间
      // 虚拟计算值
      const virtual = ~~(((props.endValue - props.startValue) * elapsed) / props.duration + props.startValue)
      curValue.value = Math.min(virtual, props.endValue) // 当前值

      if (elapsed < props.duration) {
        window.requestAnimationFrame(startCurAnimate)
      } else {
        emit('update:modelValue', false)
        emit('end')
      }
    }

    window.requestAnimationFrame(startCurAnimate)
  }

  // 监听开始状态
  watch(
    () => props.modelValue,
    value => {
      value && startAnimate()
    },
    {
      immediate: true
    }
  )

  return { comValue }
}
