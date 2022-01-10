<template>
  <!-- 虚拟列表 -->
  <div class="me-virtual-list" :style="`height:${height};`" @scroll.passive="onScroll">
    <!-- 滚动高度 -->
    <div class="u-scroll-bar" :style="`height:${scrollBarHeight}px;`"></div>
    <!-- 列表 -->
    <ul class="m-list-scroll" :style="`transform:translateY(${scrollTranslateY}px);`">
      <li v-for="item in renderData" :key="item.virtualId" :data-index="item.virtualId" :ref="$event => setItemRef($event, item.virtualId)">
        <slot :item="item"></slot>
      </li>
    </ul>
    <slot name="more"></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useHandler } from './hooks'
import { ListItem } from './interfaces'

export default defineComponent({
  name: 'MeVirtualList',
  emits: ['on-load-more'],
  props: {
    // 列表数据
    list: {
      type: Array as PropType<ListItem[]>,
      default: () => []
    },
    // 节流时间
    interval: {
      type: Number,
      default: 100
    },
    // 虚拟列表高度
    height: {
      type: String,
      default: '100%'
    },
    // 固定选项高度
    itemHeight: {
      type: Number,
      default: 0
    },
    // 距离底部的距离
    distance: {
      type: Number,
      default: 50
    },
    // 前后各渲染几屏
    screen: {
      type: Array as PropType<number[]>,
      default: () => [1, 1]
    },
    // 每屏可见的数据条数
    remain: {
      type: Number,
      default: 8
    }
  },
  setup(props, { emit }) {
    const { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef } = useHandler(props, emit)
    return { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef }
  }
})
</script>
