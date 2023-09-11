<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 标签 -->
  <ul class="tag">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-tag v-for="(it, i) in item.children" :key="i" v-bind="it" @close="onClose"></me-tag>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClose } = useHandle()
</script>
