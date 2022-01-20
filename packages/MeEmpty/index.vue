<template>
  <!-- 空状态 -->
  <div class="me-empty" :style="`min-height:${height}px;`">
    <!-- 图片 -->
    <div class="u-img">
      <img :src="url" alt="empty" v-if="url" />
      <i :class="`iconfont icon-${icon}`" v-else></i>
    </div>
    <!-- 文本 -->
    <div class="u-txt">
      {{ text }}
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useIconName } from './hooks'

export default defineComponent({
  name: 'MeEmpty',
  props: {
    // 文本内容
    text: {
      type: String,
      default: ''
    },
    // 类型
    type: {
      type: String,
      default: 'default' // default|network|search
    },
    // 高度
    height: {
      type: Number,
      default: 200
    },
    // 自定义图标
    iconName: {
      type: String,
      default: ''
    },
    // 自定义图片
    url: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const { icon } = useIconName(props)
    return { icon }
  }
})
</script>
