<template>
  <!-- 图标 -->
  <i class="iconfont me-icon" :class="name" :style="`color:${color};font-size:${size};`" @click="onClick"></i>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useClick } from './hooks'

export default defineComponent({
  name: 'MeIcon',
  emits: ['on-click'],
  props: {
    // class名称
    name: {
      type: String,
      required: true
    },
    // 图标颜色
    color: {
      type: String,
      default: ''
    },
    // 图标大小
    size: {
      type: String,
      default: ''
    }
  },
  setup(props, { emit }) {
    const { onClick } = useClick(emit)
    return {
      onClick
    }
  }
})
</script>
