<template>
  <!-- 复选框 -->
  <div class="me-checkbox" @click="handleClick" :data-checked="isChecked + ''" :data-disabled="disabled + ''">
    <me-icon :name="iconName" :color="isChecked ? checkedColor : ''" :size="iconSize"></me-icon>
    <div class="value">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeCheckbox'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  modelValue: false,
  name: '',
  shape: 'round',
  icon: '',
  iconSelect: '',
  iconSize: '20px',
  checkedColor: '',
  disabled: false
})

const { isChecked, iconName, handleClick } = useHandler(props, emit)
</script>
