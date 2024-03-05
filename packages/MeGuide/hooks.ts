import { ref, computed, watch } from 'vue'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  const step = ref(0)
  const url = computed(() => props.list[step.value])
  const onStep = () => {
    step.value++
    if (step.value >= props.list.length) {
      !props.disabledClose && emit('update:visible', false)
      emit('finish')
    } else {
      emit('step', step.value)
    }
  }

  watch(
    () => props.visible,
    value => {
      if (value) {
        step.value = 0
      }
    },
    {
      immediate: true
    }
  )

  return { url, onStep }
}
