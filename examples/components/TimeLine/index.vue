<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 时间线 -->
  <div class="m-timeline">
    <div class="u-dot"></div>
    <div class="u-tail"></div>
    <div class="m-cont">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TimeLine',
  setup() {
    return {}
  }
})
</script>
