<script lang="ts" setup>
import { useSearch, useBtns } from './hooks'
import MeIcon from '../MeIcon/index.vue'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeSearch'
})

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  placeholder: '请搜索',
  btnText: '',
  align: 'left',
  radius: '4px',
  background: '',
  color: '',
  disabled: false
})

const { inputVal, onKeypress, onFocus, onBlur, onInput, onChange } = useSearch(props, emit)
const { onClean, handleBtn } = useBtns(emit)
</script>

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
