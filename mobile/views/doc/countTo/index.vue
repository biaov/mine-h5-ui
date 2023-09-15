<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, manual } = useWebData()
</script>

<template>
  <!-- 数字滚动 -->
  <ul class="count-to">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-count-to v-bind="item"></me-count-to>
    </li>
    <li>
      <div class="label">手动控制</div>
      <me-count-to v-bind="manual" v-model="manual.value"></me-count-to>
      <me-button type="danger" plain @click="manual.value = true">重新开始</me-button>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
