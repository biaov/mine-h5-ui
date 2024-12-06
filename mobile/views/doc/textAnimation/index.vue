<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange, onClick } = useHandle()
</script>

<template>
  <!-- 复选框 -->
  <ul class="checkbox">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-text-animation />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
