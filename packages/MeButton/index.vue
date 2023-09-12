<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeButton'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  nativeType: 'button',
  width: '',
  type: 'default',
  plain: false,
  disabled: false,
  icon: '',
  color: ''
})

const { onClick } = useHandler(emit)
</script>

<template>
  <!-- 按钮 -->
  <button
    :type="nativeType"
    :class="[
      'me-btn',
      `me-btn-${type}`,
      {
        'me-btn-plain': plain,
        disabled
      }
    ]"
    :style="`width:${width}; color:${type === 'default' || plain ? color : '#fff'}; background:${!plain ? color : '#fff'}; border-color:${color};`"
    @click="onClick"
  >
    <me-icon :name="icon" :color="`${type === 'default' || plain ? color : '#fff'}`" size="16px" v-if="icon"></me-icon>
    <slot></slot>
  </button>
</template>
