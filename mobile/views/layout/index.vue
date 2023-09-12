<script lang="ts" setup>
import ReloadPrompt from '@/components/ReloadPrompt'
import { useWebData } from './hook'

const { listData } = useWebData()
</script>

<template>
  <!-- layout -->
  <div class="layout">
    <div class="hd">
      <h3 class="tit">
        <img src="../../../examples/assets/logo.svg" alt="mine-h5-ui logo" />
        <span>mine-h5-ui</span>
      </h3>
      <p class="desc">一款轻量级、模块化基于VUE的H5前端UI组件库</p>
    </div>
    <!-- 列表 -->
    <ul class="list-out">
      <li v-for="(item, index) in listData" :key="index">
        <h3 class="tit">{{ item.meta.title }}</h3>
        <ul class="list-in">
          <li v-for="(it, i) in item.items" :key="i">
            <router-link :to="{ name: it.name }">
              <span>{{ it.meta.title }}</span>
              <me-icon name="icon-right1" size="20px" color="rgba(34,34,34,0.2)"></me-icon>
            </router-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <reload-prompt></reload-prompt>
</template>

<style scoped lang="less">
@import './index.less';
</style>
