<template>
  <!-- 表单 -->
  <form class="me-form" @submit="onSubmit">
    <slot></slot>
  </form>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeForm'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  model: () => ({}),
  rules: () => []
})

const { onSubmit } = useHandler(props, emit)
</script>
