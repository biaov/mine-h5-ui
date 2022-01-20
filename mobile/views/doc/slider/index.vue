<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 滑块 -->
  <ul class="m-slider">
    <li v-for="item in listData" :key="item.id">
      <div class="u-label">{{ item.label }}</div>
      <me-slider v-model="item.value" :max="item.max" :min="item.min" :styles="item.styles" :is-btn="item.isBtn" :disabled="item.disabled">
        <div class="u-btn" v-if="item.isBtn">{{ item.value }}</div>
      </me-slider>
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
