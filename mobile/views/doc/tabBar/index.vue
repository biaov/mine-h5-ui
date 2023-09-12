<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange } = useHandle()
</script>

<template>
  <!-- 标签栏 -->
  <ul class="tab-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-tab-bar v-bind="item" @change="onChange($event, item)"></me-tab-bar>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
