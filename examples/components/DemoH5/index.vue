<script lang="ts" setup>
import { baseRouter } from '@/config/variables'
import { useFrames } from './hooks'
import type { Emits } from './types'

const emit = defineEmits<Emits>()
const { mobileIframe, onFrameLoad } = useFrames(emit)
</script>

<template>
  <!-- H5演示 -->
  <div class="demo-h5 relative w-360 h-780 p-10">
    <div class="bg-demo w-full h-full px-16 py-100"><iframe ref="mobileIframe" :src="`${baseRouter}mobile.html`" width="100%" height="100%" frameborder="0" @load="onFrameLoad"></iframe></div>
  </div>
</template>
<style scoped lang="less">
@import './index.less';
</style>
