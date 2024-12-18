<script lang="ts" setup>
import { useCssVar } from '../MeComposable'
import { name, typeGroup } from './config'
import type { Props } from './types'
import { useHandle } from './hooks'

defineOptions({ name })

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 24,
  family: 'Arial',
  color: '#409eff',
  background: '#fff'
})

const { rect, viewBox } = useHandle(props)
</script>

<template>
  <!-- 文本动画 -->
  <div :class="name" :style="useCssVar(rect)">
    <svg :viewBox="`0 0 ${viewBox.width} ${viewBox.height}`" :width="rect.width" :height="rect.height" v-if="type === typeGroup.default">
      <text x="50%" y="50%" class="text" dominant-baseline="central">
        {{ text }}
      </text>
      <text x="50%" y="50%" class="text cover" dominant-baseline="central">{{ text }}</text>
    </svg>
    <div v-else-if="type === typeGroup.border" class="border">{{ text }}</div>
  </div>
</template>
