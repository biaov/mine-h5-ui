<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 分割线 -->
  <ul class="divider">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-divider v-bind="item"></me-divider>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
