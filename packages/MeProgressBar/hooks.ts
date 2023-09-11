import { computed } from 'vue'
import type { Props } from './types'

/**
 * 计算
 */
export const useCounts = (props: Readonly<Required<Props>>) => {
  /**
   * 当前文本
   */
  const curText = computed(() => {
    /**
     * 默认文本
     */
    const defaultText = `${props.modelValue}%`

    return props.text ? props.text.replace(/\$default/g, defaultText) : defaultText
  })

  /**
   * 当前圆环位置
   */
  const curPosi = computed(() => 5 * props.size + 500)

  return { curText, curPosi }
}
