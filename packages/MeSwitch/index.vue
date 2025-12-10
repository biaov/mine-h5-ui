<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeSwitch'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  size: '',
  activeColor: '',
  inactiveColor: '',
  async: false,
  disabled: false
})

/**
 * 激活状态
 */
const isActived = defineModel<boolean>({ default: false })
const { background, handleClick } = useHandler({ props, emit, isActived })
</script>

<template>
  <!-- 开关 -->
  <div class="me-switch" :class="{ 'me-switch-on': isActived }" :data-disabled="disabled" :style="`font-size:${size};background:${background};`" @click="handleClick">
    <span class="round"></span>
  </div>
</template>
