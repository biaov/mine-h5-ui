<script lang="ts" setup>
import { useWebData } from './hooks'

const { collapseActive, listData } = useWebData()
</script>

<template>
  <!-- 折叠面板 -->
  <div class="demo-collapse">
    <div class="label">基础用法</div>
    <me-collapse v-model="collapseActive">
      <me-collapse-item v-for="(item, index) in listData" :key="index" :label="item.label" :name="index">
        <div v-html="item.html"></div>
      </me-collapse-item>
    </me-collapse>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
