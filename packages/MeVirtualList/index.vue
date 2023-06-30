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
import type { Props, Emits, Slots } from './types'

defineOptions({
  name: 'MeVirtualList'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  list: () => [],
  interval: 100,
  height: '100%',
  itemHeight: 0,
  distance: 50,
  screen: () => [1, 1],
  remain: 8
})

const { scrollBarHeight, scrollTranslateY, renderData, onScroll, setItemRef } = useHandler(props, emit)
</script>
