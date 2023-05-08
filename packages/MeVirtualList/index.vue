<template>
  <!-- 虚拟列表 -->
  <div class="me-virtual-list" :style="`height:${height};`" @scroll.passive="onScroll">
    <!-- 滚动高度 -->
    <div class="scroll-bar" :style="`height:${scrollBarHeight}px;`"></div>
    <!-- 列表 -->
    <ul class="list-scroll" :style="`transform:translateY(${scrollTranslateY}px);`">
      <li v-for="item in renderData" :key="item.virtualId" :data-index="item.virtualId" :ref="setItemRef">
        <slot :item="item"></slot>
      </li>
    </ul>
    <slot name="more"></slot>
  </div>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const emit = defineEmits<{
  (event: 'load-more'): void
}>()

const props = withDefaults(
  defineProps<{
    list?: Record<string, any>[] // 列表数据
    interval?: number // 节流时间
    height?: string // 虚拟列表高度
    itemHeight?: number // 固定选项高度
    distance?: number // 距离底部的距离
    screen?: number[] // 前后各渲染几屏
    remain?: number // 每屏可见的数据条数
  }>(),
  {
    list: () => [],
    interval: 100,
    height: '100%',
    itemHeight: 0,
    distance: 50,
    screen: () => [1, 1],
    remain: 8
  }
)

const { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef } = useHandler(props, emit)
</script>
