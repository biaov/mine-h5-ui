<script lang="ts" setup>
import { useHandler } from './hooks'

const { listData } = useHandler()
</script>

<template>
  <!-- 仿真翻页 -->
  <ul class="turn-page">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-turn-page v-bind="item">
        <template #="{ item }">
          <div class="content">{{ item.text }}</div>
        </template>
      </me-turn-page>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
