<script lang="ts" setup>
import { useData } from './hooks'

const { listData, onClickItem } = useData()
</script>

<template>
  <!-- 图片分割器 -->
  <ul class="splitter">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-button type="primary" class="mb-10" @click="onClickItem(item)" v-if="item.switchAnimation">运行动画</me-button>
      <div class="splitter-rect">
        <me-splitter v-bind="item" />
      </div>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
