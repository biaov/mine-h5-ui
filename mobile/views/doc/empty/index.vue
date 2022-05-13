<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 空状态 -->
  <ul class="empty">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-empty v-bind="item"></me-empty>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>
