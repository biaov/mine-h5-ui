<template>
  <!-- 滑块 -->
  <div class="me-slider" :aria-disabled="disabled">
    <!-- 颜色线条 -->
    <p class="u-line" :style="`height:${styles.height};border-radius:${styles.radius};`"><span :style="`background:${styles.lineBgc};transform:translateX(-${currentValue}%);`"></span></p>
    <!-- 拖拽div -->
    <div class="m-drag" :style="`left:${100 - currentValue}%;`" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown="onMousedown">
      <!-- 圆点 -->
      <span class="u-round" v-if="!isBtn"></span>
      <!-- 自定义按钮 -->
      <slot v-else></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeSlider',
  props: {
    // v-model绑定值
    value: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 自定义样式
    styles: {
      type: Object,
      default: () => ({
        height: '', // 大小
        radius: '', // 倒角
        lineBgc: '' // 线背景色
      })
    },
    // 禁用状态
    disabled: {
      type: Boolean,
      default: false
    },
    // 自定义按钮状态
    isBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentValue: 100, // 当前value值
      startX: 0, // 开始X坐标
      changeValue: 0, // 触摸开始时的value
      screenW: 0 // 整个屏幕的width
    }
  },
  methods: {
    // 处理currentValue
    handleCurrent() {
      const { min, value } = this
      this.currentValue = 100 + min - value // 设置当前偏移value值
    },
    // 触摸开始
    onTouchstart(e) {
      this.startX = e.changedTouches[0].clientX // 获取初始位置
      this.changeValue = this.value // 保存第一次的value参数值
      this.screenW = document.body.offsetWidth // 获取元素整体宽度
      this.$emit('on-start', e)
    },
    // 接触点改变，滑动时
    onTouchmove(e) {
      const { changeValue, max, min, startX, screenW } = this
      const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
      const diffX = Math.ceil(((currentX - startX) * 100) / screenW) // 移动位置
      let afterVal = changeValue + diffX // 改变后的值
      // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
      afterVal = diffX > 0 ? (afterVal > max ? max : afterVal) : afterVal < min ? min : afterVal
      this.$emit('input', afterVal)
      this.$emit('on-move', e)
    },
    // 触摸结束
    onTouchend(e) {
      this.$emit('on-end', e)
    },
    // pc端鼠标按下
    onMousedown(e) {
      const { value, onMousemove, onMouseup } = this
      this.startX = e.clientX // 获取x初始位置
      this.changeValue = value // 保存第一次的value参数值
      this.screenW = document.body.offsetWidth // 获取元素整体宽度
      document.onmousemove = onMousemove // 表达式声明移动事件
      document.onmouseup = onMouseup // 表达式声明抬起事件
      this.$emit('on-start', e)
    },
    // pc 端鼠标按下移动
    onMousemove(e) {
      const { changeValue, max, min, startX, screenW } = this
      const currentX = e.clientX // 获取当前移动的x坐标
      const diffX = Math.ceil(((currentX - startX) * 100) / screenW) // 移动位置
      let afterVal = changeValue + diffX // 改变后的值
      // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
      afterVal = diffX > 0 ? (afterVal > max ? max : afterVal) : afterVal < min ? min : afterVal
      this.$emit('input', afterVal)
      this.$emit('on-move', e)
    },
    // pc端鼠标抬起
    onMouseup(e) {
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
      this.$emit('on-end', e)
    }
  },
  watch: {
    // 监听value值的变化
    value() {
      const { disabled, handleCurrent } = this
      !disabled && handleCurrent()
    }
  },
  created() {
    this.handleCurrent()
  }
}
</script>
