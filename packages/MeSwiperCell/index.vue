<template>
  <!-- 滑动单元格 -->
  <div class="me-swiper-cell">
    <div class="m-swiper" :class="{ active: isActive }" :style="`transform:translateX(${currentValue}px);`" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown="onMousedown" @click.prevent.stop>
      <!-- 内容 -->
      <div class="u-content">
        <slot name="content"></slot>
      </div>
      <!-- 右侧隐藏部分 -->
      <div class="u-hidden" ref="hidden" :style="`right:-${maxDistance}px;`">
        <slot name="hidden"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeSwiperCell',
  data() {
    return {
      maxDistance: 0, // 最大滑动距离
      currentValue: 0, // 当前 value 值
      initialValue: 0, // 初始值
      startX: 0, // 开始 X 坐标
      isActive: false, // 是否过渡
      minDistance: 0 // 滑动超过多少算滑动过
    }
  },
  methods: {
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
      const diffX = initialValue + currentX - startX // 移动位置
      this.currentValue = diffX < -maxDistance ? -maxDistance : diffX > 0 ? 0 : diffX // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    },
    // 触摸结束
    onTouchend(e) {
      const { startX, maxDistance, minDistance } = this
      this.isActive = true
      const currentX = e.changedTouches[0].clientX // 获取当前移动的X坐标
      const diffX = currentX - startX // 移动位置
      // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
      if (diffX > 0) {
        this.currentValue = diffX > minDistance ? 0 : -maxDistance
      } else if (diffX < 0) {
        this.currentValue = diffX < -minDistance ? -maxDistance : 0
      }
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
      const diffX = initialValue + currentX - startX // 移动位置
      this.currentValue = diffX < -maxDistance ? -maxDistance : diffX > 0 ? 0 : diffX // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽
    },
    // pc 端鼠标抬起
    onMouseup(e) {
      const { startX, maxDistance, minDistance } = this
      const currentX = e.clientX // 获取当前移动的X坐标
      const diffX = currentX - startX // 移动位置
      this.isActive = true
      // 判断是否大于0,大于0:向右拖拽,小于0:向左拖拽，等于0不滑动
      if (diffX > 0) {
        this.currentValue = diffX > minDistance ? 0 : -maxDistance
      } else if (diffX < 0) {
        this.currentValue = diffX < -minDistance ? -maxDistance : 0
      }
      document.onmousemove = null // 清理上次的移动事件
      document.onmouseup = null // 清理上次的抬起事件
    }
  },
  mounted() {
    const offsetWidth = this.$refs.hidden.offsetWidth // 设置最大滑动距离
    this.maxDistance = offsetWidth
    this.minDistance = offsetWidth / 4
  }
}
</script>
