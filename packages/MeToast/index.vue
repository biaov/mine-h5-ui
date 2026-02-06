<script lang="ts" setup>
import MeIcon from '../MeIcon/index.vue'
import { useShow } from './hooks'
import type { Props } from './types'

defineOptions({
  name: 'MeToast'
})

const props = withDefaults(defineProps<Props>(), {
  message: '',
  bgColor: '',
  icon: '',
  durction: 1000
})
const { isShow, isDestroy, animationDuration } = useShow(props)
</script>

<template>
  <!-- 消息提示 -->
  <div v-if="!isDestroy" class="me-toast" :class="{ show: isShow }" :style="`background:${bgColor};--animation-duration:${animationDuration}ms;`">
    <me-icon v-if="icon" :name="icon" color="#fff" />
    <span>{{ message }}</span>
  </div>
</template>
