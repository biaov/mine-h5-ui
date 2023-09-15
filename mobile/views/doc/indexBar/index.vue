<script lang="ts" setup>
import { useClick } from './hooks'

const { onClick } = useClick()
</script>

<template>
  <!-- 索引栏 -->
  <div class="index-bar">
    <me-index-bar @click="onClick"></me-index-bar>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
