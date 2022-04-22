<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 时间线 -->
  <div class="m-copy-code">
    <div class="u-copy" ref="copyDom" data-clipboard-action="copy" title="复制"><img src="../../assets/icon-copy-2.png" alt="copy" /></div>
    <div class="m-cont" ref="codeCont">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useRefs } from './hooks'

export default defineComponent({
  name: 'CopyCode',
  setup() {
    const { copyDom, codeCont } = useRefs()
    return { copyDom, codeCont }
  }
})
</script>
