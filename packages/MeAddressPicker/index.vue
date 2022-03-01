<template>
  <!-- 时间选择器 -->
  <transition name="translate">
    <div class="me-address-picker" v-if="visible">
      <!-- 头部按钮 -->
      <div class="m-hd">
        <button type="button" class="u-cancel" @click="onCancel">取消</button>
        <span class="u-line"></span>
        <button type="button" class="u-sure" @click="onSure">确定</button>
      </div>
      <!-- 主体内容 -->
      <ul class="m-bd">
        <li v-for="(item, index) in listData" :key="index" @touchstart="onTouchstart($event, index)" @touchmove="onTouchmove($event, index)" @touchend="onTouchend($event, index)" @mousedown="onMousedown($event, index)">
          <!-- 移动的区域 -->
          <ol :style="`transform:translateY(${distance[index]}px);transition-property:${duration > 0 ? 'all' : 'none'};transition-duration: ${duration}ms;`">
            <li v-for="(value, i) in item" :key="i">{{ value }}</li>
          </ol>
        </li>
      </ul>
    </div>
  </transition>
</template>
<script>
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
import AreaData from './area'
export default {
  name: 'MeAddressPicker',
  props: {
    // v-model绑定值
    value: {
      type: String,
      default: ''
    },
    // 是否显示时间选择器
    visible: {
      type: Boolean,
      default: false
    },
    // 分割符
    separator: {
      type: String,
      default: '-'
    }
  },
  data() {
    return {
      currentValue: [], // 当前value值
      listData: [[], [], []], // 列表数据
      distance: [88, 88, 88], // 滚动的距离
      startY: 0, // 开始Y坐标
      startDistence: 0, // 开始滚动的距离
      startTime: 0, // 触摸开始时间
      duration: 0 // 过渡时间
    }
  },
  methods: {
    // 点击取消按钮
    onCancel() {
      this.$emit('on-cancel')
    },
    // 点击确定按钮
    onSure() {
      const { currentValue, separator } = this
      const str = currentValue.reduce((prev, elem, i) => {
        const val = elem < 10 ? `0${elem}` : elem
        return prev + (i === 0 ? '' : separator) + val
      }, '')
      this.$emit('input', str)
      this.$emit('on-sure', currentValue)
    },
    // 获取当前value值
    setValue(tarDir, i) {
      const { listData, currentValue, setDateDist, setCity, setArea } = this
      const count = Math.abs(tarDir / 44 - 2) // 个数
      currentValue[i] = listData[i][count] // 设置currentValue
      i !== 2 && setDateDist(i + 1) // 拖动地址不需要改变
      if (i === 2) return
      // 判断拖动了那个0:省,1:市,区:2
      if (i === 0) {
        setCity() // 设置城市
      } else {
        setArea() // 设置地区
      }
      setDateDist(i + 1) // 设置
    },
    // 当日期值改变时，修改相应的状态
    setDateDist(i) {
      const { distance, listData } = this
      let oldDist = distance[i] // 实际移动的距离
      const len = listData[i].length - 1 // 获取天个数
      // 最大不能大于88，最小不能小于88-len*44
      if (oldDist > 88) {
        oldDist = 88
      } else if (oldDist < 88 - len * 44) {
        // 最小不能小于88-每列的个数*44
        oldDist = 88 - len * 44
      }
      this.$set(distance, i, oldDist) // 设置理想移动的距离
      this.openTransition(400) // 开启过渡效果
    },
    // 开始过渡
    openTransition(time) {
      this.duration = time
      setTimeout(() => {
        this.duration = 0
      }, time)
    },
    // 触摸开始
    onTouchstart(e, i) {
      this.startY = e.changedTouches[0].clientY // 获取初始位置
      this.startDistence = this.distance[i] // 记录开始距离
      this.startTime = new Date() // 记录开始的时间
    },
    // 接触点改变，滑动时
    onTouchmove(e, i) {
      const { startY, startDistence, distance } = this
      const currentY = e.changedTouches[0].clientY // 获取当前移动的Y坐标
      const diffX = currentY - startY // 移动位置
      const actualDist = startDistence + diffX // 实际移动的距离
      this.$set(distance, i, actualDist) // 设置实际移动的距离
    },
    // 触摸结束
    onTouchend(e, i) {
      const { startY, distance, startTime, listData, setValue } = this
      let oldDist = distance[i] // 实际移动的距离
      const endTime = new Date() // 触摸结束时间
      const speed = ((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2) // 速度
      // 判断速度是否过大，大于0.1才能开始惯性滑动
      if (speed > 0.12 || speed < -0.12) {
        const wantDist = Math.ceil(speed * 400) // 还需要滚动的距离
        oldDist = oldDist + wantDist // 惯性实际滑动的距离
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
        const list = listData[i] // 获取当前列项的列表内容
        const len = typeof list === 'number' ? list - 1 : list.length - 1 // 获取个数
        // 最大不能大于88，最小不能小于88-len*44
        if (tarDir > 88) {
          tarDir = 88
        } else if (tarDir < 88 - len * 44) {
          // 最小不能小于88-每列的个数*44
          tarDir = 88 - len * 44
        }
        this.$set(distance, i, tarDir) // 设置理想移动的距离
        this.openTransition(400) // 开启过渡效果
        setValue(tarDir, i)
      }
    },
    // pc 端鼠标按下移动
    onMousedown(e, i) {
      this.startY = e.clientY // 获取初始位置
      this.startDistence = this.distance[i] // 记录开始距离
      this.startTime = new Date() // 记录开始的时间
      // 表达式声明移动事件
      document.onmousemove = e => {
        const { startY, startDistence, distance } = this
        const currentY = e.clientY // 获取当前移动的Y坐标
        const diffX = currentY - startY // 移动位置
        const actualDist = startDistence + diffX // 实际移动的距离
        this.$set(distance, i, actualDist) // 设置实际移动的距离
      }
      // 表达式声明抬起事件
      document.onmouseup = e => {
        const { startY, distance, startTime, listData, setValue } = this
        let oldDist = distance[i] // 实际移动的距离
        const endTime = new Date() // 触摸结束时间
        const speed = ((e.clientY - startY) / (endTime - startTime)).toFixed(2) // 速度
        // 判断速度是否过大，大于0.1才能开始惯性滑动
        if (speed > 0.12 || speed < -0.12) {
          const wantDist = Math.ceil(speed * 400) // 还需要滚动的距离
          oldDist = oldDist + wantDist // 惯性实际滑动的距离
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
          const list = listData[i] // 获取当前列项的列表内容
          const len = typeof list === 'number' ? list - 1 : list.length - 1 // 获取个数
          // 最大不能大于88，最小不能小于88-len*44
          if (tarDir > 88) {
            tarDir = 88
          } else if (tarDir < 88 - len * 44) {
            // 最小不能小于88-每列的个数*44
            tarDir = 88 - len * 44
          }
          this.$set(distance, i, tarDir) // 设置理想移动的距离
          this.openTransition(400) // 开启过渡效果
          setValue(tarDir, i)
        }
        document.onmousemove = null // 清理上次的移动事件
        document.onmouseup = null // 清理上次的抬起事件
      }
    },
    // 设置市地址
    setCity() {
      const { listData, currentValue, setArea } = this
      let index = 0 // 数值索引
      for (const key in AreaData['86']) {
        // 判断当前选中的value值是否相等
        if (AreaData['86'][key] === currentValue[0]) {
          index = key
          break
        }
      }
      listData[1] = Object.values(AreaData[index]) // 设置所有city值
      currentValue[1] = listData[1][0] // 设置第一个city值
      setArea()
    },
    // 设置地区
    setArea() {
      const { listData, currentValue } = this
      let index = 0 // 数值索引
      for (const keys in AreaData['86']) {
        // 判断当前选中的value值是否相等
        if (AreaData['86'][keys] === currentValue[0]) {
          for (const key in AreaData[keys]) {
            // 判断当前选中的value值是否相等
            if (AreaData[keys][key] === currentValue[1]) {
              index = key
              break
            }
          }
          break
        }
      }
      listData[2] = Object.values(AreaData[index]) // 设置所有city值
      currentValue[2] = listData[2][0] // 设置第一个area值
    }
  },
  filters: {
    // 过滤数字
    filterNumber: num => (num < 10 ? `0${num}` : num)
  },
  created() {
    const { listData, currentValue, setCity } = this
    listData[0] = Object.values(AreaData['86']) // 获取所有省数据
    currentValue[0] = listData[0][0] // 设置初始化省数据
    setCity()
  }
}
</script>
