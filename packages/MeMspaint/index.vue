<template>
  <!-- 画图 -->
  <canvas
    class="me-mspaint"
    v-bind="{ width: parseInt(width), height: parseInt(height) }"
    :style="{
      width,
      height,
      background,
      border: getBorder
    }"
    ref="canvasRef"
  ></canvas>
</template>
<script>
export default {
  name: 'MeMspaint',
  props: {
    /**
     * v-model 绑定值
     */
    value: {
      type: HTMLCanvasElement
    },
    /**
     * 宽度
     */
    width: {
      type: String,
      default: '200px'
    },
    /**
     * 高度
     */
    height: {
      type: String,
      default: '200px'
    },
    /**
     * 背景色
     */
    background: {
      type: String,
      default: '#fff'
    },
    /**
     * 边框样式
     */
    borderStyle: {
      type: [String, Boolean],
      default: false
    },
    /**
     * 线条颜色
     */
    strokeStyle: {
      type: String,
      default: '#f56c6c'
    },
    /**
     * 线条粗细
     */
    lineWidth: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {}
  },
  computed: {
    getBorder() {
      switch (this.borderStyle) {
        case true:
          return '1px solid rgba(0,0,0,0.2)'
        case false:
          return '0px solid rgba(0,0,0,0.2)'
        default:
          return this.borderStyle
      }
    }
  },
  methods: {
    /**
     * 获取点坐标
     */
    getPoint({ clientX, clientY }) {
      const { offsetLeft, offsetTop } = this.$refs.canvasRef

      return {
        x: clientX - offsetLeft + parseInt(this.getBorder),
        y: clientY - offsetTop + parseInt(this.getBorder)
      }
    },
    /**
     * 获取移动端坐标
     */
    getTouchPoint(e) {
      return this.getPoint(e.touches[0])
    },
    /**
     * 获取客户端坐标
     */
    getMousePoint(e) {
      return this.getPoint(e)
    }
  },
  mounted() {
    const { getTouchPoint, getMousePoint } = this
    /**
     * 节点
     */
    const canvas = this.$refs.canvasRef
    this.$emit('input', canvas)
    const ctx = canvas.getContext('2d')
    ctx.strokeStyle = this.strokeStyle
    ctx.lineWidth = this.lineWidth
    /**
     * 移动端
     */
    canvas.ontouchstart = e => {
      ctx.moveTo(getTouchPoint(e).x, getTouchPoint(e).y)
      document.ontouchmove = ev => {
        ctx.lineTo(getTouchPoint(ev).x, getTouchPoint(ev).y)
        ctx.stroke()
      }
      document.ontouchend = () => {
        document.ontouchmove = null
        document.ontouchend = null
      }
    }

    /**
     * 客户端
     */
    canvas.onmousedown = e => {
      ctx.moveTo(getMousePoint(e).x, getMousePoint(e).y)
      document.onmousemove = ev => {
        ctx.lineTo(getMousePoint(ev).x, getMousePoint(ev).y)
        ctx.stroke()
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>
