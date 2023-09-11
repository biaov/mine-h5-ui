import { ref, inject, watch } from 'vue'
import { MeTabKey } from '../MeTab/token'
import type { Props, TabContext } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>) => {
  const { name, currentValue, getLabelName } = inject(MeTabKey, {} as TabContext)

  getLabelName({ label: props.label, name: props.name })

  /**
   * 是否显示
   */
  const isShow = ref(false)

  /**
   * 设置初始化显示
   */
  const initShow = () => {
    isShow.value = name === MeTabKey && props.name === currentValue.value
  }

  // 监听值的改变
  watch(currentValue, initShow, { immediate: true })

  return { isShow }
}
