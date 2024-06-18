import { ref, computed, watch } from 'vue'
import type { USEHandler } from './types'

/**
 * 操作
 */
export const useHandler = ({ props, emit, visibleModel }: USEHandler.Option) => {
  const step = ref(0)
  const url = computed(() => props.list[step.value])
  const onStep = () => {
    step.value++
    if (step.value >= props.list.length) {
      !props.disabledClose && (visibleModel.value = false)
      emit('finish')
    } else {
      emit('step', step.value)
    }
  }

  watch(
    visibleModel,
    value => {
      value && (step.value = 0)
    },
    {
      immediate: true
    }
  )

  return { url, onStep }
}
