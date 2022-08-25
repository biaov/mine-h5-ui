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
        class="resize"
        v-for="(it, i) in angleToCursor"
        :key="it.cursor"
        :class="[it.cursor, getCursor(i)]"
        @touchstart.stop="onResizeTouchstart"
        @touchmove.stop="onResizeTouchmove($event, it)"
        @touchend.stop
        @mousedown.stop="onResizeMousedown($event, it)"
      ></div>
      <!-- 删除按钮 -->
      <div class="delete flex-center" @click="onDelete"><i class="iconfont icon-baseline-close-px"></i></div>
      <!-- 旋转按钮 -->
      <div class="rotate flex-center" @touchstart.stop @touchmove.stop="onRotateTouchmove" @touchend.stop @mousedown.stop="onRotateMousedown"><i class="iconfont icon-loading_flat"></i></div>
      <slot :item="item" :index="index"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useHandler, useMove, useResize, useRotate, useScale } from './hooks'
import { ListDataItem } from './types'

const emit = defineEmits<{
  (event: 'change', list: ListDataItem[], type: string): void
  (event: 'update:list', list: ListDataItem[]): void
  (event: 'update:current', index: number): void
}>()

const props = withDefaults(
  defineProps<{
    current?: number // 选中项
    list?: ListDataItem[] // 列表数据
    width?: string // 容器宽度
    height?: string // 容器高度
    theme?: string // 选中主题色
    themeText?: string // 选中主题文本色
    angleRange?: number // 对正角度范围
    scale?: number // 双指缩放一倍的像素
  }>(),
  {
    current: -1,
    list: () => [],
    width: '300px',
    height: '300px',
    theme: '#f56c6c',
    themeText: '#fff',
    angleRange: 5,
    scale: 100
  }
)

const { listData, angleToCursor, getCursor, onDelete, onClick, getCurItem, onEmitChange, onUpdate } = useHandler(props, emit)
const share = { getCurItem, onEmitChange, onUpdate }
const { onTouchstart, onTouchmove, onMousedown } = useMove(props, { ...share, listData })
const { dragRef, onResizeTouchstart, onResizeTouchmove, onResizeMousedown, getCenterPoint } = useResize(props, { ...share, listData })
const { onRotateTouchmove, onRotateMousedown } = useRotate(props, { ...share, getCenterPoint })
const { onTouchstartWrap, onTouchmoveWrap } = useScale(props, { ...share, listData })
</script>
