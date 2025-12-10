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

<template>
  <!-- 空状态 -->
  <div class="me-empty" :style="`min-height:${height}px;`">
    <!-- 图片 -->
    <div class="img">
      <img v-if="url" :src="url" alt="empty" />
      <i v-else :class="`iconfont icon-${icon}`"></i>
    </div>
    <!-- 文本 -->
    <div class="txt">
      {{ text }}
    </div>
    <slot></slot>
  </div>
</template>
