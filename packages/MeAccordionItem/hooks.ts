import { ref, watch, inject, nextTick } from 'vue'
import { MeAccordionKey } from '../MeAccordion/token'
import type { Props, AccordionContext, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  const { name, currentValue, onChange } = inject(MeAccordionKey, {} as AccordionContext)
  /**
   * cont 节点
   */
  const accordionItemCont = ref<HTMLDivElement>()
  /**
   * 显示状态
   */
  const isShow = ref(false)
  /**
   * 当前组件高度
   */
  const curHeight = ref(0)

  /**
   * 设置下标数据
   */
  const setData = () => {
    isShow.value = name === MeAccordionKey && props.name === currentValue.value
  }

  /**
   * 点击标题
   */
  const onClick = (e: MouseEvent) => {
    /**
     * 向父组件传递数据
     */
    name === MeAccordionKey && onChange(props.name)
    emit('click', e)
  }

  /**
   * 监听状态值的改变
   */
  watch(currentValue, setData, { immediate: true })

  /**
   * 监听组件状态值的变化
   */
  watch(
    isShow,
    value => {
      nextTick(() => {
        curHeight.value = value ? accordionItemCont.value!.offsetHeight : 0
      })
    },
    { immediate: true }
  )

  return { accordionItemCont, isShow, curHeight, onClick }
}
