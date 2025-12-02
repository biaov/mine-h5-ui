<template>
  <!-- 文本域 -->
  <ul class="textarea">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-textarea v-bind="item.prop" v-model="item.value" />
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
