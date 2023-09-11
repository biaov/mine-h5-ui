<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 搜索 -->
  <ul class="search">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-search
        v-model="item.value"
        :placeholder="item.placeholder"
        :btn-text="item.btnText"
        :align="item.align"
        :radius="item.radius"
        :background="item.background"
        :color="item.color"
        :disabled="item.disabled"
        @search="onSearch"
        @click="onClick"
      ></me-search>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onSearch, onClick } = useHandle()
</script>
