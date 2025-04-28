<script lang="ts" setup>
import { useData } from './hooks'

const { listData, onChange } = useData()
</script>

<template>
  <!-- 图片碎片化 -->
  <ul class="fragment">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-fragment v-bind="item" @change="onChange"></me-fragment>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
