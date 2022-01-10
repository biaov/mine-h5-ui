import { ref, inject, watch } from 'vue'
import { MeTabKey } from '../MeTab/token'
import { TabContext } from './interfaces'
import { Props } from './types'

// 操作
export const useHandler = (props: Props) => {
  const { name, currentValue, getLabelName } = inject(MeTabKey, {} as TabContext)
  getLabelName({ label: props.label, name: props.name })
  const isShow = ref(false) // 是否显示
  // 设置初始化显示
  const initShow = () => {
    isShow.value = name === MeTabKey && props.name === currentValue.value
  }
  // 监听值的改变
  watch(currentValue, initShow, { immediate: true })
  return { isShow }
}
