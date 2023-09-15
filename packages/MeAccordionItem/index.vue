<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useHandler } from './hooks'
import type { Props, Emits } from './types'

defineOptions({
  name: 'MeAccordionItem'
})

defineSlots<DefaultSlots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), { borderColor: '#dcdfe6' })

const { accordionItemCont, isShow, curHeight, onClick } = useHandler(props, emit)
</script>

<template>
  <!-- 手风琴选项 -->
  <div class="me-accordion-item">
    <!-- 头部区域 -->
    <div class="hd" @click="onClick" :style="`border-bottom-color:${borderColor};`">
      <h3>{{ label }}</h3>
      <i class="iconfont icon-right1" :class="{ open: isShow }"></i>
    </div>
    <!-- 内容区域 -->
    <div class="bd" :style="`height:${curHeight}px;`">
      <div ref="accordionItemCont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
