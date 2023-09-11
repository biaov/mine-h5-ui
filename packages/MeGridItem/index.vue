<template>
  <!-- 宫格选项 -->
  <div class="me-grid-item" @click="handleClick" :style="`width:${widthValue}%;border-color:${borderColor};`">
    <i class="iconfont icon" :class="icon" :style="`color:${iconColor};`" v-if="icon"></i>
    <span class="desc" :style="`color:${textColor};`" v-if="text">{{ text }}</span>
    <div class="custom" v-if="!icon && !text">
      <slot></slot>
    </div>
  </div>
</template>
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
