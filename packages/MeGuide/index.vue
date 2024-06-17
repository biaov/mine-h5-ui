<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeGuide'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  disabledClose: false
})
/**
 * 显示状态
 */
const visibleModel = defineModel<boolean>('visible', { default: false })
const { url, onStep } = useHandler({ props, emit, visibleModel })
</script>

<template>
  <!-- 引导 -->
  <div class="me-guide" @click.stop v-if="visibleModel">
    <img :src="url" class="img" mode="fill" @click="onStep" />
    <slot></slot>
  </div>
</template>
