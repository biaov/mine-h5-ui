<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

const name = 'me-text-animation'
defineOptions({ name })

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {})

const { onClick } = useHandler(emit)
</script>

<template>
  <!-- 文本动画 -->
  <div :class="name"></div>
</template>
