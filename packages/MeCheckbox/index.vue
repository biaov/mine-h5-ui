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
  name: '',
  shape: 'round',
  icon: '',
  iconSelect: '',
  iconSize: '20px',
  checkedColor: '',
  disabled: false
})

/**
 * 是否选中
 */
const isChecked = defineModel<boolean>({ default: false })

const { iconName, handleClick } = useHandler({ props, emit, isChecked })
</script>

<template>
  <!-- 复选框 -->
  <div class="me-checkbox" :data-checked="isChecked + ''" :data-disabled="disabled + ''" @click="handleClick">
    <me-icon :name="iconName" :color="isChecked ? checkedColor : ''" :size="iconSize" />
    <div class="value">
      <slot></slot>
    </div>
  </div>
</template>
