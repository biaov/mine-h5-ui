<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- H5演示 -->
  <div class="m-demo-h5">
    <div class="m-bg-demo"><iframe :src="`${BaseRouter}mobile.html`" width="100%" height="100%" frameborder="0" ref="mobileIframe" @load="onFrameLoad"></iframe></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useGlobalVars } from '@/utils/variables'
import { useFrames } from './hooks'

export default defineComponent({
  name: 'DemoH5',
  emits: ['getframe'],
  setup(props, { emit }) {
    const { mobileIframe, onFrameLoad } = useFrames(emit)
    const { BaseRouter } = useGlobalVars()
    return { mobileIframe, onFrameLoad, BaseRouter }
  }
})
</script>
