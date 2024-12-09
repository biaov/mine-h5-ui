<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler, useSize, useRender } from './hooks'
import type { Props, DefineModelOption } from './types'
import { name, getDefaultValue } from './config'
import DropDown from './dropdown.vue'

defineOptions({ name })

const solts = defineSlots<Partial<DefaultSlots>>()
const props = withDefaults(defineProps<Props>(), {
  size: 'default',
  filterText: (value: DefineModelOption.ModelValue) => value.value,
  showText: false
})
const modelValue = defineModel<DefineModelOption.ModelValue>({ default: getDefaultValue() })

const { colorRect, dropdown, onToggle } = useHandler({ modelValue })
const { showColor } = useRender({ modelValue })
const { sizeValue } = useSize(props)
</script>

<template>
  <!-- 颜色选择器 -->
  <div :class="name" ref="colorRef" @click="onToggle">
    <slot></slot>
    <div :class="`${name}-inner`" :style="`--color:${showColor};--size:${sizeValue.size}px;fontSize:${sizeValue.fontSize}px;`" v-if="!solts.default">
      <div class="inner-block"></div>
      <div class="inner-label" v-if="showText">{{ filterText(modelValue) }}</div>
    </div>
  </div>
  <DropDown v-model="modelValue" v-model:visible="dropdown" :rect="colorRect" :duration="400" />
</template>
