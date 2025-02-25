<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { githubLink, libraryInfo } from '@/config/package'
import MineHeader from '@/components/MineHeader'
import ReloadPrompt from '@/components/ReloadPrompt'
import { useCanvas } from './hooks'

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
  <div class="layout text-sm">
    <!-- 背景 -->
    <div class="bg absolute top-0 left-0 z-1 w-screen h-screen">
      <img src="../../assets/windmill.png" class="rotate absolute top-40 left-0 w-200 h-200 opacity-10" alt="windmill" />
      <canvas ref="canvas" class="absolute left-0 top-0 w-full h-full" width="100%" height="100%"></canvas>
    </div>
    <!-- 头部 -->
    <mine-header />
    <!-- 内容 -->
    <div class="content relative z-2 text-center">
      <div class="logo w-220 mx-auto my-0"><img src="../../assets/logo.svg" alt="mine-h5-ui Logo" /></div>
      <h1 class="tit mt-56 text-3xl px-20">{{ libraryInfo.description }}</h1>
      <p class="desc text-lg mx-0 mt-10 mb-50 px-20 uppercase">
        如果你还冇心仪的 UI 框架，不妨试试
        <router-link to="/doc" class="inline">{{ libraryInfo.name }}</router-link>
        ，也许会让你有意外的收获。
      </p>
      <ul class="btns flex justify-center gap-x-30 px-20 max-md:flex-wrap max-md:gap-y-20 capitalize">
        <li>
          <router-link to="/doc">开始使用</router-link>
        </li>
        <li><a :href="githubLink" target="_blank" rel="noopener noreferrer">gitHub</a></li>
        <li><a href="https://wordpress.biaov.cn/mine-h5-ui/" target="_blank" rel="noopener noreferrer">markdown 文档</a></li>
      </ul>
    </div>
  </div>
  <reload-prompt />
</template>

<style scoped lang="less">
@import './index.less';
</style>
