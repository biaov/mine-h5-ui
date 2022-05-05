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
<script lang="ts" setup>
import { useIconName } from './hooks'

const props = withDefaults(
  defineProps<{
    text?: string // 文本内容
    type?: string // 类型, default | network | search
    height?: number // 高度
    iconName?: string // 自定义图标
    url?: string // 自定义图片
  }>(),
  {
    text: '',
    type: 'default',
    height: 200,
    iconName: '',
    url: ''
  }
)

const { icon } = useIconName(props)
</script>
