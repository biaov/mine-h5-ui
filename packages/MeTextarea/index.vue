<script lang="ts" setup>
import { computed, watch } from 'vue'
import { useTextarea } from './hooks'
import { name } from './config'
import type { Props, Emits } from './types'

defineOptions({ name })

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  rows: 6,
  readonly: false,
  disabled: false,
  maxlength: -1,
  placeholder: '请输入',
  showCount: false
})
/**
 * 输入框值
 */
const modelValue = defineModel<string>({ default: '' })
const { onFocus, onBlur, onChange, onInput } = useTextarea(emit)
const filterMaxlength = computed(() => (props.maxlength >= 0 ? props.maxlength : 9999999))
watch(
  modelValue,
  value => {
    if (!value) return
    if (value.length < filterMaxlength.value) return
    modelValue.value = value.slice(0, filterMaxlength.value)
  },
  { immediate: true }
)
</script>

<template>
  <!-- 输入框 -->
  <div :class="name">
    <textarea
      v-model="modelValue"
      :cols="cols"
      :rows="props.rows"
      :readonly="props.readonly"
      :disabled="props.disabled"
      :maxlength="filterMaxlength"
      :placeholder="props.placeholder"
      class="textarea"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
      @input="onInput"
    ></textarea>
    <!-- 输入框字符数统计 -->
    <div v-if="props.showCount" :class="`${name}__count`">{{ modelValue.length }} / {{ filterMaxlength }}</div>
  </div>
</template>
