import { watch, ref, computed, createVNode, render, useTemplateRef } from 'vue'
import type { USEHandler, Props, Emits } from './types'
import dropdownComponent from './dropdown.vue'

export const wrapCls = 'me-color-picker'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, { modelValue }: USEHandler.Option) => {
  const color = ref<string>('')

  const dropdown = ref(false)
  const colorRef = useTemplateRef<HTMLDivElement>('colorRef')
  let tempContainer: Element
  const onToggle = (e: MouseEvent) => {
    const { width, height, x, y } = colorRef.value!.getBoundingClientRect()!
    dropdown.value = !dropdown.value
    if (dropdown.value) {
      const vm = createVNode(dropdownComponent, { visible: true, rect: { width, height, x, y } })
      const container = document.createElement('div')
      render(vm, container)
      tempContainer = container.firstElementChild!
      document.body.appendChild(tempContainer)
    } else {
      document.body.removeChild(tempContainer)
    }
  }

  watch(
    modelValue,
    value => {
      color.value = value || '#409eff'
    },
    { immediate: true }
  )

  return { color, dropdown, onToggle }
}

/**
 * 大小
 */
export const useSize = (props: Readonly<Required<Props>>) => {
  const preset = {
    small: {
      size: 16,
      fontSize: 12
    },
    default: {
      size: 24,
      fontSize: 14
    },
    large: {
      size: 32,
      fontSize: 16
    }
  }
  const sizeValue = computed(() => preset[props.size])

  return { sizeValue }
}
