import { watch, ref, computed, useTemplateRef } from 'vue'
import { useColorTransform } from '../MeComposable'
import type { Props, DefineModelOption, USERender, DropDown } from './types'
import { colorType } from './enums'
import { getDefaultValue, presetSize } from './config'
import { rgbToRgba } from './utils'

/**
 * 操作
 */
export const useHandler = () => {
  const dropdown = ref(false)
  const colorRef = useTemplateRef<HTMLDivElement>('colorRef')
  const colorRect = ref<DropDown.Props['rect']>()
  const onToggle = () => {
    const { width, height, x, y } = colorRef.value!.getBoundingClientRect()!
    colorRect.value = { width, height, x, y }
    dropdown.value = true
  }

  return { colorRect, dropdown, onToggle }
}

/**
 * 大小
 */
export const useSize = (props: Readonly<Required<Props>>) => {
  const sizeValue = computed(() => presetSize[props.size])

  return { sizeValue }
}

/**
 * 渲染页面
 */
export const useRender = ({ modelValue }: USERender.Option) => {
  const showColor = ref('')

  watch(
    modelValue,
    newValue => {
      const initValue = getDefaultValue() as DefineModelOption.ModelValue & {
        [key: string]: string | number
      }

      if (newValue) {
        Object.entries(initValue).forEach(([key, value]) => {
          initValue[key] = newValue[key as keyof DefineModelOption.ModelValue] || value
        })
      }
      const rgb = useColorTransform(initValue.value, [initValue.type, colorType.rgb])
      showColor.value = rgbToRgba(rgb, initValue.alpha)
    },
    { immediate: true, deep: true }
  )

  return { showColor }
}
