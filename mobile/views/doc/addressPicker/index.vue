<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 地址选择器 -->
  <ul class="m-address-picker">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-li" @click="item.visible = true">
        <span>{{ item.title }}</span>
        <me-icon name="icon-right1" size="20px" color="#ccc"></me-icon>
      </div>
      <me-address-picker v-model="item.value" :visible="item.visible" @on-cancel="item.visible = false" @on-sure="onSure(item)"></me-address-picker>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandlerClick } from './hooks'

const { listData, onSure } = useHandlerClick()
</script>
