<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 上传图片 -->
  <ul class="m-upload">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-upload :max-count="item.maxCount" :max-size="item.maxSize" :multiple="item.multiple" :deletable="item.deletable" v-model:fileList="item.fileList"></me-upload>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hooks'

export default defineComponent({
  setup() {
    const { listData } = useWebData()
    return { listData }
  }
})
</script>
