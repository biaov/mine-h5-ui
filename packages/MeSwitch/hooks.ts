import { ref, watch, onMounted } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 操作
export const useHandler = (props: Props, emit: Emits) => {
  const isActived = ref(props.modelValue) // 激活状态
  const background = ref('')
  // 点击 Switch 开关
  const handleClick = (e: MouseEvent) => {
    if (props.disabled) return // 是否被禁用
    !props.async && emit('update:modelValue', !isActived.value) // 是否异步
    emit('on-click', e)
  }
  // 设置自定义颜色
  const setColor = () => {
    // 判断是否处于未激活状态
    background.value = props.activeColor && isActived.value ? props.activeColor : props.inactiveColor && !isActived.value ? props.inactiveColor : ''
  }
  onMounted(setColor)
  watch(
    () => props.modelValue,
    value => {
      isActived.value = value
      setColor()
    }
  )
  return { isActived, background, handleClick }
}
