<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useShow } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MePreview'
})

defineSlots<DefaultSlots>()

withDefaults(defineProps<Props>(), {
  zIndex: 99,
  background: '#000'
})

const { isShow, isDestroy, onClose, animationDuration } = useShow()
</script>

<template>
  <!-- 图片预览 -->
  <div class="me-preview" :class="{ show: isShow }" :style="`z-index:${zIndex};background:${background};--animation-duration:${animationDuration}ms;`" @click="onClose" v-if="!isDestroy">
    <img class="img" :src="url" alt="preview-img" />
    <slot></slot>
  </div>
</template>
