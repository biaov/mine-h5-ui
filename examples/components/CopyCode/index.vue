<template>
  <!-- 时间线 -->
  <div class="copy-code">
    <div ref="copyDom" class="copy" data-clipboard-action="copy" title="复制"><img src="../../assets/icon-copy-2.png" alt="copy" /></div>
    <div ref="codeCont" class="cont">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useRefs } from './hooks'

const { copyDom, codeCont } = useRefs()
</script>
<style scoped lang="less">
@import './index.less';
</style>
