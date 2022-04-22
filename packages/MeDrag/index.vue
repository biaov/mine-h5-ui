<template>
  <!-- 拖拽 -->
  <div class="me-drag" ref="dragRef" :style="`width:${width};height:${height};`" @click="onClick(-1)" @touchstart="onTouchstartWrap" @touchmove="onTouchmoveWrap">
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
      <div
        class="u-resize"
        v-for="(it, i) in angleToCursor"
        :key="it.cursor"
        :class="[it.cursor, getCursor(i)]"
        @touchstart.stop="onResizeTouchstart"
        @touchmove.stop="onResizeTouchmove($event, it)"
        @touchend.stop
        @mousedown.stop="onResizeMousedown($event, it)"
      ></div>
      <!-- 删除按钮 -->
      <div class="u-delete flex-center" @click="onDelete"><i class="iconfont icon-baseline-close-px"></i></div>
      <!-- 旋转按钮 -->
      <div class="u-rotate flex-center" @touchstart.stop @touchmove.stop="onRotateTouchmove" @touchend.stop @mousedown.stop="onRotateMousedown"><i class="iconfont icon-loading_flat"></i></div>
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useHandler, useMove, useResize, useRotate, useScale } from './hooks'
import { ListDataItem } from './interfaces'

export default defineComponent({
  name: 'MeDrag',
  emits: ['on-change', 'update:list', 'update:current'],
  props: {
    // 选中项
    current: {
      type: Number,
      default: -1
    },
    // 列表数据
    list: {
      type: Array as PropType<ListDataItem[]>,
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
    },
    // 双指缩放一倍的像素
    scale: {
      type: Number,
      default: 100 // 100px:1倍,0表示禁止缩放
    }
  },
  setup(props, { emit }) {
    const { listData, angleToCursor, getCursor, onDelete, onClick, getCurItem, onEmitChange, onUpdate } = useHandler(props, emit)
    const share = { getCurItem, onEmitChange, onUpdate }
    const { onTouchstart, onTouchmove, onMousedown } = useMove(props, { ...share, listData })
    const { dragRef, onResizeTouchstart, onResizeTouchmove, onResizeMousedown, getCenterPoint } = useResize(props, { ...share, listData })
    const { onRotateTouchmove, onRotateMousedown } = useRotate(props, { ...share, getCenterPoint })
    const { onTouchstartWrap, onTouchmoveWrap } = useScale(props, { ...share, listData })

    return {
      listData,
      angleToCursor,
      getCursor,
      onDelete,
      onClick,
      onTouchstart,
      onTouchmove,
      onMousedown,
      dragRef,
      onResizeTouchstart,
      onResizeTouchmove,
      onResizeMousedown,
      onRotateTouchmove,
      onRotateMousedown,
      onTouchstartWrap,
      onTouchmoveWrap
    }
  }
})
</script>
