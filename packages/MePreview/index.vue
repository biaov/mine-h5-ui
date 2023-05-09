<template>
  <!-- 图片预览 -->
  <div class="me-preview" :class="{ show: isShow }" :style="`z-index:${zIndex};background:${background};--animation-duration:${animationDuration}ms;`" @click="onClose" v-if="!isDestroy">
    <img class="img" :src="url" alt="preview-img" />
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import { useShow } from './hooks'

withDefaults(
  defineProps<{
    url: string // 图片地址
    zIndex?: number // 层级位置
    background?: string // 遮罩层背景色
  }>(),
  {
    zIndex: 99,
    background: '#000'
  }
)

const { isShow, isDestroy, onClose, animationDuration } = useShow()
</script>
