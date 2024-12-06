<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 滑块 -->
  <ul class="color-picker">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label" style="height: 100px">{{ item.label }}</div>
      <me-color-picker v-model="item.props.value" v-if="item.props.customShow">
        <div class="w-100 h-40 text-white" :style="{ background: item.props.value }">{{ item.props.value }}</div>
      </me-color-picker>
      <me-color-picker v-model="item.props.value" :label="item.props.labelShow ? item.props.value : ''" v-else />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
