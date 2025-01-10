<script lang="ts" setup>
import { useClick } from './hooks'

const { onClick } = useClick()
</script>

<template>
  <!-- 索引栏 -->
  <div class="index-bar flex-grow h-100">
    <me-index-bar @click="onClick" />
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
