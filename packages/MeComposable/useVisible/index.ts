import { ref } from 'vue'

/**
 * 显示隐藏
 * @example
 * ```ts
 * import { useVisible } from 'mine-h5-ui'
 *
 * const [visible, setVisible] = useVisible()
 * ```
 */
export const useVisible = (initVisible = false) => {
  const visible = ref(initVisible)

  const setVisible = (value: boolean) => {
    visible.value = value
  }

  return [visible, setVisible] as const
}
