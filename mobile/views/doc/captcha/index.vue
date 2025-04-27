<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 图片验证器 -->
  <ul class="captcha">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <me-captcha v-bind="item" />
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
