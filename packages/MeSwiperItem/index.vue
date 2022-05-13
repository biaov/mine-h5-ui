<template>
  <!-- 轮播图 -->
  <div class="me-swiper-item" :style="`background:${background};`">
    <img class="img" :src="url" alt="banner" v-if="url" draggable="false" />
    <slot>
      <div class="text" v-if="text">{{ text }}</div>
    </slot>
  </div>
</template>
<script lang="ts" setup>
import { useName } from './hooks'

const props = withDefaults(
  defineProps<{
    name: string | number // 属性名称
    url?: string // 图片地址
    text?: string // 文本
    background?: string // 背景色
  }>(),
  {
    url: '',
    text: '',
    background: ''
  }
)

useName(props)
</script>
