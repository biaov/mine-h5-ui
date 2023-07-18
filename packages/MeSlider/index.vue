<template>
  <!-- 滑块 -->
  <div class="slider" :aria-disabled="disabled">
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
    /**
     * v-model 绑定值
     */
    value: {
      type: Number,
      default: 0
    },
    /**
     * 最大值
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * 最小值
     */
    min: {
      type: Number,
      default: 0
    },
    /**
     * 自定义样式
     */
    styles: {
      type: Object,
      default: () => ({
        /**
         * 大小
         */
        height: '',
        /**
         * 倒角
         */
        radius: '',
        /**
         * 线背景色
         */
        lineBgc: ''
      })
    },
    /**
     * 禁用状态
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义按钮状态
     */
    isBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      /**
       * 当前 value 值
       */
      currentValue: 100,
      /**
       * 开始 X 坐标
       */
      startX: 0,
      /**
       * 触摸开始时的 value
       */
      changeValue: 0,
      /**
       * 整个屏幕的 width
       */
      screenW: 0
    }
  },
  methods: {
    /**
     * 处理 currentValue
     */
    handleCurrent() {
      const { min, value } = this
      /**
       * 设置当前偏移 value 值
       */
      this.currentValue = 100 + min - value
    },
    /**
     * 触摸开始
     */
    onTouchstart(e) {
      /**
       * 获取初始位置
       */
      this.startX = e.changedTouches[0].clientX
      /**
       * 保存第一次的 value 参数值
       */
      this.changeValue = this.value
      /**
       * 获取元素整体宽度
       */
      this.screenW = document.body.offsetWidth
      this.$emit('on-start', e)
    },
    /**
     * 接触点改变，滑动时
     */
    onTouchmove(e) {
      const { changeValue, max, min, startX, screenW } = this
      /**
       * 获取当前移动的 X 坐标
       */
      const currentX = e.changedTouches[0].clientX
      /**
       * 移动位置
       */
      const diffX = Math.ceil(((currentX - startX) * 100) / screenW)
      /**
       * 改变后的值
       */
      let afterVal = changeValue + diffX
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      afterVal = diffX > 0 ? (afterVal > max ? max : afterVal) : afterVal < min ? min : afterVal
      this.$emit('input', afterVal)
      this.$emit('on-move', e)
    },
    /**
     * 触摸结束
     */
    onTouchend(e) {
      this.$emit('on-end', e)
    },
    /**
     * PC 端鼠标按下
     */
    onMousedown(e) {
      const { value, onMousemove, onMouseup } = this
      /**
       * 获取 x 初始位置
       */
      this.startX = e.clientX
      /**
       * 保存第一次的 value 参数值
       */
      this.changeValue = value
      /**
       * 获取元素整体宽度
       */
      this.screenW = document.body.offsetWidth
      /**
       * 表达式声明移动事件
       */
      document.onmousemove = onMousemove
      /**
       * 表达式声明抬起事件
       */
      document.onmouseup = onMouseup
      this.$emit('on-start', e)
    },
    /**
     * PC 端鼠标按下移动
     */
    onMousemove(e) {
      const { changeValue, max, min, startX, screenW } = this
      /**
       * 获取当前移动的 x 坐标
       */
      const currentX = e.clientX
      /**
       * 移动位置
       */
      const diffX = Math.ceil(((currentX - startX) * 100) / screenW)
      /**
       * 改变后的值
       */
      let afterVal = changeValue + diffX //
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      afterVal = diffX > 0 ? (afterVal > max ? max : afterVal) : afterVal < min ? min : afterVal
      this.$emit('input', afterVal)
      this.$emit('on-move', e)
    },
    /**
     * PC 端鼠标抬起
     */
    onMouseup(e) {
      /**
       * 清理上次的移动事件
       */
      document.onmousemove = null
      /**
       * 清理上次的抬起事件
       */
      document.onmouseup = null
      this.$emit('on-end', e)
    }
  },
  watch: {
    /**
     * 监听 value 值的变化
     */
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
