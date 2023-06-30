/* eslint-disable no-restricted-syntax */
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { Bind, Unbind } from '../MeAPI/event'
import type { Props, Emits } from './types'

/**
 * 操作
 */
export const useHandler = (props: Readonly<Required<Props>>, emit: Emits) => {
  const clampValue = props.modelValue.slice(0, props.num)

  emit('update:modelValue', clampValue)

  /**
   * 传入数据转化为数组
   */
  const valueArr = clampValue.split('')
  /**
   * 生成对象
   */
  const listData = ref(Array.from({ length: props.num }, (_, k) => ({ id: k + 1, value: valueArr[k] || '', state: false })))

  /**
   * 点击按钮
   */
  const handleClick = (e: MouseEvent) => {
    let flag = true

    // 循环遍历列表数据
    for (const elem of listData.value) {
      // 判断是否存在已激活选项
      if (elem.state) {
        flag = false
        elem.state = false
        break
      }
    }

    // 判断是否所有的选项都未激活
    if (flag) {
      // 循环遍历列表数据
      for (const elem of listData.value) {
        if (elem.value === '') {
          elem.state = true
          break
        }
      }

      emit('focus', e)
    } else {
      emit('blur', e)
    }
  }

  /**
   * 设置数组变化
   */
  const updateList = () => {
    const curClampValue = props.modelValue.slice(0, props.num)
    emit('update:modelValue', curClampValue)
    /**
     * 传入数据转化为数组
     */
    const arr = curClampValue.split('')
    // 遍历迭代设置值
    listData.value.forEach((elem, i) => {
      elem.value = arr[i] || ''
    })
    /**
     * 传入数据长度
     */
    const len = arr.length
    len !== props.num && (listData.value[len].state = true)
    len > 0 && (listData.value[len - 1].state = false)
    len < props.num - 1 && (listData.value[len + 1].state = false)
  }

  /**
   * 清理聚焦
   */
  const closeFocus = () => {
    // 循环遍历清理聚焦
    listData.value.forEach(elem => {
      elem.state = false
    })
  }

  /**
   * 点击 Document
   */
  const clickDocument = () => {
    listData.value.forEach(elem => {
      elem.state = false
    })
  }

  // 监听 value 的变化
  watch(() => props.modelValue, updateList)

  // 监听是否聚焦状态
  watch(
    () => props.isFocus,
    value => {
      !value && closeFocus() // 是否清理聚焦状态
    }
  )

  onMounted(() => {
    // document 绑定点击事件
    Bind(document, 'click', clickDocument)
  })

  onUnmounted(() => {
    // document 移除绑定点击事件
    Unbind(document, 'click', clickDocument)
  })

  return { listData, handleClick }
}
