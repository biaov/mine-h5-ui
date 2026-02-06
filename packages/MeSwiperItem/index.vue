<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useName } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeSwiperItem'
})

defineSlots<DefaultSlots>()

const props = withDefaults(defineProps<Props>(), {
  url: '',
  text: '',
  background: ''
})

useName(props)
</script>

<template>
  <!-- 轮播图 -->
  <div class="me-swiper-item" :style="`background:${background};`">
    <img v-if="url" class="img" :src="url" alt="banner" draggable="false" />
    <slot>
      <div v-if="text" class="text">{{ text }}</div>
    </slot>
  </div>
</template>
