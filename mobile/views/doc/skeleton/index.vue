<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData, onChange } = useWebData()
</script>

<template>
  <!-- 动作面板 -->
  <ul class="skeleton">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-switch v-model="item.visible" @change="onChange(item)" v-if="item.rows">加载完成</me-switch>
      <me-skeleton v-bind="item">
        <template v-if="item.rows">
          <div v-for="(text, i) in item.rows" :key="i" class="row">{{ text }}</div>
        </template>
      </me-skeleton>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
