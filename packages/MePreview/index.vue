<template>
  <!-- 图片预览 -->
  <div class="me-preview" :class="{ show: isShow }" :style="`z-index:${zIndex};background:${background};`" @click="onClose" v-if="!isDestroy">
    <img class="u-img" :src="url" alt="preview-img" />
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useShow } from './hooks'

export default defineComponent({
  name: 'MePreview',
  props: {
    // 图片地址
    url: {
      type: String,
      default: ''
    },
    // 层级位置
    zIndex: {
      type: Number,
      default: 99
    },
    // 遮罩层背景色
    background: {
      type: String,
      default: '#000'
    }
  },
  setup() {
    const { isShow, isDestroy, onClose } = useShow()
    return { isShow, isDestroy, onClose }
  }
})
</script>
