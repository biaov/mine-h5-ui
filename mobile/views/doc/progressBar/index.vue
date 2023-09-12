<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onStart } = useHandle()
</script>

<template>
  <!-- 进度条 -->
  <ul class="progress-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-progress-bar v-model="item.value" v-bind="item"></me-progress-bar>
      <me-button type="primary" @click="onStart(item)">点击开始</me-button>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
