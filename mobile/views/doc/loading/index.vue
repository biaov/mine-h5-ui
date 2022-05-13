<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 加载 -->
  <ul class="loading">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="{ id, type, size, color, icon, text } in item.list" :key="id">
          <me-loading v-bind="{ type, size, color, icon }">
            <div>{{ text }}</div>
          </me-loading>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>
