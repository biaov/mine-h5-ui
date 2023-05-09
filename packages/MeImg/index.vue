<template>
  <!-- 图片 -->
  <div class="me-img" @click="onClick">
    <img :src="src" width="40px" height="40px" :alt="alt" v-if="!fill" :style="`width:${width};height:${height};border-radius:${radius};`" @load="onLoad" @error="onError" />
    <span :style="`width:${width};height:${height};border-radius:${radius};background:url(${src}) no-repeat center;background-size:${fill};`" v-else></span>
  </div>
</template>
<script lang="ts" setup>
import { useImgEvent } from './hooks'

const emit = defineEmits<{
  (event: 'click', e: MouseEvent): void
  (event: 'load', e: Event): void
  (event: 'error', e: Event): void
}>()

withDefaults(
  defineProps<{
    src: string // 图片地址
    width?: string // 宽度
    height?: string // 高度
    fill?: string // 填充方式
    radius?: string // 倒角
    alt?: string // 错误显示 alt
  }>(),
  {
    width: '',
    height: '',
    fill: '',
    radius: '0',
    alt: ''
  }
)

const { onClick, onLoad, onError } = useImgEvent(emit)
</script>
