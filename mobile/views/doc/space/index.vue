<script lang="ts" setup>
import { useData } from './hooks'

const { listData } = useData()
</script>

<template>
  <!-- 间距 -->
  <ul class="space">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-space v-bind="{ size: item.size, direction: item.direction }">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
      </me-space>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
