<script lang="ts" setup>
import { useHandle } from './hooks'

const { styles, handleClick } = useHandle()
</script>

<template>
  <!-- 导航栏 -->
  <div class="navbar">
    <div class="label">基础用法</div>
    <me-nav-bar title="标题" left-text="返回" right-text="按钮" @click-left="handleClick('返回')" @click-right="handleClick('按钮')"></me-nav-bar>
    <div class="label">使用插槽</div>
    <me-nav-bar title="标题" :left-arrow="false" @click-left="handleClick('返回')">
      <me-icon name="icon-search1" size="20px" color="#409eff" @click="handleClick('搜索')" />
    </me-nav-bar>
    <div class="label">自定义样式</div>
    <me-nav-bar title="标题" left-text="返回" right-text="自定义" @click-left="handleClick('返回')" v-bind="{ styles }" @click-right="handleClick('自定义')"></me-nav-bar>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
