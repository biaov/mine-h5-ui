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
  <div class="me-toast" :class="{ show: isShow }" :style="`background:${bgColor};--animation-duration:${animationDuration}ms;`" v-if="!isDestroy">
    <me-icon :name="icon" color="#fff" v-if="icon" />
    <span>{{ message }}</span>
  </div>
</template>
