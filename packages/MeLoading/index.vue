<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useData } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeLoading'
})

const slots = defineSlots<DefaultSlots>()
const props = withDefaults(defineProps<Props>(), {
  size: '30px',
  color: '#949494',
  dot: false
})

const { iconName } = useData(props)
</script>

<template>
  <!-- 加载 -->
  <div class="me-loading">
    <div v-if="dot" class="me-loading-dot" :style="`--item-bg:${color};`">
      <div v-for="(_, index) in 5" :key="index" class="dot-item"></div>
    </div>
    <div v-else class="me-loading-animation">
      <svg v-if="!slots.icon" class="icon svg-icon" data-hidden="true" :style="`color:${color};font-size:${size};`">
        <use :xlink:href="`#${iconName}`"></use>
      </svg>
      <slot name="icon"></slot>
    </div>
    <slot></slot>
  </div>
</template>
