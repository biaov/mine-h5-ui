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
    <img class="img" :src="url" alt="banner" v-if="url" draggable="false" />
    <slot>
      <div class="text" v-if="text">{{ text }}</div>
    </slot>
  </div>
</template>
