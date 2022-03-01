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
    // 自动
    loop: {
      type: Boolean,
      default: false
    },
    // 延迟时间
    delay: {
      type: Number,
      default: 3000
    },
    // 组件高度
    height: {
      type: Number
    },
    // 指示点
    dot: {
      type: Boolean,
      default: false
    },
    // 倒角
    radius: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      dots: 1, // 指示点的数量
      dotIndex: 0, // 指示点索引
      maxDistance: 0, // 最大滑动距离
      currentValue: 0, // 当前 value 值
      initialValue: 0, // 初始值
      startX: 0, // 开始 X 坐标
      isActive: false, // 是否过渡
      minDistance: 0, // 滑动超过多少算滑动过
      timer: null // 定时器
    }
  },
  methods: {
    // 更新自组件的状态
    updateValue() {
      const { $children, $refs } = this
      this.dots = $children.length // 设置指示点的数量
      const offsetWidth = $refs.swiper.offsetWidth // 设置最大滑动距离
      this.maxDistance = offsetWidth
      this.minDistance = offsetWidth / 4
      this.loop && this.startAnimate()
    },
    // 触摸开始
    onTouchstart(e) {
      this.initialValue = this.currentValue
      this.isActive = false
      this.startX = e.changedTouches[0].clientX // 获取初始位置
    },
    // 接触点改变，滑动时
    onTouchmove(e) {
      const { startX, maxDistance, initialValue } = this
      const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
      const diffX = currentX - startX // 移动位置
      // diffX,大于0:向右拖拽,小于0:向左拖拽
      const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
      this.currentValue = distanceX + initialValue
    },
    // 触摸结束
    onTouchend(e) {
      const { startX, maxDistance, minDistance, initialValue } = this
      this.isActive = true
      const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
      const diffX = currentX - startX // 移动位置
      // diffX,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
      if (diffX > 0) {
        const distanceX = diffX > minDistance ? maxDistance : 0 // 拖动距离
        const idealX = initialValue + distanceX // 理想位移
        this.currentValue = idealX > 0 ? 0 : idealX // 实际位移，0:最小位移
      } else if (diffX < 0) {
        const distanceX = diffX < -minDistance ? -maxDistance : 0 // 拖动距离
        const idealX = initialValue + distanceX // 理想位移
        const maxDistanceX = (1 - this.dots) * maxDistance // 最大位移
        this.currentValue = idealX < maxDistanceX ? maxDistanceX : idealX // 实际位移
      }
      this.dotIndex = -this.currentValue / maxDistance
      this.$emit('on-change', this.dotIndex)
    },
    // pc端鼠标按下
    onMousedown(e) {
      const { onMousemove, onMouseup } = this
      this.initialValue = this.currentValue
      this.startX = e.clientX // 获取x初始位置
      document.onmousemove = onMousemove // 表达式声明移动事件
      document.onmouseup = onMouseup // 表达式声明抬起事件
    },
    // pc 端鼠标按下移动
    onMousemove(e) {
      const { startX, maxDistance, initialValue } = this
      this.isActive = false
      const currentX = e.clientX // 获取当前移动的x坐标
      const diffX = currentX - startX // 移动位置
      // diffX,大于0:向右拖拽,小于0:向左拖拽
      const distanceX = diffX < -maxDistance ? -maxDistance : diffX > maxDistance ? maxDistance : diffX
      this.currentValue = distanceX + initialValue
    },
    // pc 端鼠标抬起
    onMouseup(e) {
      const { startX, maxDistance, minDistance, initialValue } = this
      this.isActive = true
      const currentX = e.clientX // 获取当前移动的X坐标
      const diffX = currentX - startX // 移动位置
      // diffX,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
      if (diffX > 0) {
        const distanceX = diffX > minDistance ? maxDistance : 0 // 拖动距离
        const idealX = initialValue + distanceX // 理想位移
        this.currentValue = idealX > 0 ? 0 : idealX // 实际位移，0:最小位移
      } else if (diffX < 0) {
        const distanceX = diffX < -minDistance ? -maxDistance : 0 // 拖动距离
        const idealX = initialValue + distanceX // 理想位移
        const maxDistanceX = (1 - this.dots) * maxDistance // 最大位移
        this.currentValue = idealX < maxDistanceX ? maxDistanceX : idealX // 实际位移
      }
      this.dotIndex = -this.currentValue / maxDistance
      this.$emit('on-change', this.dotIndex)
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    },
    // 开始动画
    startAnimate() {
      const { maxDistance } = this
      // 开启定时器
      this.timer = setInterval(() => {
        const { dotIndex, dots } = this
        this.dotIndex = dotIndex < dots - 1 ? dotIndex + 1 : 0 // 设置指示点
        this.isActive = true
        this.currentValue = -this.dotIndex * maxDistance
      }, this.delay)
    },
    // 关闭动画
    closeAnimate() {
      clearInterval(this.timer) // 关闭动画
    }
  },
  watch: {
    // 监听动画
    loop(value) {
      // 是否开启动画
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
