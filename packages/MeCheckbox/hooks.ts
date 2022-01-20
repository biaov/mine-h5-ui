import { ref, watch, inject } from 'vue'
import { MeCheckboxGroupKey } from '../MeCheckboxGroup/token'
import { Props } from './types'
import { CheckboxGroupContext, Emits } from './interfaces'

// 操作
export const useHandler = (props: Props, emit: Emits) => {
  const { name, currentValue, onChange } = inject(MeCheckboxGroupKey, {} as CheckboxGroupContext)
  const isChecked = ref(props.modelValue) // 是否选中
  const iconName = ref('') // 图标名称
  // 设置图标
  const setIcon = () => {
    iconName.value = isChecked.value
      ? props.iconSelect || (props.shape === 'round' ? 'icon-radio' : 'icon-baseline-check_box-px')
      : props.icon || (props.shape === 'round' ? 'icon-radio3' : 'icon-baseline-check_box_outline_blank-px')
  }
  // 点击单选框
  const handleClick = (e: MouseEvent) => {
    // 判断当前是否被禁用
    if (!props.disabled) {
      // 判断是否存在父组件
      if (name === MeCheckboxGroupKey) {
        onChange({ name: props.name!, isChecked })
      } else {
        isChecked.value = !isChecked.value // 改变当前状态
        emit('update:modelValue', !isChecked.value)
      }
      emit('on-click', e)
      setIcon()
    }
  }
  // 设置状态
  const setStatus = () => {
    isChecked.value = name === MeCheckboxGroupKey ? currentValue.value.includes(props.name!) : props.modelValue
    setIcon()
  }
  setStatus()
  // 监听数据绑定
  watch(
    () => props.modelValue,
    value => {
      isChecked.value = value
      setIcon()
    }
  )
  // 监听状态值的改变
  name === MeCheckboxGroupKey && watch(currentValue, setStatus)
  return { isChecked, iconName, handleClick, setStatus }
}
