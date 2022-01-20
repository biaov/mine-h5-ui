<template>
  <!-- 加载 -->
  <div class="me-loading">
    <svg class="icon svg-icon" data-hidden="true" :style="`color:${color};font-size:${size};`">
      <use :xlink:href="`#${icon || iconName}`"></use>
    </svg>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useData } from './hooks'

export default defineComponent({
  name: 'MeLoading',
  props: {
    // 类型
    type: {
      type: String,
      default: 'circle' // circle|circle2|circle3|circle4|circle5|circle6
    },
    // 图标大小
    size: {
      type: String,
      default: '30px'
    },
    // 图标颜色
    color: {
      type: String,
      default: '#949494' // #494949
    },
    // 自定义图标名称
    icon: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { iconName } = useData(props)
    return { iconName }
  }
})
</script>
