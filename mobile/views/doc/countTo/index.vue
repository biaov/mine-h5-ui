<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 数字滚动 -->
  <ul class="m-count-to">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-count-to v-bind="item"></me-count-to>
    </li>
    <li>
      <div class="u-label">手动控制</div>
      <me-count-to v-bind="manual" v-model="manual.value"></me-count-to>
      <me-button type="danger" plain @on-click="manual.value = true">重新开始</me-button>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useWebData } from './hooks'

export default defineComponent({
  setup() {
    const { listData, manual } = useWebData()
    return { listData, manual }
  }
})
</script>
