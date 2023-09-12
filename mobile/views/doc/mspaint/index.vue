<script lang="ts" setup>
import { useData } from './hooks'

const { listData } = useData()
</script>

<template>
  <!-- 画图 -->
  <ul class="mspaint">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-mspaint v-bind="item"></me-mspaint>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
