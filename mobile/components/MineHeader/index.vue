<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 头部组件 -->
  <div class="g-header">
    <router-link :to="{ name: 'Layout' }" class="u-return">
      <me-icon name="icon-left" color="#949494" size="20px"></me-icon>
    </router-link>
    <h3 class="u-tit">
      <slot>演示</slot>
    </h3>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MineHeader',
  setup() {
    return {}
  }
})
</script>
