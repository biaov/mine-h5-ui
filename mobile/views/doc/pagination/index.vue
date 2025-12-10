<template>
  <!-- 分页器 -->
  <ul class="pagination">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-pagination v-if="item.custom" v-model="item.value" v-bind="item.prop">
        <template #prev>
          <me-icon name="icon-left" color="inherit" size="16px" />
        </template>
        <template #next>
          <me-icon name="icon-right1" color="inherit" size="16px" />
        </template>
      </me-pagination>
      <me-pagination v-else v-model="item.value" v-bind="item.prop" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import data from './data'

const listData = ref(data)
</script>

<style scoped lang="less">
@import './index.less';
</style>
