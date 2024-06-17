import { ref, watch, onMounted } from 'vue'
import type { USEHandler } from './types'

/**
 * 操作
 */
export const useHandler = ({ props, emit, isActived }: USEHandler.Option) => {
  const background = ref('')

  /**
   * 点击 Switch 开关
   */
  const handleClick = (e: MouseEvent) => {
    /**
     * 是否被禁用
     */
    if (props.disabled) return
    /**
     * 是否异步
     */
    !props.async && (isActived.value = !isActived.value)
    emit('click', e)
  }

  /**
   * 设置自定义颜色
   */
  const setColor = () => {
    /**
     * 判断是否处于未激活状态
     */
    background.value = props.activeColor && isActived.value ? props.activeColor : props.inactiveColor && !isActived.value ? props.inactiveColor : ''
  }

  onMounted(setColor)

  watch(isActived, setColor)

  return { isActived, background, handleClick }
}
