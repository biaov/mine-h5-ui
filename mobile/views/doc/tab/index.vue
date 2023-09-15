<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange } = useHandle()
</script>

<template>
  <!-- 标签页 -->
  <ul class="tab">
    <li v-for="list in listData" :key="list.id">
      <div class="label">{{ list.label }}</div>
      <me-tab v-model="list.active" v-bind="{ color: list.color, activeColor: list.activeColor, lineColor: list.lineColor }" @change="onChange">
        <me-tab-item v-for="item in list.children" :key="item.id" :name="item.id" :label="item.label">{{ item.content }}</me-tab-item>
      </me-tab>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
