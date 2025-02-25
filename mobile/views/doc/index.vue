<script lang="ts" setup>
import MineHeader from '^/components/MineHeader'
import { useRouteHandler } from './hooks'

const { routeTitle } = useRouteHandler()
</script>

<template>
  <!-- 文档 -->
  <div class="docs pt-75 pb-15 px-15 min-h-screen flex flex-col">
    <!-- 头部 -->
    <mine-header>{{ routeTitle }}</mine-header>
    <!-- 内容 -->
    <router-view />
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
