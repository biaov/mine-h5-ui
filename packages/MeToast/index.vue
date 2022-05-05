<template>
  <!-- 消息提示 -->
  <div class="me-toast" :class="{ show: isShow }" :style="`background:${bgColor};`" v-if="!isDestroy">
    <me-icon :name="icon" color="#fff" v-if="icon"></me-icon>
    <span>{{ message }}</span>
  </div>
</template>
<script lang="ts" setup>
import MeIcon from '../MeIcon'
import { useShow } from './hooks'

const props = withDefaults(
  defineProps<{
    message?: string | number // 提示语
    bgColor?: string // 背景颜色
    icon?: string // 图标
    durction?: number // 延迟时间
  }>(),
  {
    message: '',
    bgColor: '',
    icon: '',
    durction: 1000
  }
)

const { isShow, isDestroy } = useShow(props)
</script>
