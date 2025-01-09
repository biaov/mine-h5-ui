<script lang="ts" setup>
import { ref } from 'vue'
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
    <div class="content flex">
      <!-- 菜单列表 -->
      <side-bar />
      <div class="md w-1/2 h-full p-15 grow overflow-y-auto doc-view">
        <!-- 使用文档 -->
        <router-view />
      </div>
      <!-- H5 演示 -->
      <mine-mobile @getframe="changeFrameRouter" />
    </div>
  </div>
</template>

<style scoped lang="less">
@import './index.less';
</style>
