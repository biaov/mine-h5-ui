<script lang="ts" setup>
import { useSearch, useBtns } from './hooks'
import MeIcon from '../MeIcon/index.vue'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeSearch'
})

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  placeholder: '请搜索',
  btnText: '',
  align: 'left',
  radius: '4px',
  background: '',
  color: '',
  disabled: false
})

/**
 * 输入框的值
 */
const inputVal = defineModel<string>()

const { onKeypress, onFocus, onBlur, onInput, onChange } = useSearch(emit)
const { onClean, handleBtn } = useBtns({ emit, inputVal })
</script>

<template>
  <!-- 搜索 -->
  <div class="me-search" :style="`border-radius:${radius};background:${background};color:${color};`">
    <me-icon name="icon-search1" size="15px" color="inherit" />
    <input
      v-model="inputVal"
      type="search"
      class="input"
      :placeholder="placeholder"
      :style="`text-align:${align};`"
      :disabled="disabled"
      @focus="onFocus"
      @blur="onBlur"
      @keypress="onKeypress"
      @input="onInput"
      @change="onChange"
    />
    <transition name="fade">
      <me-icon v-if="modelValue" name="icon-close" size="16px" color="inherit" @click="onClean" />
    </transition>
    <div v-if="btnText" class="btn" @click="handleBtn">{{ btnText }}</div>
  </div>
</template>
