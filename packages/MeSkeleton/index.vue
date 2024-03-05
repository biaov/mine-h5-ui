<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import type { Props } from './types'

defineOptions({
  name: 'MeSkeleton'
})

defineSlots<DefaultSlots>()

withDefaults(defineProps<Props>(), {
  visible: false,
  active: false,
  title: false,
  titleWidth: '40%',
  row: 3,
  rowWidth: '100%',
  avatar: false,
  avatarSize: '32px'
})
</script>

<template>
  <!-- 骨架屏 -->
  <div class="me-skeleton" :class="{ active }" @click.stop v-if="visible">
    <div class="me-skeleton-avatar" :style="{ width: avatarSize, height: avatarSize }" v-if="avatar"></div>
    <div class="me-skeleton-row">
      <div class="me-skeleton-title" :style="{ width: titleWidth }" v-if="title"></div>
      <div class="me-skeleton-item" v-for="(item, index) in row" :key="item" :style="{ width: Array.isArray(rowWidth) ? rowWidth[index] ?? '100%' : rowWidth }"></div>
    </div>
  </div>
  <slot v-else></slot>
</template>
