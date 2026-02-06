<script lang="ts" setup>
import { useWebData } from './hooks'

const { listData } = useWebData()
</script>

<template>
  <!-- 上传图片 -->
  <ul class="upload">
    <li v-for="item in listData" :key="item.id">
      <div class="label">{{ item.label }}</div>
      <me-upload v-model:file-list="item.fileList" :max-count="item.maxCount" :max-size="item.maxSize" :multiple="item.multiple" :deletable="item.deletable"></me-upload>
    </li>
  </ul>
</template>

<style scoped lang="less">
@import './index.less';
</style>
