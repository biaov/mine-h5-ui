import { ref, onMounted, computed } from 'vue'
import { Props, Emits } from './types'

// 绘制
export const useDraw = (props: Readonly<Props>, emit: Emits) => {
  const canvasRef = ref<HTMLCanvasElement>() // canvas 节点
  // 获取边框
  const getBorder = computed(() => {
    switch (props.borderStyle) {
      case true:
        return '1px solid rgba(0,0,0,0.2)'
      case false:
        return '0px solid rgba(0,0,0,0.2)'
      default:
        return props.borderStyle
    }
  })

  // 获取点坐标
  const getPoint = <T extends Touch | MouseEvent>({ clientX, clientY }: T) => {
    const { offsetLeft, offsetTop } = canvasRef.value!

    return {
      x: clientX - offsetLeft + parseInt(getBorder.value, 10),
      y: clientY - offsetTop + parseInt(getBorder.value, 10)
    }
  }
  // 获取移动端坐标
  const getTouchPoint = (e: TouchEvent) => getPoint(e.touches[0])
  // 获取客户端坐标
  const getMousePoint = (e: MouseEvent) => getPoint(e)

  onMounted(() => {
    if (!props.visible) return
    const canvas = canvasRef.value! // 节点
    emit('update:modelValue', canvas)
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
    ctx.strokeStyle = props.strokeStyle
    ctx.lineWidth = props.lineWidth

    // 移动端
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

    // 客户端
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
  })

  return { canvasRef, getBorder }
}
