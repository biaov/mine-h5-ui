<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onClick } = useHandle()
</script>

<template>
  <!-- 动作面板 -->
  <ul class="toast">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <ul class="list-all">
        <li v-for="(subItem, subIndex) in item.list" :key="subIndex" @click="onClick(subItem)">
          <span>{{ subItem.value }}</span>
          <me-icon name="icon-right1" size="20px" color="#ccc" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
