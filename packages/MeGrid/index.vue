<template>
  <!-- 宫格 -->
  <div class="me-grid" ref="grid">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useInitSlots } from './hooks'

export default defineComponent({
  name: 'MeGrid',
  props: {
    // 一行几个
    cols: {
      type: Number,
      default: 4
    },
    // 边框颜色
    borderColor: {
      type: String,
      default: '#edeff2'
    }
  },
  setup(props) {
    const { grid } = useInitSlots(props)
    return { grid }
  }
})
</script>
