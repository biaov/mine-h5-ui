<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 文档 -->
  <div class="m-docs">
    <!-- 头部 -->
    <mine-header>{{ title }}</mine-header>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MineHeader from '^/components/MineHeader'
import { useRouteHandler } from './hooks'

export default defineComponent({
  components: {
    MineHeader
  },
  setup() {
    const { title } = useRouteHandler()
    return { title }
  }
})
</script>
