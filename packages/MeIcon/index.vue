<template>
  <!-- 图标 -->
  <i class="iconfont me-icon" :class="name" :style="`color:${color};font-size:${size};`" @click="onClick"></i>
</template>
<script lang="ts" setup>
import { useClick } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeIcon'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  color: '',
  size: ''
})

const { onClick } = useClick(emit)
</script>
