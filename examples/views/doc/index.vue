<script lang="ts" setup>
import { onMounted, ref, useTemplateRef } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'
import MineHeader from '@/components/MineHeader'
import SideBar from '@/components/SideBar'
import MineMobile from '@/components/MineMobile'
import type { PostMessageReturn } from '@/utils/types'

const route = useRoute()
/**
 * 发送消息对象
 */
let postMessage: PostMessageReturn

/**
 * frame 跳转
 */
const navigateTo = (path: string) => {
  postMessage && postMessage.send(path)
}

/**
 * 路由更新
 */
onBeforeRouteUpdate(({ path }) => {
  navigateTo(path)
})

/**
 * 改变 frame 的 router
 */
const changeFrameRouter = (frame: HTMLIFrameElement) => {
  postMessage = PostMessage(frame.contentWindow as Window)
  navigateTo(route.path)
}
const isMobile = ref(false)
const onMobileState = () => {
  isMobile.value = globalThis.innerWidth < 1200
}
onMobileState()
window.addEventListener('resize', onMobileState)
</script>

<template>
  <!-- 文档 -->
  <mine-mobile full v-if="isMobile" @getframe="changeFrameRouter" />
  <div class="doc pt-60" v-else>
    <!-- 头部 -->
    <mine-header />
    <!-- 内容 -->
    <div class="content relative h-full">
      <!-- 菜单列表 -->
      <div class="fixed top-0 left-0 pt-60 h-full content__sidebar">
        <side-bar />
      </div>
      <div class="w-full p-24 pr-423 pl-304">
        <!-- 使用文档 -->
        <router-view />
      </div>
      <!-- H5 演示 -->
      <div class="fixed top-0 right-0 pt-60 content__mobile">
        <mine-mobile @getframe="changeFrameRouter" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
