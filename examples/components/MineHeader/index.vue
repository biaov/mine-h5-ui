<template>
  <!-- 头部 -->
  <div class="header" :class="{ home: isHome }">
    <div class="cont">
      <!-- logo -->
      <router-link to="/" class="logo"><img src="../../assets/logo.svg" title="MINEH5UI" alt="mineh5ui logo" /></router-link>
      <!-- 右侧内容 -->
      <div class="rt-list">
        <!-- 导航 -->
        <nav-list :list="navListData"></nav-list>
        <!-- 下拉组件 -->
        <combo-box :list="versionList"></combo-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ComboBox from '@/components/ComboBox'
import NavList from '@/components/NavList'
import { useListData } from './hooks'

const { navList: navListData, versionList, isHome } = useListData()
</script>
<style scoped lang="less">
@import './index.less';
</style>
