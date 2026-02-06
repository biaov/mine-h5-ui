<script lang="ts" setup>
import { useHandler } from './hooks'
import type { Props, Emits, Slots } from './types'

defineOptions({
  name: 'MeCollapseItem'
})

defineSlots<Slots>()

const emit = defineEmits<Emits>()

const props = withDefaults(defineProps<Props>(), { borderColor: '#dcdfe6' })

const { collapseItemCont, isShow, curHeight, onClick } = useHandler(props, emit)
</script>

<template>
  <!-- 折叠面板选项 -->
  <div class="me-collapse-item">
    <!-- 头部区域 -->
    <div class="hd" :style="`border-bottom-color:${borderColor};`" @click="onClick">
      <h3 v-if="label">{{ label }}</h3>
      <slot v-else name="label"></slot>
      <i class="iconfont icon-right1" :class="{ open: isShow }"></i>
    </div>
    <!-- 内容区域 -->
    <div class="bd" :style="`height:${curHeight}px;`">
      <div ref="collapseItemCont">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
