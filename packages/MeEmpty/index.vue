<template>
  <!-- 空状态 -->
  <div class="me-empty" :style="`min-height:${height}px;`">
    <!-- 图片 -->
    <div class="img">
      <img :src="url" alt="empty" v-if="url" />
      <i :class="`iconfont icon-${icon}`" v-else></i>
    </div>
    <!-- 文本 -->
    <div class="txt">
      {{ text }}
    </div>
    <slot></slot>
  </div>
</template>
<script lang="ts" setup>
import type { DefaultSlots } from '../types'
import { useIconName } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeEmpty'
})

defineSlots<DefaultSlots>()

const props = withDefaults(defineProps<Props>(), {
  text: '',
  type: 'default',
  height: 200,
  iconName: '',
  url: ''
})

const { icon } = useIconName(props)
</script>
