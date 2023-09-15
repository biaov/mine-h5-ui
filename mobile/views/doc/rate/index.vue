<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onChange } = useHandle()
</script>

<template>
  <!-- 评分 -->
  <ul class="rate">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-rate
        v-model="item.value"
        :icon="item.icon"
        :icon-select="item.iconSelect"
        :color="item.color"
        :count="item.count"
        :readonly="item.readonly"
        :disabled="item.disabled"
        :tips="item.tips"
        :tips-color="item.tipsColor"
        :size="item.size"
        @change="onChange(item)"
      ></me-rate>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
