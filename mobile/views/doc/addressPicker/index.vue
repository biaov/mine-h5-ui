<script lang="ts" setup>
import { useHandle } from './hooks'

const { listData, onSure, onClickItem } = useHandle()
</script>

<template>
  <!-- 地址选择器 -->
  <ul class="address-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <div class="li" @click="onClickItem(item)">
        <span>{{ item.title }}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
      <me-address-picker v-model="item.value" :visible="item.visible" @cancel="item.visible = false" @sure="onSure(item)"></me-address-picker>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
