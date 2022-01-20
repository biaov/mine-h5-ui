<template>
  <!-- 宫格选项 -->
  <div class="me-grid-item" @click="handleClick" :style="`width:${widthValue}%;border-color:${borderColor};`">
    <i class="iconfont u-icon" :class="icon" :style="`color:${iconColor};`" v-if="icon"></i>
    <span class="u-desc" :style="`color:${textColor};`" v-if="text">{{ text }}</span>
    <div class="u-custom" v-if="!icon && !text">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  name: 'MeGridItem',
  emits: ['on-click'],
  props: {
    // 图标
    icon: {
      type: String,
      default: ''
    },
    // 图标的颜色
    iconColor: {
      type: String,
      default: ''
    },
    // 文本
    text: {
      type: String,
      default: ''
    },
    // 文本颜色
    textColor: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { cols, widthValue, borderColor, handleClick } = useHandler(emit)
    return { cols, widthValue, borderColor, handleClick }
  }
})
</script>
