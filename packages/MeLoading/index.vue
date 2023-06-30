<template>
  <!-- 加载 -->
  <div class="me-loading">
    <svg class="icon svg-icon" data-hidden="true" :style="`color:${color};font-size:${size};`">
      <use :xlink:href="`#${icon || iconName}`"></use>
    </svg>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useData } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeLoading'
})

defineSlots<DefaultSlots>()

const props = withDefaults(defineProps<Props>(), {
  type: 'circle',
  size: '30px',
  color: '#949494',
  icon: ''
})

const { iconName } = useData(props)
</script>
