<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useHandle, useStyle } from './hooks'
import type { Slots, Props, Emits } from './types'

defineOptions({
  name: 'MeCell'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), {
  title: '',
  value: '',
  icon: '',
  iconColor: '#494949',
  placeholder: '',
  arrow: false,
  height: '100%',
  bottom: false
})

const { onClick } = useHandle(emit)
const { getStyle } = useStyle(props)
</script>

<template>
  <!-- 单元格 -->
  <div class="me-cell" :class="{ bottom }" :style="getStyle" @click="onClick">
    <div class="lf">
      <slot name="left">
        <me-icon v-if="icon" :name="icon" size="20px" />
        <span>{{ title }}</span>
      </slot>
    </div>
    <div class="rt">
      <slot name="right">
        <span :class="{ placeholder }">{{ value || placeholder }}</span>
        <me-icon v-if="arrow" name="icon-right1" />
      </slot>
    </div>
  </div>
</template>
