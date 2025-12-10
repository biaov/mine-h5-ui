<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits, Slots } from './types'

defineOptions({
  name: 'MeAccordionItem'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), { borderColor: '#dcdfe6' })

const { accordionItemCont, isShow, curHeight, onClick } = useHandler(props, emit)
</script>

<template>
  <!-- 手风琴选项 -->
  <div class="me-accordion-item">
    <!-- 头部区域 -->
    <div class="hd" :style="`border-bottom-color:${borderColor};`" @click="onClick">
      <h3 v-if="label">{{ label }}</h3>
      <slot v-else name="label"></slot>
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
