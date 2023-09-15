<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 滑块 -->
  <ul class="slider">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-slider v-model="item.value" :max="item.max" :min="item.min" :styles="item.styles" :is-btn="item.isBtn" :disabled="item.disabled">
        <div class="btn" v-if="item.isBtn">{{ item.value }}</div>
      </me-slider>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
