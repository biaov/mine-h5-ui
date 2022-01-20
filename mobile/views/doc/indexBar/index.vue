<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 索引栏 -->
  <div class="m-index-bar">
    <me-index-bar @on-click="onClick"></me-index-bar>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { useClick } from './hooks'

export default defineComponent({
  setup() {
    const { onClick } = useClick()
    return { onClick }
  }
})
</script>
