<template>
  <!-- 拖拽 -->
  <div class="me-drag" ref="dragRef" :style="`width:${width};height:${height};`" @click="onClick(-1)">
    <div
      v-for="(item, index) in listData"
      :key="index"
      class="item"
      :class="{ active: index === current }"
      :style="`top:${item.rect.y}px;left:${item.rect.x}px;width:${item.rect.w}px;height:${item.rect.h}px;transform:rotate(${item.rect.r}deg);--theme:${theme};--themeText:${themeText};`"
      @touchstart="onTouchstart"
      @touchmove="onTouchmove"
      @mousedown="onMousedown"
      @click.stop="onClick(index)"
    >
      <!-- 缩放按钮 -->
      <div class="u-resize" v-for="(it, i) in angleToCursor" :key="it.cursor" :class="[it.cursor, getCursor(i)]" @touchstart.stop="onResizeTouchstart" @touchmove.stop="onResizeTouchmove($event, item)" @touchend.stop @mousedown.stop="onResizeMousedown($event, it)"></div>
      <!-- 删除按钮 -->
      <div class="u-delete flex-center" @click="onDelete"><i class="iconfont icon-baseline-close-px"></i></div>
      <!-- 旋转按钮 -->
      <div class="u-rotate flex-center" @touchstart.stop @touchmove.stop="onRotateTouchmove" @touchend.stop @mousedown.stop="onRotateMousedown"><i class="iconfont icon-loading_flat"></i></div>
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>
<script>
import calcSize, { getSymmPoint } from './calcSize'
import { DeepCopyRA } from '~/MeAPI/function'

export default {
  name: 'MeDrag',
  props: {
    // 选中项
    current: {
      type: Number,
      default: -1
    },
    // 列表数据
    list: {
      type: Array,
      default: () => []
    },
    // 容器宽度
    width: {
      type: String,
      default: '300px'
    },
    // 容器高度
    height: {
      type: String,
      default: '300px'
    },
    // 选中主题色
    theme: {
      type: String,
      default: '#f56c6c'
    },
    // 选中主题文本色
    themeText: {
      type: String,
      default: '#fff'
    },
    // 对正角度范围
    angleRange: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      startPoint: {}, // 开始坐标
      centerPoint: {}, // 中心点
      symmPoint: {}, // 对称点
      startRect: {}, // 开始矩形区域
      listData: [], // 列表数据
      // 每个范围的角度对应的光标
      angleToCursor: [
        { start: 338, end: 23, cursor: 'nw' },
        { start: 23, end: 68, cursor: 'n' },
        { start: 68, end: 113, cursor: 'ne' },
        { start: 113, end: 158, cursor: 'e' },
        { start: 158, end: 203, cursor: 'se' },
        { start: 203, end: 248, cursor: 's' },
        { start: 248, end: 293, cursor: 'sw' },
        { start: 293, end: 338, cursor: 'w' }
      ]
    }
  },
  computed: {
    // 获取容器 rect
    getDragRect() {
      return this.$refs.dragRef.getBoundingClientRect()
    },
    // 获取当前 item
    getCurItem() {
      return this.listData[this.current]?.rect
    },
    // 获取当前 cursor
    getCursor() {
      return i => {
        const { r } = this.getCurItem || {}
        if (!r) return ''
        const { angleToCursor } = this
        const len = angleToCursor.length
        const index = angleToCursor.findIndex(({ start, end }, i) => (i === 0 ? r < end || r > start : r > start && r < end))
        // 新的索引
        let newI = index + i
        newI >= len && (newI -= len)
        return `new-${angleToCursor[newI].cursor}`
      }
    }
  },
  methods: {
    // 获取中心点坐标
    getCenterPoint() {
      const { x: px, y: py } = this.getDragRect
      const { w, h, x: ex, y: ey } = this.getCurItem
      const x = w / 2 + ex + px // 横坐标
      const y = h / 2 + ey + py // 纵坐标
      return { x, y }
    },
    // 角度对正
    getAngleAlign(angle) {
      const { angleRange } = this
      return [0, 90, 180, 360].find(deg => Math.abs(angle - deg) < angleRange) || angle
    },
    // 获取旋转角度
    getRotate(point) {
      const center = this.getCenterPoint()
      if (point.x === center.x) {
        return point.y >= center.y ? 0 : 180
      }
      if (point.y === center.y) {
        return point.x < center.x ? 90 : 270
      }
      const x = point.x - center.x
      const y = point.y - center.y
      let angle = (Math.atan(Math.abs(x / y)) / Math.PI) * 180
      // 默认从第三象限(x<0 && y>0)开始为正
      if (x < 0 && y < 0) {
        // 第二象限
        angle = 180 - angle
      } else if (x > 0 && y < 0) {
        // 第一象限
        angle += 180
      } else if (x > 0 && y > 0) {
        // 第四象限
        angle = 360 - angle
      }
      return this.getAngleAlign(angle)
    },
    // 获取实际位移的距离
    getDistance(point) {
      const { startPoint, startRect } = this
      const diffX = point.x - startPoint.x // 手指横向移动距离
      const diffY = point.y - startPoint.y // 手指纵向移动距离
      const distX = startRect.x + diffX // 矩形移动的距离
      const distY = startRect.y + diffY // 矩形移动的距离
      const distW = Math.abs(diffX) + startPoint.w
      const distH = Math.abs(diffY) + startPoint.h
      return { distX, distY, distW, distH }
    },
    // 触摸开始
    onTouchstart(e) {
      const { clientX, clientY } = e.changedTouches[0]
      this.startPoint = { x: clientX, y: clientY }
      this.startRect = { ...this.getCurItem }
    },
    // 接触点改变,滑动时
    onTouchmove(e) {
      const { startPoint, startRect, current, listData } = this
      const { clientX, clientY } = e.changedTouches[0]
      const diffX = clientX - startPoint.x // 手指横向移动距离
      const diffY = clientY - startPoint.y // 手指纵向移动距离
      const distX = startRect.x + diffX // 矩形移动的距离
      const distY = startRect.y + diffY // 矩形移动的距离
      listData[current].rect.x = distX // 矩形移动的距离
      listData[current].rect.y = distY // 矩形移动的距离
      this.onEmitChange('translate')
      this.onUpdate()
    },
    // pc 端鼠标按下移动
    onMousedown(e) {
      const { clientX, clientY } = e
      this.startPoint = { x: clientX, y: clientY }
      this.startRect = { ...this.getCurItem }
      // 表达式声明移动事件
      document.onmousemove = e => {
        const { startPoint, startRect, current, listData } = this
        const { clientX, clientY } = e
        const diffX = clientX - startPoint.x // 手指横向移动距离
        const diffY = clientY - startPoint.y // 手指纵向移动距离
        const distX = startRect.x + diffX // 矩形移动的距离
        const distY = startRect.y + diffY // 矩形移动的距离
        listData[current].rect.x = distX // 矩形移动的距离
        listData[current].rect.y = distY // 矩形移动的距离
        this.onEmitChange('translate')
        this.onUpdate()
      }
      // 表达式声明抬起事件
      document.onmouseup = () => {
        document.onmousemove = null // 清理上次的移动事件
        document.onmouseup = null // 清理上次的抬起事件
      }
    },
    // 自定义事件
    onEmitChange(type) {
      this.$emit('on-change', this.listData, type)
    },
    // 更新 list
    onUpdate() {
      this.$emit('update:list', this.listData)
    },
    // 点击删除按钮
    onDelete() {
      this.listData.splice(this.current, 1)
      this.onUpdate()
      this.onEmitChange('delete')
    },
    // 点击选中项
    onClick(index) {
      this.$emit('update:current', index)
    },
    // 触摸 resize 元素开始
    onResizeTouchstart(e) {
      const { clientX, clientY } = e.changedTouches[0]
      this.startRect = { ...this.getCurItem }
      this.startPoint = { x: clientX, y: clientY }
      this.centerPoint = this.getCenterPoint()
      this.symmPoint = getSymmPoint(this.startPoint, this.centerPoint)
    },
    // 触摸 resize 元素接触点改变,滑动时
    onResizeTouchmove(e, item) {
      const { startPoint, centerPoint, symmPoint, getCurItem } = this
      const { clientX, clientY } = e.changedTouches[0]
      const curPoint = { x: clientX, y: clientY } // 当前触摸点坐标
      const resultRect = calcSize(item.cursor, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem })
      const { x, y } = this.getDragRect
      resultRect.x -= x
      resultRect.y -= y
      this.listData[this.current].rect = resultRect
      this.onUpdate()
      this.onEmitChange('resize')
    },
    // resize 元素 pc 端鼠标按下移动
    onResizeMousedown(e, item) {
      const { clientX, clientY } = e
      this.startRect = { ...this.getCurItem }
      this.startPoint = { x: clientX, y: clientY }
      this.centerPoint = this.getCenterPoint()
      this.symmPoint = getSymmPoint(this.startPoint, this.centerPoint)
      // 表达式声明移动事件
      document.onmousemove = e => {
        const { startPoint, centerPoint, symmPoint, getCurItem } = this
        const { clientX, clientY } = e
        const curPoint = { x: clientX, y: clientY } // 当前触摸点坐标
        const resultRect = calcSize(item.cursor, { startPoint, centerPoint, symmPoint, curPoint, rect: getCurItem })
        const { x, y } = this.getDragRect
        resultRect.x -= x
        resultRect.y -= y
        Object.assign(this.listData[this.current].rect, resultRect)
        this.onUpdate()
        this.onEmitChange('resize')
      }
      // 表达式声明抬起事件
      document.onmouseup = () => {
        document.onmousemove = null // 清理上次的移动事件
        document.onmouseup = null // 清理上次的抬起事件
      }
    },
    // 触摸 rotate 元素接触点改变,滑动时
    onRotateTouchmove(e) {
      const { clientX, clientY } = e.changedTouches[0]
      this.getCurItem.r = this.getRotate({ x: clientX, y: clientY })
      this.onUpdate()
      this.onEmitChange('rotate')
    },
    // rotate 元素 pc 端鼠标按下移动
    onRotateMousedown() {
      // 表达式声明移动事件
      document.onmousemove = e => {
        const { clientX, clientY } = e
        this.getCurItem.r = this.getRotate({ x: clientX, y: clientY })
        this.onUpdate()
        this.onEmitChange('rotate')
      }
      // 表达式声明抬起事件
      document.onmouseup = () => {
        document.onmousemove = null // 清理上次的移动事件
        document.onmouseup = null // 清理上次的抬起事件
      }
    }
  },
  watch: {
    // 监听矩形变化
    list: {
      handler(value) {
        this.listData = DeepCopyRA(value)
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
