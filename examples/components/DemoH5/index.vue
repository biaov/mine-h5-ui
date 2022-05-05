<template>
  <!-- H5演示 -->
  <div class="m-demo-h5">
    <div class="m-bg-demo"><iframe ref="mobileIframe" :src="`${BaseRouter}mobile.html`" width="100%" height="100%" frameborder="0" @load="onFrameLoad"></iframe></div>
  </div>
</template>
<script lang="ts" setup>
import { useGlobalVars } from '@/utils/variables'
import { useFrames } from './hooks'

const emit = defineEmits(['getframe'])
const { mobileIframe, onFrameLoad } = useFrames(emit)
const { BaseRouter } = useGlobalVars()
</script>
<style scoped lang="less">
@import './index.less';
</style>
