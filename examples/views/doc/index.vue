<style scoped lang="less">
@import './index.less';
</style>
<template>
  <!-- 文档 -->
  <div class="m-doc">
    <!-- 头部 -->
    <mine-header></mine-header>
    <!-- 内容 -->
    <div class="m-content">
      <!-- 菜单列表 -->
      <side-bar></side-bar>
      <div class="m-md">
        <!-- 使用文档 -->
        <router-view></router-view>
      </div>
      <!-- H5演示 -->
      <demo-h5 @getframe="changeFrameRouter"></demo-h5>
    </div>
  </div>
</template>
<script lang="ts">
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { PostMessage } from '@/utils/functions'
import { PostMessageReturn } from '@/utils/types'
</script>
<script lang="ts" setup>
import MineHeader from '@/components/MineHeader'
import SideBar from '@/components/SideBar'
import DemoH5 from '@/components/DemoH5'

const route = useRoute()
let postMessage: PostMessageReturn // 发送消息对象
// frame 跳转
const navigateTo = (path: string) => {
  postMessage.send(path)
}
// 路由更新
onBeforeRouteUpdate(({ path }) => {
  navigateTo(path)
})
// 改变 frame 的 router
const changeFrameRouter = (frame: HTMLIFrameElement) => {
  postMessage = PostMessage(frame.contentWindow as Window)
  navigateTo(route.path)
}
</script>
