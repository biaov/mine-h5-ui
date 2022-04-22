<template>
  <!-- 标签页 -->
  <div class="me-step" :class="direction">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { useInitSlots } from './hooks'

export default defineComponent({
  name: 'MeStep',
  props: {
    // 激活状态
    active: {
      type: Array as PropType<(string | number)[]>,
      required: true
    },
    // 显示方向
    direction: {
      type: String,
      default: 'horizontal' // horizontal|vertical
    },
    // 主题类型
    type: {
      type: String,
      default: 'primary' // primary|success|warning|danger
    },
    // 置灰颜色
    color: {
      type: String,
      default: ''
    },
    // 激活颜色
    activeColor: {
      type: String,
      default: ''
    },
    // 置灰图标
    icon: {
      type: String,
      default: 'dot'
    },
    // 激活图标
    activeIcon: {
      type: String,
      default: 'radio'
    }
  },
  setup(props) {
    useInitSlots(props)
    return {}
  }
})
</script>
