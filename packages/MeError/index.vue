<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import type { Props } from './types'

defineOptions({
  name: 'MeError'
})

defineSlots<DefaultSlots>()

withDefaults(defineProps<Props>(), {
  visible: false,
  title: '页面错误',
  subtit: '请检查网络是否正常',
  theme: 'light',
  position: 'fixed'
})
</script>

<template>
  <!-- 空状态 -->
  <div v-if="visible" class="me-error" :class="[position, theme]">
    <!-- 图片 -->
    <div class="me-error-img">
      <i :class="`iconfont icon-zhongdaanjianguanli`"></i>
    </div>
    <!-- 文本 -->
    <div class="me-error-text">
      <div v-if="title" class="text-title">{{ title }}</div>
      <div v-if="subtit" class="text-subtit">{{ subtit }}</div>
    </div>
  </div>
</template>
