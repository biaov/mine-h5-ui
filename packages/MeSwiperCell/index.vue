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
      startX: 0,
      /**
       * 是否过渡
       */
      isActive: false,
      /**
       * 滑动超过多少算滑动过
       */
      minDistance: 0
    }
  },
  methods: {
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
      const diffX = initialValue + currentX - startX
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      this.currentValue = diffX < -maxDistance ? -maxDistance : diffX > 0 ? 0 : diffX
    },
    /**
     * 触摸结束
     */
    onTouchend(e) {
      const { startX, maxDistance, minDistance } = this
      this.isActive = true
      /**
       * 获取当前移动的 X 坐标
       */
      const currentX = e.changedTouches[0].clientX
      /**
       * 移动位置
       */
      const diffX = currentX - startX
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽，等于 0 不滑动
       */
      if (diffX > 0) {
        this.currentValue = diffX > minDistance ? 0 : -maxDistance
      } else if (diffX < 0) {
        this.currentValue = diffX < -minDistance ? -maxDistance : 0
      }
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
       * 获取当前移动的 x 坐标
       */
      const currentX = e.clientX
      /**
       * 移动位置
       */
      const diffX = initialValue + currentX - startX
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽
       */
      this.currentValue = diffX < -maxDistance ? -maxDistance : diffX > 0 ? 0 : diffX
    },
    /**
     * PC 端鼠标抬起
     */
    onMouseup(e) {
      const { startX, maxDistance, minDistance } = this
      const currentX = e.clientX //
      const diffX = currentX - startX // 移动位置
      this.isActive = true
      /**
       * 判断是否大于 0, 大于 0: 向右拖拽, 小于 0: 向左拖拽，等于 0 不滑动
       */
      if (diffX > 0) {
        this.currentValue = diffX > minDistance ? 0 : -maxDistance
      } else if (diffX < 0) {
        this.currentValue = diffX < -minDistance ? -maxDistance : 0
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
  mounted() {
    /**
     * 设置最大滑动距离
     */
    const offsetWidth = this.$refs.hidden.offsetWidth
    this.maxDistance = offsetWidth
    this.minDistance = offsetWidth / 4
  }
}
</script>
