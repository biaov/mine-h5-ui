<script lang="ts" setup>
import { useRefs } from './hooks'

const { copyDom, codeCont } = useRefs()
</script>

<template>
  <!-- 时间线 -->
  <div class="copy-code relative">
    <div ref="copyDom" class="copy absolute top-5 right-5 w-30 p-5 cursor-pointer" data-clipboard-action="copy" title="复制"><img src="../../assets/icon-copy-2.png" alt="copy" class="w-full" /></div>
    <div ref="codeCont" class="cont">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
