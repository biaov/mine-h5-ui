<template>
  <!-- 搜索 -->
  <div class="me-search" :style="`border-radius:${radius};background:${background};color:${color};`">
    <me-icon name="icon-search1" size="15px" color="inherit"></me-icon>
    <input
      type="search"
      class="input"
      v-model="inputVal"
      @focus="onFocus"
      @blur="onBlur"
      @keypress="onKeypress"
      @input="onInput"
      @change="onChange"
      :placeholder="placeholder"
      :style="`text-align:${align};`"
      :disabled="disabled"
    />
    <transition name="fade">
      <me-icon name="icon-close" size="16px" color="inherit" @click="onClean" v-if="modelValue"></me-icon>
    </transition>
    <div class="btn" @click="handleBtn" v-if="btnText">{{ btnText }}</div>
  </div>
</template>
<script lang="ts" setup>
import { useSearch, useBtns } from './hooks'
import MeIcon from '../MeIcon'

const emit = defineEmits<{
  (event: 'update:modelValue', str: string): void
  (event: 'click'): void
  (event: 'search'): void
  (event: 'focus', e: FocusEvent): void
  (event: 'blur', e: FocusEvent): void
  (event: 'input', e: Event): void
  (event: 'change', e: Event): void
}>()

const props = withDefaults(
  defineProps<{
    modelValue: string // v-model 绑定值
    placeholder?: string // 占位符
    btnText?: string // 右侧按钮内容
    align?: string // 搜索框对齐方式, left | center | right | justify | inherit
    radius?: string // 搜索框倒角
    background?: string // 搜索框背景色
    color?: string // 字体颜色
    disabled?: boolean // 是否禁用输入框
  }>(),
  {
    placeholder: '请搜索',
    btnText: '',
    align: 'left',
    radius: '4px',
    background: '',
    color: '',
    disabled: false
  }
)

const { inputVal, onKeypress, onFocus, onBlur, onInput, onChange } = useSearch(props, emit)
const { onClean, handleBtn } = useBtns(emit)
</script>
