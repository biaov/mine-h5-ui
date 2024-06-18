<script lang="ts" setup>
import ComboBox from '@/components/ComboBox'
import NavList from '@/components/NavList'
import { useListData } from './hooks'

const { navList: navListData, versionList, isHome } = useListData()
</script>

<template>
  <!-- 头部 -->
  <div class="header fixed top-0 left-0 w-full h-60 z-2" :class="{ home: isHome }">
    <div class="flex justify-between items-center h-60 w-11/12 my-0 mx-auto">
      <!-- logo -->
      <router-link to="/" class="w-50"><img src="../../assets/logo.svg" title="mineh5ui" alt="mineh5ui logo" class="w-full" /></router-link>
      <!-- 右侧内容 -->
      <div class="flex items-center">
        <!-- 导航 -->
        <nav-list :list="navListData"></nav-list>
        <!-- 下拉组件 -->
        <combo-box :list="versionList"></combo-box>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
