<template>
  <!-- 截长图 -->
  <div class="me-screenshot" ref="screenshotRef" @click="onClick">
    <slot></slot>
  </div>
</template>
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
