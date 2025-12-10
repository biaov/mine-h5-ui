<script setup lang="ts">
import { nextTick } from 'vue'
import type { InputComp } from './types'

const props = withDefaults(defineProps<InputComp.Props>(), {
  prefix: '',
  suffix: '',
  range: () => []
})
const inputValue = defineModel<string | number>({ default: '' })
/**
 * 格式化值
 */
const formatValue = (value: string | number) => {
  value = `${value}`
  props.prefix === '#' && value.length > 6 && (value = value.slice(0, 6))
  const [min, max] = props.range
  min && +value < min && (value = `${min}`)
  max && +value > max && (value = `${max}`)
  value && props.range.length && (value = Math.round(+value))
  return value
}

/**
 * 输入事件
 */
const onInput = (e: Event) => {
  let { value } = e.target as HTMLInputElement
  if (!value) return
  inputValue.value = value
  nextTick(() => {
    inputValue.value = formatValue(value)
  })
}

/**
 * 失去焦点
 */
const onBlur = () => {
  inputValue.value = formatValue(inputValue.value)
}
</script>
<template>
  <div class="input-box" :class="{ prefix, suffix }">
    <div v-if="prefix" class="prefix-tag">{{ prefix }}</div>
    <input type="text" :value="inputValue" class="input" @input="onInput" @blur="onBlur" />
    <div v-if="suffix" class="suffix-tag">{{ suffix }}</div>
  </div>
</template>
