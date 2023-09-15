import { ref, computed } from 'vue'
import { IsLeapyear } from '../MeAPI/function'
import type { Props, TypeIds, ListDataItem, Emits } from './types'

/**
 * 实际移动思路：通过触摸到移动中的距离，来设置滚动的距离。
 * 实施：
 ** 触摸开始时：记录开始Y坐标和触摸上一次所处的位移值(distance -> translateY)。
 ** 触摸移动中：通过当前Y坐标减去开始的Y坐标得到拖拽的距离，然后实际需要移动的值=触摸上一次所处的位移值+拖拽的距离。
 */
/**
 * 理想移动到目标思路：通过滚动是否是44（每一个li的固定高度）的倍数，剩余的是否大于44/2，大于则补足一个倍数，小于则取消剩余部分。
 * 实施：触摸结束时：
 ** 剩余数 = 实际需要的位移(distance -> translateY) % 44
 ** distance = 剩余数>(44/2) ? distance + (44-剩余数): distance - 剩余数;
 */
/**
 * 惯性滑动思路：通过滑动的速度来计算还需要滑动的距离。
 * 实施：
 ** 滑动的速度 = 滑动的距离/滑动的时间（触摸开始-触摸结束）.toFixed(2)
 ** 还需要滑动的距离 = 滑动的速度 * 400
 ** 滑动的速度 > 0.12 才开启惯性滑动
 */

/**
 * 移动列
 */
export const useHandMove = (props: Readonly<Required<Props>>) => {
  /**
   * 最大值
   */
  const max = props.maxDate.getFullYear()
  /**
   * 最小值
   */
  const min = props.minDate.getFullYear()
  /**
   * 列表数据
   */
  const listData = ref<ListDataItem[]>([
    {
      id: 1,
      list: Array.from({ length: max - min + 1 }, (k, v) => min + v)
    },
    {
      id: 2,
      list: 12
    },
    {
      id: 3,
      list: 31
    },
    {
      id: 4,
      list: 24
    },
    {
      id: 5,
      list: 60
    }
  ])
  const typeIds: TypeIds = {
    'year-month': [1, 2],
    'month-day': [2, 3],
    time: [4, 5],
    datetime: [1, 2, 3, 4, 5]
  }
  /**
   * type 值, 即生成可显示列表 id 值
   */
  const ids = typeIds[props.type] ?? [1, 2, 3]
  /**
   * 当前可显示列
   */
  const show = ref<number[]>(ids)
  /**
   * 需要创建数组的数量
   */
  const lenObj = { length: ids.length }
  /**
   * 滚动的距离
   */
  const distance = ref<number[]>(Array.from(lenObj, () => 88))
  /**
   * 当前 value 值
   */
  const currentValue: number[] = Array.from(lenObj)

  ids.forEach((elem, i) => {
    const { list } = listData.value[elem - 1] // 获取 list
    currentValue[i] = typeof list === 'number' ? +![3, 4].includes(i) : list[0] // 判断是否为数值
  })

  /**
   * 开始Y坐标
   */
  let startY = 0
  /**
   * 开始滚动的距离
   */
  let startDistence = 0
  /**
   * 触摸开始时间
   */
  let startTime = 0
  /**
   * 过渡时间
   */
  const duration = ref(0)

  const filterNumber = computed(() => (num: number) => (num < 10 ? `0${num}` : num))
  const getCurNum = (id: number, num: number) => ([4, 5].includes(id) ? num - 1 : num)
  // 开始过渡
  const openTransition = (time: number) => {
    duration.value = time
    setTimeout(() => {
      duration.value = 0
    }, time)
  }

  /**
   * 当日期值改变时，修改相应的状态
   */
  const setDateDist = (i: number) => {
    const index = show.value.indexOf(i)
    /**
     * 实际移动的距离
     */
    let oldDist = distance.value[index]
    /**
     * 获取天个数
     */
    const len = (listData.value[2].list as number) - 1

    // 最大不能大于88，最小不能小于88-len*44
    if (oldDist > 88) {
      oldDist = 88
    } else if (oldDist < 88 - len * 44) {
      // 最小不能小于88-每列的个数*44
      oldDist = 88 - len * 44
    }

    distance.value[index] = oldDist // 设置理想移动的距离
    openTransition(400) // 开启过渡效果
    /**
     * 个数
     */
    const count = Math.abs(oldDist / 44 - 2)
    currentValue[show.value.indexOf(3)] = count + 1 // 设置currentValue
  }

  /**
   * 获取当前 value 值
   */
  const setValue = (tarDir: number, i: number) => {
    /**
     * 个数
     */
    const count = Math.abs(tarDir / 44 - 2)
    const { list } = listData.value[i - 1]
    /**
     * 当前拖动值
     */
    let current = 0

    if ([4, 5].includes(i)) {
      // 判断是否为数值
      current = typeof list === 'number' ? count : list[count]
    } else {
      // 判断是否为数值
      current = typeof list === 'number' ? count + 1 : list[count]
    }

    // 拖动月份且存在日期，则日期要改变
    if (i === 2 && show.value.includes(3)) {
      // 判断拖动的是否是2月
      if (current === 2) {
        /**
         * 闰月为29天，平月为28天
         *
         * 判断是否存在年份
         */
        const Year = show.value.includes(1) ? currentValue[0] : new Date().getFullYear()
        listData.value[2].list = IsLeapyear(Year) ? 29 : 28 // 是否是闰月
      } else {
        // 大于 7 且不能被 2 整除或者小于等于 7 且能被 2 整除的月数是小月，其他的是大月。
        listData.value[2].list = (current > 7 && current % 2 !== 0) || (current <= 7 && current % 2 === 0) ? 30 : 31
      }
      setDateDist(i + 1)
    }

    currentValue[show.value.indexOf(i)] = current // 设置 currentValue
  }

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent, i: number) => {
    startY = e.changedTouches[0].clientY // 获取初始位置
    startDistence = distance.value[show.value.indexOf(i)] // 记录开始距离
    startTime = +new Date() // 记录开始的时间
  }

  /**
   * 接触点改变，滑动时
   */
  const onTouchmove = (e: TouchEvent, i: number) => {
    /**
     * 获取当前移动的Y坐标
     */
    const currentY = e.changedTouches[0].clientY
    /**
     * 移动位置
     */
    const diffX = currentY - startY
    /**
     * 实际移动的距离
     */
    const actualDist = startDistence + diffX
    distance.value[show.value.indexOf(i)] = actualDist // 设置实际移动的距离
  }

  /**
   * 触摸结束
   */
  const onTouchend = (e: TouchEvent, i: number) => {
    const index = show.value.indexOf(i)
    /**
     * 实际移动的距离
     */
    let oldDist = distance.value[index]
    /**
     * 触摸结束时间
     */
    const endTime = +new Date()
    /**
     * 速度
     */
    const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2)

    // 判断速度是否过大，大于0.1才能开始惯性滑动
    if (speed > 0.12 || speed < -0.12) {
      /**
       * 还需要滚动的距离
       */
      const wantDist = Math.ceil(speed * 400)
      oldDist += wantDist // 惯性实际滑动的距离
    }

    const surplus = oldDist % 44 // 剩余数

    // 判断是否处于理想位置，0表示理想位置，不需要再移动到理想位置
    if (surplus !== 0) {
      let tarDir = 0
      // 手指向下滑：不能大于22（每项的一半高度）
      // 手指向上滑：不能小于-22（每项的一半高度）
      // 手指向上滑动大于0
      if (surplus > 0) {
        tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus // 理想移动的距离
      } else {
        tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus // 理想移动的距离
      }
      /**
       * 获取当前列项的列表内容
       */
      const { list } = listData.value[i - 1]
      /**
       * 获取个数
       */
      const len = typeof list === 'number' ? list - 1 : list.length - 1
      // 最大不能大于88，最小不能小于88-len*44
      if (tarDir > 88) {
        tarDir = 88
      } else if (tarDir < 88 - len * 44) {
        // 最小不能小于88-每列的个数*44
        tarDir = 88 - len * 44
      }
      distance.value[index] = tarDir // 设置理想移动的距离
      openTransition(400) // 开启过渡效果
      setValue(tarDir, i)
    }
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousedown = (e: MouseEvent, i: number) => {
    startY = e.clientY // 获取初始位置
    startDistence = distance.value[show.value.indexOf(i)] // 记录开始距离
    startTime = +new Date() // 记录开始的时间

    // 表达式声明移动事件
    document.onmousemove = (ev: MouseEvent) => {
      /**
       * 获取当前移动的Y坐标
       */
      const currentY = ev.clientY
      /**
       * 移动位置
       */
      const diffX = currentY - startY
      /**
       * 实际移动的距离
       */
      const actualDist = startDistence + diffX
      distance.value[show.value.indexOf(i)] = actualDist // 设置实际移动的距离
    }

    // 表达式声明抬起事件
    document.onmouseup = (ev: MouseEvent) => {
      const index = show.value.indexOf(i)
      /**
       * 实际移动的距离
       */
      let oldDist = distance.value[index]
      /**
       * 触摸结束时间
       */
      const endTime = +new Date()
      /**
       * 速度
       */
      const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2)

      // 判断速度是否过大，大于0.1才能开始惯性滑动
      if (speed > 0.12 || speed < -0.12) {
        /**
         * 还需要滚动的距离
         */
        const wantDist = Math.ceil(speed * 400)
        oldDist += wantDist // 惯性实际滑动的距离
      }

      /**
       * 剩余数
       */
      const surplus = oldDist % 44

      // 判断是否处于理想位置，0表示理想位置，不需要再移动到理想位置
      if (surplus !== 0) {
        let tarDir = 0
        // 手指向下滑：不能大于22（每项的一半高度）
        // 手指向上滑：不能小于-22（每项的一半高度）
        // 手指向上滑动大于0
        if (surplus > 0) {
          tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus // 理想移动的距离
        } else {
          tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus // 理想移动的距离
        }
        /**
         * 获取当前列项的列表内容
         */
        const { list } = listData.value[i - 1]
        /**
         * 获取个数
         */
        const len = typeof list === 'number' ? list - 1 : list.length - 1

        // 最大不能大于88，最小不能小于88-len*44
        if (tarDir > 88) {
          tarDir = 88
        } else if (tarDir < 88 - len * 44) {
          // 最小不能小于88-每列的个数*44
          tarDir = 88 - len * 44
        }

        distance.value[index] = tarDir // 设置理想移动的距离
        openTransition(400) // 开启过渡效果
        setValue(tarDir, i)
      }

      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  }

  return { show, currentValue, listData, distance, duration, filterNumber, getCurNum, onTouchstart, onTouchmove, onTouchend, onMousedown }
}

/**
 * 按钮
 */
export const useBtns = (props: Readonly<Props>, emit: Emits, currentValue: number[]) => {
  /**
   * 点击取消按钮
   */
  const onCancel = () => {
    emit('cancel')
  }

  /**
   * 点击确定按钮
   */
  const onSure = () => {
    const str = currentValue.reduce((prev: string, elem, i) => {
      const val = elem < 10 ? `0${elem}` : elem
      /**
       * 分隔符
       */
      let separator: string
      // 时间
      if (props.type === 'time') {
        separator = ':'
      } else if (props.type === 'datetime') {
        // 日期时间
        separator = i < 3 ? '-' : i === 3 ? ' ' : ':'
      } else {
        // 其他
        separator = '-'
      }

      return prev + separator + val
    }, '')
    emit('update:modelValue', str.slice(1))
    emit('sure', currentValue)
  }

  return { onCancel, onSure }
}
