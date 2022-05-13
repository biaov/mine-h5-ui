import { computed } from 'vue'
import { Props } from './types'
import { Emits } from './interfaces'

// 操作
export const useHandle = (props: Props, emit: Emits) => {
  // 点击
  const onClick = (e: MouseEvent) => {
    emit('click', e)
  }

  return { onClick }
}

// 样式
export const useStyle = (props: Props) => {
  // 样式
  const getStyle = computed(() => `height:${props.height};--icon-color:${props.iconColor};`)

  return { getStyle }
}
