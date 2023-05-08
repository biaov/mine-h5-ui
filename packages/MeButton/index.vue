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
<script lang="ts" setup>
import { withDefaults } from 'vue'
import MeIcon from '../MeIcon/index.vue'
import { useHandler } from './hooks'
import { NativeType, ButtonType } from './types'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
}>()

withDefaults(
  defineProps<{
    nativeType?: NativeType
    width?: string
    type?: ButtonType
    plain?: boolean
    disabled?: boolean
    icon?: string
    color?: string
  }>(),
  {
    nativeType: 'button',
    width: '',
    type: 'default',
    icon: '',
    color: ''
  }
)

const { onClick } = useHandler(emit)
</script>
