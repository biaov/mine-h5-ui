<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 头部 -->
  <div class="g-header" :class="{ home: isHome }">
    <div class="m-cont">
      <!-- logo -->
      <router-link to="/" class="u-logo"><img src="../../assets/logo.svg" title="MINEH5UI" alt="mineh5ui logo" /></router-link>
      <!-- 右侧内容 -->
      <div class="m-rt-list">
        <!-- 导航 -->
        <nav-list :list="navList"></nav-list>
        <!-- 下拉组件 -->
        <combo-box :list="versionList"></combo-box>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ComboBox from '@/components/ComboBox'
import NavList from '@/components/NavList'
import { useListData } from './hooks'

export default defineComponent({
  name: 'MineHeader',
  components: {
    ComboBox,
    NavList
  },
  setup() {
    const { navList, versionList, isHome } = useListData()
    return { navList, versionList, isHome }
  }
})
</script>
