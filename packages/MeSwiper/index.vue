<template>
  <!-- 轮播图 -->
  <div class="me-swiper" :style="`height:${height}px;border-radius:${radius}px;`" ref="swiper" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown="onMousedown" @click.prevent.stop>
    <div class="m-imgs" :class="{ active: isActive }" :style="`transform:translateX(${currentValue}px);`">
      <slot></slot>
    </div>
    <!-- 指示点 -->
    <ul class="m-dot" v-if="dot">
      <li v-for="(item, index) in dots" :key="index" :class="{ on: dotIndex === index }"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MeSwiper',
  props: {
    /**
     * 自动
     */
    loop: {
      type: Boolean,
      default: false
    },
    /**
     * 延迟时间
     */
    delay: {
      type: Number,
      default: 3000
    },
    /**
     * 组件高度
     */
    height: {
      type: Number
    },
    /**
     * 指示点
     */
    dot: {
      type: Boolean,
      default: false
    },
    /**
     * 倒角
     */
    radius: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      /**
       * 指示点的数量
       */
      dots: 1,
      /**
       * 指示点索引
       */
      dotIndex: 0,
      /**
       * 最大滑动距离
       */
      maxDistance: 0,
      /**
       * 当前 value 值
       */
      currentValue: 0,
      /**
       * 初始值
       */
      initialValue: 0,
      /**
       * 开始 X 坐标
       */
      startX: 0, //
      /**
       * 是否过渡
       */
      isActive: false,
      /**
       * 滑动超过多少算滑动过
       */
      minDistance: 0,
      /**
       * 定时器
       */
      timer: null
    }
  },
  methods: {
    /**
     * 更新自组件的状态
     */
    updateValue() {
      const { $children, $refs } = this
      /**
       * 设置指示点的数量
       */
      this.dots = $children.length
      /**
       * 设置最大滑动距离
       */
      const offsetWidth = $refs.swiper.offsetWidth
      this.maxDistance = offsetWidth
      this.minDistance = offsetWidth / 4
      this.loop && this.startAnimate()
    },
    /**
     * 触摸开始
     */
    onTouchstart(e) {
      this.initialValue = this.currentValue
      this.isActive = false
      /**
       * 获取初始位置
       */
      this.startX = e.changedTouches[0].clientX
    },
    /**
     * 接触点改变，滑动时
     */
    onTouchmove(e) {
      const { startX, maxDistance, initialValue } = this
      /**
       * 获取当前移动的X坐标
       */
      const currentX = e.changedTouches[0].clientX
      /**
       * 移动位置
       */
      const diffX = currentX - startX
      /**
       * diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
      this.currentValue = distanceX + initialValue
    },
    /**
     * 触摸结束
     */
    onTouchend(e) {
      const { startX, maxDistance, minDistance, initialValue } = this
      this.isActive = true
      /**
       * 获取当前移动的X坐标
       */
      const currentX = e.changedTouches[0].clientX
      /**
       * 移动位置
       */
      const diffX = currentX - startX
      /**
       * diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽，等于 0 不滑动
       */
      if (diffX > 0) {
        /**
         * 拖动距离
         */
        const distanceX = diffX > minDistance ? maxDistance : 0
        /**
         * 理想位移
         */
        const idealX = initialValue + distanceX
        /**
         * 实际位移，0: 最小位移
         */
        this.currentValue = idealX > 0 ? 0 : idealX
      } else if (diffX < 0) {
        /**
         * 拖动距离
         */
        const distanceX = diffX < -minDistance ? -maxDistance : 0
        /**
         * 理想位移
         */
        const idealX = initialValue + distanceX
        /**
         * 最大位移
         */
        const maxDistanceX = (1 - this.dots) * maxDistance
        /**
         * 实际位移
         */
        this.currentValue = idealX < maxDistanceX ? maxDistanceX : idealX
      }
      this.dotIndex = -this.currentValue / maxDistance
      this.$emit('on-change', this.dotIndex)
    },
    /**
     * PC 端鼠标按下
     */
    onMousedown(e) {
      const { onMousemove, onMouseup } = this
      this.initialValue = this.currentValue
      /**
       * 获取 x 初始位置
       */
      this.startX = e.clientX
      /**
       * 表达式声明移动事件
       */
      document.onmousemove = onMousemove
      /**
       * 表达式声明抬起事件
       */
      document.onmouseup = onMouseup
    },
    /**
     * PC 端鼠标按下移动
     */
    onMousemove(e) {
      const { startX, maxDistance, initialValue } = this
      this.isActive = false
      /**
       * 获取当前移动的x坐标
       */
      const currentX = e.clientX
      /**
       * 移动位置
       */
      const diffX = currentX - startX
      /**
       * diffX, 大于0: 向右拖拽, 小于0: 向左拖拽
       */
      const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
      this.currentValue = distanceX + initialValue
    },
    /**
     * PC 端鼠标抬起
     */
    onMouseup(e) {
      const { startX, maxDistance, minDistance, initialValue } = this
      this.isActive = true
      /**
       * 获取当前移动的 X 坐标
       */
      const currentX = e.clientX //
      /**
       * 移动位置
       */
      const diffX = currentX - startX //
      /**
       * diffX, 大于 0: 向右拖拽, 小于 0: 向左拖拽，等于 0 不滑动
       */
      if (diffX > 0) {
        /**
         * 拖动距离
         */
        const distanceX = diffX > minDistance ? maxDistance : 0
        /**
         * 理想位移
         */
        const idealX = initialValue + distanceX
        /**
         * 实际位移，0: 最小位移
         */
        this.currentValue = idealX > 0 ? 0 : idealX
      } else if (diffX < 0) {
        /**
         * 拖动距离
         */
        const distanceX = diffX < -minDistance ? -maxDistance : 0
        /**
         * 理想位移
         */
        const idealX = initialValue + distanceX
        /**
         * 最大位移
         */
        const maxDistanceX = (1 - this.dots) * maxDistance
        /**
         * 实际位移
         */
        this.currentValue = idealX < maxDistanceX ? maxDistanceX : idealX
      }
      this.dotIndex = -this.currentValue / maxDistance
      this.$emit('on-change', this.dotIndex)
      /**
       * 清理上次的移动事件
       */
      document.onmousemove = null
      /**
       * 清理上次的抬起事件
       */
      document.onmouseup = null
    },
    /**
     * 开始动画
     */
    startAnimate() {
      const { maxDistance } = this
      /**
       * 开启定时器
       */
      this.timer = setInterval(() => {
        const { dotIndex, dots } = this
        /**
         * 设置指示点
         */
        this.dotIndex = dotIndex < dots - 1 ? dotIndex + 1 : 0
        this.isActive = true
        this.currentValue = -this.dotIndex * maxDistance
      }, this.delay)
    },
    /**
     * 关闭动画
     */
    closeAnimate() {
      /**
       * 关闭动画
       */
      clearInterval(this.timer)
    }
  },
  watch: {
    /**
     * 监听动画
     */
    loop(value) {
      /**
       * 是否开启动画
       */
      if (value) {
        this.startAnimate()
      } else {
        this.closeAnimate()
      }
    }
  },
  mounted() {
    this.updateValue()
  },
  destroyed() {
    this.closeAnimate()
  }
}
</script>
