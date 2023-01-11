<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 拼图校验 -->
  <ul class="jigsaw-validate">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-jigsaw-validate v-bind="item" @change="onChange"></me-jigsaw-validate>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useData } from './hooks'

const { listData, onChange } = useData()
</script>
