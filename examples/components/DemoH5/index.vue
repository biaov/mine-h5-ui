<template>
  <!-- H5演示 -->
  <div class="demo-h5">
    <div class="bg-demo"><iframe ref="mobileIframe" :src="`${BaseRouter}mobile.html`" width="100%" height="100%" frameborder="0" @load="onFrameLoad"></iframe></div>
  </div>
</template>
<script lang="ts" setup>
import { useGlobalVars } from '@/config/variables'
import { useFrames } from './hooks'
import type { Emits } from './types'

const emit = defineEmits<Emits>()
const { mobileIframe, onFrameLoad } = useFrames(emit)
const { BaseRouter } = useGlobalVars()
</script>
<style scoped lang="less">
@import './index.less';
</style>
