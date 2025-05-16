<script lang="ts" setup>
import { useFrames } from './hooks'
import type { Emits, Props } from './types'

const emit = defineEmits<Emits>()
withDefaults(defineProps<Props>(), {
  full: false
})

const { mobileIframe, onFrameLoad } = useFrames(emit)
const { VITE_BASE_ROUTER } = import.meta.env
</script>

<template>
  <!-- 移动端演示 -->
  <div class="w-full h-screen" v-if="full">
    <iframe ref="mobileIframe" :src="`${VITE_BASE_ROUTER}mobile.html`" width="100%" height="100%" frameborder="0" @load="onFrameLoad"></iframe>
  </div>
  <div class="relative w-427 h-900 p-10" v-else>
    <div class="bg-mobile bg-[length:100%_auto] bg-no-repeat bg-center w-full h-full px-16 py-100">
      <iframe ref="mobileIframe" :src="`${VITE_BASE_ROUTER}mobile.html`" width="100%" height="100%" frameborder="0" @load="onFrameLoad"></iframe>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
