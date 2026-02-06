<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeScreenshot'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  start: false,
  allowDown: false,
  imageName: 'screenshot'
})

const { screenshotRef, onClick } = useHandler(props, emit)
</script>

<template>
  <!-- 截长图 -->
  <div ref="screenshotRef" class="me-screenshot" @click="onClick">
    <slot></slot>
  </div>
</template>
