<script lang="ts" setup>
import { watch } from 'vue'
import type { DefaultSlots } from '../types'
import { useHandler, wrapCls, useSize } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeColorPicker'
})

const solts = defineSlots<Partial<DefaultSlots>>()
const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  label: ''
})
const modelValue = defineModel<string>({ default: '' })
const { color, onToggle } = useHandler(props, { modelValue })

const { sizeValue } = useSize(props)
</script>

<template>
  <!-- 颜色选择器 -->
  <div :class="wrapCls" ref="colorRef" @click="onToggle">
    <slot></slot>
    <div :class="`${wrapCls}-inner`" :style="`--color:${color};--size:${sizeValue.size}px;fontSize:${sizeValue.fontSize}px;`" v-if="!solts.default">
      <div class="inner-block"></div>
      <div class="inner-label" v-if="label">{{ label }}</div>
    </div>
  </div>
</template>
