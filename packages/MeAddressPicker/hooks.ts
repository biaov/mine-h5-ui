/* eslint-disable no-restricted-syntax */
import { ref } from 'vue'
import areaData from './area'
import type { USEBtns, Props } from './types'

const AreaData = areaData as Record<string, Record<string, string>>

/**
 * 移动列
 */
export const useHandMove = () => {
  /**
   * 列表数据,获取所有省数据
   */
  const listData = ref<string[][]>([Object.values(AreaData['86']), [], []])
  /**
   * 滚动的距离
   */
  const distance = ref([88, 88, 88])
  /**
   * 过渡时间
   */
  const duration = ref(0)
  /**
   * 设置初始化省数据
   */
  const currentValue: string[] = [listData.value[0][0]]
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
   * 开始过渡
   */
  const openTransition = (time: number) => {
    duration.value = time
    setTimeout(() => {
      duration.value = 0
    }, time)
  }

  /**
   * 设置地区
   */
  const setArea = () => {
    /**
     * 数值索引
     */
    let index = 0

    for (const keys in AreaData['86']) {
      /**
       * 判断当前选中的 value 值是否相等
       */
      if (AreaData['86'][keys] === currentValue[0]) {
        for (const key in AreaData[keys]) {
          /**
           * 判断当前选中的 value 值是否相等
           */
          if (AreaData[keys][key] === currentValue[1]) {
            index = +key
            break
          }
        }
        break
      }
    }

    /**
     * 设置所有city值
     */
    const [arrOne] = (listData.value[2] = Object.values(AreaData[index]))

    /**
     * 设置第一个area值
     */
    currentValue[2] = arrOne
  }

  /**
   * 当日期值改变时, 修改相应的状态
   */
  const setDateDist = (i: number) => {
    /**
     * 实际移动的距离
     */
    let oldDist = distance.value[i]
    /**
     * 获取天个数
     */
    const len = listData.value[i].length - 1

    /**
     * 最大不能大于 88, 最小不能小于 88-len*44
     */
    if (oldDist > 88) {
      oldDist = 88
    } else if (oldDist < 88 - len * 44) {
      /**
       * 最小不能小于 88 - 每列的个数 * 44
       */
      oldDist = 88 - len * 44
    }

    /**
     * 设置理想移动的距离
     */
    distance.value[i] = oldDist
    /**
     * 开启过渡效果
     */
    openTransition(400)
  }

  /**
   * 设置市地址
   */
  const setCity = () => {
    /**
     * 数值索引
     */
    let index = 0

    for (const key in AreaData['86']) {
      /**
       * 判断当前选中的 value 值是否相等
       */
      if (AreaData['86'][key] === currentValue[0]) {
        index = +key
        break
      }
    }

    /**
     * 设置所有 city 值
     */
    const [arrOne] = (listData.value[1] = Object.values(AreaData[index]))
    /**
     * 设置第一个 city 值
     */
    currentValue[1] = arrOne
    setArea()
  }

  /**
   * 获取当前 value 值
   */
  const setValue = (tarDir: number, i: number) => {
    /**
     * 个数
     */
    const count = Math.abs(tarDir / 44 - 2)
    /**
     * 设置 currentValue
     */
    currentValue[i] = listData.value[i][count]
    /**
     * 拖动地址不需要改变
     */
    i !== 2 && setDateDist(i + 1)

    if (i === 2) return
    /**
     * 判断拖动了那个 0: 省, 1: 市, 区: 2
     */
    if (i === 0) {
      /**
       * 设置城市
       */
      setCity()
    } else {
      /**
       * 设置地区
       */
      setArea()
    }

    /**
     * 设置日期
     */
    setDateDist(i + 1)
  }

  /**
   * 触摸开始
   */
  const onTouchstart = (e: TouchEvent, i: number) => {
    /**
     * 获取初始位置
     */
    startY = e.changedTouches[0].clientY
    /**
     * 记录开始距离
     */
    startDistence = distance.value[i]
    /**
     * 记录开始的时间
     */
    startTime = +new Date()
  }

  /**
   * 接触点改变, 滑动时
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
    /**
     * 设置实际移动的距离
     */
    distance.value[i] = actualDist
  }

  /**
   * 触摸结束
   */
  const onTouchend = (e: TouchEvent, i: number) => {
    /**
     * 实际移动的距离
     */
    let oldDist = distance.value[i]
    /**
     *  触摸结束时间
     */
    const endTime = +new Date()
    /**
     *  速度
     */
    const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2)

    /**
     * 判断速度是否过大, 大于 0.1 才能开始惯性滑动
     */
    if (speed > 0.12 || speed < -0.12) {
      /**
       * 还需要滚动的距离
       */
      const wantDist = Math.ceil(speed * 400)
      /**
       * 惯性实际滑动的距离
       */
      oldDist += wantDist
    }

    /**
     * 剩余数
     */
    const surplus = oldDist % 44

    /**
     * 判断是否处于理想位置, 0 表示理想位置, 不需要再移动到理想位置
     */
    if (surplus !== 0) {
      let tarDir = 0
      /**
       * 手指向下滑: 不能大于 22（每项的一半高度）
       * 手指向上滑: 不能小于 - 22（每项的一半高度）
       * 手指向上滑动大于 0
       */
      if (surplus > 0) {
        /**
         * 理想移动的距离
         */
        tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus
      } else {
        /**
         * 理想移动的距离
         */
        tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus
      }

      /**
       * 获取当前列项的列表内容
       */
      const list = listData.value[i]

      /**
       * 获取个数
       */
      const len = typeof list === 'number' ? list - 1 : list.length - 1

      /**
       * 最大不能大于 88, 最小不能小于 88 - len * 44
       */
      if (tarDir > 88) {
        tarDir = 88
      } else if (tarDir < 88 - len * 44) {
        /**
         * 最小不能小于 88 - 每列的个数 * 44
         */
        tarDir = 88 - len * 44
      }

      /**
       * 设置理想移动的距离
       */
      distance.value[i] = tarDir
      /**
       * 开启过渡效果
       */
      openTransition(400)
      setValue(tarDir, i)
    }
  }

  /**
   * PC 端鼠标按下移动
   */
  const onMousedown = (e: MouseEvent, i: number) => {
    /**
     * 获取初始位置
     */
    startY = e.clientY
    /**
     * 记录开始距离
     */
    startDistence = distance.value[i]
    /**
     * 记录开始的时间
     */
    startTime = +new Date()

    /**
     * 表达式声明移动事件
     */
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
      /**
       * 设置实际移动的距离
       */
      distance.value[i] = actualDist
    }

    /**
     * 表达式声明抬起事件
     */
    document.onmouseup = (ev: MouseEvent) => {
      /**
       * 实际移动的距离
       */
      let oldDist = distance.value[i]
      /**
       * 触摸结束时间
       */
      const endTime = +new Date()
      /**
       * 速度
       */
      const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2)

      /**
       * 判断速度是否过大, 大于 0.1 才能开始惯性滑动
       */
      if (speed > 0.12 || speed < -0.12) {
        /**
         * 还需要滚动的距离
         */
        const wantDist = Math.ceil(speed * 400)
        /**
         * 惯性实际滑动的距离
         */
        oldDist += wantDist
      }

      /**
       * 剩余数
       */
      const surplus = oldDist % 44
      /**
       * 判断是否处于理想位置, 0 表示理想位置, 不需要再移动到理想位置
       */
      if (surplus !== 0) {
        let tarDir = 0
        /**
         * 手指向下滑: 不能大于 22（每项的一半高度）
         * 手指向上滑: 不能小于 - 22（每项的一半高度）
         * 手指向上滑动大于 0
         */
        if (surplus > 0) {
          /**
           * 理想移动的距离
           */
          tarDir = surplus > 44 / 2 ? oldDist + (44 - surplus) : oldDist - surplus
        } else {
          /**
           * 理想移动的距离
           */
          tarDir = surplus < -44 / 2 ? oldDist - (44 + surplus) : oldDist - surplus
        }

        /**
         * 获取当前列项的列表内容
         */
        const list = listData.value[i]
        /**
         * 获取个数
         */
        const len = typeof list === 'number' ? list - 1 : list.length - 1

        /**
         * 最大不能大于 88, 最小不能小于 88 - len * 44
         */
        if (tarDir > 88) {
          tarDir = 88
        } else if (tarDir < 88 - len * 44) {
          /**
           * 最小不能小于 88 - 每列的个数 * 44
           */
          tarDir = 88 - len * 44
        }

        /**
         * 设置理想移动的距离
         */
        distance.value[i] = tarDir
        /**
         * 开启过渡效果
         */
        openTransition(400)
        setValue(tarDir, i)
      }
      /**
       * 清理上次的移动事件
       */
      document.onmousemove = null
      /**
       * 清理上次的抬起事件
       */
      document.onmouseup = null
    }
  }
  setCity()

  return { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown }
}

/**
 * 按钮
 */
export const useBtns = ({ props, emit, currentValue, modelValue }: USEBtns.Option) => {
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
    const str = currentValue.reduce((prev, elem, i) => prev + (i === 0 ? '' : props.separator) + elem, '')
    modelValue.value = str
    emit('sure', currentValue)
  }

  return { onCancel, onSure }
}
