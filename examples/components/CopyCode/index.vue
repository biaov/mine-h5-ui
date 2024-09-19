<script lang="ts" setup>
import { useRefs } from './hooks'

useRefs()
</script>

<template>
  <!-- 时间线 -->
  <div class="group relative">
    <div ref="copyDom" class="absolute top-5 right-5 w-30 p-5 cursor-pointer opacity-0 group-hover:opacity-90 transition" data-clipboard-action="copy" title="复制">
      <img src="../../assets/icon-copy-2.png" alt="copy" class="w-full" />
    </div>
    <div ref="codeCont" class="cont">
      <slot></slot>
    </div>
  </div>
</template>
