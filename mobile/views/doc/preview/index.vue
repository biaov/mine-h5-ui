<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 图片预览 -->
  <ul class="m-preview">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <div class="u-img" @click="onPreview(item)">
        <img :src="item.url" alt="img" />
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandler } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onPreview } = useHandler()
    return { listData, onPreview }
  }
})
</script>
