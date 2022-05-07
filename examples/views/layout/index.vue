<template>
  <!-- 首页 -->
  <div class="m-layout">
    <!-- 背景 -->
    <div class="m-bg">
      <img src="../../assets/windmill.png" class="u-rotate" alt="windmill" />
      <canvas ref="canvas" class="m-canvas" width="100%" height="100%"></canvas>
    </div>
    <!-- 头部 -->
    <mine-header></mine-header>
    <!-- 内容 -->
    <div class="m-content">
      <div class="u-logo"><img src="../../assets/logo.svg" alt="MINE-H5-UI Logo" /></div>
      <h1 class="u-tit">一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库</h1>
      <p class="u-desc">
        如果你还冇心仪的 UI 框架，不妨试试
        <router-link to="/doc">MINE-H5-UI</router-link>
        ，也许会让你有意外的收获。
      </p>
      <ul class="m-btns">
        <li>
          <router-link to="/doc">开始使用</router-link>
        </li>
        <li><a :href="GithubAddress" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useGlobalVars } from '@/utils/variables'
import { useCanvas } from './hooks'
import MineHeader from '@/components/MineHeader'

const { GithubAddress } = useGlobalVars()
const canvas = ref<HTMLCanvasElement>() // canvas 对象

onMounted(() => {
  useCanvas(canvas)
})

// const canvas = $ref<HTMLCanvasElement>() // canvas 对象

// onMounted(() => {
//   useCanvas($$(canvas))
// })
</script>
<style scoped lang="less">
@import './index.less';
</style>
