<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 标签栏 -->
  <ul class="m-tab-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-tab-bar v-bind="item" @on-change="onChange($event, item)"></me-tab-bar>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, onChange } = useHandlerClick()
</script>
