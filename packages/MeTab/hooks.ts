import { ref, provide, onMounted, watch, computed } from 'vue'
import { LabelName } from '../MeTabItem/interfaces'
import { MeTabKey } from './token'
import { Props } from './types'
import { Emits } from './interfaces'

// 初始化 slot
export const useInitSlots = (props: Props, emit: Emits) => {
  /**
   * 下活动线位移计算方式
   * 思路：当前活动item的一半宽度 + 前面的所有宽度
   * transX * (value * 2 + 1) => transX * 2 * value + transX
   * transX：每个项的一半的宽度
   * value：活动索引
   */
  const tabsDom = ref<HTMLDivElement>() // tab节点
  const tabList = ref<LabelName[]>([]) // 标签列表
  const transX = ref(0) // 初始移动值
  const duration = ref(0) // 过渡动画时间
  const currentValue = ref(props.modelValue)
  // 计算初始移动值
  const initTranslateX = () => {
    transX.value = tabsDom.value!.offsetWidth / (tabList.value.length * 2)
    duration.value = 0
  }
  // 点击tabs item
  const onClick = ({ name }: LabelName) => {
    // 点击不是活动项
    if (name !== props.modelValue) {
      duration.value = 0.4
      emit('update:modelValue', name)
      emit('on-change', name)
    }
  }
  // 获取 title
  const getLabelName = (item: LabelName) => {
    tabList.value.push(item)
  }
  const curIndex = computed(() => tabList.value.findIndex(item => item.name === props.modelValue)) // 当前索引
  provide(MeTabKey, { name: MeTabKey, currentValue, getLabelName })
  onMounted(() => {
    initTranslateX()
  })
  // 监听 modelValue 值
  watch(
    () => props.modelValue,
    value => {
      currentValue.value = value
    }
  )
  return { tabsDom, tabList, transX, duration, initTranslateX, curIndex, onClick }
}
