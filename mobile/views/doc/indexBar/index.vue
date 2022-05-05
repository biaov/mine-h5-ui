<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 索引栏 -->
  <div class="m-index-bar">
    <me-index-bar @on-click="onClick"></me-index-bar>
  </div>
</template>
<script lang="ts" setup>
import { useClick } from './hooks'

const { onClick } = useClick()
</script>
