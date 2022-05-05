/* eslint-disable no-restricted-syntax */
import { ref } from 'vue'
import areaData from './area'
import { Props } from './types'
import { InAreaData, Emits } from './interfaces'

const AreaData = areaData as InAreaData

// 移动列
export const useHandMove = () => {
  const listData = ref<string[][]>([Object.values(AreaData['86']), [], []]) // 列表数据,获取所有省数据
  const distance = ref([88, 88, 88]) // 滚动的距离
  const duration = ref(0) // 过渡时间
  const currentValue: string[] = [listData.value[0][0]] //  // 设置初始化省数据
  let startY = 0 // 开始Y坐标
  let startDistence = 0 // 开始滚动的距离
  let startTime = 0 // 触摸开始时间

  // 开始过渡
  const openTransition = (time: number) => {
    duration.value = time
    setTimeout(() => {
      duration.value = 0
    }, time)
  }

  // 设置地区
  const setArea = () => {
    let index = 0 // 数值索引

    for (const keys in AreaData['86']) {
      // 判断当前选中的value值是否相等
      if (AreaData['86'][keys] === currentValue[0]) {
        for (const key in AreaData[keys]) {
          // 判断当前选中的value值是否相等
          if (AreaData[keys][key] === currentValue[1]) {
            index = +key
            break
          }
        }
        break
      }
    }

    const [arrOne] = (listData.value[2] = Object.values(AreaData[index])) // 设置所有city值
    currentValue[2] = arrOne // 设置第一个area值
  }

  // 当日期值改变时，修改相应的状态
  const setDateDist = (i: number) => {
    let oldDist = distance.value[i] // 实际移动的距离
    const len = listData.value[i].length - 1 // 获取天个数

    // 最大不能大于88，最小不能小于88-len*44
    if (oldDist > 88) {
      oldDist = 88
    } else if (oldDist < 88 - len * 44) {
      // 最小不能小于88-每列的个数*44
      oldDist = 88 - len * 44
    }

    distance.value[i] = oldDist // 设置理想移动的距离
    openTransition(400) // 开启过渡效果
  }

  // 设置市地址
  const setCity = () => {
    let index = 0 // 数值索引

    for (const key in AreaData['86']) {
      // 判断当前选中的value值是否相等
      if (AreaData['86'][key] === currentValue[0]) {
        index = +key
        break
      }
    }

    const [arrOne] = (listData.value[1] = Object.values(AreaData[index])) // 设置所有city值
    currentValue[1] = arrOne // 设置第一个city值
    setArea()
  }

  // 获取当前value值
  const setValue = (tarDir: number, i: number) => {
    const count = Math.abs(tarDir / 44 - 2) // 个数
    currentValue[i] = listData.value[i][count] // 设置currentValue
    i !== 2 && setDateDist(i + 1) // 拖动地址不需要改变

    if (i === 2) return
    // 判断拖动了那个0:省,1:市,区:2
    if (i === 0) {
      setCity() // 设置城市
    } else {
      setArea() // 设置地区
    }

    setDateDist(i + 1) // 设置
  }

  // 触摸开始
  const onTouchstart = (e: TouchEvent, i: number) => {
    startY = e.changedTouches[0].clientY // 获取初始位置
    startDistence = distance.value[i] // 记录开始距离
    startTime = +new Date() // 记录开始的时间
  }

  // 接触点改变，滑动时
  const onTouchmove = (e: TouchEvent, i: number) => {
    const currentY = e.changedTouches[0].clientY // 获取当前移动的Y坐标
    const diffX = currentY - startY // 移动位置
    const actualDist = startDistence + diffX // 实际移动的距离
    distance.value[i] = actualDist // 设置实际移动的距离
  }

  // 触摸结束
  const onTouchend = (e: TouchEvent, i: number) => {
    let oldDist = distance.value[i] // 实际移动的距离
    const endTime = +new Date() // 触摸结束时间
    const speed = +((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2) // 速度

    // 判断速度是否过大，大于0.1才能开始惯性滑动
    if (speed > 0.12 || speed < -0.12) {
      const wantDist = Math.ceil(speed * 400) // 还需要滚动的距离
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

      const list = listData.value[i] // 获取当前列项的列表内容
      const len = typeof list === 'number' ? list - 1 : list.length - 1 // 获取个数

      // 最大不能大于88，最小不能小于88-len*44
      if (tarDir > 88) {
        tarDir = 88
      } else if (tarDir < 88 - len * 44) {
        // 最小不能小于88-每列的个数*44
        tarDir = 88 - len * 44
      }

      distance.value[i] = tarDir // 设置理想移动的距离
      openTransition(400) // 开启过渡效果
      setValue(tarDir, i)
    }
  }

  // pc端鼠标按下移动
  const onMousedown = (e: MouseEvent, i: number) => {
    startY = e.clientY // 获取初始位置
    startDistence = distance.value[i] // 记录开始距离
    startTime = +new Date() // 记录开始的时间

    // 表达式声明移动事件
    document.onmousemove = (ev: MouseEvent) => {
      const currentY = ev.clientY // 获取当前移动的Y坐标
      const diffX = currentY - startY // 移动位置
      const actualDist = startDistence + diffX // 实际移动的距离
      distance.value[i] = actualDist // 设置实际移动的距离
    }

    // 表达式声明抬起事件
    document.onmouseup = (ev: MouseEvent) => {
      let oldDist = distance.value[i] // 实际移动的距离
      const endTime = +new Date() // 触摸结束时间
      const speed = +((ev.clientY - startY) / (endTime - startTime)).toFixed(2) // 速度

      // 判断速度是否过大，大于0.1才能开始惯性滑动
      if (speed > 0.12 || speed < -0.12) {
        const wantDist = Math.ceil(speed * 400) // 还需要滚动的距离
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

        const list = listData.value[i] // 获取当前列项的列表内容
        const len = typeof list === 'number' ? list - 1 : list.length - 1 // 获取个数

        // 最大不能大于88，最小不能小于88-len*44
        if (tarDir > 88) {
          tarDir = 88
        } else if (tarDir < 88 - len * 44) {
          // 最小不能小于88-每列的个数*44
          tarDir = 88 - len * 44
        }

        distance.value[i] = tarDir // 设置理想移动的距离
        openTransition(400) // 开启过渡效果
        setValue(tarDir, i)
      }
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  }
  setCity()

  return { listData, distance, duration, currentValue, onTouchstart, onTouchmove, onTouchend, onMousedown }
}
// 按钮
export const useBtns = (props: Props, emit: Emits, currentValue: string[]) => {
  // 点击取消按钮
  const onCancel = () => {
    emit('on-cancel')
  }

  // 点击确定按钮
  const onSure = () => {
    const str = currentValue.reduce((prev, elem, i) => prev + (i === 0 ? '' : props.separator) + elem, '')
    emit('update:modelValue', str)
    emit('on-sure', currentValue)
  }

  return { onCancel, onSure }
}
