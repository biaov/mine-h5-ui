<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeGridItem'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

withDefaults(defineProps<Props>(), {
  icon: '',
  iconColor: '',
  text: '',
  textColor: ''
})

const { widthValue, borderColor, handleClick } = useHandler(emit)
</script>

<template>
  <!-- 宫格选项 -->
  <div class="me-grid-item" :style="`width:${widthValue}%;border-color:${borderColor};`" @click="handleClick">
    <i v-if="icon" class="iconfont icon" :class="icon" :style="`color:${iconColor};`"></i>
    <span v-if="text" class="desc" :style="`color:${textColor};`">{{ text }}</span>
    <div v-if="!icon && !text" class="custom">
      <slot></slot>
    </div>
  </div>
</template>
