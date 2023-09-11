<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 图片预览 -->
  <ul class="preview">
    <li v-for="(item, index) in listData" :key="index">
      <div class="label">{{ item.label }}</div>
      <div class="img" @click="onPreview(item)">
        <img :src="item.url" alt="img" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { useHandler } from './hooks'

const { listData, onPreview } = useHandler()
</script>
