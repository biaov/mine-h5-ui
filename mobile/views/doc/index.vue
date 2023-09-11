<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 文档 -->
  <div class="docs">
    <!-- 头部 -->
    <mine-header>{{ title }}</mine-header>
    <!-- 内容 -->
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import MineHeader from '^/components/MineHeader'
import { useRouteHandler } from './hooks'

const { title } = useRouteHandler()
</script>
