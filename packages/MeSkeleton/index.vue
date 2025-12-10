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
  <div v-if="visible" class="me-skeleton" :class="{ active }" @click.stop>
    <div v-if="avatar" class="me-skeleton-avatar" :style="{ width: avatarSize, height: avatarSize }"></div>
    <div class="me-skeleton-row">
      <div v-if="title" class="me-skeleton-title" :style="{ width: titleWidth }"></div>
      <div v-for="(item, index) in row" :key="item" class="me-skeleton-item" :style="{ width: Array.isArray(rowWidth) ? (rowWidth[index] ?? '100%') : rowWidth }"></div>
    </div>
  </div>
  <slot v-else></slot>
</template>
