<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'

/**
 * 折叠高度
 */
const COLLAPSE_HEIGHT = 1200

/**
 * 内容节点
 */
const contRef = ref<HTMLElement>()

/**
 * 是否展开
 */
const expanded = ref(false)

/**
 * 是否需要折叠
 */
const collapsible = ref(false)

/**
 * 更新折叠状态
 */
const updateCollapsible = () => {
  if (!contRef.value) return
  collapsible.value = contRef.value.scrollHeight > COLLAPSE_HEIGHT
}

onMounted(() => {
  nextTick(updateCollapsible)
  window.addEventListener('resize', updateCollapsible)
})

onUpdated(() => nextTick(updateCollapsible))

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateCollapsible)
})
</script>

<template>
  <!-- 时间线 -->
  <div class="timeline relative pt-0 pr-0 pb-5 pl-24">
    <div class="dot z-2 left-0 w-14 h-14"></div>
    <div class="tail left-6 h-full"></div>
    <div id="timeline-content" ref="contRef" class="cont" :class="{ 'is-collapsed': collapsible && !expanded }" :style="collapsible && !expanded ? { maxHeight: `${COLLAPSE_HEIGHT}px` } : undefined">
      <slot></slot>
      <span v-if="collapsible && !expanded" class="fade"></span>
    </div>
    <button v-if="collapsible" class="toggle" :class="{ 'is-expanded': expanded }" type="button" aria-controls="timeline-content" :aria-expanded="expanded" @click="expanded = !expanded">
      {{ expanded ? '收起' : '查看更多' }}
    </button>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
