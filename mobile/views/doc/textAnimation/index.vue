<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 复选框 -->
  <ul class="checkbox">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-text-animation v-bind="item.props" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
