import { ref, watch, inject, nextTick } from 'vue'
import { MeAccordionKey } from '../MeAccordion/token'
import { Props } from './types'
import { AccordionContext, Emits } from './interfaces'

// 操作
export const useHandler = (props: Props, emit: Emits) => {
  const { name, currentValue, onChange } = inject(MeAccordionKey, {} as AccordionContext)
  const accordionItemCont = ref<HTMLDivElement>() // cont 节点
  const isShow = ref(false) // 显示状态
  const curHeight = ref(0) // 当前组件高度
  // 设置下标数据
  const setData = () => {
    isShow.value = name === MeAccordionKey && props.name === currentValue.value
  }
  // 点击标题
  const onClick = (e: MouseEvent) => {
    name === MeAccordionKey && onChange(props.name) // 向父组件传递数据
    emit('on-click', e)
  }
  // 监听状态值的改变
  watch(currentValue, setData, { immediate: true })
  // 监听组件状态值的变化
  watch(isShow, value => {
    nextTick(() => {
      curHeight.value = value ? accordionItemCont.value!.offsetHeight : 0
    })
  })
  return { accordionItemCont, isShow, curHeight, onClick }
}
