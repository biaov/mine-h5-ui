<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 进度条 -->
  <ul class="m-progress-bar">
    <li v-for="(item, index) in listData" :key="index">
      <div class="u-label">{{ item.label }}</div>
      <me-progress-bar v-model="item.value" v-bind="item"></me-progress-bar>
      <me-button type="primary" @on-click="onStart(item)">点击开始</me-button>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useHandlerClick } from './hooks'

export default defineComponent({
  setup() {
    const { listData, onStart } = useHandlerClick()
    return { listData, onStart }
  }
})
</script>
