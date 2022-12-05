<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 画图 -->
  <ul class="mspaint">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-mspaint v-bind="item"></me-mspaint>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useData } from './hooks'

const { listData } = useData()
</script>
