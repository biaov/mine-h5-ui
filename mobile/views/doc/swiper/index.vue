<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 轮播图 -->
  <ul class="swiper">
    <li v-for="({ label, loop, height, children, dot }, index) in listData" :key="index">
      <div class="label">{{ label }}</div>
      <me-swiper v-bind="{ loop, height, dot }">
        <me-swiper-item v-for="(it, i) in children" :key="i" :name="i" v-bind="it"></me-swiper-item>
      </me-swiper>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
