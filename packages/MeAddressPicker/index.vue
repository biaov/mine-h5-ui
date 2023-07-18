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
    /**
     * v-model 绑定值
     */
    value: {
      type: String,
      default: ''
    },
    /**
     * 是否显示时间选择器
     */
    visible: {
      type: Boolean,
      default: false
    },
    /**
     * 分割符
     */
    separator: {
      type: String,
      default: '-'
    }
  },
  data() {
    return {
      /**
       * 当前 value 值
       */
      currentValue: [],
      /**
       * 列表数据
       */
      listData: [[], [], []],
      /**
       * 滚动的距离
       */
      distance: [88, 88, 88],
      /**
       * 开始 Y 坐标
       */
      startY: 0,
      /**
       * 开始滚动的距离
       */
      startDistence: 0,
      /**
       * 触摸开始时间
       */
      startTime: 0,
      /**
       * 过渡时间
       */
      duration: 0
    }
  },
  methods: {
    /**
     * 点击取消按钮
     */
    onCancel() {
      this.$emit('on-cancel')
    },
    /**
     * 点击确定按钮
     */
    onSure() {
      const { currentValue, separator } = this
      const str = currentValue.reduce((prev, elem, i) => {
        const val = elem < 10 ? `0${elem}` : elem
        return prev + (i === 0 ? '' : separator) + val
      }, '')
      this.$emit('input', str)
      this.$emit('on-sure', currentValue)
    },
    /**
     * 获取当前 value 值
     */
    setValue(tarDir, i) {
      const { listData, currentValue, setDateDist, setCity, setArea } = this
      /**
       * 个数
       */
      const count = Math.abs(tarDir / 44 - 2)
      /**
       * 设置 currentValue
       */
      currentValue[i] = listData[i][count]
      /**
       * 拖动地址不需要改变
       */
      i !== 2 && setDateDist(i + 1)
      if (i === 2) return
      /**
       * 判断拖动了那个 0: 省, 1: 市, 2: 区
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
       * 设置
       */
      setDateDist(i + 1)
    },
    /**
     * 当日期值改变时，修改相应的状态
     */
    setDateDist(i) {
      const { distance, listData } = this
      /**
       * 实际移动的距离
       */
      let oldDist = distance[i]
      /**
       * 获取天个数
       */
      const len = listData[i].length - 1
      /**
       * 最大不能大于 88，最小不能小于 88 - len * 44
       */
      if (oldDist > 88) {
        oldDist = 88
      } else if (oldDist < 88 - len * 44) {
        /**
         * 最小不能小于 88 - 每列的个数 *44
         */
        oldDist = 88 - len * 44
      }
      /**
       * 设置理想移动的距离
       */
      this.$set(distance, i, oldDist)
      /**
       * 开启过渡效果
       */
      this.openTransition(400)
    },
    /**
     * 开始过渡
     */
    openTransition(time) {
      this.duration = time
      setTimeout(() => {
        this.duration = 0
      }, time)
    },
    /**
     * 触摸开始
     */
    onTouchstart(e, i) {
      /**
       * 获取初始位置
       */
      this.startY = e.changedTouches[0].clientY
      /**
       * 记录开始距离
       */
      this.startDistence = this.distance[i]
      /**
       * 记录开始的时间
       */
      this.startTime = new Date()
    },
    /**
     * 接触点改变，滑动时
     */
    onTouchmove(e, i) {
      const { startY, startDistence, distance } = this
      /**
       * 获取当前移动的 Y 坐标
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
      this.$set(distance, i, actualDist)
    },
    /**
     * 触摸结束
     */
    onTouchend(e, i) {
      const { startY, distance, startTime, listData, setValue } = this
      /**
       * 实际移动的距离
       */
      let oldDist = distance[i]
      /**
       * 触摸结束时间
       */
      const endTime = new Date()
      /**
       * 速度
       */
      const speed = ((e.changedTouches[0].clientY - startY) / (endTime - startTime)).toFixed(2)
      /**
       * 判断速度是否过大，大于 0.1 才能开始惯性滑动
       */
      if (speed > 0.12 || speed < -0.12) {
        /**
         * 还需要滚动的距离
         */
        const wantDist = Math.ceil(speed * 400)
        /**
         * 惯性实际滑动的距离
         */
        oldDist = oldDist + wantDist
      }
      /**
       * 剩余数
       */
      const surplus = oldDist % 44
      /**
       * 判断是否处于理想位置，0 表示理想位置，不需要再移动到理想位置
       */
      if (surplus !== 0) {
        let tarDir = 0
        /**
         * 手指向下滑：不能大于 22（每项的一半高度）
         * 手指向上滑：不能小于 - 22（每项的一半高度）
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
        const list = listData[i]
        /**
         * 获取个数
         */
        const len = typeof list === 'number' ? list - 1 : list.length - 1
        /**
         * 最大不能大于 88，最小不能小于 88 - len * 44
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
        this.$set(distance, i, tarDir)
        /**
         * 开启过渡效果
         */
        this.openTransition(400)
        setValue(tarDir, i)
      }
    },
    // pc 端鼠标按下移动
    onMousedown(e, i) {
      /**
       * 获取初始位置
       */
      this.startY = e.clientY
      /**
       * 记录开始距离
       */
      this.startDistence = this.distance[i]
      /**
       * 记录开始的时间
       */
      this.startTime = new Date()
      /**
       * 表达式声明移动事件
       */
      document.onmousemove = e => {
        const { startY, startDistence, distance } = this
        /**
         * 获取当前移动的 Y 坐标
         */
        const currentY = e.clientY
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
        this.$set(distance, i, actualDist)
      }
      // 表达式声明抬起事件
      document.onmouseup = e => {
        const { startY, distance, startTime, listData, setValue } = this
        /**
         * 实际移动的距离
         */
        let oldDist = distance[i]
        /**
         * 触摸结束时间
         */
        const endTime = new Date()
        /**
         * 速度
         */
        const speed = ((e.clientY - startY) / (endTime - startTime)).toFixed(2)
        /**
         * 判断速度是否过大，大于 0.1 才能开始惯性滑动
         */
        if (speed > 0.12 || speed < -0.12) {
          /**
           * 还需要滚动的距离
           */
          const wantDist = Math.ceil(speed * 400)
          /**
           * 惯性实际滑动的距离
           */
          oldDist = oldDist + wantDist
        }
        /**
         * 剩余数
         */
        const surplus = oldDist % 44
        /**
         * 判断是否处于理想位置，0 表示理想位置，不需要再移动到理想位置
         */
        if (surplus !== 0) {
          let tarDir = 0
          /**
           * 手指向下滑：不能大于 22（每项的一半高度）
           * 手指向上滑：不能小于 - 22（每项的一半高度）
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
          const list = listData[i]
          /**
           * 获取个数
           */
          const len = typeof list === 'number' ? list - 1 : list.length - 1
          /**
           * 最大不能大于 88，最小不能小于 88 - len * 44
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
          this.$set(distance, i, tarDir)
          /**
           * 开启过渡效果
           */
          this.openTransition(400)
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
    },
    /**
     * 设置市地址
     */
    setCity() {
      const { listData, currentValue, setArea } = this
      /**
       * 数值索引
       */
      let index = 0
      for (const key in AreaData['86']) {
        /**
         * 判断当前选中的 value 值是否相等
         */
        if (AreaData['86'][key] === currentValue[0]) {
          index = key
          break
        }
      }
      /**
       * 设置所有 city 值
       */
      listData[1] = Object.values(AreaData[index])
      /**
       * 设置第一个 city 值
       */
      currentValue[1] = listData[1][0]
      setArea()
    },
    /**
     * 设置地区
     */
    setArea() {
      const { listData, currentValue } = this
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
              index = key
              break
            }
          }
          break
        }
      }
      /**
       * 设置所有 city 值
       */
      listData[2] = Object.values(AreaData[index])
      /**
       * 设置第一个 area 值
       */
      currentValue[2] = listData[2][0]
    }
  },
  filters: {
    /**
     * 过滤数字
     */
    filterNumber: num => (num < 10 ? `0${num}` : num)
  },
  created() {
    const { listData, currentValue, setCity } = this
    /**
     * 获取所有省数据
     */
    listData[0] = Object.values(AreaData['86'])
    /**
     * 设置初始化省数据
     */
    currentValue[0] = listData[0][0]
    setCity()
  }
}
</script>
