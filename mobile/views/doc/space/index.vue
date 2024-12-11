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
        <div class="item" v-for="item in 3">{{ item }}</div>
      </me-space>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
