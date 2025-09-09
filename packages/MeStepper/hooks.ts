import { watch, computed } from 'vue'
import type { Ref } from 'vue'
import type { Props } from './types'

/**
 * 业务函数
 */
export const useHandle = (
  props: Readonly<
    Required<Pick<Props, 'max' | 'min' | 'step' | 'maxlength' | 'height' | 'disabled' | 'inputWidth' | 'fontSize'>> & Pick<Props, 'color' | 'borderColor' | 'borderRadius' | 'disabledColor'>
  >,
  modelValue: Ref<number | string>
) => {
  const rangeValue = (value: number) => {
    value < props.min && (value = props.min)
    value > props.max && (value = props.max)
    modelValue.value = value
  }

  watch(
    modelValue,
    value => {
      if (value) {
        modelValue.value = (`${value}`.includes('.') ? parseFloat(`${value}`) : parseInt(`${value}`)) || ''
        rangeValue(+modelValue.value)
      }
    },
    { immediate: true }
  )

  const onBlur = () => {
    !modelValue.value && (modelValue.value = props.min)
  }

  const onClickBtn = (val: number) => {
    if (props.disabled) return
    const value = +(+modelValue.value + val).toFixed(`${val}`.split('.')[1]?.length ?? 0)
    rangeValue(value)
  }

  const addUnit = (value?: string | number) => (`${Number(value)}` === `${value}` ? `${value}px` : value)

  const getStyle = computed(() => ({
    height: addUnit(props.height),
    '--input-width': addUnit(props.inputWidth),
    '--color': props.color,
    '--border-color': props.borderColor,
    '--border-radius': addUnit(props.borderRadius),
    '--disabled-color': props.disabledColor,
    '--font-size': addUnit(props.fontSize)
  }))

  return { onClickBtn, onBlur, getStyle }
}
