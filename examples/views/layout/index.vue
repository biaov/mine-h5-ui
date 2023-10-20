<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useGlobalVars } from '@/config/variables'
import MineHeader from '@/components/MineHeader'
import ReloadPrompt from '@/components/ReloadPrompt'
import { useCanvas } from './hooks'

const { GithubAddress } = useGlobalVars()

/**
 * canvas 对象
 */
const canvas = ref<HTMLCanvasElement>()

onMounted(() => {
  useCanvas(canvas)
})
</script>

<template>
  <!-- 首页 -->
  <div class="layout">
    <!-- 背景 -->
    <div class="bg">
      <img src="../../assets/windmill.png" class="rotate" alt="windmill" />
      <canvas ref="canvas" class="canvas" width="100%" height="100%"></canvas>
    </div>
    <!-- 头部 -->
    <mine-header></mine-header>
    <!-- 内容 -->
    <div class="content">
      <div class="logo"><img src="../../assets/logo.svg" alt="mine-h5-ui Logo" /></div>
      <h1 class="tit">一款轻量级、模块化基于 VUE 的 H5 前端 UI 组件库</h1>
      <p class="desc">
        如果你还冇心仪的 UI 框架，不妨试试
        <router-link to="/doc">mine-h5-ui</router-link>
        ，也许会让你有意外的收获。
      </p>
      <ul class="btns">
        <li>
          <router-link to="/doc">开始使用</router-link>
        </li>
        <li><a :href="GithubAddress" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  </div>
  <reload-prompt></reload-prompt>
</template>

<style scoped lang="less">
@import './index.less';
</style>
