import { computed } from 'vue'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandle = (emit: Emits) => {
  /**
   * 点击
   */
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  return { onClick }
}

/**
 * 样式
 */
export const useStyle = (props: Readonly<Required<Props>>) => {
  /**
   * 样式
   */
  const getStyle = computed(() => `height:${props.height};--icon-color:${props.iconColor};`)

  return { getStyle }
}
