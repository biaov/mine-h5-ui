<template>
  <!-- 拼图校验 -->
  <div class="me-jigsaw-validate" :style="`width:${width};`">
    <div class="jigsaw-img" :style="`height:${height};--x:${missingPoint.x}px;--y:${crossPoint.y}px;--point-width:${crossPoint.width}px;--url:url(${url});`" ref="jigsawImgRef">
      <div class="jigsaw-img-point" :class="{ animation: openAnimation }" :style="`left:${dragPoint.x + moveX}px;background-position:-${missingPoint.x}px -${crossPoint.y}px;background-size:${imgRect.width}px ${imgRect.height}px;`"></div>
    </div>
    <div class="jigsaw-slide" :style="`height:${slideStyle.height};background:${slideStyle.background};`">
      <div class="slide-dot" :class="{ animation: openAnimation }" :style="`left:${moveX}px;background:${slideStyle.dotBackground};`" @transitionend="onAnimationend" @touchstart="onTouchstart" @touchmove="onTouchmove" @touchend="onTouchend" @mousedown="onMousedown"></div>
      <div class="slide-tips" :style="`color:${slideStyle.tips};`">{{ tips }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MeJigsawValidate',
  props: {
    // 图片地址
    url: {
      type: String,
      required: true
    },
    // 图片宽度
    width: {
      type: String,
      default: '100%'
    },
    // 图片高度
    height: {
      type: String,
      default: '300px'
    },
    // 随机位置
    random: {
      type: Boolean,
      default: true
    },
    // 滑块样式
    slideStyle: {
      type: Object,
      default: () => ({
        height: '40px', // 滑块高度
        background: '#f6f6f6', // 滑块背景色
        dotBackground: '#409eff', // 拖拽点背景色
        tips: '#494949' // 提示文本颜色
      })
    },
    // 提示语
    tips: {
      type: String,
      default: '按住左边按钮向右拖动完成上方图像验证'
    },
    // 容错值
    range: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      dragPoint: { x: 10 }, // 拖拽点
      missingPoint: { x: 200 }, // 缺失点
      crossPoint: { y: 20, width: 50, height: 50 }, // 拖拽点和缺失点相同信息
      startX: 0, // 横向开始点
      openAnimation: false, // 动画开关
      moveX: 0, // 移动距离
      imgRect: { width: 0, height: 0 } // 图片范围
    }
  },
  methods: {
    // 操作开始
    handleStart({ clientX }) {
      this.openAnimation = false
      this.startX = clientX
    },
    // 操作移动
    handleMove({ clientX }) {
      this.moveX = clientX - this.startX
    },
    // 操作结束
    handleEnd({ clientX }) {
      const dx = this.dragPoint.x // 拖拽点 x
      const mx = this.missingPoint.x // 缺失点 x
      const curX = clientX - this.startX // 当前位移
      const resultBool = Math.abs(dx + curX - mx) < this.range // 验证结果

      if (resultBool) {
        this.moveX = mx - dx
      } else {
        this.moveX = 0
        this.openAnimation = true
      }

      this.$emit('change', resultBool)
    },
    // 手指触摸开始
    onTouchstart(e) {
      this.handleStart(e.changedTouches[0])
    },
    // 手指触摸移动
    onTouchmove(e) {
      this.handleMove(e.changedTouches[0])
    },
    // 手指触摸离开
    onTouchend(e) {
      this.handleEnd(e.changedTouches[0])
    },
    // 点击滑块
    onMousedown(e) {
      this.handleStart(e)
      document.onmousemove = this.handleMove
      document.onmouseup = ev => {
        this.handleEnd(ev)
        document.onmousemove = document.onmouseup = null
      }
    },
    // 动画结束
    onAnimationend() {
      this.openAnimation = false
    }
  },
  mounted() {
    const { width, height } = this.$refs.jigsawImgRef?.getBoundingClientRect()
    this.imgRect = { width, height }
    const split = width / 2 // 分割值
    const cw = this.crossPoint.width
    const ch = this.crossPoint.height

    if (this.random) {
      this.crossPoint.y = ~~(Math.random() * (height - ch))
      this.dragPoint.x = ~~(Math.random() * (split - cw))
      this.missingPoint.x = ~~(Math.random() * (width - cw - split)) + split
    } else {
      this.crossPoint.y = (height - ch) / 2
      this.missingPoint.x = width - cw - 10
    }
  }
}
</script>
