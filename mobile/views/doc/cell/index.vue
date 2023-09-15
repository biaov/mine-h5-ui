<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick } = useHandle()
</script>

<template>
  <!-- 单元格 -->
  <ul class="cell">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-cell v-bind="item" @click="onClick(index)" v-if="item.slot">
        <template #left>
          <div class="title">自定义标题</div>
          <div class="tag">标签</div>
        </template>
        <template #right>
          <div class="desc">自定义右侧内容</div>
        </template>
      </me-cell>
      <me-cell v-bind="item" @click="onClick(index)" v-else></me-cell>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
